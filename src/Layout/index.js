import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Icon from '../Icon/Medium'
import Logo from '../Logo'

const Layout = props => {
  const { items, children, header, onChange, active } = props

  const eqPath = (path1, path2) => {
    const regexp = new RegExp(`${path1}`)
    return regexp.test(path2)
  }

  return (
    <section className={styles.section}>
      <nav className={styles.navbar}>
        <section className={styles.hamburger}>
          <Logo mini />
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
                fill={eqPath(i.key, active) ? 'primary' : 'bg-grey-1'}
              />
            </span>
          ))}
        </section>
        <section className={styles.config}>
          <Icon
            type="gear"
            fill="bg-grey-1"
            onClick={() => onChange('settings')}
          />
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
  items: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, icon: PropTypes.string })
  ),
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
