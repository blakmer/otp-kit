```js
const [data, set] = React.useState(
  Array.from({ length: 100 }, (x, k) => `${k} - element`)
)

// React.useEffect(() => {
//   setTimeout(() => {
//     set(
//       data.concat(
//         Array.from({ length: 1 }, () => `${data.length} - ${new Date()}`)
//       )
//     )
//   }, 1000)
// }, [data])
;<InfinityScroll height={500} data={data} scrollBottom />
```
