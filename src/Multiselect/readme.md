##### Uncontrolled Multiselect

```js
const items = [
    { title: 'Renault', value: 1 },
    { title: 'Peugeot', value: 2 },
    { title: 'Audi', value: 3 },
  ]

;<Multiselect items={items} onChange={e=>{console.log(e)}} block />
```

##### Uncontrolled Multiselect with initial selected items


```js
const items = [
    { title: 'Renault', value: 1 },
    { title: 'Peugeot', value: 2 },
    { title: 'Audi', value: 3 },
  ]

;<Multiselect items={items} initialSelected={[items[0], items[2]]} onChange={e=>{console.log(e)}} block />
```

##### Controlled Multiselect

```js
import React, {useState} from 'react'
const items = [
    { title: 'Renault', value: 1 },
    { title: 'Peugeot', value: 2 },
    { title: 'Audi', value: 3 },
  ]
const [selected, setSelected] = useState([])
const onRemoveClick=item=>{setSelected(selected.filter(e=>e.title!==item.title))}
const onItemSelect=(item, isSelected)=>{
  !isSelected ? setSelected([...selected, item]) : onRemoveClick(item)
}

;<Multiselect items={items} selected={selected} onRemoveClick={onRemoveClick} onItemSelect={onItemSelect} block />
```

