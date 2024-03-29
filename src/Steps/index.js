import React from 'react'
import PropTypes, { string, bool } from 'prop-types'
import classnames from 'classnames'
import Icon from '../Icon'
import Typography from '../Typography'

import styles from './index.module.css'

const Steps = props => {
  const {
    className,
    style,
    steps,
    currentStep,
    markSuccessfulWithTick,
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
              currentStep === k && styles.currentStep,
              !closeNextStepPerClick && styles.interactive
            )}
            key={k}>
            <div className={classnames(styles.stepVerticalWrapper)}>
              <div
                onClick={() => handleChange(k)}
                className={classnames(styles.stepCircle)}>
                <div className={classnames(styles.stepCircleInner)}>
                  {currentStep > k && markSuccessfulWithTick ? (
                    <Icon.Medium fill="white" type="tick" />
                  ) : (
                    k + 1
                  )}
                </div>
              </div>
              <div className={classnames(styles.stepLine)}></div>
            </div>
            <div className={classnames(styles.stepTextWrapper)}>
              <Typography.Paragraph
                highlighted
                className={classnames(styles.stepTitle)}
                onClick={() => handleChange(k)}>
                {i.title}
              </Typography.Paragraph>
              <Typography.Text
                size="small"
                className={classnames(styles.stepDescription)}>
                {i.description}
              </Typography.Text>
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
  /** Маркер успешных шагов - галочка */
  markSuccessfulWithTick: PropTypes.bool,
  onChange: PropTypes.func,
  /** Запрет перехода на следующий шаг при клике на него */
  closeNextStepPerClick: PropTypes.bool,
}

Steps.defaultProps = {
  steps: [],
  currentStep: 0,
  closeNextStepPerClick: true,
  markSuccessfulWithTick: false,
}

export default Steps
