import React from 'react'
import {
  Container,
  Row,
  Col as ParentCol,
  Visible,
  Hidden,
  ScreenClassRender,
  useScreenClass,
  setConfiguration,
  ScreenClassProvider,
} from 'react-grid-system'

setConfiguration({
  // sm, md,  lg,  xl,   xxl
  breakpoints: [576, 768, 992, 1024, 1440],
  containerWidths: [540, 740, 960, 1024, 1440],
  gutterWidth: 24,
  gridColumns: 24,
  defaultScreenClass: 'xxl',
})

const Col = props => (
  <ParentCol {...props} style={{ ...props.style, position: 'static' }} />
)

export default {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender,
  useScreenClass,
  ScreenClassProvider,
}
