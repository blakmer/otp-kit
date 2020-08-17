```js
import { Fragment, useState } from 'react'
import Input from '../Input'
import ColorSelection from '../ColorSelection'
import Button from '../Button'
import Typography from '../Typography'
import RoundButton from '../RoundButton'
import Grid from '../Grid'
import Divider from '../Divider'

const { Row, Col } = Grid

const [show, toggleShow] = useState(false)
const [color, setColor] = useState('')

;<Fragment>
  <Button onClick={() => toggleShow(true)}>Показать фильтры</Button>
  <Filters
    show={show}
    overlay
    onClose={() => {
      toggleShow(false)
      setColor('')
    }}>
      <Fragment>
        <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
        </div>
        <div style={{marginTop: '1.5rem',marginBottom: '1.5rem'}}>
          <Input block/>
        </div>
        <Divider fill="bg-grey-1"/>
        <div style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
          <ColorSelection
            value={color}
            onChange={hex => {
              console.log(hex) 
              setColor(hex)
            }}
          />
        </div>
        <Divider fill="bg-grey-1"/>
        <div style={{marginTop: '1.5rem'}}>
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
        </div>
        </Fragment>
    </Filters>
</Fragment>
```
