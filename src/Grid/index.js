import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender,
  useScreenClass,
  setConfiguration,
  ScreenClassProvider,
} from 'react-grid-system'

setConfiguration({
  // sm, md, lg, xl
  breakpoints: [768, 1024, 1280, 1536],
  containerWidths: [744, 1000, 1256, 1512],
  gutterWidth: 12,
  gridColumns: 12,
  defaultScreenClass: 'md',
})

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
