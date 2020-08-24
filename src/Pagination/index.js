import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.css'
import RoundButton from '../RoundButton'
import Grid from '../Grid'

const RANGE_SIZE = 10
const { Visible, Hidden } = Grid

const Pagination = props => {
  const { total, current, onPageChanged, className, style } = props

  /**
   * @getRange - массив типа [мин значение, макс значение, разрыв слева, разрыв справа]
   * @param Number total
   * @param Number page
   * @return Array
   * */
  const getRange = (total, page) => {
    if (total <= RANGE_SIZE) {
      return [1, total, false, false]
    }
    if (page < RANGE_SIZE / 2) {
      return [1, RANGE_SIZE - 2, false, true]
    }
    if (total - page < RANGE_SIZE / 2) {
      return [total - (RANGE_SIZE - 1) + 2, total, true, false]
    }
    return [page + 3 - RANGE_SIZE / 2, page - 2 + RANGE_SIZE / 2, true, true]
  }

  const calculatePaging = page => {
    let range = getRange(total, page),
      rangeArea = []
    for (let i = range[0]; i <= range[1]; i++) {
      rangeArea.push(i)
    }
    return {
      currentPage: page,
      rangeArea: rangeArea,
      startGap: range[2],
      endGap: range[3],
    }
  }

  let pagingParams = calculatePaging(current + 1)

  const handlePrev = () => {
    if (pagingParams.currentPage > 1) {
      let newPage = pagingParams.currentPage - 1
      onPageChanged(newPage - 1)
    }
  }
  const handleNext = () => {
    if (pagingParams.currentPage < total) {
      let newPage = pagingParams.currentPage + 1
      onPageChanged(newPage - 1)
    }
  }
  const handleUpToPage = page => {
    if (page !== pagingParams.currentPage) {
      onPageChanged(page - 1)
    }
  }
  const handlePrevMore = () => {
    let newPage =
      pagingParams.currentPage > RANGE_SIZE / 2
        ? pagingParams.currentPage - RANGE_SIZE / 2
        : 1
    onPageChanged(newPage - 1)
  }
  const handleNextMore = () => {
    let newPage =
      pagingParams.currentPage < total - RANGE_SIZE / 2
        ? pagingParams.currentPage + RANGE_SIZE / 2
        : total
    onPageChanged(newPage - 1)
  }

  return (
    <div className={classnames(styles.wrapper, className)} style={style}>
      <RoundButton
        key="prev"
        icon="arrow-left"
        iconFill="white"
        disabled={pagingParams.currentPage === 1}
        onClick={handlePrev}
      />

      <Hidden xs sm>
        <ul className={classnames(styles.pagination)}>
          {pagingParams.startGap && (
            <li key="first" onClick={handleUpToPage.bind(null, 1)}>
              1
            </li>
          )}

          {pagingParams.startGap && (
            <li className={styles.more} onClick={handlePrevMore}>
              ...
            </li>
          )}

          {!!pagingParams.rangeArea &&
            pagingParams.rangeArea.map(el => {
              return (
                <li
                  key={el.toString()}
                  className={classnames(
                    pagingParams.currentPage === el ? styles.selected : null
                  )}
                  onClick={handleUpToPage.bind(null, el)}>
                  {el}
                </li>
              )
            })}

          {pagingParams.endGap && (
            <li className={styles.more} onClick={handleNextMore}>
              ...
            </li>
          )}
          {pagingParams.endGap && (
            <li key="last" onClick={handleUpToPage.bind(null, total)}>
              {total}
            </li>
          )}
        </ul>
      </Hidden>

      <Visible xs sm>
        <span className={styles.smallpag}>
          {pagingParams.currentPage}/{total}
        </span>
      </Visible>

      <RoundButton
        disabled={pagingParams.currentPage === total}
        shadow="none"
        iconFill="white"
        key="next"
        icon="arrow-right"
        onClick={handleNext}
      />
    </div>
  )
}

Pagination.propTypes = {
  /** Текущая страница */
  current: PropTypes.number,
  /** Общее число страниц */
  total: PropTypes.number.isRequired,
  /** Callback, вызываемый при изменении номера страницы */
  onPageChanged: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

Pagination.defaultProps = {
  current: 0,
  onPageChanged: page => {},
}

export default Pagination
