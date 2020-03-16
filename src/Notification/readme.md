Notify

```js
<NotificationProvider>
  {showNotification => (
    <div>
      <button
        onClick={() =>
          showNotification.success(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsum, vitae. Animi dolore dolores ea, eos et exercitationem fugiat id impedit incidunt inventore ipsa magni, neque nihil quod rem ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsum, vitae. Animi dolore dolores ea, eos et exercitationem fugiat id impedit incidunt inventore ipsa magni, neque nihil quod rem ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsum, vitae. Animi dolore dolores ea, eos et exercitationem fugiat id impedit incidunt inventore ipsa magni, neque nihil quod rem ut?'
          )
        }>
        Example 1
      </button>
      <button onClick={() => showNotification.error('It`s error message')}>
        Example 2
      </button>
      <button
        onClick={() =>
          showNotification.success(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsum, vitae. Animi dolore dolores ea, eos et exercitationem fugiat id impedit incidunt inventore ipsa magni, neque nihil quod rem ut?'
          )
        }>
        Example 3
      </button>
    </div>
  )}
</NotificationProvider>
```
