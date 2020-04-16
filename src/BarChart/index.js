import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classes from '../classes.css'

const COLOR_MAP = {
  0: 'text-disabled',
  5: 'error',
  20: 'highlighted',
  50: 'alert',
  100: 'primary',
}

const getStrokeColor = percent => {
  if (percent === 0) return COLOR_MAP[0]
  if (percent > 0 && percent <= 5) return COLOR_MAP[5]
  if (percent > 5 && percent <= 20) return COLOR_MAP[20]
  if (percent > 20 && percent <= 50) return COLOR_MAP[50]
  return COLOR_MAP[100]
}

const BarChart = props => {
  const { data, colorMap, height } = props
  const values = data.map(i => i.value)
  const maxValue = Math.max.apply(Math, values)
  const countBars = data.length
  const barCanvasHeight = height - 56
  const canvasPercent = barCanvasHeight / 100
  const percent = maxValue / 100

  return (
    <svg width={'100%'} height={height}>
      {data.map(({ value, title }, k) => {
        const bar = {
          y1: height - 24 - (value / percent) * canvasPercent,
          y2: height - 24,
        }
        const barEmpty = {
          y1: 32,
          y2: bar.y1 - 8,
        }

        const stroke = getStrokeColor(value / percent)

        const x = `${(100 / countBars) * (k + 0.5)}%`

        return (
          <Fragment key={k}>
            <text
              className={classes['text-secondary-stroke']}
              x={x}
              y={20}
              style={{
                fontSize: 14,
              }}
              textAnchor="middle">
              {title}
            </text>
            <line
              className={classes['bg-grey-1-stroke']}
              x1={x}
              x2={x}
              y1={barEmpty.y1}
              y2={barEmpty.y2}
              style={{
                strokeWidth: 1,
              }}
              strokeLinecap="round"
            />

            <line
              className={classes[`${stroke}-stroke`]}
              x1={x}
              x2={x}
              y1={bar.y1}
              y2={bar.y2}
              style={{
                strokeWidth: 8,
              }}
              strokeLinecap="round"
            />

            <text
              className={classes['text-primary-stroke']}
              x={x}
              y={height}
              style={{
                fontSize: 14,
              }}
              textAnchor="middle">
              {value}
            </text>
          </Fragment>
        )
      })}
    </svg>
  )
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, value: PropTypes.number })
  ),
  colorMap: PropTypes.shape({
    0: PropTypes.string,
    1: PropTypes.string,
    10: PropTypes.string,
    50: PropTypes.string,
    100: PropTypes.string,
  }),
  /** Hegiht of canvas (px) */
  height: PropTypes.number,
}

BarChart.defaultProps = {
  data: [],
  colorMap: COLOR_MAP,
  height: 224,
}

export default BarChart
