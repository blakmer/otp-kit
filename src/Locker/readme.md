Locker

```js
const [value, setValue] = React.useState(false)

;<Locker active={value} onChange={a => setValue(a)} />
```

```js
const [value, setValue] = React.useState(true)

;<Locker active={value} onChange={a => setValue(a)} />
```
