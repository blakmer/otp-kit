#### SearchInput component
```js
;<SearchInput onEnter={e=>{console.log(e)}} block />
```

#### Controlled SearchInput component
```js
import React, {useState} from 'react'
const [val, setVal] = useState('value')

;<SearchInput value={val} onRemove={e=>{setVal('')}} onChange={e=>setVal(e.target.value)} onEnter={e=>{console.log(e)}} block />
```

#### Compact SearchInput
```js
;<SearchInput compact animation="left" onEnter={e=>{console.log(e)}} block />
```