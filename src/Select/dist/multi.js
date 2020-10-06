import React from 'react'
import { useMultipleSelection } from 'downshift'
import Simple from './simple'
import { getValueFromItems, toFlat } from './utils'

const Multi = props => {
  const { value, defaultValue, onChange, items } = props
  const flat = toFlat(items)
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems:
      (defaultValue && [
        ...defaultValue.map(e => getValueFromItems(e, flat)),
      ]) ||
      [],
    onSelectedItemsChange: onChange,
    ...(value && {
      selectedItems: [...value.map(e => getValueFromItems(e, flat))],
    }),
  })

  return (
    <Simple
      multiProps={{
        getSelectedItemProps,
        getDropdownProps,
        addSelectedItem,
        removeSelectedItem,
        selectedItems,
      }}
      flat={flat}
      {...props}
    />
  )
}

export default Multi
