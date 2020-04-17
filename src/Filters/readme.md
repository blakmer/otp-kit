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
const [color, setColor] = useState('')

;<Fragment>
  <Button onClick={() => toggleShow(true)}>Показать фильтры</Button>
  <Filters
    show={show}
    header={
      <Fragment>
        <Typography.Heading level={2}>Название тайтла</Typography.Heading>
        <RoundButton
          fill="bg-input"
          iconFill="primary"
          icon="arrow-right"
          onClick={() => {
            toggleShow(false)
            setColor('')
          }}
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
    midContent={
      <ColorSelection
        value={color}
        onChange={hex => {
          console.log(hex)
          setColor(hex)
        }}
      />
    }
    bottomContent={
      <Fragment>
        <Row>
          <Col>
            <Button
              ghost
              block
              onClick={() => {
                toggleShow(false)
                setColor('')
              }}>
              Отмена
            </Button>
          </Col>
          <Col>
            <Button block>Сохранить</Button>
          </Col>
        </Row>
        <Row>
          <Col />
          <div style={{ marginTop: '1rem' }}>{color}</div>
        </Row>
      </Fragment>
    }
    overlay
    onClose={() => {
      toggleShow(false)
      setColor('')
    }}
  />
</Fragment>
```
