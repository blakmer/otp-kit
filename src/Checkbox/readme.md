```js
const mt = 10

;<div>
  <div style={{marginTop: mt}}>
    <Checkbox id="first" defaultChecked>
      Checkbox
    </Checkbox>
  </div>
  <div style={{marginTop: mt}}>
    <Checkbox disabled id="second">
      Disabled
    </Checkbox>
  </div>
  <div style={{marginTop: mt}}>
    <Checkbox id="third" defaultChecked fill='chart-blue'>
      Chart blue
    </Checkbox>
  </div>
  <div style={{marginTop: mt}}>
    <Checkbox id="fourth" defaultChecked fill='chart-yellow'>
      Chart yellow
    </Checkbox>
  </div>
<div style={{marginTop: mt}}>
    <Checkbox id="fifth" defaultChecked fill='chart-purple'>
      Chart purple
    </Checkbox>
  </div>
</div>
```

```js
import React, { useState } from 'react'
const [checked, setChecked] = useState(undefined)
;<Checkbox id="A" 
indeterminate={(checked===undefined)}
checked={checked}
onChange={()=>{setChecked(!checked)}}
>
  Indeterminate Checkbox
</Checkbox>
```