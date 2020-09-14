##### Steps component

```js
import { useState, Fragment } from 'react'
import Button from '../Button'
const [a, setA] = useState(0)
;<Fragment>
  <Button onClick={() => setA(a < 1 ? 0 : a - 1)}>Prev</Button>
  <Button onClick={() => setA(a > 1 ? 2 : a + 1)}>Next</Button>
  <Steps
    steps={[
      {
        title: 'Title',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting',
      },
      { title: 'Title', description: 'Text description' },
      { title: 'Title', description: 'Text description' },
    ]}
    currentStep={a}
    markSuccessfulWithTick={true}
  />
</Fragment>
```

##### Steps component with transition per click

```js
import { useState, Fragment } from 'react'

const [a, setA] = useState(0)
;<Fragment>
  <Steps
    closeNextStepPerClick={false}
    steps={[
      { title: 'Title 1', description: 'desc' },
      { title: 'Title 2', description: 'desc' },
      { title: 'Title 3', description: 'desc' },
    ]}
    onChange={({ step }) => {
      setA(step)
    }}
    currentStep={a}
  />
</Fragment>
```
