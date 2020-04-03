PlayPauseButton

```js
import { useState } from 'react'
let [isPlay, setPlay] = useState(false)

;<PlayPauseButton onChange={a=>{setPlay(a)}} isPlay={isPlay} />
```

```js
import { useState } from 'react'
let [isPlay, setPlay] = useState(true)

;<PlayPauseButton onChange={a=>{setPlay(a)}} isPlay={isPlay} />
```