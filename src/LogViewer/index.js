import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'
import Highlighter from 'react-highlight-words'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Grid from '../Grid'
import InfinityScroll from '../InfinityScroll'
import classnames from 'classnames'
import Icon from '../Icon'
import Typography from '../Typography'
import styles from './index.module.css'

const { Row, Col } = Grid

const LogString = props => {
  const {
    date,
    level,
    message,
    trace,
    active,
    onChange,
    desired,
    searchStr,
  } = props
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classnames(
        styles.logStr,
        hover && styles.hover,
        active && styles.active
      )}
      onClick={() => {
        onChange(props)
      }}>
      <span className={classnames(styles.logStrPrefix)}>
        <span className={classnames(styles.desired, desired && styles.find)} />
        <span className={styles.traceArow}>
          {trace ? (!active ? '▼' : '▲') : ''}
        </span>
      </span>
      <span className={styles.logStrDate}>{date}</span>
      <span className={styles.msgBlock}>
        <span>
          <span className={classnames(styles.logStrLevel, styles[level])}>
            {level}
          </span>
          <span className={styles.logStrMessage}>
            <Highlighter
              highlightClassName={
                active ? styles.activeHighlight : styles.baseHighlight
              }
              textToHighlight={message}
              searchWords={[searchStr]}
            />
          </span>
        </span>
        {active && (
          <span className={styles.logStrTrace}>
            <Highlighter
              highlightClassName={
                active ? styles.activeHighlight : styles.baseHighlight
              }
              textToHighlight={trace}
              searchWords={[searchStr]}
            />
          </span>
        )}
      </span>
      {(hover || active) && (
        <CopyToClipboard text={message}>
          <div className={styles.copyIcon}>
            <Icon.Small type="external-link" fill="text-terminal-secondary" />
          </div>
        </CopyToClipboard>
      )}
    </div>
  )
}

const LogViewer = props => {
  const { height, logs, tail, searchStr, onChange, debug, active } = props
  return (
    <div className={styles.logViewerContainer}>
      <Row nogutter>
        <Col
          {...{
            xs: debug ? 8 : 12,
            sm: debug ? 8 : 12,
            md: debug ? 8 : 12,
            lg: debug ? 8 : 12,
            xl: debug ? 8 : 12,
          }}>
          <InfinityScroll
            height={height}
            scrollBottom={tail}
            className={styles.logViewer}
            data={logs.map((i, k) => (
              <LogString
                {...i}
                key={k}
                onChange={onChange}
                searchStr={searchStr}
              />
            ))}
          />
        </Col>
        {debug && (
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <div style={{ minHeight: height }} className={styles.contextViewer}>
              {active ? (
                <div className={styles.contextFull}>
                  {active && (
                    <ReactJson
                      src={logs[active].context}
                      theme="monokai"
                      collapsed={false}
                      displayObjectSize={false}
                      displayDataTypes={false}
                      sortKeys={false}
                      name={false}
                      style={{ background: 'transparent' }}
                    />
                  )}
                </div>
              ) : (
                <div className={styles.contextEmpty}>
                  <Icon.ClipArt
                    fill="notification-success"
                    type="terminal-book"
                  />
                  <Typography.Lead highlighted fill="text-terminal-primary" align="center">
                    Контекст отсутствует
                  </Typography.Lead>
                  <Typography.Text fill="text-terminal-secondary" align="center">
                    Для отображения контекста выберите хотя бы одно событие в
                    журнале событий
                  </Typography.Text>
                </div>
              )}
            </div>
          </Col>
        )}
      </Row>
    </div>
  )
}

LogViewer.propTypes = {
  height: PropTypes.number,
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      desired: PropTypes.bool,
      date: PropTypes.string,
      level: PropTypes.string,
      message: PropTypes.string,
      trace: PropTypes.string,
      context: PropTypes.object,
    })
  ),
  onChange: PropTypes.func,
  tail: PropTypes.bool,
  searchStr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  debug: PropTypes.bool,
  active: PropTypes.any,
}

LogViewer.defaultProps = {
  logs: [],
  tail: false,
  onChange: () => {},
  height: 500,
}

export default LogViewer
