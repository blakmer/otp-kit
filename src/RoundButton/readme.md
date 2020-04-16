```js
const wrapper = { display: 'flex' }
const handleClick = e=>{console.log('clicked')}

;<React.Fragment>
  <h1>Default</h1>
  <div style={{ ...wrapper }}>
    <RoundButton icon="arrow-up" onClick={handleClick} />
    <RoundButton fill="blue" icon="arrow-up" onClick={handleClick} />
    <RoundButton fill="error" icon="arrow-up" iconFill="text-inverse" onClick={handleClick} />
    <RoundButton fill="highlighted" icon="arrow-up" iconFill="text-inverse" onClick={handleClick} />
  </div>
  <h1>Pulse</h1>
  <div style={{ ...wrapper }}>
    <RoundButton fill="blue" icon="arrow-up" onClick={handleClick} animation="pulse"/>
    <RoundButton icon="arrow-up" iconFill="text-inverse" onClick={handleClick} animation="pulse"/>
    <RoundButton fill="highlighted" icon="arrow-up" iconFill="text-inverse" onClick={handleClick} animation="pulse"/>
    <RoundButton fill="error" icon="arrow-up" onClick={handleClick} animation="pulse"/>
  </div>
  <h1>Simple</h1>
  <div>
    <RoundButton icon="arrow-up" animation="none" onClick={handleClick}/>
    <RoundButton fill="highlighted" icon="arrow-up" iconFill="chart-yellow" animation="none" onClick={handleClick}/>
  </div>
  <h1>Disabled</h1>
  <div>
    <RoundButton disabled icon="arrow-up" />
  </div>
</React.Fragment>
```
