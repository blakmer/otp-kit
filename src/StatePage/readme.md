#### State component in status success

```js
;<React.Fragment>
  <StatePage
    header="Sikeresen összekapcsoltad az azonosítót a számláddal."
    description="Ezentúl ismerőseid az email címed megadásával is utalhatnak pénzt a bankszámládra."
    type="success"
  />
</React.Fragment>
```

#### State component in status error

```js
;<React.Fragment>
  <StatePage
    header="Az azonosítót nem sikerült összekapcsolni a számláddal."
    description="Az azonosítót nem sikerült összekapcsolni a számláddal."
    type="error"
  />
</React.Fragment>
```

#### State component in status empty

```js
;<React.Fragment>
  <StatePage header="" description="" type="empty" />
</React.Fragment>
```
