import React, { Fragment } from 'react'
import Group from './group'
import Item from './item'

const List = props => {
  const { showLoader, simpleProps, multiProps, baseProps } = props
  const { items, loader } = baseProps
  let index = 0
  return (
    <Fragment>
      {items.map(item => {
        const render = item.items ? (
          <Group
            group={item}
            index={index}
            key={`group-${index}`}
            baseProps={baseProps}
            simpleProps={simpleProps}
            multiProps={multiProps}
          />
        ) : (
          <Item
            item={item}
            index={index}
            key={`item-${index}`}
            baseProps={baseProps}
            simpleProps={simpleProps}
            multiProps={multiProps}
          />
        )
        index += item.items ? item.items.length : 1
        return render
      })}
      {showLoader ? loader : ''}
    </Fragment>
  )
}

export default List
