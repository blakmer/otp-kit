import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.css'
import RoundButton from '../RoundButton'
import Grid from '../Grid'

const RANGE_SIZE = 10
const { Visible, Hidden } = Grid

const Pagination = props => {
  const { total, current, onPageChanged, className } = props

  /**
   * @getRange - массив типа [мин значение, макс значение, разрыв слева, разрыв справа]
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

  const [pagingParams, setPagingParams] = useState(
    calculatePaging(current || 1)
  )

  const handlePageChange = page => {
    let params = calculatePaging(page)
    setPagingParams(params)
  }

  const handlePrev = () => {
    if (pagingParams.currentPage > 1) {
      let newPage = pagingParams.currentPage - 1
      handlePageChange(newPage)
      onPageChanged(newPage)
    }
  }
  const handleNext = () => {
    if (pagingParams.currentPage < total) {
      let newPage = pagingParams.currentPage + 1
      handlePageChange(newPage)
      onPageChanged(newPage)
    }
  }
  const handleUpToPage = page => {
    if (page !== pagingParams.currentPage) {
      handlePageChange(page)
      onPageChanged(page)
    }
  }
  const handlePrevMore = () => {
    let newPage =
      pagingParams.currentPage > RANGE_SIZE / 2
        ? pagingParams.currentPage - RANGE_SIZE / 2
        : 1
    handlePageChange(newPage)
    onPageChanged(newPage)
  }
  const handleNextMore = () => {
    let newPage =
      pagingParams.currentPage < total - RANGE_SIZE / 2
        ? pagingParams.currentPage + RANGE_SIZE / 2
        : total
    handlePageChange(pagingParams.currentPage + RANGE_SIZE / 2)
    onPageChanged(newPage)
  }

  return (
    <div className={classnames(styles.wrapper, className)}>
      <RoundButton
        key="prev"
        icon="arrow-left"
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
        key="next"
        icon="arrow-right"
        onClick={handleNext}
      />
    </div>
  )
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func,
  className: PropTypes.string,
}

Pagination.defaultProps = {
  onPageChanged: page => {},
}

export default Pagination
