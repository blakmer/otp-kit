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

const REFERENCES = {
  edit: Edit,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
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
