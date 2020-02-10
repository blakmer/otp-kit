#### Modal window

```js
import { Fragment, useState } from 'react'
import Button from '../Button'
const [open, setOpen] = useState(false)
;<Fragment>
  <Button onClick={() => setOpen(true)}>Show</Button>
  <Modal
    header="Header"
    body="Body of component"
    onOk={() => {
      setOpen(false)
    }}
    closable
    isOpen={open}
    onClose={() => {
      setOpen(false)
    }}
    onCancel={() => {
      setOpen(false)
    }}
  />
</Fragment>
```
