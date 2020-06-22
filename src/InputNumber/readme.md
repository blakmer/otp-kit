#### Uncontrolled InputNumber
```js
;<InputNumber onChange={(e)=>{console.log(e)}}/>
```

#### Controlled InputNumber
```js
import React, {useState} from 'react'
const min = 0, max = 20;

const toNumber = number => {
  let n = number
  if (typeof n === 'string') {
    n = n.replace(/[^0-9]*/g, '')
  }
  let result = isNaN(parseInt(n)) ? '' : parseInt(n)
  return result.toString()
}
const checkRange = num => {
    if (num==='') {
        return num;
    }
    return +num < min ? min : +num > max ? max : +num
}

const [val, setVal] = useState('')
const arrowsConfig = {
    upClick: ()=>{setVal(checkRange(+val+1))},
    downClick: ()=>{setVal(checkRange(+val-1))}
}
const handleChange = (value) => {setVal(checkRange(toNumber(value)))}
;<InputNumber value={val} onChange={handleChange} arrowsConfig={arrowsConfig} />
```