import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Icon from '../Icon/Medium'

const Layout = props => {
  const { items, children, header, onChange, active } = props

  const eqPath = (path1, path2) => {
    const regexp = new RegExp(`\\${path1}`)
    return regexp.test(path2)
  }

  return (
    <section className={styles.section}>
      <nav className={styles.navbar}>
        <section className={styles.hamburger}>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path
              style={{ fill: '#fff' }}
              d="M0-1.2a15,15,0,0,1,14.981-15v5.421A9.577,9.577,0,0,0,5.417-1.2,9.582,9.582,0,0,0,15,8.382a9.583,9.583,0,0,0,9.578-9.617l5.421,0A15.006,15.006,0,0,1,15,13.8,15,15,0,0,1,0-1.2Z"
              transform="translate(0 16.199)"
            />
            <path
              style={{ fill: '#fff', fillRule: 'evenodd' }}
              d="M4.525-5.039a6.656,6.656,0,0,1,6.654-6.654,6.656,6.656,0,0,1,6.654,6.654,6.653,6.653,0,0,1-6.654,6.65A6.653,6.653,0,0,1,4.525-5.039Z"
              transform="translate(3.855 20.038)"
            />
            <path
              style={{ fill: '#fff', fillRule: 'evenodd' }}
              d="M10.61-10.9a3.812,3.812,0,0,1,3.811-3.813A3.814,3.814,0,0,1,18.236-10.9,3.817,3.817,0,0,1,14.421-7.08,3.815,3.815,0,0,1,10.61-10.9Z"
              transform="translate(9.039 17.468)"
            />
          </svg>
        </section>
        <section className={styles.menu}>
          {items.map(i => (
            <span
              key={i.key}
              onClick={() => onChange(i.key)}
              className={classnames(
                styles.menuItem,
                eqPath(i.key, active) && styles.activeItem
              )}>
              <Icon
                type={i.icon}
                fill={eqPath(i.key, active) ? 'green' : 'grey1'}
              />
            </span>
          ))}
        </section>
        <section className={styles.config}>
          <Icon type="gear" fill="grey1" onClick={() => onChange('settings')} />
        </section>
      </nav>
      <section className={styles.content}>
        <header className={styles.header}>{header}</header>
        <main>{children}</main>
      </section>
    </section>
  )
}

Layout.propTypes = {
  items: PropTypes.arrayOf([{ key: PropTypes.string, icon: PropTypes.string }]),
  children: PropTypes.node,
  header: PropTypes.node,
  onChange: PropTypes.func,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Layout.defaultProps = {
  items: [],
  onChange: () => {},
}

export default Layout
