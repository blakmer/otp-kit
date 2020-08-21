```js
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Typography from '../src/Typography'
import Grid from '../src/Grid'
import Block from '../src/Block'
import Tabs from '../src/Tabs'
import NotificationContainer, { store } from '../src/Notification'
const { Row, Col } = Grid

const ITEMS = [
    {group: 'Primary Colors', colors: [
        { name: 'color-primary', light: ' #52ae30', dark: ' #52ae30' },
        { name: 'color-primary-hover', light: ' #74bf1e', dark: ' #74bf1e' },
        { name: 'color-highlighted', light: ' #ff6600', dark: ' #ff6600' },
        { name: 'color-highlighted-hover', light: ' #ff802b', dark: ' #ff802b' },
        { name: 'color-blue', light: ' #1b82e3', dark: ' #1b82e3' },
        { name: 'color-blue-hover', light: ' #3e9ef7', dark: ' #3e9ef7' },
        { name: 'color-error', light: ' #ff435a', dark: ' #ff435a' },
        { name: 'color-error-hover', light: ' #ff5c6f', dark: ' #ff5c6f' },
        { name: 'color-alert', light: ' #ffcc00', dark: ' #ffcc00' },
        { name: 'color-white', light: ' #ffffff', dark: ' #ffffff', border: '1px solid #AAA' },
        { name: 'color-black', light: ' #000000', dark: ' #000000' },
    ]},
    {group: 'Text Colors', colors: [
        { name: 'color-text-primary', light: ' #1b1f27', dark: ' #e6eaf2' },
        { name: 'color-text-secondary', light: ' #6e7482', dark: ' #a1a7b3' },
        { name: 'color-text-disabled', light: ' #ababab', dark: ' #676b73' },
        { name: 'color-text-inverse', light: ' #e6eaf2', dark: ' #1b1f27' },
    ]},
    {group: 'Inputs, Borders, Shadows', colors: [
        { name: 'color-bg-input', light: ' #ffffff', dark: ' #292c33', border: '1px solid #AAA' },
        { name: 'color-bg-input-disabled', light: ' #f1f1f1', dark: ' #393b4040', border: '1px solid #AAA' },
        { name: 'color-border', light: ' #8e939f', dark: ' #737780' },
        { name: 'color-shadow', light: 'rgba(73, 92, 136, 0.15)', dark: 'none' },
    ]},
    {group: 'Background', colors: [
        { name: 'color-bg-grey-1', light: ' #d3d9e6', dark: '#1f2226', border: '1px solid #AAA' },
        { name: 'color-bg-grey-2', light: ' #e2e6f0', dark: '#292c33' },
        { name: 'color-bg-grey-3', light: ' #eff2f9', dark: '#333740' },
        { name: 'color-bg-grey-4', light: ' #f7f9ff', dark: '#474d59', border: '1px solid #AAA' },
        { name: 'color-bg-pastel-yellow', light: ' #fff8db', dark: ' #fff8db' },
        { name: 'color-bg-pastel-orange', light: ' #ffefd6', dark: ' #ffefd6' },
        { name: 'color-bg-pastel-red', light: ' #ffe0e3', dark: ' #ffe0e3' },
        { name: 'color-bg-pastel-blue', light: ' #dbf4fa', dark: ' #dbf4fa' },
        { name: 'color-bg-pastel-green', light: ' #def7ea', dark: ' #def7ea' },
        { name: 'color-modal-overlay', light: ' #1b1f2750', dark: ' #1b1f2750' },
    ]},
    {group: 'Hero Background Colors', colors: [
        { name: 'color-hero-bg-pastel-ocher', light: ' #e9c597', dark: ' #e9c597' },
        { name: 'color-hero-bg-pastel-yellow', light: ' #ffe680', dark: ' #ffe680'},
        { name: 'color-hero-bg-pastel-orange', light: ' #f6ae8b', dark: ' #f6ae8b'},
        { name: 'color-hero-bg-pastel-red', light: ' #dbb4c1', dark: ' #dbb4c1' },
        { name: 'color-hero-bg-pastel-purple', light: ' #d1bcdc', dark: ' #d1bcdc'},
        { name: 'color-hero-bg-pastel-violet', light: ' #cf98d9', dark: ' #cf98d9'},
        { name: 'color-hero-bg-pastel-blue', light: ' #a3cbe6', dark: ' #a3cbe6' },
        { name: 'color-hero-bg-pastel-green', light: ' #a8ccab', dark: ' #a8ccab' },
        { name: 'color-hero-bg-pastel-lime', light: ' #aad17d', dark: ' #aad17d' },
        { name: 'color-hero-bg-pastel-coral', light: ' #84bdb1', dark: ' #84bdb1' },
    ]},
    {group: 'Notification Colors', colors: [
        { name: 'color-notification-success', light: ' #298d37', dark: ' #298d37' },
        { name: 'color-notification-error', light: ' #ff435a', dark: ' #ff435a' },
    ]},
    {group: 'Chart Colors', colors: [
        { name: 'color-chart-blue', light: ' #1b82e3', dark: ' #1b82e3' },
        { name: 'color-chart-yellow', light: ' #ffcc00', dark: ' #ffcc00' },
        { name: 'color-chart-purple', light: ' #650c90', dark: ' #650c90' },
        { name: 'color-chart-violet', light: ' #ab47bc', dark: ' #ab47bc' },
        { name: 'color-chart-coral', light: ' #1bbc9b', dark: ' #1bbc9b' },
        { name: 'color-chart-green', light: ' #52ae30', dark: ' #52ae30' },
    ]},
    {group: 'Terminal Colors', colors: [
        { name: 'color-bg-terminal-1', light: ' #474d59', dark: ' #474d59', border: '1px solid #AAA' },
        { name: 'color-bg-terminal-2', light: ' #333740', dark: ' #333740' },
        { name: 'color-bg-terminal-4', light: ' #1f2226', dark: ' #1f2226' },
        { name: 'color-text-terminal-primary', light: ' #e6eaf2', dark: ' #e6eaf2'},
        { name: 'color-text-terminal-secondary',light: ' #a1a7b3',dark: ' #a1a7b3'},
    ]},
    {group: 'Logo Colors', colors: [
        { name: 'color-logo-1', light: ' #006648', dark: ' #006648' },
        { name: 'color-logo-2', light: ' #52ae30', dark: ' #52ae30' },
    ]}
]

const openNotification = (msg) => {
    store.addNotification({
    message: msg,
    type: "success",
    insert: "top",
    container: "top-center",
    dismiss: {
      duration: 2000,
      onScreen: false,
      showIcon: true,
    }
})};  

const [theme, setTheme] = useState('Light')

const Sphere = ({ name, fill, border }) =>
  fill !== 'none' && (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
      }}>
      <CopyToClipboard
        text={name}
        onCopy={val => {
          openNotification(`Copied to clipboard: "${val}"`)
        }}>
        <label
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '1.5rem',
            background: fill,
            marginBottom: '.5rem',
            cursor: 'pointer',
            border: border,
          }}
        />
      </CopyToClipboard>
      <Typography.Text
        style={{
          color: theme === 'Dark' ? '#E6EAF2' : '#1B1F27',
          textAlign: 'center',
        }}
        type="highlighted">
        {name}
      </Typography.Text>
      <div style={{ color: theme === 'Dark' ? '#E6EAF2' : '#1B1F27' }}>
        {fill}
      </div>
    </div>
  )

;<Block
  style={{ background: theme === 'Dark' ? '#474D59' : '#FFFFFF' }}
  borderRadius={32}
  padding={[16]}>
  <Row style={{ margin: '1rem' }} justify={'between'}>
    <Typography.Heading
      style={{ color: theme === 'Dark' ? '#E6EAF2' : '#1B1F27' }}>
      {theme} Theme Colors
    </Typography.Heading>
    <Tabs
      style={{background: theme === 'Dark' ? '#434A56' : '#F6F6F6' }}
      size="small"
      data={[
        { title: 'Light', value: 'Light' },
        { title: 'Dark', value: 'Dark' },
      ]}
      onChange={v => setTheme(v)}
    />
  </Row>
  {ITEMS.map((group, i) => (
    <div key={i} style={{ marginTop: '1rem', marginBottom: '2rem' }}>
      <Typography.Heading
        style={{ color: theme === 'Dark' ? '#E6EAF2' : '#1B1F27', marginLeft: '1rem' }}
        level={3}>
        {group.group}
      </Typography.Heading>
      <Row>
        {group.colors.map((color, index) => (
          <Col key={`${i} ${index}`} md={4}>
            <Sphere
              name={color.name}
              fill={theme === 'Dark' ? color.dark : color.light}
              border={color.border}
            />
          </Col>
        ))}
      </Row>
    </div>
  ))}
  <NotificationContainer />
</Block>
```