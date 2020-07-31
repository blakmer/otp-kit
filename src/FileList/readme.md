#### FileList component

```js
const files = [
    new File(["sample"], "sample.txt", {
    type: "text/plain",
    }),
    new File(["sample"], "sample.doc", {
    type: "application/doc",
    }),
    new File(["sample"], "sample.xls", {
    type: "application/xls",
    })
]

;<FileList files={files}/>
```