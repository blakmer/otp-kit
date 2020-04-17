ActionInput component
```js
import Icon from '../Icon'
import Divider from '../Divider'

const handleClick = () => {
    console.log('clicked')
}
const handleChange = e => {console.log(e.target.value)}
const actionsFirst = () => {
    return (<div style={{display: "inline-flex", alignItems: 'center'}}>
    <Icon.Medium type="preferences" onClick={handleClick} />
    <Divider type="vertical" style={{height: '24px'}}/>
    <Icon.Medium type="close" onClick={handleClick} />
    </div>)
}

;<ActionInput actions={actionsFirst} placeholder={"Type text here..."} onChange={handleChange} />
```

ActionInput fits to its parent width
```js
import Icon from '../Icon'
import Divider from '../Divider'

const handleClick = () => {
    console.log('clicked')
}
const handleChange = e => {console.log(e.target.value)}
const actions = () => {
    return (<div style={{display: "inline-flex", alignItems: 'center'}}>
    <Icon.Medium type="arrow-down" onClick={handleClick} />
    <Icon.Medium type="arrow-up" onClick={handleClick} />
    <Icon.Medium type="preferences" onClick={handleClick} />
    <Icon.Medium fill="error" type="close" onClick={handleClick} />
    </div>)
}
;<ActionInput block actions={actions} defaultValue={'Has Default Value'} onChange={handleChange} />
```
Disabled ActionInput
```js
import Icon from '../Icon'
import Divider from '../Divider'


const handleClick = () => {
    console.log('clicked')
}
const handleChange = e => {console.log(e.target.value)}
const actionsFirst = () => {
    return (<div style={{display: "inline-flex", alignItems: 'center'}}>
    <Icon.Medium type="preferences" onClick={handleClick} />
    <Divider type="vertical" style={{height: '24px'}}/>
    <Icon.Medium type="close" onClick={handleClick} />
    </div>)
}

;<ActionInput disabled actions={actionsFirst} defaultValue="Disabled ActionInput" onChange={handleChange} />
```