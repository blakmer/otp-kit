import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { COLORS } from '../docs'

const COLOR_MAP = {
  0: COLORS.TEXT_DISABLED,
  5: COLORS.ERROR,
  20: COLORS.HIGHLIGHTED,
  50: COLORS.ALERT,
  100: COLORS.PRIMARY,
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
  const barCanvasHeight = height - 52
  const canvasPercent = barCanvasHeight / 100
  const percent = maxValue / 100

  return (
    <svg width={'100%'} height={height}>
      {data.map(({ value, title }, k) => {
        const bar = {
          y1: height - 20 - (value / percent) * canvasPercent,
          y2: height - 20,
        }
        const barEmpty = {
          y1: 32,
          y2: bar.y1 - 6,
        }

        const stroke = getStrokeColor(value / percent)

        const x = `${(100 / countBars) * (k + 0.5)}%`

        return (
          <Fragment key={k}>
            <text
              x={x}
              y={20}
              style={{
                stroke: COLORS.TEXT_SECONDARY,
                fontSize: 14,
              }}
              textAnchor="middle">
              {title}
            </text>
            <line
              x1={x}
              x2={x}
              y1={barEmpty.y1}
              y2={barEmpty.y2}
              style={{
                stroke: COLORS.BG_GREY_1,
                strokeWidth: 1,
              }}
              strokeLinecap="round"
            />

            <line
              x1={x}
              x2={x}
              y1={bar.y1}
              y2={bar.y2}
              style={{
                stroke: stroke,
                strokeWidth: 8,
              }}
              strokeLinecap="round"
            />

            <text
              x={x}
              y={height}
              style={{
                stroke: COLORS.TEXT_PRIMARY,
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
  data: [
    { title: 'A', value: 100 },
    { title: 'B', value: 200 },
    { title: 'C', value: 49 },
    { title: 'D', value: 39 },
    { title: 'BD', value: 24 },
    { title: 'CS', value: 293 },
    { title: 'AA', value: 18 },
    { title: 'BSS', value: 2 },
    { title: 'Z', value: 0 },
    { title: 'CCD', value: 252 },
    { title: 'D', value: 39 },
    { title: 'BD', value: 24 },
  ],
  colorMap: COLOR_MAP,
  height: 224,
}

export default BarChart
