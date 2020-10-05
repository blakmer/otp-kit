import React from 'react'
import Icon from '../../../Icon'
import styles from '../../index.module.css'

const Chips = ({ multiProps, onChange, value }) => {
  const { getSelectedItemProps, selectedItems, removeSelectedItem } = multiProps
  return (
    <div className={styles.flexed}>
      {selectedItems.map((selectedItem, index) => (
        <span
          className={styles.selectedItem}
          key={`selected-item-${index}`}
          {...getSelectedItemProps({ selectedItem, index })}
          onClick={e => {
            e.stopPropagation()
          }}>
          <span className={styles.title}>{selectedItem.title}</span>
          <Icon.Small
            className={styles.close}
            type="close"
            fill="bg-input"
            onClick={() => {
              value
                ? onChange(selectedItem, true)
                : removeSelectedItem(selectedItem)
            }}
          />
        </span>
      ))}
    </div>
  )
}

export default Chips
