#### Uncontrolled Accordion

```js
import Icon from '../Icon'
import Input from '../Input'

const items = [
  {
    title:  {
        prefix: <Icon.Medium type="car" fill="primary" />,
        content: 'Новые',
      },
    body:  {
        content: (<div> Новые: <Input block suffix={<Icon.Medium type="car" />} /></div>)
      } 
  },
  {
    title:  {
          prefix: <Icon.Medium type="vintage-car" fill="primary" />,
          content: 'С пробегом',
        },    
    body:  {
        content: "С пробегом" 
      } 
  },
  {
    title:  {
        prefix: <Icon.Medium type="car-2" fill="primary" />,
        content: 'Отечественные',
      },    
    body:  {
        content: (
          <div>
            <Icon.Medium type="car-2" fill="primary" />
          </div>
        ),
      } 
  },
]

;<React.Fragment>
  <Accordion
    onChange={i=>console.log(i)}
    items={items}
  />
</React.Fragment>
```

#### Controlled Accordion

```js
import React, { useState } from 'react'
import Icon from '../Icon'
import Toggler from '../Toggler'
import Input from '../Input'

const [active, setActive] = useState([])

const items = [
  {
    title:  {
        prefix: <Icon.Medium type="car" fill="primary" />,
        content: 'Новые',
      },
    body:  {
        content: (<div> Новые: <Input block suffix={<Icon.Medium type="car" />} /></div>)
      } 
  },
  {
    title:  {
          prefix: <Icon.Medium type="vintage-car" fill="primary" />,
          content: 'С пробегом',
        },    
    body:  {
        content: "С пробегом" 
      } 
  },
  {
    title:  {
        prefix: <Icon.Medium type="car-2" fill="primary" />,
        content: 'Отечественные',
      },    
    body:  {
        content: (
          <div>
            <Icon.Medium type="car-2" fill="primary" />
          </div>
        ),
      } 
  },
]

const handleChange = (idx, act) => {
act ? 
  setActive(
          active.filter((e, i) => {
            return e !== idx
          })
        )
      : setActive([...active, idx])
}

;<React.Fragment>
  <Accordion
    onChange={handleChange}
    items={items.map((item, index) => {
      item.title.suffix = <Toggler checked={active.indexOf(index) >= 0} />
      return item
    })}
    activeItems={active}
  />
</React.Fragment>
```

