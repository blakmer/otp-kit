#### COLORS

```js
import { CopyToClipboard } from 'react-copy-to-clipboard'

let colors = [
  { name: '--color-primary', light: ' #52ae30', dark: ' #52ae30' },
  { name: '--color-primary-hover', light: ' #74bf1e', dark: ' #74bf1e' },
  { name: '--color-highlighted', light: ' #ff6600', dark: ' #ff6600' },
  { name: '--color-highlighted-hover', light: ' #ff802b', dark: ' #ff802b' },
  { name: '--color-blue', light: ' #1b82e3', dark: ' #1b82e3' },
  { name: '--color-blue-hover', light: ' #3e9ef7', dark: ' #3e9ef7' },
  { name: '--color-error', light: ' #ff435a', dark: ' #ff435a' },
  { name: '--color-error-hover', light: ' #ff5c6f', dark: ' #ff5c6f' },
  { name: '--color-alert', light: ' #ffcc00', dark: ' #ffcc00' },
  { name: '--color-white', light: ' #ffffff', dark: ' #ffffff' },
  { name: '--color-black', light: ' #000000', dark: ' #000000' },
  { name: '--color-bg-grey-1', light: ' #d3d9e6', dark: ' #474d59' },
  { name: '--color-bg-grey-2', light: ' #e2e6f0', dark: ' #333740' },
  { name: '--color-bg-grey-3', light: ' #eff2f9', dark: ' #292c33' },
  { name: '--color-bg-grey-4', light: ' #f7f9ff', dark: ' #1f2226' },
  { name: '--color-bg-input', light: ' #ffffff', dark: ' #292c33' },
  { name: '--color-bg-input-disabled', light: ' #f1f1f1', dark: ' #393b4040' },
  { name: '--color-border', light: ' #8e939f', dark: ' #737780' },
  { name: '--color-shadow', light: ' rgba(73, 92, 136, 0.15)', dark: ' none' },
  { name: '--color-modal-overlay', light: ' #1b1f2750', dark: ' #1b1f2750' },
  { name: '--color-text-primary', light: ' #1b1f27', dark: ' #e6eaf2' },
  { name: '--color-text-secondary', light: ' #6e7482', dark: ' #a1a7b3' },
  { name: '--color-text-disabled', light: ' #ababab', dark: ' #676b73' },
  { name: '--color-text-inverse', light: ' #e6eaf2', dark: ' #1b1f27' },
  { name: '--color-chart-blue', light: ' #1b82e3', dark: ' #1b82e3' },
  { name: '--color-chart-yellow', light: ' #ffcc00', dark: ' #ffcc00' },
  { name: '--color-chart-purple', light: ' #650c90', dark: ' #650c90' },
  { name: '--color-chart-violet', light: ' #ab47bc', dark: ' #ab47bc' },
  { name: '--color-chart-coral', light: ' #1bbc9b', dark: ' #1bbc9b' },
  { name: '--color-chart-green', light: ' #52ae30', dark: ' #52ae30' },
  { name: '--color-bg-pastel-yellow', light: ' #fff8db', dark: ' #fff8db' },
  { name: '--color-bg-pastel-orange', light: ' #ffefd6', dark: ' #ffefd6' },
  { name: '--color-bg-pastel-red', light: ' #ffe0e3', dark: ' #ffe0e3' },
  { name: '--color-bg-pastel-blue', light: ' #dbf4fa', dark: ' #dbf4fa' },
  { name: '--color-bg-pastel-green', light: ' #def7ea', dark: ' #def7ea' },
  { name: '--color-hero-bg-pastel-ocher', light: ' #e9c597', dark: ' #e9c597' },
  {
    name: '--color-hero-bg-pastel-yellow',
    light: ' #ffe680',
    dark: ' #ffe680',
  },
  {
    name: '--color-hero-bg-pastel-orange',
    light: ' #f6ae8b',
    dark: ' #f6ae8b',
  },
  { name: '--color-hero-bg-pastel-red', light: ' #dbb4c1', dark: ' #dbb4c1' },
  {
    name: '--color-hero-bg-pastel-purple',
    light: ' #d1bcdc',
    dark: ' #d1bcdc',
  },
  {
    name: '--color-hero-bg-pastel-violet',
    light: ' #cf98d9',
    dark: ' #cf98d9',
  },
  { name: '--color-hero-bg-pastel-blue', light: ' #a3cbe6', dark: ' #a3cbe6' },
  { name: '--color-hero-bg-pastel-green', light: ' #a8ccab', dark: ' #a8ccab' },
  { name: '--color-hero-bg-pastel-lime', light: ' #aad17d', dark: ' #aad17d' },
  { name: '--color-hero-bg-pastel-coral', light: ' #84bdb1', dark: ' #84bdb1' },
  { name: '--color-notification-success', light: ' #298d37', dark: ' #298d37' },
  { name: '--color-notification-error', light: ' #ff435a', dark: ' #ff435a' },
  {
    name: '--color-text-terminal-primary',
    light: ' #e6eaf2',
    dark: ' #e6eaf2',
  },
  {
    name: '--color-text-terminal-secondary',
    light: ' #a1a7b3',
    dark: ' #a1a7b3',
  },
  { name: '--color-bg-terminal-4', light: ' #1f2226', dark: ' #1f2226' },
  { name: '--color-bg-terminal-2', light: ' #333740', dark: ' #333740' },
  { name: '--color-bg-terminal-1', light: ' #474d59', dark: ' #474d59' },
  { name: '--color-logo-1', light: ' #006648', dark: ' #006648' },
  { name: '--color-logo-2', light: ' #52ae30', dark: ' #52ae30' },
]

const column = color => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  marginLeft: '1.6rem',
  marginRight: '1.6rem',
  textAlign: 'center',
  fontSize: 'var(--font-regular)',
  lineHeight: '1.5rem',
  backgroundColor: color,
  boxSizing: 'border-box',
  borderRadius: '1.25rem',
})

const wrapper = {
  display: 'flex',
  paddingBottom: '1rem',
  width: '100%',
  justifyContent: 'space-around',
}

const title = { fontFamily: 'var(--font-regular)', fontWeight: 'bold' }

const Picker = ({ colors }) => (
  <div>
    <div style={wrapper}>
      <div style={title}>Light</div>
      <div style={title}>Dark</div>
    </div>
    {colors.map(({ dark, light, name }, key) => (
      <CopyToClipboard key={key} text={name}>
        <div style={wrapper}>
          <div style={column(light)}>{light}</div>
          <div style={column(dark)}>{dark}</div>
        </div>
      </CopyToClipboard>
    ))}
  </div>
)

;<>
  <Picker colors={colors} />
</>
```
