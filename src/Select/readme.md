##### Controlled select

```js
import { useState } from 'react'
import Grid from '../Grid'
import Button from '../Button'
const [a, set] = useState({ title: 'one', value: 1 })
const { Row, Col } = Grid
;<Row align={'center'}>
  <Col md={8}>
    <Select
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
        { title: 'tree', value: 3 },
        { title: 'one', value: 4 },
        { title: 'two', value: 5 },
        { title: 'tree', value: 6 },
        { title: 'one', value: 7 },
        { title: 'two', value: 8 },
      ]}
      value={a}
      onChange={val => set(val)}
      block
    />
  </Col>
  <Col md={4}>
    <Button size="small" onClick={() => set({ title: 'two', value: 2 })}>reset to two</Button>
  </Col>
</Row>
```

##### Uncontrolled select

```js
import Grid from '../Grid'
const { Row, Col } = Grid
;<Row>
  <Col md={8}>
    <Select
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
      ]}
      defaultValue={{ title: 'one', value: 1 }}
      onChange={val => console.log(val)}
    />
  </Col>
</Row>
```

##### States of select

```js
import Grid from '../Grid'
const { Row, Col } = Grid
;<Row>
  <Col md={8}>
    <Select
      status="error"
      listDirection="top"
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
      ]}
      onChange={val => console.log(val)}
    />
  </Col>
  <Col md={8}>
    <Select
      status="warning"
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
      ]}
      onChange={val => console.log(val)}
    />
  </Col>
  <Col md={8}>
    <Select
      status="disabled"
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
      ]}
      onChange={val => console.log(val)}
    />
  </Col>
</Row>
```

##### Select fits to its parent width
```js
;<Select
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
  ]}
  onChange={val => console.log(val)}
  block
/>
```

##### Select with custom menu

```js
import Grid from '../Grid'
import Button from '../Button'
const { Row, Col } = Grid
const style = {display: 'flex', justifyContent: 'center'}

;<Row align="center">
  <Col md={8}>
    <Select
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
      ]}
      onChange={val => console.log(val)}
      block
      renderMenu={menu=>(<div><div style={style}>Custom render of Menu</div> {menu} <div style={style}><Button size="small">+ Add Item</Button></div></div>)}
    />
  </Col>
</Row>
```

##### With Infinite Scroll

```js
import React, {useState} from 'react'
import Grid from '../Grid'
const {Row, Col } = Grid

const buildItems = (page) => {
  const pg = page * 15
  const els = []
    for (let i = pg; i < pg+15; i++) {
      els.push({title: `Элемент-${i}`, value: i})
    }
    return els
  }

const [items, setItems] = useState(buildItems(0))

const loadMore = page => {
          console.log(`loading page ${page} ...`)
          setTimeout(() => {
            const newEls = buildItems(page)
            setItems(items.concat(newEls))
          }, 3000)
        }

;<Row align="center">
  <Col md={8}>
    <Select
      items={items}
      onChange={val => console.log(val)}
      loadMore={loadMore}
      isInfiniteLoading={true}
      initialLoad={true}
      hasMore={true}
      block
    />
  </Col>
</Row>
```

##### Combobox
```js
import React, {useState} from 'react'
import Grid from '../Grid'
const { Row, Col } = Grid

const elements = [
          { title: 'Первый', value: 1 },
          { title: 'Второй', value: 2 },
          { title: 'Третий', value: 3 },
          { title: 'Четвёртый', value: 4 },
          { title: 'Пятый', value: 5 },
          { title: 'Шестой', value: 6 },
          { title: 'Седьмой', value: 7 },
          { title: 'Восьмой', value: 8 },
        ]

const [items, setItems] = useState(elements)
const [search, setSearch] = useState(undefined)
const filterItems = val => elements.filter(e => e.title.toLowerCase().indexOf(val.toLowerCase()) >= 0)

;<Row align="center">
  <Col md={8}>
    <Select
      items={items}
      showSearch
      onChange={e=>{console.log(e)}}
      highlight={search}
      onSearchChange={value => {
        setSearch(value)
        setItems(filterItems(value))
      }}
      block
    />
  </Col>
</Row>
```

##### Combobox with input field
```js
import React, {useState} from 'react'
import Grid from '../Grid'
const { Row, Col } = Grid

const elements = [
          { title: 'First', value: 1 },
          { title: 'Second', value: 2 },
          { title: 'Third', value: 3 },
        ]

const [items, setItems] = useState(elements)
const [search, setSearch] = useState(undefined)
const filterItems = val => elements.filter(e => e.title.toLowerCase().indexOf(val.toLowerCase()) >= 0)

;<Row align="center">
  <Col md={8}>
    <Select
      items={items}
      maskProps={{mask: /^.{0,17}$/}}
      showSearch
      isSearchInputChange
      onSearchChange={val => console.log('dsa', val)}
      // onSearchChange={val => setItems(filterItems(val))}
      onChange={e=>{console.log('e', e)}}
      block
    />
  </Col>
</Row>
```

##### With groups

```js
import Grid from '../Grid'
const { Row, Col } = Grid

const items = [
    {group: 'group-1', items: [
      {title: 'item1', value: 1},
      {title: 'item2', value: 2}
      ]},
    {group: 'group-2', closable: true, items: [
      {title: 'item3', value: 3},
      {title: 'item4', value: 4}
    ]},
    {group: 'group-3', closable: true, expanded: true, items: [
      {title: 'item3', value: 5},
      {title: 'item4', value: 6}
    ]},
    {group: 'group-4', items: [
      {title: 'item3', value: 7},
      {title: 'item4', value: 8}
    ]},
    {group: 'group-5', items: [
      {title: 'item3', value: 9},
      {title: 'item4', value: 10}
    ]},
  ]

;<Row align="center">
  <Col md={8}>
    <Select
      items={items}
      defaultValue={[{...items[0].items[0]},{...items[1].items[1]}]}
      onChange={val => console.log(val)}
      block
    />
  </Col>
</Row>
```

##### Select multi

```js
import Grid from '../Grid'
const { Row, Col } = Grid

;<Row>
  <Col md={8}>
    <Select
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
      ]}
      onChange={val => console.log(val)}
      multi
      block
    />
  </Col>
</Row>
```

##### Select multi chips

```js
;<Select
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
    { title: 'three', value: 3 },
    { title: 'four', value: 4 },
    { title: 'five', value: 5 },
    { title: 'six', value: 6 },
    { title: 'seven', value: 7 },
    { title: 'eight', value: 8 },
    { title: 'nine', value: 9 },
    { title: 'ten', value: 10 },
  ]}
  onChange={val => console.log(val)}
  multi
  multiChips
  block
/>
```

##### Controlled MultiSelect

```js
import { useState } from 'react'
import Grid from '../Grid'
import Button from '../Button'
const [a, set] = useState([{ title: 'one', value: 1 }])
const { Row, Col } = Grid
;<Row align="center">
  <Col md={8}>
    <Select
      items={[
        { title: 'one', value: 1 },
        { title: 'two', value: 2 },
        { title: 'three', value: 3 },
        { title: 'four', value: 4 },
        { title: 'five', value: 5 },
        { title: 'six', value: 6 },
        { title: 'seven', value: 7 },
        { title: 'eight', value: 8 },
      ]}
      value={a}
      onChange={(item, isSelected)=>!isSelected ? set([...a, item]) : set(a.filter(e=>e.value!==item.value))}
      block
      multi
    />
  </Col>
  <Col md={4}>
    <Button size="small" onClick={() => set([{ title: 'two', value: 2 }])}>reset to two</Button>
  </Col>
</Row>
```
