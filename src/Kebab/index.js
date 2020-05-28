import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../Dropdown'
import RoundButton from '../RoundButton'
import styles from './index.module.css'

const Kebab = props => {
  const { items, emptyText, listDirection, disabled } = props

  return (
    <Dropdown
      emptyText={emptyText}
      listDirection={listDirection}
      showArrow={false}
      className={styles.menuWithoutPadding}
      items={items}>
      <RoundButton
        className={styles.kebab}
        icon={'menu-kebab'}
        fill="bg-input"
        iconFill="primary"
        disabled={disabled}
      />
    </Dropdown>
  )
}

Kebab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  emptyText: PropTypes.string,
  listDirection: PropTypes.oneOf(['bottomCenter', 'topCenter']),
}

Kebab.defaultProps = {
  items: [],
  emptyText: '',
  listDirection: 'topCenter',
}

export default Kebab
