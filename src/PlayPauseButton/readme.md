PlayPauseButton

```js
import { useState } from 'react'
let [isPlay, playPause] = useState(false)
const handleChange = () => {
    playPause(!isPlay)
}
<PlayPauseButton onChange={handleChange} isPlay={isPlay} />
```

```js
import { useState } from 'react'
let [isPlay, playPause] = useState(true)
const handleChange = () => {
    playPause(!isPlay)
}
<PlayPauseButton onChange={handleChange} isPlay={isPlay} />
```