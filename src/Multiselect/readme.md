##### Controlled select

```js
import { useState, Fragment } from 'react'
const [a, set] = useState({ title: 'one', value: 1 })

;<Fragment>
  <Multiselect
    items={[
      { title: 'one', value: 1 },
      { title: 'two', value: 2 },
      { title: 'tree', value: 3 },
      { title: 'one', value: 1 },
      { title: 'two', value: 2 },
      { title: 'tree', value: 3 },
      { title: 'one', value: 1 },
      { title: 'two', value: 2 },

    ]}
    label="numbers"
    value={a}
    onChange={val => set(val)}
  />
  <button onClick={() => set({ title: 'two', value: 2 })}>reset to two</button>
</Fragment>
```

##### Uncontrolled select

```js
<Multiselect
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
  ]}
  defaultValue={{ title: 'one', value: 1 }}
  label="numbers"
  onChange={val => console.log(val)}
/>
```

