#### Typography elements

##### Hero titles

```js
<Typography.Hero align="center">Hello</Typography.Hero>

<Typography.Hero sub align="center">world</Typography.Hero>
```

##### Heading titles

```js
<Typography.Heading level={1}>Heading 1</Typography.Heading>
<Typography.Heading level={2}>Heading 2</Typography.Heading>
<Typography.Heading level={3}>Heading 3</Typography.Heading>
```

##### Lead text

```js
<Typography.Lead>Lead text</Typography.Lead>
<Typography.Lead highlighted>Lead text (highlighted)</Typography.Lead>
<Typography.Lead compact>Compact lead text</Typography.Lead>
<Typography.Lead compact highlighted>Compact lead text (highlighted)</Typography.Lead>

```

##### Paragraphs

```js
<Typography.Paragraph>Paragraph</Typography.Paragraph>
<Typography.Paragraph highlighted>Paragraph (highlighted)</Typography.Paragraph>

```

##### Text

```js
<Typography.Text color="disabled">Text</Typography.Text>
<br/>
<Typography.Text color="primary" type="link">Link text</Typography.Text>
<br/>
<Typography.Text type="label">Label text</Typography.Text>
<br/>
<div style={{background: '#000', display: 'inline-block'}}>
<Typography.Text color="inverse" type="highlighted">Highlighted text</Typography.Text>
</div>
<br/>
<Typography.Text type="hint">Hint text</Typography.Text>
<br/>
<br/>
<Typography.Text type="hint" size="small">small hint text</Typography.Text>
<br/>
<Typography.Text compact>compact text</Typography.Text>
```