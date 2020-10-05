import React, { useEffect } from 'react'
import { useCombobox } from 'downshift'
import Base from './elements/base'
import { toFlat, iToString, getValueFromItems } from './utils'

const Simple = props => {
  const {
    multi,
    items,
    value,
    defaultValue,
    onChange,
    isSearchInputChange,
    onSearchChange,
    loadMore,
    showSearch,
    itemToString,
    editable,
  } = props

  const flat = multi ? props.flat : toFlat(items)
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    selectedItem,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    setInputValue,
    selectItem,
  } = useCombobox({
    items: flat,
    initialSelectedItem: defaultValue && getValueFromItems(defaultValue, flat),
    itemToString: itemToString ? itemToString : iToString,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem)
    },
    ...{ ...(!isSearchInputChange && stateReducer) },
    onInputValueChange: ({ inputValue }) => {
      isSearchInputChange ? onSearchChange(inputValue) : loadMore(inputValue)
    },
    onIsOpenChange: ({ isOpen, inputValue, selectedItem }) => {
      if (!isOpen && !multi && isSearchInputChange) {
        if (editable) {
          ;((!selectedItem && inputValue) ||
            (selectItem && selectedItem.title !== inputValue)) &&
            selectItem({ title: inputValue, value: inputValue })
        } else {
          selectedItem &&
            inputValue &&
            inputValue !== selectedItem.title &&
            setInputValue(selectedItem.title)
          inputValue && !selectedItem && setInputValue('')
        }
        !inputValue && selectedItem && selectItem({ title: '', value: '' })
      }
    },
  })

  function stateReducer(state, actionAndChanges) {
    const { changes } = actionAndChanges
    if (useCombobox.stateChangeTypes.InputBlur) {
      return !flat.length && showSearch
        ? {
            ...changes,
            inputValue: state.inputValue,
            selectedItem: state.selectedItem,
          }
        : changes
    }
    return changes
  }

  useEffect(() => {
    !multi && value && selectItem(value)
  }, [value])

  return (
    <Base
      simpleProps={{
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        selectedItem,
        getComboboxProps,
        getItemProps,
        highlightedIndex,
        setInputValue,
        selectItem,
      }}
      {...props}
    />
  )
}

export default Simple
