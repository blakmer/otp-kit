Kebab Menu

```js

import Icon from '../Icon'
import classes from '../classes.module.css'

;<div className={classes['bg-grey-2-bg']} style={{padding: '8rem 0 0 1rem'}}>
  <Kebab 
    items={[
      { title: 'first', jsx:<Icon.Medium fill="primary" type="file-double" onClick={()=>{console.log('click')}} />, value: 1 },
      { title: 'second', jsx:<Icon.Medium fill="primary" type="download" onClick={()=>{console.log('click')}}/>, value: 2 },
    ]}
  />
</div>
```
