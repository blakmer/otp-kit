```js
import { useState, Fragment } from 'react'

const [timeRange, setTimeRange] = useState(['07:51', '22:08'])

;
<Fragment>
    <button onClick={() => setTimeRange(['09:25', '20:30'])}>Controlled testing</button>
    <TimeRange
        step={1}
        value={timeRange}
        onChange={value => {
            console.log(value)
            setTimeRange(value)       
        }}
        minInterval={2}
        withBubbles
    />
</Fragment>
```