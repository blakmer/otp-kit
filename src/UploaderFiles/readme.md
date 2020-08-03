#### Default
```js
;<UploaderFiles onChange={e=>console.log(e)}/>
```

#### Default with FileList
```js
import React, {useState} from 'react'
import FileList from '../FileList'

const [files,setFiles] = useState([])
;<div>
    <UploaderFiles onChange={e=>{
        setFiles(Array.from(e)) 
        console.log(e)
    }} />
    <FileList files={files} onRemove={(index, item)=>{setFiles(files.filter((file, i) => index !==i))}}/>
</div>
```

#### Dropzone
```js
;<UploaderFiles type="dropzone" onChange={e=>console.log(e)} />
```