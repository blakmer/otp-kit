Kebab Menu

```js

import Icon from '../Icon'

;<div style={{padding: '8rem 0 0 1rem', backgroundColor: '#EFF2F9'}}>
  <Kebab 
    items={[
      { title: 'first', jsx:<Icon.Medium fill="primary" type="file-double" onClick={()=>{console.log('click')}} />, value: 1 },
      { title: 'second', jsx:<Icon.Medium fill="primary" type="download" onClick={()=>{console.log('click')}}/>, value: 2 },
    ]}
  />
</div>
```
