import React from 'react'
import Highlighter from 'react-highlight-words'
import Icon from '../../../Icon'
import classnames from 'classnames'
import styles from '../../index.module.css'

const Item = ({ item, index, baseProps, simpleProps, multiProps }) => {
  const {
    multi,
    value,
    onChange,
    highlightClassName,
    elementHeight,
    highlight,
  } = baseProps
  const { getItemProps, selectedItem, highlightedIndex } = simpleProps
  const { selectedItems, addSelectedItem, removeSelectedItem } =
    multiProps || {}
  const isSelected = multi
    ? selectedItems.filter(e => e?.value === item.value).length
    : selectedItem && selectedItem.value === item.value
  return (
    <div
      className={classnames(
        styles.item,
        highlightedIndex === index && styles.highlighted,
        isSelected && styles.selected
      )}
      style={{
        height:
          typeof elementHeight === 'number'
            ? `${elementHeight}px`
            : elementHeight,
      }}
      {...getItemProps({
        item,
        index,
      })}
      onMouseMove={() => {}}
      {...(multi && {
        onClick: () => {
          value
            ? onChange(item, isSelected)
            : isSelected
            ? removeSelectedItem(
                selectedItems.find(e => e.value === item.value)
              )
            : addSelectedItem(item)
        },
      })}>
      {item.customRender ? (
        item.customRender()
      ) : (
        <Highlighter
          style={{ flex: 1 }}
          highlightClassName={highlightClassName || styles.highlight}
          searchWords={highlight ? [highlight] : []}
          textToHighlight={item.title}
        />
      )}
      {(multi && isSelected && (
        <Icon.Medium className={styles.tick} type="tick" fill="primary" noGap />
      )) ||
        ''}
    </div>
  )
}

export default Item
