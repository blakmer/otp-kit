#### Pagination component

```js
import React, {useState} from 'react';
let [currentPage,changePage] = useState(0);
const handlePageChange = page => {
console.log(page);
changePage(page);
}

;<Pagination 
current={currentPage} 
total={99} 
onPageChanged={handlePageChange}
/>
```
