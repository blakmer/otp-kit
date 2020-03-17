#### ColorSelection Component

```js
import { useState } from 'react'
const [сolor, selectColor] = useState('')

;<div
  style={{
    backgroundColor: '#E2E6F0',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  }}>
  <ColorSelection
    selectColor={hex => {
      console.log(hex)
      selectColor(hex)
    }}
  />
</div>
```
