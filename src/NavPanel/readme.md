```js
import Logo from '../Logo'
import Typography from '../Typography'
;<NavPanel
  header={<Logo />}
  onSearch={e => {}}
  onHelp={() => {}}
  actions={[
    {
      icon: 'profile',
      action: () => {},
      tooltipNode: (
        <Typography.Text onClick={() => alert('action')}>
          Jon Snow
        </Typography.Text>
      ),
    },
    { icon: 'close', action: () => {} },
  ]}
/>
```
