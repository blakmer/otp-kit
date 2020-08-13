import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox, useMultipleSelection } from 'downshift'
import ArrowUp from '../util/arrow-up'
import ArrowDown from '../util/arrow-down'
import styles from './index.module.css'
import Infinite from 'react-infinite-scroller'
import Spinner from '../Spinner'
import SearchInput from '../SearchInput'
import Divider from '../Divider'
import Icon from '../Icon'

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const STATUSFILLS = {
  default: 'primary',
  error: 'error',
  warning: 'highlighted',
  disabled: 'text-disabled',
}

const Select = props => {
  const {
    className,
    style,
    items,
    defaultValue,
    value,
    onChange,
    emptyText,
    status,
    block,
    placeholder,
    listDirection,
    menuClassName,
    menuStyle,
    renderMenu,
    elementHeight,
    showSearch,
    onSearchChange,
    onSearchEnter,
    onSearchRemove,
    itemToString,
    hasMore,
    initialLoad,
    isReverse,
    loadMore,
    loader,
    pageStart,
    threshold,
    listMaxHeight,
    multi,
    multiChips,
  } = props

  const toFlat = items => {
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

  const flat = toFlat(items)
  const getValueFromItems = val => val && flat.find(e => e.value === val.value)
  const iToString = e =>
    e ? (e.groupTitle ? `${e.groupTitle} : ${e.title}` : e.title) : ''

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems:
      (multi &&
        defaultValue && [...defaultValue.map(e => getValueFromItems(e))]) ||
      [],
    onSelectedItemsChange: onChange,
    ...(value && {
      selectedItems: multi ? [...value.map(e => getValueFromItems(e))] : [],
    }),
  })

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    selectedItem,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: flat,
    initialSelectedItem: defaultValue && getValueFromItems(defaultValue),
    ...(!multi &&
      value && {
        inputValue: (() => {
          const inputValue = getValueFromItems(value)
          return inputValue && iToString(inputValue)
        })(),
      }),
    stateReducer,
    itemToString: itemToString ? itemToString : iToString,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem)
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

  const renderItem = (item, index) => {
    const isSelected = multi
      ? selectedItems.filter(e => e.value === item.value).length
      : value
      ? value.value === item.value
      : selectedItem && selectedItem.value === item.value
    return (
      <div
        className={classnames(styles.item, isSelected && styles.selected)}
        style={{ height: `${elementHeight}px` }}
        key={index}
        {...getItemProps({
          item,
          index,
        })}
        onMouseMove={e => {}}
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
        <span style={{ flex: 1 }}>{item.title}</span>
        {(multi && isSelected && (
          <Icon.Medium
            className={styles.tick}
            type="tick"
            fill="primary"
            noGap
          />
        )) ||
          ''}
      </div>
    )
  }

  const renderGroup = (group, index) => {
    const [closed, setClosed] = useState(false)
    return (
      <Fragment key={index}>
        <div
          className={styles.groupTitle}
          style={{ cursor: group.closable && 'pointer' }}
          onClick={() => {
            group.closable && setClosed(!closed)
          }}>
          {group.group}
          {group.closable && (
            <Icon.Medium
              className={styles.groupArrow}
              type={closed ? 'arrow-down' : 'arrow-up'}
              fill="primary"
              noGap
            />
          )}
        </div>
        <div className={styles.group} style={{ display: closed && 'none' }}>
          {group.items.map((item, i) =>
            renderItem({ ...item, groupTitle: group.group }, index + i)
          )}
        </div>
      </Fragment>
    )
  }

  const renderList = () => {
    let i = 0
    const list = []
    items.map(item => {
      item.items
        ? list.push(renderGroup(item, i))
        : list.push(renderItem(item, i))
      i += item.items ? item.items.length : 1
    })
    return list
  }

  const renderChips = () => (
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

  return (
    <div
      className={classnames(styles.container, block && styles.block, className)}
      style={style}
      {...getComboboxProps()}>
      <div
        className={classnames(
          styles.labelContainer,
          block && styles.block,
          styles[STATUSES[status]],
          isOpen && styles.opened,
          multi && styles.multi
        )}
        {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}>
        {multi &&
          (multiChips ? (
            renderChips()
          ) : (
            <span className={classnames(styles.flexed, styles.inside)}>
              {(() => {
                const count = selectedItems.length
                return count
                  ? count > 1
                    ? `${count} selected`
                    : itemToString
                    ? itemToString(selectedItems[0])
                    : iToString(selectedItems[0])
                  : ''
              })()}
            </span>
          ))}
        <input
          className={classnames(styles.flexed, styles.inside)}
          placeholder={placeholder}
          readOnly
          {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
        />
        {isOpen ? (
          <ArrowUp className={styles.arrowIcon} fill={STATUSFILLS[status]} />
        ) : (
          <ArrowDown className={styles.arrowIcon} fill={STATUSFILLS[status]} />
        )}
      </div>
      <div
        className={classnames(
          styles.menu,
          !isOpen && styles.hide,
          styles[listDirection],
          block && styles.block,
          showSearch && styles.withSearch,
          menuClassName
        )}
        style={{ ...menuStyle }}
        {...getMenuProps()}
        onMouseLeave={e => {}}>
        {renderMenu(
          <Fragment>
            {showSearch && (
              <Fragment>
                <SearchInput
                  inputClassName={styles.searchinput}
                  noBorder
                  searchIcon="arrow-up"
                  block
                  onEnter={onSearchEnter}
                  onChange={onSearchChange}
                  onRemove={onSearchRemove}
                />
                <Divider
                  style={{ height: '0.1rem', padding: '0 .25rem .8rem' }}
                />
              </Fragment>
            )}
            <div
              className={classnames(
                styles.listparent,
                showSearch && styles.withSearch
              )}
              style={{
                maxHeight:
                  typeof listMaxHeight === 'number'
                    ? `${listMaxHeight}px`
                    : listMaxHeight,
              }}>
              <Infinite
                className={styles.list}
                pageStart={pageStart}
                loadMore={loadMore}
                hasMore={hasMore}
                threshold={threshold}
                initialLoad={initialLoad}
                isReverse={isReverse}
                useWindow={false}
                loader={loader}>
                {renderList()}
                {!items.length && (
                  <div className={styles.emptyState} key={'empty-0'}>
                    <Icon.ClipArt
                      className={styles.emptyIcon}
                      type={'no-result'}
                    />
                    <span className={styles.emptyText}>{emptyText}</span>
                  </div>
                )}
              </Infinite>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Элементы всплывающго меню */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
      ),
    ])
  ),
  /** Элемент из списка, выбранный по умолчанию */
  defaultValue: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  ]),
  /** Заданное значение элемента из списка */
  value: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  ]),
  onChange: PropTypes.func,
  /** Текст, отображаемый при отсутствии элементов во всплывающем меню */
  emptyText: PropTypes.string,
  /** Состояние элемента */
  status: PropTypes.oneOf(Object.keys(STATUSES)),
  /** Направление всплывающего меню */
  listDirection: PropTypes.oneOf(['bottom', 'top']),
  placeholder: PropTypes.string,
  /** Располагает элемент по ширине родителя */
  block: PropTypes.bool,
  /** Класс для всплывающего меню */
  menuClassName: PropTypes.string,
  /** Стилизация всплывающего меню */
  menuStyle: PropTypes.object,
  /** Кастомный рендеринг внутри всплывающего меню */
  renderMenu: PropTypes.func,
  /** Высота выбираемых элементов */
  elementHeight: PropTypes.number,
  /** Отображение поля поиска во всплывающем меню */
  showSearch: PropTypes.bool,
  /** CallBack вызываемый при вводе текста в поле поиска */
  onSearchChange: PropTypes.func,
  /** CallBack вызываемый при нажатии на клавишу Enter в поле поиска */
  onSearchEnter: PropTypes.func,
  /** CallBack вызываемый при нажатии на кнопку "Очистить поле" */
  onSearchRemove: PropTypes.func,
  /** Функция, преобразования выбранного элемента в строку */
  itemToString: PropTypes.func,
  /** Параметр, отвечающий за подгрузку данных при скроллинге */
  hasMore: PropTypes.bool,
  /** Должен ли компонент подгружать первый набор элементов */
  initialLoad: PropTypes.bool,
  /** Направление подгрузки элементов */
  isReverse: PropTypes.bool,
  /** Функция для загрузки новых элементов при прокрутке */
  loadMore: PropTypes.func,
  /** Компонент, отображаемый во время загрузки новых элементов */
  loader: PropTypes.node,
  /** Номер первой страницы для подгрузки элементов */
  pageStart: PropTypes.number,
  /** Отступ снизу в пикселях, достигнув которого, начнётся подгрузка нового набора элементов */
  threshold: PropTypes.number,
  /** Отступ снизу в пикселях, достигнув которого, начнётся подгрузка нового набора элементов */
  /** For example: 150, '12rem', '10em' */
  listMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Добавляет возможность мультивыбора элементов */
  multi: PropTypes.bool,
  /** Отображает выбранные элементы внутри компонента в виде отдельных блоков */
  multiChips: PropTypes.bool,
}

Select.defaultProps = {
  items: [],
  emptyText: 'Нет данных',
  status: STATUSES.default,
  onChange: value => {},
  listDirection: 'bottom',
  elementHeight: 40,
  threshold: 40,
  loadMore: () => {},
  renderMenu: menu => menu,
  onSearchChange: e => {},
  onSearchEnter: e => {},
  onSearchRemove: e => {},
  onInfiniteLoad: () => {},
  listMaxHeight: '15rem',
  loader: (
    <Spinner
      style={{ margin: '0 auto', width: '100%' }}
      key={0}
      size="medium"
    />
  ),
}

export default Select
