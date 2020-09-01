#### Modal window

```js
import { Fragment, useState } from 'react'
import Button from '../Button'
import Typography from '../Typography'
const [open, setOpen] = useState(false)

const okConfig = {
  children: 'OK',
  onClick: () => {setOpen(false)}
}
const cancelConfig = {
  children: 'Cancel',
  onClick: () => {setOpen(false)}
}

;<Fragment>
  <Button onClick={() => setOpen(true)}>Show</Button>
  <Modal
    header={<Typography.Heading level={2}>Header</Typography.Heading>}
    body="Body of component"
    size={{
      xs: 12,
      sm: 9,
      md: 9,
    }}
    okConfig={okConfig}
    cancelConfig={cancelConfig}
    closable
    bgColor="white"
    isOpen={open}
    onClose={() => {
      setOpen(false)
    }}
  />
</Fragment>
```
