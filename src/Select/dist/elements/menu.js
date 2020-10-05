import React, { Fragment, useRef, useEffect } from 'react'
import Infinite from 'react-infinite-scroller'
import SearchInput from '../../../SearchInput'
import Divider from '../../../Divider'
import Icon from '../../../Icon'
import List from './list'
import classnames from 'classnames'
import styles from '../../index.module.css'

const Menu = ({ simpleProps, multiProps, ...props }) => {
  const {
    items,
    value,
    onChange,
    emptyText,
    emptyState,
    block,
    listDirection,
    menuClassName,
    menuStyle,
    renderMenu,
    elementHeight,
    showSearch,
    searchIcon,
    isSearchInputChange,
    onSearchChange,
    onSearchEnter,
    onSearchRemove,
    highlight,
    highlightClassName,
    hasMore,
    initialLoad,
    isReverse,
    loadMore,
    loader,
    pageStart,
    threshold,
    listMaxHeight,
    multi,
  } = props
  const { isOpen, getMenuProps } = simpleProps
  const scroller = useRef(null)
  const onMouseWheel = e => {
    let delta = e.wheelDelta || -e.detail
    scroller.current.scrollTop += (delta < 0 ? 1 : -1) * 7
    e.preventDefault()
  }
  useEffect(() => {
    scroller.current.addEventListener('mousewheel', onMouseWheel, {
      passive: false,
    })
    return () => {
      scroller.current.removeEventListener('mousewheel', onMouseWheel)
    }
  }, [])

  return (
    <div
      className={classnames(
        styles.menu,
        !isOpen && styles.hide,
        styles[listDirection],
        block && styles.block,
        (showSearch || isSearchInputChange) && styles.withSearch,
        menuClassName
      )}
      style={{ ...menuStyle }}
      {...getMenuProps()}
      onMouseLeave={e => {}}>
      {renderMenu(
        <Fragment>
          {(showSearch || isSearchInputChange) && (
            <Fragment>
              {isSearchInputChange ? (
                <div className={styles.searchInput}>
                  {searchIcon && (
                    <Icon.Medium type={searchIcon} fill="primary" />
                  )}
                </div>
              ) : (
                <SearchInput
                  inputClassName={styles.searchinput}
                  noBorder
                  searchIcon="arrow-up"
                  block
                  onEnter={onSearchEnter}
                  onChange={onSearchChange}
                  onRemove={onSearchRemove}
                />
              )}
              <Divider
                style={{ height: '0.1rem', padding: '0 .25rem .8rem' }}
              />
            </Fragment>
          )}
          <div
            ref={scroller}
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
              hasMore={!isSearchInputChange && hasMore}
              threshold={threshold}
              initialLoad={initialLoad}
              isReverse={isReverse}
              useWindow={false}
              loader={loader}>
              <List
                {...{ simpleProps, multiProps }}
                baseProps={{
                  multi,
                  items,
                  value,
                  onChange,
                  highlightClassName,
                  elementHeight,
                  highlight,
                  loader,
                }}
                showLoader={isSearchInputChange && hasMore}
              />
              {!hasMore && !items.length && emptyState && (
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
  )
}

export default Menu
