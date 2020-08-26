#### Tabs component

###### default Tabs

```js
<Tabs
  data={[
    { title: 'title 1', value: 1 },
    { title: 'title 2', value: 2 },
    { title: 'title 3', value: 3 },
  ]}
/>
```

###### inner Tabs

```js
<Tabs
  level="inner"
  defaultActive={1}
  data={[
    { title: '25', value: 1 },
    { title: '50', value: 2 },
    { title: '100', value: 3 },
  ]}
/>
```

###### small Tabs

```js
<Tabs
  size="small"
  data={[
    { title: 'title 1', value: 1 },
    { title: 'title 2', value: 2 },
    { title: 'title 3', value: 3 },
  ]}
/>
```

###### Button tabs

```js
<Tabs
  level="buttons"
  data={[
    { title: 'title 1', value: 1 },
    { title: 'title 2', value: 2 },
    { title: 'title 3', value: 3 },
  ]}
/>
```

###### Small Button tabs

```js
<Tabs
  level="buttons"
  size="small"
  data={[
    { title: 'title 1', value: 1 },
    { title: 'title 2', value: 2 },
    { title: 'title 3', value: 3 },
  ]}
/>
```

###### Custom width

```js
<Tabs
  level="inner"
  defaultActive={1}
  width={'3.5rem'}
  data={[
    { title: '25', value: 1 },
    { title: '50', value: 2 },
    { title: '100', value: 3 },
  ]}
/>
```
