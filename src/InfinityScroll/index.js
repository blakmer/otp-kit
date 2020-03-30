import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InfiniteScroll from 'react-infinite-scroll-component'

import styles from './index.module.css'

const InfinityScroll = props => {
  const {
    data,
    height,
    onNext,
    hasMore,
    loader,
    scrollThreshold,
    onScroll,
    className,
    style,
    initialScrollY,
    itemHeight,
    scrollBottom,
  } = props

  const el = useRef(null)
  useEffect(() => {
    scrollBottom &&
      el.current.el.scrollTo({
        top: el.current.el.scrollHeight,
        behavior: 'smooth',
      })
  }, [data.length])
  return (
    <InfiniteScroll
      ref={el}
      dataLength={data.length}
      height={height}
      next={onNext}
      hasMore={hasMore}
      loader={loader}
      scrollThreshold={scrollThreshold}
      onScroll={onScroll}
      className={classnames(styles.viewer, className)}
      style={style}
      initialScrollY={initialScrollY}>
      {data.map((i, k) => (
        <div style={{ height: itemHeight }} key={k}>
          {i}
        </div>
      ))}
    </InfiniteScroll>
  )
}

InfinityScroll.propTypes = {
  /** Массив строк */
  data: PropTypes.arrayOf(PropTypes.node),
  /** Высота контейнера */
  height: PropTypes.number,
  /** (e) => {}  Функция для загрузки новой порции данных. Вызывается при приближении скролла к низу блока*/
  onNext: PropTypes.func,
  /** Флаг необходимости дополнительной загрузки*/
  hasMore: PropTypes.bool,
  /** Лоадер для незагруженных строк*/
  loader: PropTypes.node,
  scrollThreshold: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** (e) => {} */
  onScroll: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Изначальная позиция скролла по оси Y */
  initialScrollY: PropTypes.number,
  itemHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Флаг для принудительного прижатия скролла к низу блока */
  scrollBottom: PropTypes.bool,
}

InfinityScroll.defaultProps = {
  data: [],
}

export default InfinityScroll
