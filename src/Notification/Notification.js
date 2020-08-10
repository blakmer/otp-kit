import React from 'react'
import PropTypes from 'prop-types'
import Timer from './utils/timer'
import {
  getTransition,
  hasFullySwiped,
  getHtmlClassesForType,
  shouldNotificationHaveSliding,
} from './utils/helpers'
import { REMOVAL } from './utils/constants'
import styles from './css/notification.module.css'
import Grid from '../Grid'
import Icon from '../Icon'
import Typography from '../Typography'
import classnames from 'classnames'

const { Row, Col } = Grid
const ICON_TYPES = {
  success: 'tick-in-circle',
  warning: 'alert-triangle',
  error: 'delete',
}
const CONTAINER_TYPE = {
  'top-right': 'end',
  'top-center': 'center',
  'to-left': 'start',
}

class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.rootElementRef = React.createRef()
    this.onClick = this.onClick.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)

    const {
      notification: { width },
    } = props

    this.state = {
      parentStyle: {
        height: 0,
        overflow: 'hidden',
        width: width ? `${width}px` : '100%',
      },
      htmlClassList: getHtmlClassesForType(props.notification),
      animationPlayState: 'running',
      touchEnabled: true,
    }
  }

  static propTypes = {
    toggleRemoval: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    removed: PropTypes.bool,
  }

  componentWillUnmount() {
    if (this.timer) {
      this.timer.clear()
    }
  }

  componentDidMount() {
    const { notification, count } = this.props
    const {
      dismiss: { duration, onScreen },
    } = notification
    const { scrollHeight } = this.rootElementRef.current
    const willSlide = shouldNotificationHaveSliding(notification, count)

    const onTransitionEnd = () => {
      if (!duration || onScreen) return
      const callback = () => this.removeNotification(REMOVAL.TIMEOUT)
      this.timer = new Timer(callback, duration)
    }

    const callback = () => {
      requestAnimationFrame(() => {
        this.setState(prevState => ({
          htmlClassList: [
            ...notification.animationIn,
            ...prevState.htmlClassList,
          ],
        }))
      })
    }

    this.setState(
      ({ parentStyle: { width } }) => ({
        parentStyle: {
          marginTop: '1rem',
          height: `${scrollHeight}px`,
          transition: willSlide
            ? getTransition(notification.slidingEnter, 'height')
            : '10ms height',
        },
        onTransitionEnd,
      }),
      callback
    )
  }

  componentDidUpdate({ removed }) {
    if (this.props.removed && !removed) {
      this.removeNotification(REMOVAL.MANUAL)
    }
  }

  removeNotification(removalFlag) {
    const { notification, toggleRemoval } = this.props
    const {
      id,
      onRemoval,
      dismiss: { waitForAnimation },
    } = notification
    const htmlClassList = [
      ...notification.animationOut,
      ...getHtmlClassesForType(notification),
    ]

    const onTransitionEnd = () =>
      toggleRemoval(id, () => onRemoval(id, removalFlag))
    const parentStyle = {
      height: 0,
      transition: getTransition(notification.slidingExit, 'height'),
    }

    if (waitForAnimation) {
      return this.setState(({ parentStyle: { width } }) => ({
        htmlClassList,
        onAnimationEnd: () => {
          this.setState({
            parentStyle: {
              width,
              ...parentStyle,
            },
            onTransitionEnd,
          })
        },
      }))
    }

    return this.setState(({ parentStyle: { width } }) => ({
      parentStyle: {
        width,
        ...parentStyle,
      },
      htmlClassList,
      onTransitionEnd,
    }))
  }

  onClick() {
    const {
      notification: { dismiss },
    } = this.props
    if (dismiss.click || dismiss.showIcon) {
      this.removeNotification(REMOVAL.CLICK)
    }
  }

  onTouchStart({ touches }) {
    const [{ pageX }] = touches
    this.setState(({ parentStyle }) => ({
      startX: pageX,
      currentX: pageX,
      parentStyle: {
        ...parentStyle,
        position: 'relative',
      },
    }))
  }

  onTouchMove({ touches }) {
    const { startX } = this.state
    const {
      toggleRemoval,
      notification: {
        id,
        onRemoval,
        slidingExit,
        touchSlidingExit: { swipe, fade },
      },
    } = this.props

    const [{ pageX }] = touches
    const distance = pageX - startX
    const { offsetWidth: width } = this.rootElementRef.current
    const swipeTo = window.innerWidth + width
    const left = `${pageX - startX >= 0 ? swipeTo : -swipeTo}px`

    if (hasFullySwiped(distance, width)) {
      const t1 = getTransition(swipe, 'left')
      const t2 = getTransition(fade, 'opacity')
      const onTransitionEnd = () => {
        toggleRemoval(id, () => onRemoval(id, REMOVAL.TOUCH))
      }

      return this.setState(({ parentStyle }) => ({
        touchEnabled: false,
        parentStyle: {
          ...parentStyle,
          left,
          opacity: 0,
          transition: `${t1}, ${t2}`,
        },
        onTransitionEnd: () => {
          this.setState(({ parentStyle }) => ({
            parentStyle: {
              ...parentStyle,
              height: 0,
              transition: getTransition(slidingExit, 'height'),
            },
            onTransitionEnd,
          }))
        },
      }))
    }

    return this.setState(({ parentStyle }) => ({
      currentX: pageX,
      parentStyle: {
        ...parentStyle,
        left: `${0 + distance}px`,
      },
    }))
  }

  onTouchEnd() {
    const {
      notification: { touchRevert },
    } = this.props

    this.setState(({ parentStyle }) => ({
      parentStyle: {
        ...parentStyle,
        left: 0,
        transition: getTransition(touchRevert, 'left'),
      },
    }))
  }

  onMouseEnter() {
    if (this.timer) {
      this.timer.pause()
    } else {
      this.setState({ animationPlayState: 'paused' })
    }
  }

  onMouseLeave() {
    if (this.timer) {
      this.timer.resume()
    } else {
      this.setState({ animationPlayState: 'running' })
    }
  }

  renderTimer() {
    const {
      notification: { dismiss },
    } = this.props
    const { duration, onScreen } = dismiss
    const { animationPlayState } = this.state

    if (!duration || !onScreen) return

    const style = {
      animationName: 'timer',
      animationDuration: `${duration}ms`,
      animationTimingFunction: 'linear',
      animationFillMode: 'forwards',
      animationDelay: 0,
      animationPlayState,
    }

    const onAnimationEnd = () => this.removeNotification(REMOVAL.TIMEOUT)
    return (
      <div className={styles.timer}>
        <div
          className={styles.timerFiller}
          onAnimationEnd={onAnimationEnd}
          style={style}></div>
      </div>
    )
  }

  renderCustomContent() {
    const { htmlClassList } = this.state
    const {
      notification: {
        id,
        content: CustomContent,
        dismiss: { duration, pauseOnHover },
      },
    } = this.props

    const hasMouseEvents = duration > 0 && pauseOnHover

    return (
      <div
        className={`${[...htmlClassList, 'n-child'].join(' ')}`}
        onMouseEnter={hasMouseEvents ? this.onMouseEnter : null}
        onMouseLeave={hasMouseEvents ? this.onMouseLeave : null}>
        {React.isValidElement(CustomContent) ? (
          CustomContent
        ) : (
          <CustomContent {...{ id }} />
        )}
      </div>
    )
  }

  renderNotification() {
    const {
      notification: {
        type,
        icon,
        message,
        dismiss: { showIcon, duration, pauseOnHover },
      },
    } = this.props
    const { htmlClassList } = this.state
    const hasMouseEvents = duration > 0 && pauseOnHover
    return (
      <div
        className={`${[...htmlClassList, 'n-child'].join(' ')}`}
        onMouseEnter={hasMouseEvents ? this.onMouseEnter : null}
        onMouseLeave={hasMouseEvents ? this.onMouseLeave : null}>
        <div className={styles.notificationContent}>
          {/* {title && <div className={styles.notificationTitle}>{title}</div>} */}
          <Icon.Medium
            noGap
            type={icon ? icon : ICON_TYPES[type]}
            fill="text-inverse"
          />
          <div className={styles.notificationMessage}>
            <Typography.Text fill="white">{message}</Typography.Text>
          </div>
          {showIcon && (
            <div className={styles.notificationClose} onClick={this.onClick}>
              <Icon.Small type="close" fill="text-inverse" />
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    const {
      notification: { content, container },
    } = this.props
    const {
      parentStyle,
      onAnimationEnd,
      onTransitionEnd,
      touchEnabled,
    } = this.state

    return (
      <div
        className={classnames(
          styles.rootNotice,
          styles[CONTAINER_TYPE[container]]
        )}
        ref={this.rootElementRef}
        onAnimationEnd={onAnimationEnd}
        onTransitionEnd={onTransitionEnd}
        style={parentStyle}>
        <div
          className={classnames(styles.notificationParent)}
          onTouchStart={touchEnabled ? this.onTouchStart : null}
          onTouchMove={touchEnabled ? this.onTouchMove : null}
          onTouchEnd={touchEnabled ? this.onTouchEnd : null}>
          {content ? this.renderCustomContent() : this.renderNotification()}
        </div>
      </div>
    )
  }
}

export default Notification
