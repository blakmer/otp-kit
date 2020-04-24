import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../classes.module.css'
import classnames from 'classnames'
import ProjectTag from './types/project-tag'
import NewFolder from './types/new-folder'
import ListCards from './types/list-cards'
import Check from './types/check'
import EmptyStateMachineLearning from './types/empty-state-machine-learning'
import ProjectToArchive from './types/project-to-archive'
import BasicPreferences from './types/basic-preferences'
import ImageUpload from './types/image-upload'
import EmptyStateFeather from './types/empty-state-feather'
import Trash from './types/trash'
import ErrorState from './types/error'
import ImageSms from './types/image-sms'
import BrokenRobot from './types/broken-robot'
import TerminalBook from './types/terminal-book'

const REFERENCES = {
  'project-tag': ProjectTag,
  'new-folder': NewFolder,
  'list-cards': ListCards,
  check: Check,
  error: ErrorState,
  'empty-state-machine-learning': EmptyStateMachineLearning,
  'project-to-archive': ProjectToArchive,
  'basic-preferences': BasicPreferences,
  'image-upload': ImageUpload,
  'empty-state-feather': EmptyStateFeather,
  trash: Trash,
  'image-sms': ImageSms,
  'broken-robot': BrokenRobot,
  'terminal-book': TerminalBook,
}

const ClipArt = props => {
  const { type, className, onClick, fill } = props
  const SVG = REFERENCES[type]

  return SVG ? (
    <span className={className} onClick={onClick}>
      {
        <SVG
          className={classnames(
            classes[`${fill}-stroke`],
            classes[`${fill}-fill`]
          )}
        />
      }
    </span>
  ) : null
}

ClipArt.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

ClipArt.defaultProps = {
  fill: 'text-secondary',
}

export default ClipArt
