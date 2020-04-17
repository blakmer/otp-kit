Divider

```js
;<div>
    <i>Simple:</i>
    <Divider/>
    <i>Dashed:</i>
    <Divider dashed/>
    <i>Orientation:</i>
    <Divider orientation="left">Left</Divider>
    <Divider>Center</Divider>
    <Divider orientation="right">Right</Divider>
    <i>Colored:</i>
    <Divider fill="primary">Primary</Divider>
    <Divider fill="blue">Blue</Divider>
    <Divider fill="error">Error</Divider>
    <i>Vertical:</i>
    <div style={{display:'flex', alignItems: 'center'}}>
    1
    <Divider type="vertical" fill="primary" />
    2
    <Divider type="vertical" fill="error" />
    3
    </div>
</div>