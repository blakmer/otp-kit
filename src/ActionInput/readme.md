```js
import Grid from '../Grid'
import Icon from '../Icon'
import Divider from '../Divider'

const handleClick = () => {
    console.log('clicked')
}
const handleChange = e => {console.log(e.target.value)}

const actionsFirst = () => {
    return (<div style={{display: "inline-flex", alignItems: 'center'}}>
    <Icon.Medium fill="green" type="preferences" onClick={handleClick} />
    <Divider type="vertical" style={{height: '24px'}}/>
    <Icon.Medium fill="green" type="close" onClick={handleClick} />
    </div>)
}
const actionsSecond = () => {
    return (<div style={{display: "inline-flex", alignItems: 'center'}}>
    <Icon.Medium fill="green" type="arrow-down" onClick={handleClick} />
    <Icon.Medium fill="green" type="arrow-up" onClick={handleClick} />
    <Icon.Medium fill="green" type="preferences" onClick={handleClick} />
    <Icon.Medium fill="green" type="close" onClick={handleClick} />
    </div>)
}

<div>
<ActionInput style={{margin: '1rem 0'}} actions={actionsFirst} placeholder={"Type text here..."} onChange={handleChange} />
<ActionInput actions={actionsSecond} defaultValue={'Has Default Value'} onChange={handleChange} />
</div>
```
