import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Visible, Hidden } from 'react-grid-system'

import styles from './index.module.css'

const Stepper = props => {
  const { steps, currentStep, onChange, closeNextStepPerClick } = props

  const handleChange = step => {
    let accept = true
    if (closeNextStepPerClick && currentStep <= step) {
      accept = false
    }
    if (onChange && accept) onChange({ step })
  }

  return (
    <section className={styles.pubStepContainer}>
      <div className={styles.stepContainer}>
        {steps.map((i, k) => (
          <div
            className={classnames(
              styles.step,
              currentStep > k && styles.successStep,
              currentStep === k && styles.currentStep
            )}
            key={k}>
            <div
              onClick={() => handleChange(k)}
              className={classnames(styles.stepCircle)}>
              {k + 1}
            </div>
            <Hidden xs sm>
              <div className={classnames(styles.stepTitle)}>{i.title}</div>
              <div
                onClick={() => handleChange(k)}
                className={classnames(styles.stepDescription)}>
                {i.description}
              </div>
            </Hidden>
          </div>
        ))}
      </div>
      <Visible xs sm>
        {steps
          .filter((i, k) => k === currentStep)
          .map(i => (
            <div key={i.title} className={classnames(styles.currentTitle)}>
              {i.title}
            </div>
          ))}
      </Visible>
    </section>
  )
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ),
  currentStep: PropTypes.number,
  onChange: PropTypes.func,
  closeNextStepPerClick: PropTypes.bool,
}

Stepper.defaultProps = {
  steps: [],
  currentStep: 0,
  closeNextStepPerClick: true,
}

export default Stepper
