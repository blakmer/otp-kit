```js
import Icon from '../Icon'
;<Breadcrumb
  data={[
    {
      node: (
        <React.Fragment>
          <Icon.Small type="house-chimney" fill="green" />
          <a href="/">Главная</a>
        </React.Fragment>
      ),
    },
    { node: <a href="#">Меню</a> },
    { node: <a href="#">Контакты</a> },
    { node: <a href="#">Разработчик</a> },
    { node: <span>Вася</span> },
  ]}
/>
```
