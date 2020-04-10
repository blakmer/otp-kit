const fs = require('fs')
const readline = require('readline')

async function readFile() {
  const fileStream = fs.createReadStream('./src/themes/light.css')

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })
  const variables = []
  for await (const line of rl) {
    if (/\-\-color\-[a-z\-]*\:\ [a-f0-9#]*\;/.test(line)) {
      variables.push(line)
    }
  }
  return variables
}

function createFiles(vars) {
  const path = './src/classes.css'
  fs.writeFileSync(path, '/** == GENERATED FROM `./color-gen.js` FILE == **/')
  vars.forEach(element => {
    const matches = element.match(/\-\-color\-([a-z\-]*)\:\ [a-f0-9#]*\;/)
    if (matches) {
      const string = `
            .${matches[1]}-text {
                color: var(--color-${matches[1]})
            }
            .${matches[1]}-bg {
                background-color: var(--color-${matches[1]})
            }
            .${matches[1]}-fill {
                fill: var(--color-${matches[1]})
            }
        `
      fs.appendFileSync(path, string)
    }
  })
}

async function main() {
  console.log('== start')
  console.log('== read file')
  const vars = await readFile()
  console.log('== write file')
  createFiles(vars)
  console.log('== finish')
}

main()
