```js
import { useState } from 'react'

const [date, setDate] = useState(null)

;<div>
  <DatePicker
    value={date}
    onChangeDate={dateString => setDate(dateString)}
  />
  <div style={{ marginTop: '2rem' }}>
    <button onClick={() => setDate('28-02-1999')}>
      controlled testing
    </button>
  </div>
</div>
```
