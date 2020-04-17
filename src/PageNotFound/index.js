import React from 'react'
import classnames from 'classnames'
import classes from '../classes.css'
import propTypes from 'prop-types'
import styles from './index.module.css'
import Typography from '../Typography'
import Link from '../Link'
import Icon from '../Icon'

const PageNotFound = props => {
  const { className, onClick, style, iconFill, fill, linkText } = props
  return (
    <div
      className={classnames(styles.pageNotFoundBackground, className)}
      style={style}>
      <div className={classnames(styles.pageNotFound)}>
        <Icon.ClipArt type="broken-robot" fill={iconFill} />
        <Typography.Heading>404 ошибка</Typography.Heading>
        <span>Запрашиваемая страница отсутствует</span>
        <div
          className={classnames(styles.pageNotFoundLink, classes[`${fill}-bg`])}
          onClick={onClick}>
          <Link suffix="arrow-right">{linkText}</Link>
        </div>
      </div>
    </div>
  )
}

PageNotFound.defaultProps = {
  linkText: 'Перейти на главную',
  fill: 'bg-grey-2',
  iconFill: 'text-secondary',
}

PageNotFound.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
  fill: propTypes.string,
  linkText: propTypes.string,
  iconFill: propTypes.string,
}

export default PageNotFound
