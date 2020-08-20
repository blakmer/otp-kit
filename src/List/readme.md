#### List Component

#### With headers

```js
import Icon from '../Icon'
import Progress from '../Progress'
import classes from '../classes.module.css'

const columns = [
  {
    render: () => (
      <div className={classes['bg-grey-2-bg']} style={{ borderRadius: '50%' }}>
        <Icon.Medium type="machine-learning" />
      </div>
    ),
    size: {
      md: 2,
    },
  },
  {
    title: 'Название',
    dataIndex: 'name',
    size: {
      md: 8,
    },
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
    render: val => <Progress value={val} max={1500} />,
    size: {
      md: 6,
    },
  },
  {
    title: 'Тэгов',
    dataIndex: 'tags',
    align: 'right',
    size: {
      md: 2,
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    size: {
      md: 4,
    },
    offset: {
      md: 2,
    },
  },
]

const data = [
  {
    name: 'Паспорт гражданина РФ',
    progress: 768,
    tags: 32,
    date: '12.02.2020',
  },
  {
    name: 'ИНН',
    progress: 1403,
    tags: 16,
    date: '06.05.2020',
  },
]

;<div className={classes['bg-grey-2-bg']} style={{ padding: 10 }}>
  <List columns={columns} data={data} />
</div>
```

#### No headers

```js
import Icon from '../Icon'
import Progress from '../Progress'
import classes from '../classes.module.css'

const columns = [
  {
    render: () => (
      <div>
        <Icon.Medium type="machine-learning" />
      </div>
    ),
    size: {
      md: 2,
    },
  },
  {
    title: 'Название',
    dataIndex: 'name',
    size: {
      md: 8,
    },
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
    render: val => <Progress value={val} max={1500} />,
    size: {
      md: 6,
    },
  },
  {
    title: 'Тэгов',
    dataIndex: 'tags',
    align: 'right',
    size: {
      md: 2,
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    size: {
      md: 4,
    },
    offset: {
      md: 2,
    },
  },
]

const data = [
  {
    name: 'Паспорт гражданина РФ',
    progress: 768,
    tags: 32,
    date: '12.02.2020',
  },
  {
    name: 'ИНН',
    progress: 1403,
    tags: 16,
    date: '06.05.2020',
  },
]

;<div className={classes['bg-grey-2-bg']} style={{ padding: 10 }}>
  <List columns={columns} data={data} headers={false} />
</div>
```

#### With pagination

```js
import Icon from '../Icon'
import Progress from '../Progress'
import classes from '../classes.module.css'

const columns = [
  {
    render: () => (
      <div>
        <Icon.Medium type="machine-learning" />
      </div>
    ),
    size: {
      md: 2,
    },
  },
  {
    title: 'Название',
    dataIndex: 'name',
    size: {
      md: 8,
    },
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
    render: val => <Progress value={val} max={1500} />,
    size: {
      md: 6,
    },
  },
  {
    title: 'Тэгов',
    dataIndex: 'tags',
    align: 'right',
    size: {
      md: 2,
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    size: {
      md: 4,
    },
    offset: {
      md: 2,
    },
  },
]

const data = [
  {
    name: 'Паспорт гражданина РФ',
    progress: 768,
    tags: 32,
    date: '12.02.2020',
  },
  {
    name: 'ИНН',
    progress: 1403,
    tags: 16,
    date: '06.05.2020',
  },
]

;<div className={classes['bg-grey-2-bg']} style={{ padding: 10 }}>
  <List
    columns={columns}
    data={data}
    pagination={{
      total: 100,
      current: 1,
      onPageChanged: page => console.log(page),
    }}
  />
</div>
```
