#### DropdownInput component

```js
import React, {useState} from 'react'
const items = ['OOO', 'OAO', 'ИП']
const [active, setActive] = useState(items[0])

;<DropdownInput
    dropdownItems={items}
    onDropdownChange={e=>{setActive(e)}}
    dropdownValue={active}
    defaultValue={"Компания"}
/>
```