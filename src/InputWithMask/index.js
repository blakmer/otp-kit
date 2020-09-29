import React from 'react'
import { IMaskMixin } from 'react-imask'
import IMask from 'imask'
import Input from '../Input'

const InputWithMask = IMaskMixin(({ inputRef, ...props }) => {
  return <Input {...props} innerRef={inputRef} />
})

export default InputWithMask
