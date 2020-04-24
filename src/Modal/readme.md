#### Modal window

```js
import { Fragment, useState } from 'react'
import Button from '../Button'
const [open, setOpen] = useState(false)

const okConfig = {
  children: 'ok',
  onClick: () => {setOpen(false)}
}
const cancelConfig = {
  children: 'cancel',
  onClick: () => {setOpen(false)}
}

;<Fragment>
  <Button onClick={() => setOpen(true)}>Show</Button>
  <Modal
    header="Header"
    body="Body of component"
    size={{
      xs: 12,
      sm: 9,
      md: 6,
    }}
    okConfig={okConfig}
    cancelConfig={cancelConfig}
    closable
    isOpen={open}
    onClose={() => {
      setOpen(false)
    }}
  />
</Fragment>
```
