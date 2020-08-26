#### Pagination component

```js
import React, { useState } from 'react'
const [currentPage, changePage] = useState(0)
const handlePageChange = page => {
  console.log(page)
  changePage(page)
}

;<Pagination
  style={{marginLeft: '2rem'}}
  current={currentPage}
  total={99}
  onPageChanged={handlePageChange}
/>
```

#### With background
```js
import React, { useState } from 'react'
const [currentPage, changePage] = useState(0)
const handlePageChange = page => {
  console.log(page)
  changePage(page)
}

;<div style={{background: 'var(--color-bg-grey-3)', padding: '2rem'}}>
  <Pagination
    background="bg-input"
    current={currentPage}
    total={99}
    onPageChanged={handlePageChange}
  />
</div>
```
