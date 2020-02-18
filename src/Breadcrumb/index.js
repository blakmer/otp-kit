import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Icon from '../Icon'

const Breadcrumb = props => {
  const { data } = props

  const getSeparator = index => {
    if (data.length - 1 !== index) {
      return <Icon.Small type="arrow-right" fill="disabled" />
    }
  }

  const renderList = data.map((item, index) => {
    return (
      <li key={index} className={styles.item}>
        {item.node}
        {getSeparator(index)}
      </li>
    )
  })

  return <ul className={styles.breadcrumb}>{renderList}</ul>
}

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.node,
      /** Например, составная часть URL'а */
      key: PropTypes.string,
    })
  ).isRequired,
}

export default Breadcrumb
