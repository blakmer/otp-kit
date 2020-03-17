import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import styles from './index.module.css'
import classnames from 'classnames'
import Typography from '../Typography'
import Toggler from '../Toggler'
import Icon from '../Icon'

const data = [
  {
    selected: false,
    color: '#ff435a',
  },
  {
    selected: false,
    color: '#dbb4c1',
  },
  {
    selected: false,
    color: '#ab47bc',
  },
  {
    selected: false,
    color: '#cf98d9',
  },
  {
    selected: false,
    color: '#650c90',
  },
  {
    selected: false,
    color: '#d1bcdc',
  },
  {
    selected: false,
    color: '#1b82e3',
  },
  {
    selected: false,
    color: '#dbf4fa',
  },
  {
    selected: false,
    color: '#1bbc9b',
  },
  {
    selected: false,
    color: '#84bdb1',
  },
  {
    selected: false,
    color: '#52ae30',
  },
  {
    selected: false,
    color: '#a7cebf',
  },
  {
    selected: false,
    color: '#7ed021',
  },
  {
    selected: false,
    color: '#aad17d',
  },
  {
    selected: false,
    color: '#ffcc00',
  },
  {
    selected: false,
    color: '#e9c597',
  },
  {
    selected: false,
    color: '#ff6600',
  },
  {
    selected: false,
    color: '#f6ae8b',
  },
]

const ColorSelection = props => {
  const { className, style, selectColor } = props

  const [circles, setCircles] = useState(data)
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
    selectColor(newCircles[index].color)
    setApplying(false)
  }

  const onApplyHEX = () => {
    if (value.trim()) {
      const newCircles = [...circles].map(circle => ({
        ...circle,
        selected: false,
      }))

      setApplying(!applying)

      if (!applying) {
        selectColor('#' + value)
      }

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
              className={styles.circle}
              style={{ backgroundColor: circle.color }}
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
          <InputMask
            formatChars={{ H: '[0-9A-f]' }}
            mask="HHHHHH"
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
  selectColor: PropTypes.func.isRequired,
}

export default ColorSelection
