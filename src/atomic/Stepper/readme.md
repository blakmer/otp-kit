##### Stepper component

```js
import { useState, Fragment } from 'react'
import Button from '../Button'
const [a, setA] = useState(0)
;<Fragment>
  <Button onClick={() => setA(a < 1 ? 0 : a - 1)}>Prev</Button>
  <Button onClick={() => setA(a > 1 ? 2 : a + 1)}>Next</Button>
  <Stepper
    steps={[
      { title: 'title', description: 'desc' },
      { title: 'title', description: 'desc' },
      { title: 'title', description: 'desc' },
    ]}
    currentStep={a}
  />
</Fragment>
```

##### Stepper component with transition per click

```js
import { useState, Fragment } from 'react'

const [a, setA] = useState(0)
;<Fragment>
  <Stepper
    closeNextStepPerClick={false}
    steps={[
      { title: 'title', description: 'desc' },
      { title: 'title', description: 'desc' },
      { title: 'title', description: 'desc' },
    ]}
    onChange={({ step }) => {
      setA(step)
    }}
    currentStep={a}
  />
</Fragment>
```
