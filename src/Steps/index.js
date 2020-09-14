import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Steps = props => {
  const {
    className,
    style,
    steps,
    currentStep,
    onChange,
    closeNextStepPerClick,
  } = props

  const handleChange = step => {
    let accept = true
    if (closeNextStepPerClick && currentStep <= step) {
      accept = false
    }
    if (onChange && accept) onChange({ step })
  }

  return (
    <section
      className={classnames(styles.pubStepContainer, className)}
      style={style}>
      <div className={styles.stepContainer}>
        {steps.map((i, k) => (
          <div
            className={classnames(
              styles.step,
              currentStep > k && styles.successStep,
              currentStep === k && styles.currentStep
            )}
            key={k}>
            <div className={classnames(styles.stepVerticalWrapper)}>
              <div
                onClick={() => handleChange(k)}
                className={classnames(styles.stepCircle)}>
                {k + 1}
              </div>
              <div className={classnames(styles.stepLine)}></div>
            </div>
            <div className={classnames(styles.stepTextWrapper)}>
              <div className={classnames(styles.stepTitle)}>{i.title}</div>
              <div
                onClick={() => handleChange(k)}
                className={classnames(styles.stepDescription)}>
                {i.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

Steps.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Список шагов */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      /** Заголовок шага */
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      /** Описание шага */
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ),
  /** Установка шага */
  currentStep: PropTypes.number,
  onChange: PropTypes.func,
  /** Запрет перехода на следующий шаг при клике на него */
  closeNextStepPerClick: PropTypes.bool,
}

Steps.defaultProps = {
  steps: [],
  currentStep: 0,
  closeNextStepPerClick: true,
}

export default Steps
