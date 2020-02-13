import React from 'react'
import styles from './index.module.css'
import Grid from '../Grid'
import Pagination from '../Pagination'
import PropTypes from 'prop-types'

const { Container, Row, Col } = Grid

const List = props => {
  const { columns, data, pagination, headers } = props

  const renderHeaders = columns.map(column => (
    <Col
      className={styles.headerCol}
      style={{
        justifyContent: column.align === 'right' ? 'flex-end' : 'flex-start',
      }}
      key={column.key}
      offset={{ ...column.offset }}
      {...column.size}>
      <span>{column.title}</span>
    </Col>
  ))

  const renderItems = data.map(item => (
    <li className={styles.item} key={item.key}>
      <Row>
        {columns.map(column => {
          const { dataIndex } = column

          return (
            <Col
              className={styles.col}
              style={{
                justifyContent:
                  column.align === 'right' ? 'flex-end' : 'flex-start',
              }}
              key={column.key}
              offset={{ ...column.offset }}
              {...column.size}>
              {column.hasOwnProperty('render') ? (
                column.render(item[dataIndex], item)
              ) : (
                <span>{item[dataIndex]}</span>
              )}
            </Col>
          )
        })}
      </Row>
    </li>
  ))

  return (
    <Container>
      {headers && (
        <header className={styles.header}>
          <Row>{renderHeaders}</Row>
        </header>
      )}
      <ul className={styles.list}>{renderItems}</ul>
      {pagination && (
        <footer className={styles.pag}>
          <Pagination {...pagination} />
        </footer>
      )}
    </Container>
  )
}

List.propTypes = {
  pagination: PropTypes.shape({
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func.isRequired,
  }),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataIndex: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      size: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
      }),
      offset: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
      }),
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
}

List.defaultProps = {
  headers: true,
}

export default List
