### Z-index test

```js
import React, {Fragment, useState} from 'react'
import Grid from '../src/Grid'
import FormItem from '../src/FormItem'
import Select from '../src/Select'
import Tooltip from '../src/Tooltip'
import Dropdown from '../src/Dropdown'
import Button from '../src/Button'
import Block from '../src/Block'
import Modal from '../src/Modal'
import NotificationContainer, { store } from '../src/Notification'
const {Col, Row} = Grid

const [modal, toggleModal] = useState(false)
const selectItems = [
                {title: 'First el', value: 1},
                {title: 'Second el', value: 2},
                {title: 'Third el', value: 3}
                ]
const renderSelectMenu = menu => (
    <Fragment>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Dropdown>Here's Dropdown</Dropdown>    
            <Tooltip style={{marginLeft: '.5rem'}} content="Big Tooltip Content should be above dropdown" position="bottomRight">
                Here's Tooltip
            </Tooltip>
            </div> 
            {menu}
    </Fragment>)

const openNotification = () => {
    store.addNotification({
    message: "Notification.",
    type: "success",
    insert: "top",
    container: "top-center",
    dismiss: {
      duration: 2000,
      onScreen: false,
      showIcon: true,
    }
    })}; 

;<Fragment>
    <Row>
        <Col md={8}>
            <Select 
                multi 
                items={selectItems}
                renderMenu={renderSelectMenu}
                block 
            />
        </Col> 
        <Col md={4}>
            <Button onClick={()=>{toggleModal(!modal)}} block>Open Modal</Button>
        </Col>
        <Col md={4}>
            <Button onClick={()=>{openNotification()}} block>Open Notification</Button>
        </Col>
        <Col md={4}>
            <Block padding={[12]} color="bg-grey-1" shadow="normal" borderRadius={16}>
                <Tooltip content="Tooltip Content">Tooltip</Tooltip>
            </Block>
        </Col>
    </Row>
    <Row style={{marginTop: 10}}>
        <Col md={8}>
            <FormItem label="Simple Label">
                <Select 
                    multi 
                    items={selectItems}
                    renderMenu={renderSelectMenu}
                    listDirection="top"
                    block 
                    />
            </FormItem>
        </Col> 
    </Row>
    <Modal
    header="Header"
    body={<Fragment>
            <Tooltip content="Tooltip Content">Modal Tooltiped body</Tooltip>
            <Button style={{marginTop: '.5rem'}} onClick={()=>{openNotification()}} block>Open Notification</Button>
        </Fragment>}
    size={{
      xs: 12,
      sm: 9,
      md: 6,
    }}
    closable
    isOpen={modal}
    onClose={() => {
      toggleModal(false)
    }}
  />
    <NotificationContainer />
</Fragment>
```