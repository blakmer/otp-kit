```js
const wrapper = { display: 'flex' }
const handleClick = e=>{console.log('clicked')}
const mr = {marginRight: '1rem'}

;<React.Fragment>
  <h1>Default</h1>
  <div style={{ ...wrapper }}>
    <RoundButton style={mr} icon="arrow-up" onClick={handleClick} />
    <RoundButton style={mr} fill="blue" icon="arrow-up" onClick={handleClick} />
    <RoundButton style={mr} fill="error" icon="arrow-up" onClick={handleClick} />
  </div>
  <h1>Pulse</h1>
  <div style={{ ...wrapper }}>
    <RoundButton style={mr} shadow="none" icon="arrow-up" onClick={handleClick} animation="pulse"/>
    <RoundButton style={mr} shadow="none" fill="blue" icon="arrow-up" onClick={handleClick} animation="pulse"/>
    <RoundButton style={mr} shadow="none" fill="error" icon="arrow-up" onClick={handleClick} animation="pulse"/>
  </div>
  <h1>Ripple</h1>
  <div>
    <RoundButton style={mr} icon="arrow-up" animation="ripple" onClick={handleClick}/>
    <RoundButton style={mr} fill="blue" icon="arrow-up" animation="ripple" onClick={handleClick}/>
  </div>
  <h1>Disabled</h1>
  <div>
    <RoundButton style={mr} disabled icon="arrow-up" />
  </div>
</React.Fragment>
```
