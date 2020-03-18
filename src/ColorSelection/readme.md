#### ColorSelection Component

```js
import { useState } from 'react'
const [color, setColor] = useState('')

;<div
  style={{
    backgroundColor: '#E2E6F0',
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
