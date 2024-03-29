import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Tooltip from '../Tooltip'
import Typography from '../Typography'
import Icon from '../Icon'
import classnames from 'classnames'

import styles from './index.module.css'

const NavPanel = props => {
  const { className, style, header, actions, onSearch, onHelp } = props
  return (
    <div className={classnames(styles.navbar, className)} style={style}>
      <span>{header}</span>
      <span className={styles.actionContainer}>
        {typeof onHelp === 'function' && (
          <span className={styles.helper} onClick={onHelp}>
            <Icon.Medium type="info" fill="chart-blue" />
            <Typography.Text fill="chart-blue">Помощь</Typography.Text>
          </span>
        )}
        {typeof onSearch === 'function' && (
          <span className={styles.searchContainer}>
            <Input
              onChange={onSearch}
              suffix={
                <Icon.Medium
                  className={styles.searchIcon}
                  fill="primary"
                  type="search"
                />
              }
            />
          </span>
        )}
        {actions.map((i, k) => (
          <span key={k} onClick={i.action} className={styles.actionIcon}>
            {i.tooltipNode ? (
              <Tooltip
                content={i.tooltipNode}
                position="bottomRight"
                fill="bg-input">
                <Icon.Medium fill="primary" type={i.icon} />
              </Tooltip>
            ) : (
              <Icon.Medium fill="primary" type={i.icon} />
            )}
          </span>
        ))}
      </span>
    </div>
  )
}

NavPanel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  header: PropTypes.node,
  /** Перечень элементов справа */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      action: PropTypes.func,
      tooltipNode: PropTypes.node,
    })
  ),
  /** Действие при вводе текста в поиск */
  onSearch: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  /** Действие при нажатии на кнопку "Помощь" */
  onHelp: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
}

NavPanel.defaultProps = {
  actions: [],
}

export default NavPanel
