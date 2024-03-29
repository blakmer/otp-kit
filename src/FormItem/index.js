import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Fragment,
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Typography from '../Typography'
import styles from './index.module.css'

const FormItem = props => {
  const { label, className, description, children, count, flat, style } = props
  const [focus, setFocus] = useState(false)
  const element = useRef(null)
  const isSimple = children ? !children.length : false
  const nonFluidComponents = ['Select', 'DropdownInput', 'DatePicker']
  let childClone = null

  const handleChange = useCallback(e => {
    if (e.target.value && !focus) {
      setFocus(true)
    }
    if (!e.target.value) {
      setFocus(false)
    }
  }, [])

  const handleBlur = useCallback(e => {
    setFocus(!!e.target.value)
  }, [])

  useEffect(() => {
    const el =
      element.current.querySelector('textarea') ||
      element.current.querySelector('input')
    if (el) {
      el.addEventListener('change', handleChange)
      el.addEventListener('blur', handleBlur)

      return () => {
        if (el) {
          el.removeEventListener('change', handleChange)
          el.removeEventListener('blur', handleBlur)
        }
      }
    }
  }, [])

  if (
    !focus &&
    (nonFluidComponents.filter(e => e === children.type.displayName).length ||
      children.props.value ||
      children.props.defaultValue)
  ) {
    setFocus(true)
  }

  if (!flat && children.type.displayName === 'Select') {
    childClone = React.cloneElement(children, {
      renderMenu: menu => (
        <Fragment>
          <span
            className={classnames(
              styles.label,
              styles.fluid,
              styles[children.props.status || null],
              focus && styles.focused
            )}
            style={{ marginLeft: '-2px', marginTop: '-2px' }}>
            {label}
          </span>
          {children.props.renderMenu(menu)}
        </Fragment>
      ),
    })
  }

  return (
    <div
      ref={element}
      className={classnames(
        styles.wrapper,
        !!children.props.block && styles.block,
        flat && styles.flat,
        className
      )}
      style={style}>
      <div
        className={classnames(
          styles.child,
          !description && styles.paddingInput
        )}>
        {label && (
          <span
            className={classnames(
              styles.label,
              flat ? styles.flat : styles.fluid,
              styles[children.props.status || null],
              !flat && focus && styles.focused
            )}>
            {label}
          </span>
        )}
        {childClone ? childClone : children}
      </div>
      {!description && count >= 0 && !!children.props.maxLength && (
        <small
          className={
            styles.limit
          }>{`${count}/${children.props.maxLength}`}</small>
      )}

      {description && (
        <Typography.Text
          className={classnames(
            styles.description,
            styles[children.props.status || null],
            flat && styles.flat
          )}>
          {description}
        </Typography.Text>
      )}
    </div>
  )
}

FormItem.propTypes = {
  /** Заголовок элемента */
  label: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  description: PropTypes.string,
  /** Дочерний элемент */
  children: PropTypes.element.isRequired,
  /** Отображение количества символов */
  count: PropTypes.number,
  /** Преобразование к плоской структуре */
  flat: PropTypes.bool,
}

FormItem.defaultProps = {
  flat: false,
}

export default FormItem
