import React, { Fragment, useState } from 'react'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import Years from './years'
import Months from './months'
import calendarApi from './api'

const DatePicker = () => {
  const service = new calendarApi()
  const [activeTab, setTab] = useState('year')

  const renderTab = () => {
    switch (activeTab) {
      case 'month':
        return <Months data={service.getMonths()} />
      case 'day':
        return <div>День</div>
      default:
        return <Years data={service.getYears()} />
    }
  }

  return (
    <Fragment>
      {/* input */}
      <div className={styles.wrapper}>
        <input type="text" className={styles.field} />
        <Icon
          type="datepicker"
          fill="green"
          size="medium"
          className={styles.icon}
        />
      </div>
      {/* picker body */}
      <div className={styles.picker} style={{ marginTop: '1rem' }}>
        <header className={styles.pickerHeader}>
          <div
            className={classnames(styles.pickerHeaderItem, {
              [styles.active]: activeTab === 'year',
            })}
            onClick={() => setTab('year')}>
            <span>2020</span>
          </div>
          <div
            className={classnames(styles.pickerHeaderItem, {
              [styles.active]: activeTab === 'month',
            })}
            onClick={() => setTab('month')}>
            <span>Февраль</span>
          </div>
          <div
            className={classnames(styles.pickerHeaderItem, {
              [styles.active]: activeTab === 'day',
            })}
            onClick={() => setTab('day')}>
            <span>07</span>
          </div>
        </header>
        <div className={styles.pickerBody}>{renderTab()}</div>
      </div>
    </Fragment>
  )
}

export default DatePicker
