import React from 'react'
import PropTypes from 'prop-types'
import classes from '../classes.module.css'

const diameter = Math.round(Math.PI * 175 * 2)
const getOffset = (val = 0) =>
  Math.round(((100 - Math.min(val, 100)) / 100) * diameter)

const getStrokeColor = progress => {
  if (progress <= 1) return 'text-disabled'
  if (progress > 1 && progress <= 10) return 'error'
  if (progress > 10 && progress <= 25) return 'highlighted'
  return 'primary'
}

const RoundProgress = props => {
  const { progress } = props
  if (progress < 0 || progress > 100) {
    console.warn('Props: progress must be a number between 0 and 100.')
    return null
  }
  const strokeDashoffset = getOffset(progress)
  const transition = `stroke-dashoffset 0.3s ease-out`

  return (
    <svg width={38} height={38} viewBox="-25 -25 400 400">
      <circle
        className={classes['bg-grey-1-stroke']}
        cx="175"
        cy="175"
        r="175"
        strokeWidth={10}
        fill="none"
      />
      <circle
        className={classes[getStrokeColor(progress) + '-stroke']}
        transform="rotate(-90 175 175)"
        cx="175"
        cy="175"
        r="175"
        strokeDasharray="1100"
        strokeWidth={50}
        strokeLinecap={'round'}
        fill="none"
        style={{ strokeDashoffset, transition }}
      />
      {progress < 100 ? (
        <text
          className={classes['text-primary-fill']}
          style={{
            font: 'bold 10rem Source Sans Pro Regular',
          }}
          x="175"
          y="175"
          textAnchor="middle"
          dominantBaseline="central">
          {progress}
        </text>
      ) : (
        <path
          className={classes['primary-stroke']}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          d="M15,1,5,10,1,5.035"
          transform="scale(10) translate(10, 12)"
        />
      )}
    </svg>
  )
}

RoundProgress.propTypes = {
  progress: PropTypes.number,
}

RoundProgress.defaultProps = {
  progress: 0,
}

export default RoundProgress
