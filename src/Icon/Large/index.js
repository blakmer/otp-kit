import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../index.module.css'
import classes from '../../classes.module.css'
import DocumentEmpty from './types/document-empty'
import AddNewApplication from './types/add-new-application'
import ArrivedLetter from './types/arrived-letter'
import Banknote from './types/banknote'
import Calendar from './types/calendar'
import FileSheet from './types/file-sheet'
import Letter from './types/letter'
import OfflineStore from './types/offline-store'
import SimCard from './types/sim-card'
import Wallet from './types/wallet'
import WebCard from './types/web-card'

const REFERENCES = {
  'document-empty': DocumentEmpty,
  'file-sheet': FileSheet,
  'add-new-application': AddNewApplication,
  'arrived-letter': ArrivedLetter,
  banknote: Banknote,
  calendar: Calendar,
  'file-sheet': FileSheet,
  letter: Letter,
  'offline-store': OfflineStore,
  'sim-card': SimCard,
  wallet: Wallet,
  'web-card': WebCard,
}

const Large = props => {
  const { type, fill, className, onClick, noGap } = props
  const SVG = REFERENCES[type]

  return SVG ? (
    <span
      className={classnames(!noGap && styles.large, styles.wrapper, className)}
      onClick={onClick}>
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

Large.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  noGap: PropTypes.bool,
}

Large.defaultProps = {
  fill: 'text-primary',
}

export default Large
