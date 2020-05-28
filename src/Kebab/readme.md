Kebab Menu

```js
import Icon from '../Icon'
import classes from '../classes.module.css'
;<div className={classes['bg-grey-2-bg']} style={{ padding: '8rem 0 0 1rem' }}>
  <Kebab
    items={[
      <Icon.Medium
        fill="primary"
        type="file-double"
        onClick={() => {
          console.log('click 1')
        }}
      />,
      <Icon.Medium
        fill="primary"
        type="download"
        onClick={() => {
          console.log('click 2')
        }}
      />,
    ]}
  />
</div>
```
