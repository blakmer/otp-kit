#### Input with mask

```js
import Divider from '../Divider'
import Typography from '../Typography'
const [value, setValue] = React.useState('')
;<InputWithMask
  value={value}
  mask="(000) 000-00-00"
  unmask={true}
  prefix={
    <Typography.Text
      fill="text-primary"
      type="highlighted"
      style={{ height: '100%', display: 'inline-flex', alignItems: 'center' }}>
      {' '}
      +7
      <Divider
        style={{ margin: '.2rem' }}
        type="vertical"
        lineLength={'1.5rem'}
      />
    </Typography.Text>
  }
  onAccept={value => setValue(value)}
/>
```
