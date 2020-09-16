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
    if (/\-\-color\-[a-z0-9\-]*\:\ [a-f0-9#]*\;/.test(line)) {
      variables.push(line)
    }
  }
  return variables
}

function createFiles(vars) {
  const path = './src/classes.module.css'
  fs.writeFileSync(path, '/** == GENERATED FROM `./color-gen.js` FILE == **/')
  vars.forEach(element => {
    const matches = element.match(/\-\-color\-([a-z0-9\-]*)\:\ [a-f0-9#]*\;/)
    if (matches) {
      const string = `
            .${matches[1]}-text, .${matches[1]}-text-before:before, .${matches[1]}-text-after:after {
                color: var(--color-${matches[1]})
            }
            .${matches[1]}-text-hover:hover, .${matches[1]}-text-before-hover:hover:before, .${matches[1]}-text-after-hover:hover:after {
              color: var(--color-${matches[1]})
            }
            .${matches[1]}-text-active:active, .${matches[1]}-text-before-active:active:before, .${matches[1]}-text-after-active:active:after {
              color: var(--color-${matches[1]})
            }
            .${matches[1]}-bg, .${matches[1]}-bg-before:before, .${matches[1]}-bg-after:after {
                background-color: var(--color-${matches[1]})
            }
            .${matches[1]}-bg-hover:hover, .${matches[1]}-bg-before-hover:hover:before, .${matches[1]}-bg-after-hover:hover:after {
              background-color: var(--color-${matches[1]})
            }
            .${matches[1]}-bg-active:active, .${matches[1]}-bg-before-active:active:before, .${matches[1]}-bg-after-active:active:after {
              background-color: var(--color-${matches[1]})
            }
            .${matches[1]}-fill {
                fill: var(--color-${matches[1]})
            }
            .${matches[1]}-stroke {
                stroke: var(--color-${matches[1]})
            }
            .${matches[1]}-border, .${matches[1]}-border-before:before, .${matches[1]}-border-after:after {
              border-color: var(--color-${matches[1]}) !important
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
