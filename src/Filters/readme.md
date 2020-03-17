```js
import { Fragment, useState } from 'react'
import Input from '../Input'
import ColorSelection from '../ColorSelection'
import Button from '../Button'
import Typography from '../Typography'
import RoundButton from '../RoundButton'
import Grid from '../Grid'

const { Row, Col } = Grid

const [show, toggleShow] = useState(false)

;<Fragment>
  <Button onClick={() => toggleShow(true)}>Показать фильтры</Button>
  <Filters
    show={show}
    header={
      <Fragment>
        <Typography.Heading level={2}>Название тайтла</Typography.Heading>
        <RoundButton
          inverse
          icon="arrow-right"
          onClick={() => toggleShow(false)}
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
    midContent={<ColorSelection selectColor={hex => console.log(hex)} />}
    bottomContent={
      <Row>
        <Col>
          <Button ghost block onClick={() => toggleShow(false)}>
            Отмена
          </Button>
        </Col>
        <Col>
          <Button block>Сохранить</Button>
        </Col>
      </Row>
    }
    overlay
    onClose={() => toggleShow(false)}
  />
</Fragment>
```
