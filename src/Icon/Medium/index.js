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
import Hamburger from './types/hamburger'
import Car from './types/car'
import AnalyticsPie from './types/analytics-pie'
import AlarmBell from './types/alarm-bell'
import Profile from './types/profile'
import PowerOff from './types/power-off'
import Gear from './types/gear'
import DocsTagEditor from './types/docs-tag-editor'
import MachineLearning from './types/machine-learning'
import Trash from './types/trash'
import Folder from './types/folder'
import Photo from './types/photo'
import Tag from './types/tag'
import DocumentChecked from './types/document-checked'
import DocumentEmpty from './types/document-empty'
import DocumentWarning from './types/document-warning'
import DocumentIncorrect from './types/document-incorrect'

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
  hamburger: Hamburger,
  car: Car,
  'analytics-pie': AnalyticsPie,
  'alarm-bell': AlarmBell,
  profile: Profile,
  'power-off': PowerOff,
  gear: Gear,
  trash: Trash,

  'docs-tag-editor': DocsTagEditor,
  'machine-learning': MachineLearning,
  folder: Folder,
  photo: Photo,
  tag: Tag,
  'document-checked': DocumentChecked,
  'document-empty': DocumentEmpty,
  'document-warning': DocumentWarning,
  'document-incorrect': DocumentIncorrect,
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
