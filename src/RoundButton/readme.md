```js
const wrapper = { display: 'flex' }
const handleClick = e=>{console.log('clicked')}
const mr = {marginRight: '.5rem'}

;<React.Fragment>
  <h1>Default</h1>
  <div style={{ ...wrapper }}>
    <RoundButton style={mr} icon="arrow-up" onClick={handleClick} />
    <RoundButton style={mr} fill="blue" icon="arrow-up" onClick={handleClick} />
    <RoundButton style={mr} fill="error" icon="arrow-up" iconFill="bg-input" onClick={handleClick} />
    <RoundButton style={mr} fill="highlighted" icon="arrow-up" iconFill="bg-input" onClick={handleClick} />
  </div>
  <h1>Pulse</h1>
  <div style={{ ...wrapper }}>
    <RoundButton style={mr} fill="blue" icon="arrow-up" onClick={handleClick} animation="pulse"/>
    <RoundButton style={mr} icon="arrow-up" iconFill="bg-input" onClick={handleClick} animation="pulse"/>
    <RoundButton style={mr} fill="highlighted" icon="arrow-up" iconFill="bg-input" onClick={handleClick} animation="pulse"/>
    <RoundButton style={mr} fill="error" icon="arrow-up" onClick={handleClick} animation="pulse"/>
  </div>
  <h1>Simple</h1>
  <div>
    <RoundButton style={mr} icon="arrow-up" animation="none" onClick={handleClick}/>
    <RoundButton style={mr} fill="highlighted" icon="arrow-up" iconFill="chart-yellow" animation="none" onClick={handleClick}/>
  </div>
  <h1>Disabled</h1>
  <div>
    <RoundButton style={mr} disabled icon="arrow-up" />
  </div>
</React.Fragment>
```
