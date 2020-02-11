import React from 'react'
import PropTypes from 'prop-types'
import ProjectTag from './types/project-tag'
import NewFolder from './types/new-folder'
import ListCards from './types/list-cards'

const REFERENCES = {
  'project-tag': ProjectTag,
  'new-folder': NewFolder,
  'list-cards': ListCards,
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
