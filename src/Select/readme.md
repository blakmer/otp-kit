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
      renderMenu={menu=>(<div><div style={style}>Custom render of Menu</div> {menu} <div style={style}><Button size="small">+</Button></div></div>)}
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
const filterItems = val => elements.filter(e=>e.title.toLowerCase().indexOf(val.toLowerCase()) >= 0)

;<Row align="center">
  <Col md={8}>
    <Select
      items={items}
      showSearch
      onChange={e=>{console.log(e)}}
      onSearchChange={e => setItems(filterItems(e.target.value))}
      onSearchRemove={e => setItems(filterItems(''))}
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
    {group: 'group-3', closable: true, items: [
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
      multi
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
    { title: 'tweafwasdfo', value: 2 },
    { title: 'owefane', value: 3 },
    { title: 'twaso', value: 4 },
    { title: 'onasce', value: 5 },
    { title: 'twasco', value: 6 },
    { title: 'onase', value: 7 },
    { title: 'two', value: 8 },
    { title: 'osne', value: 9 },
    { title: 'twasdo', value: 10 },
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
        { title: 'tree', value: 3 },
        { title: 'one', value: 4 },
        { title: 'two', value: 5 },
        { title: 'tree', value: 6 },
        { title: 'one', value: 7 },
        { title: 'two', value: 8 },
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
