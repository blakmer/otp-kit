```js
import { COLORS } from '../docs'

const { SHADOW } = COLORS
const wrapper = { display: 'flex' }
const padding = { padding: 10 }

;<React.Fragment>
  <h1>Default</h1>
  <div style={{ ...wrapper }}>
    <RoundButton icon="arrow-up" />
  </div>
  <h1>Secondary</h1>
  <div style={{ ...wrapper }}>
    <RoundButton variation="secondary" icon="arrow-up" />
  </div>
  <h1>Danger</h1>
  <div style={{ ...wrapper }}>
    <RoundButton variation="danger" icon="arrow-up" />
  </div>
  <h1>Disabled</h1>
  <div style={{ ...wrapper }}>
    <RoundButton disabled icon="arrow-up" />
  </div>
  <h1>Inverse (for a dark background)</h1>
  <div style={{ ...wrapper, backgroundColor: SHADOW, ...padding }}>
    <RoundButton inverse icon="arrow-up" />
  </div>
  <h1>Inverse (for a dark background)</h1>
  <div style={{ ...wrapper, backgroundColor: SHADOW, ...padding }}>
    <RoundButton inverse variation="danger" icon="arrow-up" />
  </div>
  <h1>Inverse disabled (for a dark background)</h1>
  <div style={{ ...wrapper, backgroundColor: SHADOW, ...padding }}>
    <RoundButton inverse disabled icon="arrow-up" />
  </div>
</React.Fragment>
```
