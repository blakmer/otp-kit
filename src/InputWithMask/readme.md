#### Phone mask

```js
import Divider from '../Divider'
import Typography from '../Typography'
const [value, setValue] = React.useState('')
;<InputWithMask
  value={value}
  mask="000 000-00-00"
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

#### Currency mask

```js
const [value, setValue] = React.useState('1000')
;<InputWithMask
  value={value}
  mask="num"
  blocks={{
    num: {
      mask: Number,
      thousandsSeparator: ',',
    },
  }}
  onAccept={value => setValue(value)}
/>
```

#### VIN mask

```js
const [value, setValue] = React.useState('')

const vinMask = {
  mask: /^\d{0,17}$/,
}

;<InputWithMask
  {...vinMask}
  value={value}
  onAccept={value => setValue(value)}
/>
```

#### Release year mask

```js
const [value, setValue] = React.useState('')

const releaseYearMask = {
  mask: 'year',
  blocks: {
    year: {
      mask: IMask.MaskedRange,
      from: 2010,
      to: 2020,
    },
  },
}

;<InputWithMask
  {...releaseYearMask}
  value={value}
  onAccept={value => setValue(value)}
/>
```

#### Engine capacity mask

```js
const [value, setValue] = React.useState('')

const engineCapacityMask = {
  mask: '0 000',
}

;<InputWithMask
  {...engineCapacityMask}
  value={value}
  onAccept={value => setValue(value)}
/>
```
