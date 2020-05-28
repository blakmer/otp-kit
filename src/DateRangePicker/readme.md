### DateRangePicker

```js
import { useState } from 'react'

const [date, setDate] = useState(null)

;<div>
  <div style={{ marginBottom: '2rem' }}>
    <button onClick={() => setDate(['20-12-2000', '25-11-2025'])}>
      controlled testing
    </button>
  </div>
  <DateRangePicker
    value={date}
    onChangeDate={value => {
      console.log('outside:', value)
      setDate(value)
    }}
  />
</div>
```

### DateRangePicker with TimeRange

```js
import { useState } from 'react'

const startDate = '12-10-1993'
const endDate = '24-12-2020'

const [date, setDate] = useState([startDate, endDate])
const [time, setTime] = useState(['07:35', '22:20'])

;<div>
  <div style={{ marginBottom: '2rem' }}>
    <button onClick={() => {
    setDate(['20-12-2005', '25-11-2025']) 
    setTime(['05:30', '18:00']) 
}}>
      controlled testing
    </button>
  </div>
  <DateRangePicker
    value={date}
    onChangeDate={value => {
      console.log('date:', value)
      setDate(value)
    }}
    timeRangeOptions={{
        value: time,
        step: 30,
        onChange: value => setTime(value)
    }}
  />
</div>
```
