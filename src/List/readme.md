#### List Component

#### With headers

```js
import Icon from '../Icon'
import Progress from '../Progress'

const columns = [
  {
    dataIndex: 'icon',
    key: 'icon',
    render: () => (
      <div style={{ background: '#52ae30', borderRadius: '50%' }}>
        <Icon.Medium type="machine-learning" />
      </div>
    ),
    size: {
      md: 1,
    },
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    size: {
      md: 4,
    },
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
    key: 'progress',
    render: val => <Progress value={val} max={1500} />,
    size: {
      md: 3,
    },
  },
  {
    title: 'Тэгов',
    dataIndex: 'tags',
    key: 'tags',
    align: 'right',
    size: {
      md: 1,
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    size: {
      md: 2,
    },
    offset: {
      md: 1,
    },
  },
]

const data = [
  {
    key: '1',
    name: 'Паспорт гражданина РФ',
    progress: 768,
    tags: 32,
    date: '12.02.2020',
  },
  {
    key: '2',
    name: 'ИНН',
    progress: 1403,
    tags: 16,
    date: '06.05.2020',
  },
]

;<div style={{ backgroundColor: '#EFF2F9', padding: 10 }}>
  <List columns={columns} data={data} />
</div>
```

#### No headers

```js
import Icon from '../Icon'
import Progress from '../Progress'

const columns = [
  {
    dataIndex: 'icon',
    key: 'icon',
    render: () => (
      <div>
        <Icon.Medium type="machine-learning" />
      </div>
    ),
    size: {
      md: 1,
    },
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    size: {
      md: 4,
    },
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
    key: 'progress',
    render: val => <Progress value={val} max={1500} />,
    size: {
      md: 3,
    },
  },
  {
    title: 'Тэгов',
    dataIndex: 'tags',
    key: 'tags',
    align: 'right',
    size: {
      md: 1,
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    size: {
      md: 2,
    },
    offset: {
      md: 1,
    },
  },
]

const data = [
  {
    key: '1',
    name: 'Паспорт гражданина РФ',
    progress: 768,
    tags: 32,
    date: '12.02.2020',
  },
  {
    key: '2',
    name: 'ИНН',
    progress: 1403,
    tags: 16,
    date: '06.05.2020',
  },
]

;<div style={{ backgroundColor: '#EFF2F9', padding: 10 }}>
  <List columns={columns} data={data} headers={false} />
</div>
```

#### With pagination

```js
import Icon from '../Icon'
import Progress from '../Progress'

const columns = [
  {
    dataIndex: 'icon',
    key: 'icon',
    render: () => (
      <div>
        <Icon.Medium type="machine-learning" />
      </div>
    ),
    size: {
      md: 1,
    },
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    size: {
      md: 4,
    },
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
    key: 'progress',
    render: val => <Progress value={val} max={1500} />,
    size: {
      md: 3,
    },
  },
  {
    title: 'Тэгов',
    dataIndex: 'tags',
    key: 'tags',
    align: 'right',
    size: {
      md: 1,
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    size: {
      md: 2,
    },
    offset: {
      md: 1,
    },
  },
]

const data = [
  {
    key: '1',
    name: 'Паспорт гражданина РФ',
    progress: 768,
    tags: 32,
    date: '12.02.2020',
  },
  {
    key: '2',
    name: 'ИНН',
    progress: 1403,
    tags: 16,
    date: '06.05.2020',
  },
]

;<div style={{ backgroundColor: '#EFF2F9', padding: 10 }}>
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
