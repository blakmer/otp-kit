import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import styles from './index.module.css'
import Typography from '../Typography'
import Link from '../Link'
import Icon from '../Icon'

const PageNotFound = props => {
  const { className, onClick, style, fill, linkText } = props
  return (
    <div
      className={classNames(styles.pageNotFoundBackground, className)}
      style={style}>
      <div className={classNames(styles.pageNotFound)}>
        <Icon.ClipArt type="broken-robot" fill={fill} />
        <Typography.Heading>404 ошибка</Typography.Heading>
        <span>Запрашиваемая страница отсутствует</span>
        <div className={styles.pageNotFoundLink} onClick={onClick}>
          <Link suffix="arrow-right">{linkText}</Link>
        </div>
      </div>
    </div>
  )
}

PageNotFound.defaultProps = {
  linkText: 'Перейти на главную',
}

PageNotFound.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
  fill: propTypes.string,
  linkText: propTypes.string,
}

export default PageNotFound
