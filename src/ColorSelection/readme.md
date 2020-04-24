#### ColorSelection Component

```js
import { useState } from 'react'
import classes from '../classes.module.css'
const [color, setColor] = useState('')

;<div
  className={classes['bg-grey-2-bg']}
  style={{
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  }}>
  <ColorSelection
    value={color}
    onChange={hex => {
      console.log(hex)
      setColor(hex)
    }}
  />
</div>
```
