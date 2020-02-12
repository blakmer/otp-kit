import React from 'react'
import PropTypes from 'prop-types'
import styles from '../index.module.css'
import classnames from 'classnames'
import { FILLS } from '../fills'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import Calendar from './types/calendar'
import Edit from './types/edit'
import HourGlass from './types/hourglass'
import Hammer from './types/hammer'
import Plus from './types/plus'
import Minus from './types/minus'
import Tick from './types/tick'
import Close from './types/close'
import Info from './types/info'
import Refresh from './types/refresh'
import HouseChimney from './types/house-chimney'

const REFERENCES = {
  edit: Edit,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  hourglass: HourGlass,
  hammer: Hammer,
  plus: Plus,
  minus: Minus,
  tick: Tick,
  close: Close,
  info: Info,
  calendar: Calendar,
  refresh: Refresh,
  'house-chimney': HouseChimney,
}

const Small = props => {
  const { type, fill, className } = props
  const SVG = REFERENCES[type]

  return SVG ? (
    <span className={classnames(styles.small, styles.wrapper, className)}>
      {<SVG hexFill={FILLS[fill]} />}
    </span>
  ) : null
}

Small.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.oneOf(Object.keys(FILLS)),
}

Small.defaultProps = {
  fill: 'primary',
}

export default Small
