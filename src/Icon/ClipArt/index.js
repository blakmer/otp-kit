import React from 'react'
import PropTypes from 'prop-types'
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
}

const ClipArt = props => {
  const { type, className } = props
  const SVG = REFERENCES[type]

  return SVG ? <span className={className}>{<SVG />}</span> : null
}

ClipArt.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ClipArt
