import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Stepper = props => {
  return (
    <div className={styles.stepContainer}>
      <div className={classnames(styles.step, styles.successStep)}>
        <div className={classnames(styles.stepCircle)}>1</div>
        <div className={classnames(styles.stepTitle)}>Title</div>
        <div className={classnames(styles.stepDescription)}>Description</div>
      </div>
      <div className={classnames(styles.step, styles.currentStep)}>
        <div className={classnames(styles.stepCircle)}>2</div>
        <div className={classnames(styles.stepTitle)}>Title</div>
        <div className={classnames(styles.stepDescription)}>Description</div>
      </div>
      <div className={classnames(styles.step)}>
        <div className={classnames(styles.stepCircle)}>3</div>
        <div className={classnames(styles.stepTitle)}>Title</div>
        <div className={classnames(styles.stepDescription)}>Description</div>
      </div>
    </div>
  )
}

export default Stepper
