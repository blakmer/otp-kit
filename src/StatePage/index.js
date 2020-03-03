import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Typography from '../Typography'
import Icon from '../Icon'

const IMAGESTYPES = {
  success: 'check',
  error: 'error',
  empty: '',
}

const StatePage = props => {
  const { type, header, body, description, actions, className, style } = props

  return (
    <div style={style} className={classnames(styles.page, className)}>
      <div className={styles.type}>
        <Icon.ClipArt type={IMAGESTYPES[type]} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <Typography.Heading level={1} style={{ textAlign: 'center' }}>
            {header}
          </Typography.Heading>
        </div>
        <div>{body}</div>
        <div>
          {styles.description}
          {description}
        </div>
        <div>{actions}</div>
      </div>
    </div>
  )
}

StatePage.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  header: PropTypes.node,
  description: PropTypes.node,
  actions: PropTypes.node,
}

StatePage.defaultProps = {
  variation: 'empty',
}

export default StatePage
