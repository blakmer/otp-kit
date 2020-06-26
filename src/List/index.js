import React from 'react'
import styles from './index.module.css'
import Grid from '../Grid'
import Pagination from '../Pagination'
import PropTypes from 'prop-types'

const { Container, Row, Col } = Grid

const List = props => {
  const { className, style, columns, data, pagination, headers } = props

  const renderHeaders = columns.map((column, idx) => (
    <Col
      className={styles.headerCol}
      style={{
        justifyContent: column.align === 'right' ? 'flex-end' : 'flex-start',
      }}
      key={idx}
      offset={{ ...column.offset }}
      {...column.size}>
      <span>{column.title}</span>
    </Col>
  ))

  const renderItems = data.map((item, idx) => (
    <li className={styles.item} key={idx}>
      <Row>
        {columns.map((column, idx) => {
          const { dataIndex } = column

          return (
            <Col
              className={styles.col}
              style={{
                justifyContent:
                  column.align === 'right' ? 'flex-end' : 'flex-start',
              }}
              key={idx}
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
    <Container className={className} style={style}>
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
  className: PropTypes.string,
  style: PropTypes.object,
  pagination: PropTypes.shape({
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func.isRequired,
  }),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      render: PropTypes.func,
      dataIndex: PropTypes.string,
      title: PropTypes.string,
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
  data: PropTypes.arrayOf(PropTypes.object),
}

List.defaultProps = {
  headers: true,
  columns: [],
  data: [],
}

export default List
