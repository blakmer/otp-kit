import React from 'react'
import styles from './index.module.css'
import Grid from '../Grid'
import Pagination from '../Pagination'
import PropTypes from 'prop-types'
import classnames from 'classnames'

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
      <div
        className={classnames(item.clickAction && styles.pointer)}
        onClick={item.clickAction || undefined}>
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
      </div>
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
  /** Отображение компонента Pagination */
  pagination: PropTypes.shape({
    /** Общее число страниц */
    total: PropTypes.number.isRequired,
    /** Текущая страница */
    current: PropTypes.number.isRequired,
    /** Действие при изменении страницы */
    onPageChanged: PropTypes.func.isRequired,
  }),
  /** Перечень колонок */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      /** Функция для отрисовки данных внутри колонки */
      render: PropTypes.func,
      /** Сопоставление данных строки с названием колонки */
      dataIndex: PropTypes.string,
      /** Заголовок колонки */
      title: PropTypes.string,
      /** Размер колонки */
      size: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
      }),
      /** Отступ от колонки */
      offset: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
      }),
    })
  ),
  /** Перечень строк */
  data: PropTypes.arrayOf(PropTypes.object),
  /** Отображение заголовков */
  headers: PropTypes.bool,
}

List.defaultProps = {
  headers: true,
  columns: [],
  data: [],
}

export default List
