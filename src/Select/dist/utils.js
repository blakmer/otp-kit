export const statuses = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

export const statusFills = {
  default: 'primary',
  error: 'error',
  warning: 'highlighted',
  disabled: 'text-disabled',
}

export const toFlat = items => {
  const flat = []
  items.map(e =>
    e.items
      ? flat.push(
          ...e.items.map(a => {
            return { ...a, groupTitle: e.group }
          })
        )
      : flat.push(e)
  )
  return flat
}

export const getValueFromItems = (val, flat) =>
  val && flat.find(item => item.value === val.value)

export const iToString = item =>
  item
    ? item.groupTitle
      ? `${item.groupTitle} : ${item.title}`
      : item.title
    : ''

export const getSelectedStatus = ({ selectedItems }, itemToString) => {
  const count = selectedItems.length
  return count
    ? count > 1
      ? `${count} selected`
      : itemToString
      ? itemToString(selectedItems[0])
      : iToString(selectedItems[0])
    : ''
}
