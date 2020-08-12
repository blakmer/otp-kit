#### Uncontrolled Accordion

```js
import Icon from '../Icon'
import Input from '../Input'
import Button from '../Button'
import Block from '../Block'
import Textarea from '../Textarea'
import Typography from '../Typography'

const carsOfficial = [
    { title: 'Renault', value: '1' },
    { title: 'Peugeot', value: '2' },
    { title: 'Audi', value: '3' }
  ]
const items = [
  {
    title:  {
          prefix: <Icon.Medium type="vintage-car" fill="primary" />,
          content: 'Новые',
        }, 
    body:  {
        content: (
          <div> 
          Новые: <Input block suffix={<Icon.Medium type="car" />} />
          </div>
          )
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
    contentBg="bg-grey-2"
    titleBg="bg-grey-1"
    onChange={i=>console.log(i)} 
    items={items}
  />
 <Block padding={['1rem 2rem']} color='bg-grey-3' membrane borderRadius={24}>
    <Accordion
      //activeItems={openProfile ? [0] : []}
      size='small'
      items={[
        {
          title: {
            prefix: (
              <Icon.Medium type='announcement' fill='primary' />
            ),
            content: 'Комментарий',
          },
          body: {
            content: (
              <div> 
                <Input block/>
              </div>
            )
          }
        }
      ]}
    />
  </Block>
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
    contentBg="white"
    titleBg="bg-grey-2"
    items={items.map((item, index) => {
      item.title.suffix = <Toggler checked={active.indexOf(index) >= 0} />
      return item
    })}
    activeItems={active}
  />
</React.Fragment>
```

