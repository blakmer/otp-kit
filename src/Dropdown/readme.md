##### Dropdown component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
const states = [
  'topLeft',
  'topCenter',
  'topRight',
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
]

;<Container>
  <Row>
    {states.map((i, j) => (
      <Col key={j}>
        <Dropdown
          onChange={e => console.log(e)}
          listDirection={i}
          items={['Pikachu', 'Charmander', 'Psyduck']}>
          <div>Pokemons</div>
        </Dropdown>
      </Col>
    ))}
  </Row>
</Container>
```


##### With children function

```js
;<Dropdown
  onChange={e => console.log(e)}
  items={['Pikachu', 'Charmander', 'Psyduck']}
  children={isOpen=><div>Pokemons {isOpen ? 'opened' : 'closed'}</div>}
  />
```