import React from 'react'
import PropTypes from 'prop-types'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import classnames from 'classnames'
import styles from '../index.module.css'
import DatePicker from './types/datepicker'
import { FILLS } from '../fills'

const REFERENCES = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  datepicker: DatePicker,
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
