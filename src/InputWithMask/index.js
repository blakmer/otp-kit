import React from 'react'
import PropTypes from 'prop-types'
import { IMaskMixin } from 'react-imask'
import IMask from 'imask'
import Input from '../Input'

const InputWithMask = IMaskMixin(
  ({ inputRef, inputProps, simple, ...props }) => {
    return simple ? (
      <input {...props} {...inputProps} ref={inputRef} />
    ) : (
      <Input {...props} {...inputProps} innerRef={inputRef} />
    )
  }
)

InputWithMask.propTypes = {
  value: PropTypes.string.isRequired,
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
    PropTypes.oneOf([Date, Number, IMask.Masked]),
    PropTypes.instanceOf(IMask.Masked),
  ]),
  /** Передается вместо onChange */
  onAccept: PropTypes.func.isRequired,
}

export default InputWithMask
