import React from 'react'
import { IMaskMixin } from 'react-imask'
import Input from '../Input'

const InputWithMask = IMaskMixin(({ inputRef, ...props }) => {
  return <Input {...props} innerRef={inputRef} />
})

export default InputWithMask
