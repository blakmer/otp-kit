```js
import { Fragment, useState } from 'react'
import Input from '../Input'
import ColorSelection from '../ColorSelection'
import Button from '../Button'
import Typography from '../Typography'
import RoundButton from '../RoundButton'
import Grid from '../Grid'

const { Row, Col } = Grid

const [flag, setFlag] = useState(false)

;<Fragment>
  <Button onClick={() => setFlag(true)}>Показать фильтры</Button>
  <Filters
    show={flag}
    header={
      <Fragment>
        <Typography.Heading level={2}>Название тайтла</Typography.Heading>
        <RoundButton
          inverse
          icon="arrow-right"
          onClick={() => setFlag(false)}
        />
      </Fragment>
    }
    topContent={
      <Input
        label="Контент топ"
        defaultValue="снизу лишнее пространство, нуна фиксануть инпут"
        block
      />
    }
    midContent={<ColorSelection />}
    bottomContent={
      <Row>
        <Col>
          <Button ghost block onClick={() => setFlag(false)}>
            Отмена
          </Button>
        </Col>
        <Col>
          <Button block onClick={() => setFlag(false)}>
            Сохранить
          </Button>
        </Col>
      </Row>
    }
  />
</Fragment>
```
