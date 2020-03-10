import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Typography from '../Typography'
import Toggler from '../Toggler'
import Icon from '../Icon'

const data = [
  {
    bcg: styles.circleRed,
    selected: false,
    color: '#ff435a',
  },
  {
    bcg: styles.circlePastelRed,
    selected: false,
    color: '#dbb4c1',
  },
  {
    bcg: styles.circleLightPurple,
    selected: false,
    color: '#ab47bc',
  },
  {
    bcg: styles.circlePastelLightPurple,
    selected: false,
    color: '#cf98d9',
  },
  {
    bcg: styles.circlePurple,
    selected: false,
    color: '#650c90',
  },
  {
    bcg: styles.circlePastelPurple,
    selected: false,
    color: '#d1bcdc',
  },
  {
    bcg: styles.circleBlue,
    selected: false,
    color: '#1b82e3',
  },
  {
    bcg: styles.circlePastelBlue,
    selected: false,
    color: '#dbf4fa',
  },
  {
    bcg: styles.circleAqua,
    selected: false,
    color: '#1bbc9b',
  },
  {
    bcg: styles.circlePastelAqua,
    selected: false,
    color: '#84bdb1',
  },
  {
    bcg: styles.circleGreen,
    selected: false,
    color: '#52ae30',
  },
  {
    bcg: styles.circlePastelGreen,
    selected: false,
    color: '#a7cebf',
  },
  {
    bcg: styles.circleAcidGreen,
    selected: false,
    color: '#7ed021',
  },
  {
    bcg: styles.circlePastelAcidGreen,
    selected: false,
    color: '#aad17d',
  },
  {
    bcg: styles.circleYellow,
    selected: false,
    color: '#ffcc00',
  },
  {
    bcg: styles.circlePastelYellow,
    selected: false,
    color: '#e9c597',
  },
  {
    bcg: styles.circleOrange,
    selected: false,
    color: '#ff6600',
  },
  {
    bcg: styles.circlePastelOrange,
    selected: false,
    color: '#f6ae8b',
  },
]

const ColorSelection = props => {
  const { className, style } = props

  const [circles, setCircles] = useState(data)
  const [сolor, selectColor] = useState('') // ?
  const [visibility, setVisibility] = useState(true)
  const [applying, setApplying] = useState(false)
  const [value, setValue] = useState('')

  const onToggleColor = index => {
    let newCircles = [...circles]

    if (circles.some(item => item.selected) && !circles[index].selected) {
      newCircles = circles.map(item => {
        return { ...item, selected: false }
      })
    }

    newCircles[index].selected = !newCircles[index].selected

    setCircles(newCircles)
    selectColor(newCircles[index].color) // ?
    setApplying(false)
  }

  const onApplyHEX = () => {
    if (value.trim()) {
      const newCircles = [...circles].map(circle => ({
        ...circle,
        selected: false,
      }))

      setApplying(!applying)
      selectColor('#' + value) // ?
      setCircles(newCircles)
    }
  }

  return (
    <div className={classnames(styles.wrapper, className)} style={style}>
      <Typography.Text>Основные цвета</Typography.Text>
      <div className={styles.colors}>
        {circles.map((circle, index) => {
          return (
            <span
              className={classnames(styles.circle, circle.bcg)}
              key={index}
              onClick={() => onToggleColor(index)}>
              {circle.selected && <Icon.Medium type="tick" fill="inverse" />}
            </span>
          )
        })}
      </div>
      <div className={styles.divider} />
      <div className={styles.customColorTitle}>
        <Typography.Text color="primary">Произвольный цвет</Typography.Text>
        <Toggler
          id="custom-color"
          checked={visibility}
          onChange={() => {
            setVisibility(!visibility)
            setApplying(false)
            setValue('')
          }}
        />
      </div>
      {visibility && (
        <div className={styles.inputWrapper}>
          <div className={styles.inputPrefix} onClick={onApplyHEX}>
            <span
              className={classnames(styles.inputPrefixCircle, {
                [styles.inputPrefixCircleEmpty]: !applying,
              })}
              style={{
                backgroundColor: applying && '#' + value,
              }}>
              {applying && <Icon.Small type="tick" fill="inverse" />}
            </span>
            <span className={styles.inputPrefixText}>HEX #</span>
          </div>
          <input
            type="text"
            className={styles.input}
            value={value}
            placeholder="Введите номер цвета"
            onChange={event => setValue(event.target.value)}
            disabled={applying}
          />
        </div>
      )}
    </div>
  )
}

ColorSelection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

export default ColorSelection
