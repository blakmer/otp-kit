import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../index.module.css'
import { FILLS } from '../fills'
import Edit from './types/edit'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import HourGlass from './types/hourglass'
import Hammer from './types/hammer'
import Plus from './types/plus'
import Minus from './types/minus'
import Tick from './types/tick'
import Close from './types/close'
import Info from './types/info'
import Calendar from './types/calendar'
import Refresh from './types/refresh'
import Search from './types/search'
import AlertTriangle from './types/alert-trianlge'
import Bulb from './types/bulb'

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
  search: Search,
  'alert-triangle': AlertTriangle,
  bulb: Bulb,
}

const Medium = props => {
  const { type, fill, className } = props
  const SVG = REFERENCES[type]

  return SVG ? (
    <span className={classnames(styles.medium, styles.wrapper, className)}>
      {<SVG hexFill={FILLS[fill]} />}
    </span>
  ) : null
}

Medium.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.oneOf(Object.keys(FILLS)),
}

Medium.defaultProps = {
  fill: 'primary',
}

export default Medium
