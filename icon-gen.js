const fs = require('fs')
const path = require('path')
const iconPath = './src/Icon'
const readmeFile = path.join(iconPath, 'readme.md')

function write(string) {
  fs.appendFileSync(readmeFile, string || '')
}

function createIcons(files, { before, columnGetter, after }) {
  write(before)
  files.forEach(file => {
    const element = file.replace(/.js\b/, '')
    write(columnGetter(element))
  })
  write(after)
}

function createGroup(groupName) {
  const dir = path.join(iconPath, groupName, 'types')
  const files = fs.readdirSync(dir)
  const before = `

#### ${groupName}

\`\`\`js
import React, { useState } from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title =>
  title.indexOf(search) >= 0 ? {} : { display: 'none' }

;<Container>
  <Row style={{ marginBottom: '1rem' }}>
    <Col md={12}>
      <SearchInput
        onChange={e => setSearch(e.target.value)}
        onRemove={() => setSearch('')}
        block
      />
    </Col>
  </Row>
  <Row>`

  const columnGetter = element => `
<Col style={{ textAlign: 'center', ...checkVisible("${element}") }} sm={3} md={3}>
  <Icon.${groupName} type="${element}" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>${element}</div>
</Col>`

  const after = `
  </Row>
</Container>
\`\`\``
  createIcons(files, { before, columnGetter, after })
}

;(function main() {
  console.log('== start')
  fs.writeFileSync(readmeFile, '#### Icon types')
  console.log('== creating Small icons')
  createGroup('Small')
  console.log('== creating Medium icons')
  createGroup('Medium')
  console.log('== creating Large icons')
  createGroup('Large')
  console.log('== creating ClipArt icons')
  createGroup('ClipArt')
  console.log('== finish')
})()
