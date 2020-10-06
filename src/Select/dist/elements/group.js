import React, { Fragment, useState } from 'react'
import styles from '../../index.module.css'
import Icon from '../../../Icon'
import Item from './item'

const Group = props => {
  const { group, index, baseProps, simpleProps, multiProps } = props
  const [expanded, setExpanded] = useState(group.expanded)
  return (
    <Fragment>
      <div
        className={styles.groupTitle}
        style={{ cursor: group.closable && 'pointer' }}
        onClick={() => group.closable && setExpanded(!expanded)}>
        {group.group}
        {group.closable && (
          <Icon.Medium
            className={styles.groupArrow}
            type={expanded ? 'arrow-up' : 'arrow-down'}
            fill="primary"
            noGap
          />
        )}
      </div>
      <div
        className={styles.group}
        style={{ display: group.closable && !expanded && 'none' }}>
        {group.items.map((item, itemIndex) => (
          <Item
            key={index + itemIndex}
            item={{ ...item, groupTitle: group.group }}
            index={index + itemIndex}
            baseProps={baseProps}
            simpleProps={simpleProps}
            multiProps={multiProps}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Group
