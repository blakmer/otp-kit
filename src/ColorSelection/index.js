import React, { useState, useEffect } from 'react'
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
  const { className, style, onChange, value } = props

  const [circles, setCircles] = useState(data)
  const [flag, setFlag] = useState(false)
  const [input, setInput] = useState(value)
  const [accept, setAccept] = useState(false)

  useEffect(() => {
    if (value === '') {
      setInput(value)
      setCircles(emptyCircles)
      setAccept(false)
    }
  }, [value])

  const emptyCircles = [...circles].map(circle => ({
    ...circle,
    selected: false,
  }))

  const renderCircles = () => {
    return circles.map((circle, index) => {
      return (
        <span
          className={styles.circle}
          style={{ backgroundColor: circle.color }}
          key={index}
          onClick={() => onToggleColor(index)}>
          {circle.selected && <Icon.Medium type="tick" fill="inverse" />}
        </span>
      )
    })
  }

  const onToggleColor = index => {
    let newCircles = [...circles]

    if (circles.some(item => item.selected) && !circles[index].selected) {
      newCircles = circles.map(item => {
        return { ...item, selected: false }
      })
    }

    newCircles[index].selected = !newCircles[index].selected

    setCircles(newCircles)
    setFlag(false)
    onChange(newCircles[index].color)
  }

  const onChangeToggler = () => {
    setFlag(!flag)
    setCircles(emptyCircles)
    setInput('')
    onChange('')
    setAccept(false)
  }

  const onAcceptHEX = color => {
    if (color.length === 6 && !accept) {
      setAccept(true)
      onChange('#' + color)
    }

    if (accept) {
      setAccept(false)
      onChange('')
    }
  }

  const onChangeInput = event => {
    const transformedValue = event.target.value.replace(/\_/g, '')

    setInput(transformedValue)
  }

  const onKeyAcceptHEX = event => {
    if (event.key === 'Enter') {
      onAcceptHEX(input)
    }
  }

  return (
    <div className={classnames(styles.wrapper, className)} style={style}>
      <Typography.Text>Основные цвета</Typography.Text>
      <div className={styles.colors}>{renderCircles()}</div>
      <div className={styles.divider} />
      <div className={styles.customColorTitle}>
        <Typography.Text color="primary">Произвольный цвет</Typography.Text>
        <Toggler checked={flag} onChange={onChangeToggler} />
      </div>
      <div
        className={classnames(styles.inputWrapper, {
          [styles.disabled]: !flag,
        })}>
        <div
          className={styles.inputPrefix}
          onClick={() => onAcceptHEX(input)}
          style={{
            pointerEvents: !flag && 'none',
            cursor: input.length < 6 && 'not-allowed',
          }}>
          <span
            className={classnames(styles.inputPrefixCircle, {
              [styles.inputPrefixCircleEmpty]: !accept,
            })}
            style={{
              backgroundColor: accept && flag && value,
            }}>
            {input.length === 6 && <Icon.Small type="tick" fill="inverse" />}
          </span>
          <span className={styles.inputPrefixText}>HEX #</span>
        </div>
        <InputMask
          formatChars={{ H: '[0-9A-Fa-f]' }}
          mask="HHHHHH"
          type="text"
          className={classnames(styles.input, { [styles.notAllowed]: accept })}
          value={flag && input}
          placeholder="Введите номер цвета"
          onChange={onChangeInput}
          onKeyPress={onKeyAcceptHEX}
          disabled={!flag}
          readOnly={accept}
        />
      </div>
    </div>
  )
}

ColorSelection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ColorSelection
