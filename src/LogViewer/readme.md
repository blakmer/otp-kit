```js
import moment from 'moment'
const logs = [
  {
    desired: true,
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    level: 'WARN',
    message: 'Message about anything',
    trace: 'Long long long long trace',
    context: { a: 'a', b: 'b', c: 'c' },
  },
  {
    desired: true,
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    level: 'ERROR',
    message: 'Message about anything',
    trace: 'Long long long long trace',
    context: { a: 'a', b: 'b', c: 'c', d: 1, f: false },
    active: true,
  },
  {
    desired: true,
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    level: 'INFO',
    message: 'Info message',
    trace: '',
    context: { a: 'a', b: 'b', c: 'c' },
  },
]

;<LogViewer logs={logs} debug active={1} searchStr="Mess" />
```
