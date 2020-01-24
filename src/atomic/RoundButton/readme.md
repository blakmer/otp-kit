```js
import { COLORS } from '../../assets/docs'

const mt = 10
const wrapper = { display: 'flex' }
const { SHADOW } = COLORS

;<React.Fragment>
  <h1>Default</h1>
  <div style={{ ...wrapper }}>
    <RoundButton />
  </div>
  <h1>Secondary</h1>
  <div style={{ ...wrapper }}>
    <RoundButton variation="secondary" />
  </div>
  <h1>Danger</h1>
  <div style={{ ...wrapper }}>
    <RoundButton variation="danger" />
  </div>
  <h1>Disabled</h1>
  <div style={{ ...wrapper }}>
    <RoundButton disabled />
  </div>
  <h1>Inverse (for a dark background)</h1>
  <div style={{ ...wrapper, backgroundColor: SHADOW, padding: 10 }}>
    <RoundButton inverse />
  </div>
  <h1>Inverse (for a dark background)</h1>
  <div style={{ ...wrapper, backgroundColor: SHADOW, padding: 10 }}>
    <RoundButton inverse variation='danger' />
  </div>
  <h1>Inverse disabled (for a dark background)</h1>
  <div style={{ ...wrapper, backgroundColor: SHADOW, padding: 10 }}>
    <RoundButton inverse disabled />
  </div>
</React.Fragment>
```
