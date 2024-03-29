#### Typography elements

##### Hero titles

```js
<Typography.Hero align="center">Hello - 40px</Typography.Hero>

<Typography.Hero sub align="center">world - 24px</Typography.Hero>
```

##### Heading titles

```js
<Typography.Heading level={1}>Heading 1 - 32px</Typography.Heading>
<Typography.Heading level={2}>Heading 2 - 24px</Typography.Heading>
<Typography.Heading level={3}>Heading 3 - 20px</Typography.Heading>
```

##### Lead text

```js
<Typography.Lead>Lead text - 18px</Typography.Lead>
<Typography.Lead highlighted>Lead text (highlighted)</Typography.Lead>
<Typography.Lead compact>Compact lead text</Typography.Lead>
<Typography.Lead compact highlighted>Compact lead text (highlighted)</Typography.Lead>

```

##### Paragraphs

```js
<Typography.Paragraph>Paragraph - 16px</Typography.Paragraph>
<Typography.Paragraph highlighted>Paragraph (highlighted)</Typography.Paragraph>

```

##### Text

```js
import classes from '../classes.module.css'
;<div>
  <Typography.Text fill="text-disabled">Text - 16px</Typography.Text>
  <br />
  <Typography.Text fill="text-primary" type="link">
    Link text
  </Typography.Text>
  <br />
  <Typography.Text type="label">Label text</Typography.Text>
  <br />
  <div
    className={classes['text-primary-bg']}
    style={{ display: 'inline-block' }}>
    <Typography.Text fill="text-inverse" type="highlighted">
      Highlighted text
    </Typography.Text>
  </div>
  <br />
  <Typography.Text type="hint">Hint text</Typography.Text>
  <br />
  <br />
  <Typography.Text type="hint" size="small">
    small hint text - 14px
  </Typography.Text>
  <br />
  <Typography.Text compact>compact text</Typography.Text>
</div>
```
