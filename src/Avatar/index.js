import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import Checkbox from '../Checkbox'
import Typography from '../Typography'
import classes from '../classes.module.css'

const Avatar = props => {
  const {
    className,
    style,
    src,
    size,
    bgContent,
    iconName,
    genAvatarPath,
    selectable,
    ticked,
    onChange,
    iconFill,
    borderColor,
  } = props

  const [hovered, setHovered] = useState(false)

  const element = useRef(null)

  const leave = () => {
    setHovered(false)
  }

  const enter = () => {
    setHovered(true)
  }

  const toggleTicked = () => {
    onChange()
  }

  useEffect(() => {
    element.current.addEventListener('mouseenter', enter)
    element.current.addEventListener('mouseleave', leave)
    return () => {
      element.current.removeEventListener('mouseenter', enter)
      element.current.removeEventListener('mouseleave', leave)
    }
  }, [element])

  const generateAvatar = name => {
    const splitStr = name
      .replace(/[^a-zA-ZА-Яа-яЁё]/gi, '')
      .replace(/\s+/gi, ', ')
    return splitStr.length === 1
      ? splitStr
      : `${splitStr[0]}${splitStr[splitStr.length - 1]}`
  }

  const renderContent = useCallback(() => {
    if (genAvatarPath) {
      return (
        <Typography.Text
          size={size === 'small' ? 'small' : 'default'}
          type="highlighted"
          fill="primary">
          {generateAvatar(genAvatarPath)}
        </Typography.Text>
      )
    } else if (iconName) {
      return (
        <Icon.Medium
          className={styles.pointerNone}
          fill={iconFill || 'primary'}
          type={iconName}
        />
      )
    } else if (src) {
      return (
        <div className={styles.imgWrap}>
          <img className={styles.styleImg} src={src} />
        </div>
      )
    }
  }, [genAvatarPath, iconName, src])

  return (
    <div
      ref={element}
      style={style}
      className={classnames(
        styles.avatar,
        styles[size],
        classes[`${bgContent}-bg`],
        borderColor && classes[`${borderColor}-border`],
        borderColor && styles.border,
        className,
        { [styles.ticked]: ticked }
      )}>
      {selectable ? (
        <Fragment>
          {hovered ? (
            <Checkbox
              checked={ticked}
              onChange={toggleTicked}
              className={classnames(styles.removeMr)}
            />
          ) : (
            <div
              className={classnames(styles.pointerNone, {
                [styles.visibleNone]: ticked,
              })}>
              {renderContent()}
            </div>
          )}
          <Icon.Medium
            className={classnames(styles.visibleNone, {
              [styles.visible]: ticked && !hovered,
            })}
            fill="primary"
            type="tick"
          />
        </Fragment>
      ) : (
        renderContent()
      )}
    </div>
  )
}

Avatar.defaultProps = {
  size: 'large',
  bgContent: 'bg-grey-2',
  selectable: false,
}

Avatar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  /** Признак чекбокса */
  selectable: PropTypes.bool,
  /** Состояние чекбокса*/
  ticked: PropTypes.bool,
  /** Название иконки */
  iconName: PropTypes.string,
  /** Путь к изображению */
  src: PropTypes.string,
  /** Изменение размера автара */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Окрашивание фона в цвет из списка цветов */
  bgContent: PropTypes.string,
  /** Окрашивание бордера в цвет из списка цветов */
  borderColor: PropTypes.string,
  /** Окрашивание иконки в цвет из списка цветов */
  iconFill: PropTypes.string,
  /** Окрашивание иконки слева в цвет из списка цветов */
  block: PropTypes.bool,
}

export default Avatar
