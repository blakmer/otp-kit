#### Icon types

#### Small

```js
import React, {useState} from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title => title.indexOf(search) >= 0 ? {} : {display: 'none'}

;<Container>
  <Row style={{ marginBottom: '1rem'}}>
    <Col md={12}>
      <SearchInput onChange={e=>setSearch(e.target.value)} onRemove={()=>setSearch('')} block/>
    </Col>
  </Row>
  <Row>
    <Col style={{ textAlign: 'center', ...checkVisible("edit") }} sm={2} md={2}>
      <Icon.Small type="edit" />
      <div style={{ wordWrap: 'break-word' }}>edit</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-right") }} sm={2} md={2}>
      <Icon.Small type="arrow-right" />
      <div style={{ wordWrap: 'break-word' }}>arrow-right</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-left") }} sm={2} md={2}>
      <Icon.Small type="arrow-left" />
      <div style={{ wordWrap: 'break-word' }}>arrow-left</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-down") }} sm={2} md={2}>
      <Icon.Small type="arrow-down" />
      <div style={{ wordWrap: 'break-word' }}>arrow-down</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-up") }} sm={2} md={2}>
      <Icon.Small type="arrow-up" />
      <div style={{ wordWrap: 'break-word' }}>arrow-up</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hourglass") }} sm={2} md={2}>
      <Icon.Small type="hourglass" />
      <div style={{ wordWrap: 'break-word' }}>hourglass</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hammer") }} sm={2} md={2}>
      <Icon.Small type="hammer" />
      <div style={{ wordWrap: 'break-word' }}>hammer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("plus") }} sm={2} md={2}>
      <Icon.Small type="plus" />
      <div style={{ wordWrap: 'break-word' }}>plus</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("minus") }} sm={2} md={2}>
      <Icon.Small type="minus" />
      <div style={{ wordWrap: 'break-word' }}>minus</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tick") }} sm={2} md={2}>
      <Icon.Small type="tick" />
      <div style={{ wordWrap: 'break-word' }}>tick</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("close") }} sm={2} md={2}>
      <Icon.Small type="close" />
      <div style={{ wordWrap: 'break-word' }}>close</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("info") }} sm={2} md={2}>
      <Icon.Small type="info" />
      <div style={{ wordWrap: 'break-word' }}>info</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar") }} sm={2} md={2}>
      <Icon.Small type="calendar" />
      <div style={{ wordWrap: 'break-word' }}>calendar</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("refresh") }} sm={2} md={2}>
      <Icon.Small type="refresh" />
      <div style={{ wordWrap: 'break-word' }}>refresh</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("house-chimney") }} sm={2} md={2}>
      <Icon.Small type="house-chimney" />
      <div style={{ wordWrap: 'break-word' }}>house-chimney</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("trash") }} sm={2} md={2}>
      <Icon.Small type="trash" />
      <div style={{ wordWrap: 'break-word' }}>trash</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("alert-triangle") }} sm={2} md={2}>
      <Icon.Small type="alert-triangle" />
      <div style={{ wordWrap: 'break-word' }}>alert-triangle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("search") }} sm={2} md={2}>
      <Icon.Small type="search" />
      <div style={{ wordWrap: 'break-word' }}>search</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bulb") }} sm={2} md={2}>
      <Icon.Small type="bulb" />
      <div style={{ wordWrap: 'break-word' }}>bulb</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tick-in-circle") }} sm={2} md={2}>
      <Icon.Small type="tick-in-circle" />
      <div style={{ wordWrap: 'break-word' }}>tick-in-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("try-again") }} sm={2} md={2}>
      <Icon.Small type="try-again" />
      <div style={{ wordWrap: 'break-word' }}>try-again</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("mobile-phone") }} sm={2} md={2}>
      <Icon.Small type="mobile-phone" />
      <div style={{ wordWrap: 'break-word' }}>mobile-phone</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bank") }} sm={2} md={2}>
      <Icon.Small type="bank" />
      <div style={{ wordWrap: 'break-word' }}>bank</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("transactions") }} sm={2} md={2}>
      <Icon.Small type="transactions" />
      <div style={{ wordWrap: 'break-word' }}>transactions</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("download") }} sm={2} md={2}>
      <Icon.Small type="download" />
      <div style={{ wordWrap: 'break-word' }}>download</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("entertainment") }} sm={2} md={2}>
      <Icon.Small type="entertainment" />
      <div style={{ wordWrap: 'break-word' }}>entertainment</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("shopping") }} sm={2} md={2}>
      <Icon.Small type="shopping" />
      <div style={{ wordWrap: 'break-word' }}>shopping</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("restaurant") }} sm={2} md={2}>
      <Icon.Small type="restaurant" />
      <div style={{ wordWrap: 'break-word' }}>restaurant</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("transport") }} sm={2} md={2}>
      <Icon.Small type="transport" />
      <div style={{ wordWrap: 'break-word' }}>transport</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("telephone") }} sm={2} md={2}>
      <Icon.Small type="telephone" />
      <div style={{ wordWrap: 'break-word' }}>telephone</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("email") }} sm={2} md={2}>
      <Icon.Small type="email" />
      <div style={{ wordWrap: 'break-word' }}>email</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("notes-paper-text") }} sm={2} md={2}>
      <Icon.Small type="notes-paper-text" />
      <div style={{ wordWrap: 'break-word' }}>notes-paper-text</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("laptop") }} sm={2} md={2}>
      <Icon.Small type="laptop" />
      <div style={{ wordWrap: 'break-word' }}>laptop</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("upload") }} sm={2} md={2}>
      <Icon.Small type="upload" />
      <div style={{ wordWrap: 'break-word' }}>upload</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("car") }} sm={2} md={2}>
      <Icon.Small type="car" />
      <div style={{ wordWrap: 'break-word' }}>car</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("money-transfer") }} sm={2} md={2}>
      <Icon.Small type="money-transfer" />
      <div style={{ wordWrap: 'break-word' }}>money-transfer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("error") }} sm={2} md={2}>
      <Icon.Small type="error" />
      <div style={{ wordWrap: 'break-word' }}>error</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("car-online") }} sm={2} md={2}>
      <Icon.Small type="car-online" />
      <div style={{ wordWrap: 'break-word' }}>car-online</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("travel-bag") }} sm={2} md={2}>
      <Icon.Small type="travel-bag" />
      <div style={{ wordWrap: 'break-word' }}>travel-bag</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smile-unhappy") }} sm={2} md={2}>
      <Icon.Small type="smile-unhappy" />
      <div style={{ wordWrap: 'break-word' }}>smile-unhappy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("envelope") }} sm={2} md={2}>
      <Icon.Small type="envelope" />
      <div style={{ wordWrap: 'break-word' }}>envelope</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("fixed-money") }} sm={2} md={2}>
      <Icon.Small type="fixed-money" />
      <div style={{ wordWrap: 'break-word' }}>fixed-money</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("button-play") }} sm={2} md={2}>
      <Icon.Small type="button-play" />
      <div style={{ wordWrap: 'break-word' }}>button-play</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("gear") }} sm={2} md={2}>
      <Icon.Small type="gear" />
      <div style={{ wordWrap: 'break-word' }}>gear</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("power-off") }} sm={2} md={2}>
      <Icon.Small type="power-off" />
      <div style={{ wordWrap: 'break-word' }}>power-off</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("move-back") }} sm={2} md={2}>
      <Icon.Small type="move-back" />
      <div style={{ wordWrap: 'break-word' }}>move-back</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phone") }} sm={2} md={2}>
      <Icon.Small type="phone" />
      <div style={{ wordWrap: 'break-word' }}>phone</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("time-clock-circle") }} sm={2} md={2}>
      <Icon.Small type="time-clock-circle" />
      <div style={{ wordWrap: 'break-word' }}>time-clock-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("piggy") }} sm={2} md={2}>
      <Icon.Small type="piggy" />
      <div style={{ wordWrap: 'break-word' }}>piggy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("legal-hammer") }} sm={2} md={2}>
      <Icon.Small type="legal-hammer" />
      <div style={{ wordWrap: 'break-word' }}>legal-hammer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("credit-card") }} sm={2} md={2}>
      <Icon.Small type="credit-card" />
      <div style={{ wordWrap: 'break-word' }}>credit-card</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar-add") }} sm={2} md={2}>
      <Icon.Small type="calendar-add" />
      <div style={{ wordWrap: 'break-word' }}>calendar-add</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("flash") }} sm={2} md={2}>
      <Icon.Small type="flash" />
      <div style={{ wordWrap: 'break-word' }}>flash</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("lock") }} sm={2} md={2}>
      <Icon.Small type="lock" />
      <div style={{ wordWrap: 'break-word' }}>lock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("unlock") }} sm={2} md={2}>
      <Icon.Small type="unlock" />
      <div style={{ wordWrap: 'break-word' }}>unlock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("send-email") }} sm={2} md={2}>
      <Icon.Small type="send-email" />
      <div style={{ wordWrap: 'break-word' }}>send-email</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("trip-road") }} sm={2} md={2}>
      <Icon.Small type="trip-road" />
      <div style={{ wordWrap: 'break-word' }}>trip-road</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("single-neutral") }} sm={2} md={2}>
      <Icon.Small type="single-neutral" />
      <div style={{ wordWrap: 'break-word' }}>single-neutral</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("family-child") }} sm={2} md={2}>
      <Icon.Small type="family-child" />
      <div style={{ wordWrap: 'break-word' }}>family-child</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("family-add-new-member") }} sm={2} md={2}>
      <Icon.Small type="family-add-new-member" />
      <div style={{ wordWrap: 'break-word' }}>family-add-new-member</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hospital-first-aid") }} sm={2} md={2}>
      <Icon.Small type="hospital-first-aid" />
      <div style={{ wordWrap: 'break-word' }}>hospital-first-aid</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("award-ribbon-star") }} sm={2} md={2}>
      <Icon.Small type="award-ribbon-star" />
      <div style={{ wordWrap: 'break-word' }}>award-ribbon-star</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("analytics-pie") }} sm={2} md={2}>
      <Icon.Small type="analytics-pie" />
      <div style={{ wordWrap: 'break-word' }}>analytics-pie</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("office-file-pdf") }} sm={2} md={2}>
      <Icon.Small type="office-file-pdf" />
      <div style={{ wordWrap: 'break-word' }}>office-file-pdf</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("discount-circle") }} sm={2} md={2}>
      <Icon.Small type="discount-circle" />
      <div style={{ wordWrap: 'break-word' }}>discount-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("money-atm") }} sm={2} md={2}>
      <Icon.Small type="money-atm" />
      <div style={{ wordWrap: 'break-word' }}>money-atm</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar-clock") }} sm={2} md={2}>
      <Icon.Small type="calendar-clock" />
      <div style={{ wordWrap: 'break-word' }}>calendar-clock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("pin-location") }} sm={2} md={2}>
      <Icon.Small type="pin-location" />
      <div style={{ wordWrap: 'break-word' }}>pin-location</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("zoom-in") }} sm={2} md={2}>
      <Icon.Small type="zoom-in" />
      <div style={{ wordWrap: 'break-word' }}>zoom-in</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("zoom-out") }} sm={2} md={2}>
      <Icon.Small type="zoom-out" />
      <div style={{ wordWrap: 'break-word' }}>zoom-out</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("rotate-forward") }} sm={2} md={2}>
      <Icon.Small type="rotate-forward" />
      <div style={{ wordWrap: 'break-word' }}>rotate-forward</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("delete") }} sm={2} md={2}>
      <Icon.Small type="delete" />
      <div style={{ wordWrap: 'break-word' }}>delete</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phone-actions-call") }} sm={2} md={2}>
      <Icon.Small type="phone-actions-call" />
      <div style={{ wordWrap: 'break-word' }}>phone-actions-call</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("book") }} sm={2} md={2}>
      <Icon.Small type="book" />
      <div style={{ wordWrap: 'break-word' }}>book</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("location-target") }} sm={2} md={2}>
      <Icon.Small type="location-target" />
      <div style={{ wordWrap: 'break-word' }}>location-target</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bicycle") }} sm={2} md={2}>
      <Icon.Small type="bicycle" />
      <div style={{ wordWrap: 'break-word' }}>bicycle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("external-link") }} sm={2} md={2}>
      <Icon.Small type="external-link" />
      <div style={{ wordWrap: 'break-word' }}>external-link</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("baby-care-trolley") }} sm={2} md={2}>
      <Icon.Small type="baby-care-trolley" />
      <div style={{ wordWrap: 'break-word' }}>baby-care-trolley</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("saving-safe") }} sm={2} md={2}>
      <Icon.Small type="saving-safe" />
      <div style={{ wordWrap: 'break-word' }}>saving-safe</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("list") }} sm={2} md={2}>
      <Icon.Small type="list" />
      <div style={{ wordWrap: 'break-word' }}>list</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("earth") }} sm={2} md={2}>
      <Icon.Small type="earth" />
      <div style={{ wordWrap: 'break-word' }}>earth</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("star") }} sm={2} md={2}>
      <Icon.Small type="star" />
      <div style={{ wordWrap: 'break-word' }}>star</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("chrome") }} sm={2} md={2}>
      <Icon.Small type="chrome" />
      <div style={{ wordWrap: 'break-word' }}>chrome</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("firefox") }} sm={2} md={2}>
      <Icon.Small type="firefox" />
      <div style={{ wordWrap: 'break-word' }}>firefox</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("double-files") }} sm={2} md={2}>
      <Icon.Small type="double-files" />
      <div style={{ wordWrap: 'break-word' }}>double-files</div>
    </Col>
  </Row>
</Container>
```

#### Medium

```js
import React, {useState} from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title => title.indexOf(search) >= 0 ? {} : {display: 'none'}

;<Container>
  <Row style={{ marginBottom: '1rem'}}>
    <Col md={12}>
      <SearchInput onChange={e=>setSearch(e.target.value)} onRemove={()=>setSearch('')} block/>
    </Col>
  </Row>
  <Row>
    <Col style={{ textAlign: 'center', ...checkVisible("edit") }} sm={2} md={2}>
      <Icon.Medium type="edit" />
      <div style={{ wordWrap: 'break-word' }}>edit</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-right") }} sm={2} md={2}>
      <Icon.Medium type="arrow-right" />
      <div style={{ wordWrap: 'break-word' }}>arrow-right</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-left") }} sm={2} md={2}>
      <Icon.Medium type="arrow-left" />
      <div style={{ wordWrap: 'break-word' }}>arrow-left</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-down") }} sm={2} md={2}>
      <Icon.Medium type="arrow-down" />
      <div style={{ wordWrap: 'break-word' }}>arrow-down</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-up") }} sm={2} md={2}>
      <Icon.Medium type="arrow-up" />
      <div style={{ wordWrap: 'break-word' }}>arrow-up</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hourglass") }} sm={2} md={2}>
      <Icon.Medium type="hourglass" />
      <div style={{ wordWrap: 'break-word' }}>hourglass</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hammer") }} sm={2} md={2}>
      <Icon.Medium type="hammer" />
      <div style={{ wordWrap: 'break-word' }}>hammer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("plus") }} sm={2} md={2}>
      <Icon.Medium type="plus" />
      <div style={{ wordWrap: 'break-word' }}>plus</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("minus") }} sm={2} md={2}>
      <Icon.Medium type="minus" />
      <div style={{ wordWrap: 'break-word' }}>minus</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tick") }} sm={2} md={2}>
      <Icon.Medium type="tick" />
      <div style={{ wordWrap: 'break-word' }}>tick</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("close") }} sm={2} md={2}>
      <Icon.Medium type="close" />
      <div style={{ wordWrap: 'break-word' }}>close</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("info") }} sm={2} md={2}>
      <Icon.Medium type="info" />
      <div style={{ wordWrap: 'break-word' }}>info</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar") }} sm={2} md={2}>
      <Icon.Medium type="calendar" />
      <div style={{ wordWrap: 'break-word' }}>calendar</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("refresh") }} sm={2} md={2}>
      <Icon.Medium type="refresh" />
      <div style={{ wordWrap: 'break-word' }}>refresh</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("search") }} sm={2} md={2}>
      <Icon.Medium type="search" />
      <div style={{ wordWrap: 'break-word' }}>search</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("alert-triangle") }} sm={2} md={2}>
      <Icon.Medium type="alert-triangle" />
      <div style={{ wordWrap: 'break-word' }}>alert-triangle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bulb") }} sm={2} md={2}>
      <Icon.Medium type="bulb" />
      <div style={{ wordWrap: 'break-word' }}>bulb</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hamburger") }} sm={2} md={2}>
      <Icon.Medium type="hamburger" />
      <div style={{ wordWrap: 'break-word' }}>hamburger</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("car") }} sm={2} md={2}>
      <Icon.Medium type="car" />
      <div style={{ wordWrap: 'break-word' }}>car</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("analytics-pie") }} sm={2} md={2}>
      <Icon.Medium type="analytics-pie" />
      <div style={{ wordWrap: 'break-word' }}>analytics-pie</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("alarm-bell") }} sm={2} md={2}>
      <Icon.Medium type="alarm-bell" />
      <div style={{ wordWrap: 'break-word' }}>alarm-bell</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("profile") }} sm={2} md={2}>
      <Icon.Medium type="profile" />
      <div style={{ wordWrap: 'break-word' }}>profile</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("power-off") }} sm={2} md={2}>
      <Icon.Medium type="power-off" />
      <div style={{ wordWrap: 'break-word' }}>power-off</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("gear") }} sm={2} md={2}>
      <Icon.Medium type="gear" />
      <div style={{ wordWrap: 'break-word' }}>gear</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("trash") }} sm={2} md={2}>
      <Icon.Medium type="trash" />
      <div style={{ wordWrap: 'break-word' }}>trash</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("docs-tag-editor") }} sm={2} md={2}>
      <Icon.Medium type="docs-tag-editor" />
      <div style={{ wordWrap: 'break-word' }}>docs-tag-editor</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("machine-learning") }} sm={2} md={2}>
      <Icon.Medium type="machine-learning" />
      <div style={{ wordWrap: 'break-word' }}>machine-learning</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("folder") }} sm={2} md={2}>
      <Icon.Medium type="folder" />
      <div style={{ wordWrap: 'break-word' }}>folder</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("photo") }} sm={2} md={2}>
      <Icon.Medium type="photo" />
      <div style={{ wordWrap: 'break-word' }}>photo</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tag") }} sm={2} md={2}>
      <Icon.Medium type="tag" />
      <div style={{ wordWrap: 'break-word' }}>tag</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tag-check") }} sm={2} md={2}>
      <Icon.Medium type="tag-check" />
      <div style={{ wordWrap: 'break-word' }}>tag-check</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tag-alert") }} sm={2} md={2}>
      <Icon.Medium type="tag-alert" />
      <div style={{ wordWrap: 'break-word' }}>tag-alert</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tag-block") }} sm={2} md={2}>
      <Icon.Medium type="tag-block" />
      <div style={{ wordWrap: 'break-word' }}>tag-block</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("document-checked") }} sm={2} md={2}>
      <Icon.Medium type="document-checked" />
      <div style={{ wordWrap: 'break-word' }}>document-checked</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("document-empty") }} sm={2} md={2}>
      <Icon.Medium type="document-empty" />
      <div style={{ wordWrap: 'break-word' }}>document-empty</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("document-warning") }} sm={2} md={2}>
      <Icon.Medium type="document-warning" />
      <div style={{ wordWrap: 'break-word' }}>document-warning</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("document-incorrect") }} sm={2} md={2}>
      <Icon.Medium type="document-incorrect" />
      <div style={{ wordWrap: 'break-word' }}>document-incorrect</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("preferences") }} sm={2} md={2}>
      <Icon.Medium type="preferences" />
      <div style={{ wordWrap: 'break-word' }}>preferences</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("try-again") }} sm={2} md={2}>
      <Icon.Medium type="try-again" />
      <div style={{ wordWrap: 'break-word' }}>try-again</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("car-online") }} sm={2} md={2}>
      <Icon.Medium type="car-online" />
      <div style={{ wordWrap: 'break-word' }}>car-online</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smile-unhappy") }} sm={2} md={2}>
      <Icon.Medium type="smile-unhappy" />
      <div style={{ wordWrap: 'break-word' }}>smile-unhappy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("move-back") }} sm={2} md={2}>
      <Icon.Medium type="move-back" />
      <div style={{ wordWrap: 'break-word' }}>move-back</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("email") }} sm={2} md={2}>
      <Icon.Medium type="email" />
      <div style={{ wordWrap: 'break-word' }}>email</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phone") }} sm={2} md={2}>
      <Icon.Medium type="phone" />
      <div style={{ wordWrap: 'break-word' }}>phone</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("time-clock-circle") }} sm={2} md={2}>
      <Icon.Medium type="time-clock-circle" />
      <div style={{ wordWrap: 'break-word' }}>time-clock-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("upload") }} sm={2} md={2}>
      <Icon.Medium type="upload" />
      <div style={{ wordWrap: 'break-word' }}>upload</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("credit-card") }} sm={2} md={2}>
      <Icon.Medium type="credit-card" />
      <div style={{ wordWrap: 'break-word' }}>credit-card</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar-black") }} sm={2} md={2}>
      <Icon.Medium type="calendar-black" />
      <div style={{ wordWrap: 'break-word' }}>calendar-black</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar-add") }} sm={2} md={2}>
      <Icon.Medium type="calendar-add" />
      <div style={{ wordWrap: 'break-word' }}>calendar-add</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bank") }} sm={2} md={2}>
      <Icon.Medium type="bank" />
      <div style={{ wordWrap: 'break-word' }}>bank</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("transactions") }} sm={2} md={2}>
      <Icon.Medium type="transactions" />
      <div style={{ wordWrap: 'break-word' }}>transactions</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("download") }} sm={2} md={2}>
      <Icon.Medium type="download" />
      <div style={{ wordWrap: 'break-word' }}>download</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("entertainment") }} sm={2} md={2}>
      <Icon.Medium type="entertainment" />
      <div style={{ wordWrap: 'break-word' }}>entertainment</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("shopping") }} sm={2} md={2}>
      <Icon.Medium type="shopping" />
      <div style={{ wordWrap: 'break-word' }}>shopping</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("restaurant") }} sm={2} md={2}>
      <Icon.Medium type="restaurant" />
      <div style={{ wordWrap: 'break-word' }}>restaurant</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("transport") }} sm={2} md={2}>
      <Icon.Medium type="transport" />
      <div style={{ wordWrap: 'break-word' }}>transport</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("flash") }} sm={2} md={2}>
      <Icon.Medium type="flash" />
      <div style={{ wordWrap: 'break-word' }}>flash</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("lock") }} sm={2} md={2}>
      <Icon.Medium type="lock" />
      <div style={{ wordWrap: 'break-word' }}>lock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("unlock") }} sm={2} md={2}>
      <Icon.Medium type="unlock" />
      <div style={{ wordWrap: 'break-word' }}>unlock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("send-email") }} sm={2} md={2}>
      <Icon.Medium type="send-email" />
      <div style={{ wordWrap: 'break-word' }}>send-email</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("location-target") }} sm={2} md={2}>
      <Icon.Medium type="location-target" />
      <div style={{ wordWrap: 'break-word' }}>location-target</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("single-neutral") }} sm={2} md={2}>
      <Icon.Medium type="single-neutral" />
      <div style={{ wordWrap: 'break-word' }}>single-neutral</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("family-child") }} sm={2} md={2}>
      <Icon.Medium type="family-child" />
      <div style={{ wordWrap: 'break-word' }}>family-child</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("family-add-new-member") }} sm={2} md={2}>
      <Icon.Medium type="family-add-new-member" />
      <div style={{ wordWrap: 'break-word' }}>family-add-new-member</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hospital-first-aid") }} sm={2} md={2}>
      <Icon.Medium type="hospital-first-aid" />
      <div style={{ wordWrap: 'break-word' }}>hospital-first-aid</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("award-ribbon-star") }} sm={2} md={2}>
      <Icon.Medium type="award-ribbon-star" />
      <div style={{ wordWrap: 'break-word' }}>award-ribbon-star</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("button-play") }} sm={2} md={2}>
      <Icon.Medium type="button-play" />
      <div style={{ wordWrap: 'break-word' }}>button-play</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("office-file-pdf") }} sm={2} md={2}>
      <Icon.Medium type="office-file-pdf" />
      <div style={{ wordWrap: 'break-word' }}>office-file-pdf</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("discount-circle") }} sm={2} md={2}>
      <Icon.Medium type="discount-circle" />
      <div style={{ wordWrap: 'break-word' }}>discount-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("money-atm") }} sm={2} md={2}>
      <Icon.Medium type="money-atm" />
      <div style={{ wordWrap: 'break-word' }}>money-atm</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("house-chimney") }} sm={2} md={2}>
      <Icon.Medium type="house-chimney" />
      <div style={{ wordWrap: 'break-word' }}>house-chimney</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar-clock") }} sm={2} md={2}>
      <Icon.Medium type="calendar-clock" />
      <div style={{ wordWrap: 'break-word' }}>calendar-clock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("pin-location") }} sm={2} md={2}>
      <Icon.Medium type="pin-location" />
      <div style={{ wordWrap: 'break-word' }}>pin-location</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("zoom-in") }} sm={2} md={2}>
      <Icon.Medium type="zoom-in" />
      <div style={{ wordWrap: 'break-word' }}>zoom-in</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("zoom-out") }} sm={2} md={2}>
      <Icon.Medium type="zoom-out" />
      <div style={{ wordWrap: 'break-word' }}>zoom-out</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("reflect-right") }} sm={2} md={2}>
      <Icon.Medium type="reflect-right" />
      <div style={{ wordWrap: 'break-word' }}>reflect-right</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("rotate-forward") }} sm={2} md={2}>
      <Icon.Medium type="rotate-forward" />
      <div style={{ wordWrap: 'break-word' }}>rotate-forward</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phone-actions-call") }} sm={2} md={2}>
      <Icon.Medium type="phone-actions-call" />
      <div style={{ wordWrap: 'break-word' }}>phone-actions-call</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("book") }} sm={2} md={2}>
      <Icon.Medium type="book" />
      <div style={{ wordWrap: 'break-word' }}>book</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("trip-road") }} sm={2} md={2}>
      <Icon.Medium type="trip-road" />
      <div style={{ wordWrap: 'break-word' }}>trip-road</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bicycle") }} sm={2} md={2}>
      <Icon.Medium type="bicycle" />
      <div style={{ wordWrap: 'break-word' }}>bicycle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("style-three-pin-parking") }} sm={2} md={2}>
      <Icon.Medium type="style-three-pin-parking" />
      <div style={{ wordWrap: 'break-word' }}>style-three-pin-parking</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("baby-care-trolley") }} sm={2} md={2}>
      <Icon.Medium type="baby-care-trolley" />
      <div style={{ wordWrap: 'break-word' }}>baby-care-trolley</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("saving-safe") }} sm={2} md={2}>
      <Icon.Medium type="saving-safe" />
      <div style={{ wordWrap: 'break-word' }}>saving-safe</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("wifi") }} sm={2} md={2}>
      <Icon.Medium type="wifi" />
      <div style={{ wordWrap: 'break-word' }}>wifi</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("disability-wheelchair") }} sm={2} md={2}>
      <Icon.Medium type="disability-wheelchair" />
      <div style={{ wordWrap: 'break-word' }}>disability-wheelchair</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("earth") }} sm={2} md={2}>
      <Icon.Medium type="earth" />
      <div style={{ wordWrap: 'break-word' }}>earth</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("clock") }} sm={2} md={2}>
      <Icon.Medium type="clock" />
      <div style={{ wordWrap: 'break-word' }}>clock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("banking-account") }} sm={2} md={2}>
      <Icon.Medium type="banking-account" />
      <div style={{ wordWrap: 'break-word' }}>banking-account</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hierarchy") }} sm={2} md={2}>
      <Icon.Medium type="hierarchy" />
      <div style={{ wordWrap: 'break-word' }}>hierarchy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bank-customer") }} sm={2} md={2}>
      <Icon.Medium type="bank-customer" />
      <div style={{ wordWrap: 'break-word' }}>bank-customer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("transfer-user") }} sm={2} md={2}>
      <Icon.Medium type="transfer-user" />
      <div style={{ wordWrap: 'break-word' }}>transfer-user</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("computer") }} sm={2} md={2}>
      <Icon.Medium type="computer" />
      <div style={{ wordWrap: 'break-word' }}>computer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("news") }} sm={2} md={2}>
      <Icon.Medium type="news" />
      <div style={{ wordWrap: 'break-word' }}>news</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phonebook") }} sm={2} md={2}>
      <Icon.Medium type="phonebook" />
      <div style={{ wordWrap: 'break-word' }}>phonebook</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("legal-scale") }} sm={2} md={2}>
      <Icon.Medium type="legal-scale" />
      <div style={{ wordWrap: 'break-word' }}>legal-scale</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("text-options") }} sm={2} md={2}>
      <Icon.Medium type="text-options" />
      <div style={{ wordWrap: 'break-word' }}>text-options</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("paragraph") }} sm={2} md={2}>
      <Icon.Medium type="paragraph" />
      <div style={{ wordWrap: 'break-word' }}>paragraph</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("profil") }} sm={2} md={2}>
      <Icon.Medium type="profil" />
      <div style={{ wordWrap: 'break-word' }}>profil</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("document") }} sm={2} md={2}>
      <Icon.Medium type="document" />
      <div style={{ wordWrap: 'break-word' }}>document</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("calendar-warning") }} sm={2} md={2}>
      <Icon.Medium type="calendar-warning" />
      <div style={{ wordWrap: 'break-word' }}>calendar-warning</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("credit-card-lock") }} sm={2} md={2}>
      <Icon.Medium type="credit-card-lock" />
      <div style={{ wordWrap: 'break-word' }}>credit-card-lock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("credit-card-remove") }} sm={2} md={2}>
      <Icon.Medium type="credit-card-remove" />
      <div style={{ wordWrap: 'break-word' }}>credit-card-remove</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("house-nature") }} sm={2} md={2}>
      <Icon.Medium type="house-nature" />
      <div style={{ wordWrap: 'break-word' }}>house-nature</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("scooter") }} sm={2} md={2}>
      <Icon.Medium type="scooter" />
      <div style={{ wordWrap: 'break-word' }}>scooter</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("qr-code") }} sm={2} md={2}>
      <Icon.Medium type="qr-code" />
      <div style={{ wordWrap: 'break-word' }}>qr-code</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("touch-id") }} sm={2} md={2}>
      <Icon.Medium type="touch-id" />
      <div style={{ wordWrap: 'break-word' }}>touch-id</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("party-confetti") }} sm={2} md={2}>
      <Icon.Medium type="party-confetti" />
      <div style={{ wordWrap: 'break-word' }}>party-confetti</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("earth-globe") }} sm={2} md={2}>
      <Icon.Medium type="earth-globe" />
      <div style={{ wordWrap: 'break-word' }}>earth-globe</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("credit-card-payment") }} sm={2} md={2}>
      <Icon.Medium type="credit-card-payment" />
      <div style={{ wordWrap: 'break-word' }}>credit-card-payment</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("trailer") }} sm={2} md={2}>
      <Icon.Medium type="trailer" />
      <div style={{ wordWrap: 'break-word' }}>trailer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bus") }} sm={2} md={2}>
      <Icon.Medium type="bus" />
      <div style={{ wordWrap: 'break-word' }}>bus</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("earth-lock") }} sm={2} md={2}>
      <Icon.Medium type="earth-lock" />
      <div style={{ wordWrap: 'break-word' }}>earth-lock</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("left-right-arrow") }} sm={2} md={2}>
      <Icon.Medium type="left-right-arrow" />
      <div style={{ wordWrap: 'break-word' }}>left-right-arrow</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("list") }} sm={2} md={2}>
      <Icon.Medium type="list" />
      <div style={{ wordWrap: 'break-word' }}>list</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("timeline") }} sm={2} md={2}>
      <Icon.Medium type="timeline" />
      <div style={{ wordWrap: 'break-word' }}>timeline</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("login") }} sm={2} md={2}>
      <Icon.Medium type="login" />
      <div style={{ wordWrap: 'break-word' }}>login</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("currency") }} sm={2} md={2}>
      <Icon.Medium type="currency" />
      <div style={{ wordWrap: 'break-word' }}>currency</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("edit-user") }} sm={2} md={2}>
      <Icon.Medium type="edit-user" />
      <div style={{ wordWrap: 'break-word' }}>edit-user</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("vignette") }} sm={2} md={2}>
      <Icon.Medium type="vignette" />
      <div style={{ wordWrap: 'break-word' }}>vignette</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("health") }} sm={2} md={2}>
      <Icon.Medium type="health" />
      <div style={{ wordWrap: 'break-word' }}>health</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("legal-information") }} sm={2} md={2}>
      <Icon.Medium type="legal-information" />
      <div style={{ wordWrap: 'break-word' }}>legal-information</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("chat") }} sm={2} md={2}>
      <Icon.Medium type="chat" />
      <div style={{ wordWrap: 'break-word' }}>chat</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("toys") }} sm={2} md={2}>
      <Icon.Medium type="toys" />
      <div style={{ wordWrap: 'break-word' }}>toys</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hard-of-hearing") }} sm={2} md={2}>
      <Icon.Medium type="hard-of-hearing" />
      <div style={{ wordWrap: 'break-word' }}>hard-of-hearing</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("view") }} sm={2} md={2}>
      <Icon.Medium type="view" />
      <div style={{ wordWrap: 'break-word' }}>view</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("view-off") }} sm={2} md={2}>
      <Icon.Medium type="view-off" />
      <div style={{ wordWrap: 'break-word' }}>view-off</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("card-online-limit") }} sm={2} md={2}>
      <Icon.Medium type="card-online-limit" />
      <div style={{ wordWrap: 'break-word' }}>card-online-limit</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("edit-profile") }} sm={2} md={2}>
      <Icon.Medium type="edit-profile" />
      <div style={{ wordWrap: 'break-word' }}>edit-profile</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("add-partner") }} sm={2} md={2}>
      <Icon.Medium type="add-partner" />
      <div style={{ wordWrap: 'break-word' }}>add-partner</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("search-partner") }} sm={2} md={2}>
      <Icon.Medium type="search-partner" />
      <div style={{ wordWrap: 'break-word' }}>search-partner</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("queuing-long") }} sm={2} md={2}>
      <Icon.Medium type="queuing-long" />
      <div style={{ wordWrap: 'break-word' }}>queuing-long</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("print") }} sm={2} md={2}>
      <Icon.Medium type="print" />
      <div style={{ wordWrap: 'break-word' }}>print</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("office-file-iso") }} sm={2} md={2}>
      <Icon.Medium type="office-file-iso" />
      <div style={{ wordWrap: 'break-word' }}>office-file-iso</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("office-file-csv") }} sm={2} md={2}>
      <Icon.Medium type="office-file-csv" />
      <div style={{ wordWrap: 'break-word' }}>office-file-csv</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("office-file-xls") }} sm={2} md={2}>
      <Icon.Medium type="office-file-xls" />
      <div style={{ wordWrap: 'break-word' }}>office-file-xls</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("filter") }} sm={2} md={2}>
      <Icon.Medium type="filter" />
      <div style={{ wordWrap: 'break-word' }}>filter</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("buildings") }} sm={2} md={2}>
      <Icon.Medium type="buildings" />
      <div style={{ wordWrap: 'break-word' }}>buildings</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("shirt-plain") }} sm={2} md={2}>
      <Icon.Medium type="shirt-plain" />
      <div style={{ wordWrap: 'break-word' }}>shirt-plain</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phone-code") }} sm={2} md={2}>
      <Icon.Medium type="phone-code" />
      <div style={{ wordWrap: 'break-word' }}>phone-code</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("phone-noti") }} sm={2} md={2}>
      <Icon.Medium type="phone-noti" />
      <div style={{ wordWrap: 'break-word' }}>phone-noti</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("chair") }} sm={2} md={2}>
      <Icon.Medium type="chair" />
      <div style={{ wordWrap: 'break-word' }}>chair</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("announcement") }} sm={2} md={2}>
      <Icon.Medium type="announcement" />
      <div style={{ wordWrap: 'break-word' }}>announcement</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("wench") }} sm={2} md={2}>
      <Icon.Medium type="wench" />
      <div style={{ wordWrap: 'break-word' }}>wench</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("business") }} sm={2} md={2}>
      <Icon.Medium type="business" />
      <div style={{ wordWrap: 'break-word' }}>business</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("shield") }} sm={2} md={2}>
      <Icon.Medium type="shield" />
      <div style={{ wordWrap: 'break-word' }}>shield</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("money-transfer-between-accounts") }} sm={2} md={2}>
      <Icon.Medium type="money-transfer-between-accounts" />
      <div style={{ wordWrap: 'break-word' }}>money-transfer-between-accounts</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smiley-very-happy") }} sm={2} md={2}>
      <Icon.Medium type="smiley-very-happy" />
      <div style={{ wordWrap: 'break-word' }}>smiley-very-happy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smiley-happy") }} sm={2} md={2}>
      <Icon.Medium type="smiley-happy" />
      <div style={{ wordWrap: 'break-word' }}>smiley-happy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smiley-indifferent") }} sm={2} md={2}>
      <Icon.Medium type="smiley-indifferent" />
      <div style={{ wordWrap: 'break-word' }}>smiley-indifferent</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smiley-unhappy") }} sm={2} md={2}>
      <Icon.Medium type="smiley-unhappy" />
      <div style={{ wordWrap: 'break-word' }}>smiley-unhappy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("smiley-sad") }} sm={2} md={2}>
      <Icon.Medium type="smiley-sad" />
      <div style={{ wordWrap: 'break-word' }}>smiley-sad</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("room-service-give-plate") }} sm={2} md={2}>
      <Icon.Medium type="room-service-give-plate" />
      <div style={{ wordWrap: 'break-word' }}>room-service-give-plate</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tennis-player") }} sm={2} md={2}>
      <Icon.Medium type="tennis-player" />
      <div style={{ wordWrap: 'break-word' }}>tennis-player</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hotel-bedroom") }} sm={2} md={2}>
      <Icon.Medium type="hotel-bedroom" />
      <div style={{ wordWrap: 'break-word' }}>hotel-bedroom</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("map-search") }} sm={2} md={2}>
      <Icon.Medium type="map-search" />
      <div style={{ wordWrap: 'break-word' }}>map-search</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("no-filter") }} sm={2} md={2}>
      <Icon.Medium type="no-filter" />
      <div style={{ wordWrap: 'break-word' }}>no-filter</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tick-in-circle") }} sm={2} md={2}>
      <Icon.Medium type="tick-in-circle" />
      <div style={{ wordWrap: 'break-word' }}>tick-in-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("mobile-phone") }} sm={2} md={2}>
      <Icon.Medium type="mobile-phone" />
      <div style={{ wordWrap: 'break-word' }}>mobile-phone</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("telefone") }} sm={2} md={2}>
      <Icon.Medium type="telefone" />
      <div style={{ wordWrap: 'break-word' }}>telefone</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bill") }} sm={2} md={2}>
      <Icon.Medium type="bill" />
      <div style={{ wordWrap: 'break-word' }}>bill</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("laptop") }} sm={2} md={2}>
      <Icon.Medium type="laptop" />
      <div style={{ wordWrap: 'break-word' }}>laptop</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("money-transfer") }} sm={2} md={2}>
      <Icon.Medium type="money-transfer" />
      <div style={{ wordWrap: 'break-word' }}>money-transfer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("error-state") }} sm={2} md={2}>
      <Icon.Medium type="error-state" />
      <div style={{ wordWrap: 'break-word' }}>error-state</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("travel-bag") }} sm={2} md={2}>
      <Icon.Medium type="travel-bag" />
      <div style={{ wordWrap: 'break-word' }}>travel-bag</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("envelope") }} sm={2} md={2}>
      <Icon.Medium type="envelope" />
      <div style={{ wordWrap: 'break-word' }}>envelope</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("fixed-money") }} sm={2} md={2}>
      <Icon.Medium type="fixed-money" />
      <div style={{ wordWrap: 'break-word' }}>fixed-money</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("piggy") }} sm={2} md={2}>
      <Icon.Medium type="piggy" />
      <div style={{ wordWrap: 'break-word' }}>piggy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("legal-hammer") }} sm={2} md={2}>
      <Icon.Medium type="legal-hammer" />
      <div style={{ wordWrap: 'break-word' }}>legal-hammer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("repeat") }} sm={2} md={2}>
      <Icon.Medium type="repeat" />
      <div style={{ wordWrap: 'break-word' }}>repeat</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("star") }} sm={2} md={2}>
      <Icon.Medium type="star" />
      <div style={{ wordWrap: 'break-word' }}>star</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("feed") }} sm={2} md={2}>
      <Icon.Medium type="feed" />
      <div style={{ wordWrap: 'break-word' }}>feed</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("cheque") }} sm={2} md={2}>
      <Icon.Medium type="cheque" />
      <div style={{ wordWrap: 'break-word' }}>cheque</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("csoportos-beszedes") }} sm={2} md={2}>
      <Icon.Medium type="csoportos-beszedes" />
      <div style={{ wordWrap: 'break-word' }}>csoportos-beszedes</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("kolcson") }} sm={2} md={2}>
      <Icon.Medium type="kolcson" />
      <div style={{ wordWrap: 'break-word' }}>kolcson</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("vignette-second") }} sm={2} md={2}>
      <Icon.Medium type="vignette-second" />
      <div style={{ wordWrap: 'break-word' }}>vignette-second</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tv") }} sm={2} md={2}>
      <Icon.Medium type="tv" />
      <div style={{ wordWrap: 'break-word' }}>tv</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tablet") }} sm={2} md={2}>
      <Icon.Medium type="tablet" />
      <div style={{ wordWrap: 'break-word' }}>tablet</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("egyeb") }} sm={2} md={2}>
      <Icon.Medium type="egyeb" />
      <div style={{ wordWrap: 'break-word' }}>egyeb</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("ai-brain") }} sm={2} md={2}>
      <Icon.Medium type="ai-brain" />
      <div style={{ wordWrap: 'break-word' }}>ai-brain</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("glass-lab") }} sm={2} md={2}>
      <Icon.Medium type="glass-lab" />
      <div style={{ wordWrap: 'break-word' }}>glass-lab</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("empty-box") }} sm={2} md={2}>
      <Icon.Medium type="empty-box" />
      <div style={{ wordWrap: 'break-word' }}>empty-box</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tags") }} sm={2} md={2}>
      <Icon.Medium type="tags" />
      <div style={{ wordWrap: 'break-word' }}>tags</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("play") }} sm={2} md={2}>
      <Icon.Medium type="play" />
      <div style={{ wordWrap: 'break-word' }}>play</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("pause") }} sm={2} md={2}>
      <Icon.Medium type="pause" />
      <div style={{ wordWrap: 'break-word' }}>pause</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("bug-search") }} sm={2} md={2}>
      <Icon.Medium type="bug-search" />
      <div style={{ wordWrap: 'break-word' }}>bug-search</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-double") }} sm={2} md={2}>
      <Icon.Medium type="file-double" />
      <div style={{ wordWrap: 'break-word' }}>file-double</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("menu-kebab") }} sm={2} md={2}>
      <Icon.Medium type="menu-kebab" />
      <div style={{ wordWrap: 'break-word' }}>menu-kebab</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("no-tags") }} sm={2} md={2}>
      <Icon.Medium type="no-tags" />
      <div style={{ wordWrap: 'break-word' }}>no-tags</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("filter-text") }} sm={2} md={2}>
      <Icon.Medium type="filter-text" />
      <div style={{ wordWrap: 'break-word' }}>filter-text</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("download-file") }} sm={2} md={2}>
      <Icon.Medium type="download-file" />
      <div style={{ wordWrap: 'break-word' }}>download-file</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("code") }} sm={2} md={2}>
      <Icon.Medium type="code" />
      <div style={{ wordWrap: 'break-word' }}>code</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("add-circle") }} sm={2} md={2}>
      <Icon.Medium type="add-circle" />
      <div style={{ wordWrap: 'break-word' }}>add-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-down-big") }} sm={2} md={2}>
      <Icon.Medium type="arrow-down-big" />
      <div style={{ wordWrap: 'break-word' }}>arrow-down-big</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-left-big") }} sm={2} md={2}>
      <Icon.Medium type="arrow-left-big" />
      <div style={{ wordWrap: 'break-word' }}>arrow-left-big</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-right-big") }} sm={2} md={2}>
      <Icon.Medium type="arrow-right-big" />
      <div style={{ wordWrap: 'break-word' }}>arrow-right-big</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-up-big") }} sm={2} md={2}>
      <Icon.Medium type="arrow-up-big" />
      <div style={{ wordWrap: 'break-word' }}>arrow-up-big</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrow-right-bold") }} sm={2} md={2}>
      <Icon.Medium type="arrow-right-bold" />
      <div style={{ wordWrap: 'break-word' }}>arrow-right-bold</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("briefcase") }} sm={2} md={2}>
      <Icon.Medium type="briefcase" />
      <div style={{ wordWrap: 'break-word' }}>briefcase</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("building") }} sm={2} md={2}>
      <Icon.Medium type="building" />
      <div style={{ wordWrap: 'break-word' }}>building</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("car-2") }} sm={2} md={2}>
      <Icon.Medium type="car-2" />
      <div style={{ wordWrap: 'break-word' }}>car-2</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("company-info") }} sm={2} md={2}>
      <Icon.Medium type="company-info" />
      <div style={{ wordWrap: 'break-word' }}>company-info</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("contract-approve") }} sm={2} md={2}>
      <Icon.Medium type="contract-approve" />
      <div style={{ wordWrap: 'break-word' }}>contract-approve</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-award") }} sm={2} md={2}>
      <Icon.Medium type="file-award" />
      <div style={{ wordWrap: 'break-word' }}>file-award</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-doc") }} sm={2} md={2}>
      <Icon.Medium type="file-doc" />
      <div style={{ wordWrap: 'break-word' }}>file-doc</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-ppt") }} sm={2} md={2}>
      <Icon.Medium type="file-ppt" />
      <div style={{ wordWrap: 'break-word' }}>file-ppt</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-rar") }} sm={2} md={2}>
      <Icon.Medium type="file-rar" />
      <div style={{ wordWrap: 'break-word' }}>file-rar</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-rtf") }} sm={2} md={2}>
      <Icon.Medium type="file-rtf" />
      <div style={{ wordWrap: 'break-word' }}>file-rtf</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-text-cash") }} sm={2} md={2}>
      <Icon.Medium type="file-text-cash" />
      <div style={{ wordWrap: 'break-word' }}>file-text-cash</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-txt") }} sm={2} md={2}>
      <Icon.Medium type="file-txt" />
      <div style={{ wordWrap: 'break-word' }}>file-txt</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-upload") }} sm={2} md={2}>
      <Icon.Medium type="file-upload" />
      <div style={{ wordWrap: 'break-word' }}>file-upload</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("file-zip") }} sm={2} md={2}>
      <Icon.Medium type="file-zip" />
      <div style={{ wordWrap: 'break-word' }}>file-zip</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("giraffe") }} sm={2} md={2}>
      <Icon.Medium type="giraffe" />
      <div style={{ wordWrap: 'break-word' }}>giraffe</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("hand-shake") }} sm={2} md={2}>
      <Icon.Medium type="hand-shake" />
      <div style={{ wordWrap: 'break-word' }}>hand-shake</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("human-hierarchy") }} sm={2} md={2}>
      <Icon.Medium type="human-hierarchy" />
      <div style={{ wordWrap: 'break-word' }}>human-hierarchy</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("keyboard-arrow-right") }} sm={2} md={2}>
      <Icon.Medium type="keyboard-arrow-right" />
      <div style={{ wordWrap: 'break-word' }}>keyboard-arrow-right</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("module-three") }} sm={2} md={2}>
      <Icon.Medium type="module-three" />
      <div style={{ wordWrap: 'break-word' }}>module-three</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("paste") }} sm={2} md={2}>
      <Icon.Medium type="paste" />
      <div style={{ wordWrap: 'break-word' }}>paste</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("pin") }} sm={2} md={2}>
      <Icon.Medium type="pin" />
      <div style={{ wordWrap: 'break-word' }}>pin</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("print-2") }} sm={2} md={2}>
      <Icon.Medium type="print-2" />
      <div style={{ wordWrap: 'break-word' }}>print-2</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("programming-code") }} sm={2} md={2}>
      <Icon.Medium type="programming-code" />
      <div style={{ wordWrap: 'break-word' }}>programming-code</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("redo") }} sm={2} md={2}>
      <Icon.Medium type="redo" />
      <div style={{ wordWrap: 'break-word' }}>redo</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("scissors") }} sm={2} md={2}>
      <Icon.Medium type="scissors" />
      <div style={{ wordWrap: 'break-word' }}>scissors</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("server-phone-exchange") }} sm={2} md={2}>
      <Icon.Medium type="server-phone-exchange" />
      <div style={{ wordWrap: 'break-word' }}>server-phone-exchange</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("shop") }} sm={2} md={2}>
      <Icon.Medium type="shop" />
      <div style={{ wordWrap: 'break-word' }}>shop</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("subtract-circle") }} sm={2} md={2}>
      <Icon.Medium type="subtract-circle" />
      <div style={{ wordWrap: 'break-word' }}>subtract-circle</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tag-auto") }} sm={2} md={2}>
      <Icon.Medium type="tag-auto" />
      <div style={{ wordWrap: 'break-word' }}>tag-auto</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("tag-shopping-new") }} sm={2} md={2}>
      <Icon.Medium type="tag-shopping-new" />
      <div style={{ wordWrap: 'break-word' }}>tag-shopping-new</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("undo") }} sm={2} md={2}>
      <Icon.Medium type="undo" />
      <div style={{ wordWrap: 'break-word' }}>undo</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("upload-file") }} sm={2} md={2}>
      <Icon.Medium type="upload-file" />
      <div style={{ wordWrap: 'break-word' }}>upload-file</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("vintage-car") }} sm={2} md={2}>
      <Icon.Medium type="vintage-car" />
      <div style={{ wordWrap: 'break-word' }}>vintage-car</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("xml") }} sm={2} md={2}>
      <Icon.Medium type="xml" />
      <div style={{ wordWrap: 'break-word' }}>xml</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("document-hand") }} sm={2} md={2}>
      <Icon.Medium type="document-hand" />
      <div style={{ wordWrap: 'break-word' }}>document-hand</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("dashboard-tiles") }} sm={2} md={2}>
      <Icon.Medium type="dashboard-tiles" />
      <div style={{ wordWrap: 'break-word' }}>dashboard-tiles</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("delete") }} sm={2} md={2}>
      <Icon.Medium type="delete" />
      <div style={{ wordWrap: 'break-word' }}>delete</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("communication") }} sm={2} md={2}>
      <Icon.Medium type="communication" />
      <div style={{ wordWrap: 'break-word' }}>communication</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("paper-write") }} sm={2} md={2}>
      <Icon.Medium type="paper-write" />
      <div style={{ wordWrap: 'break-word' }}>paper-write</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("user-contact") }} sm={2} md={2}>
      <Icon.Medium type="user-contact" />
      <div style={{ wordWrap: 'break-word' }}>user-contact</div>
    <Col style={{ textAlign: 'center' }} sm={2} md={2}>
      <Icon.Medium type="image-add" />
      <div style={{ wordWrap: 'break-word' }}>image-add</div>
    </Col>
  </Row>
</Container>
```

#### Large

```js
import React, {useState} from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title => title.indexOf(search) >= 0 ? {} : {display: 'none'}

;<Container>
  <Row style={{ marginBottom: '1rem'}}>
    <Col md={12}>
      <SearchInput onChange={e=>setSearch(e.target.value)} onRemove={()=>setSearch('')} block/>
    </Col>
  </Row>
  <Row>
  <Col style={{ textAlign: 'center', ...checkVisible("document-empty") }} sm={2} md={2}>
    <Icon.Large type="document-empty" />
    <div style={{ wordWrap: 'break-word' }}>document-empty</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("file-sheet") }} sm={2} md={2}>
    <Icon.Large type="file-sheet" />
    <div style={{ wordWrap: 'break-word' }}>file-sheet</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("add-new-application") }} sm={2} md={2}>
    <Icon.Large type="add-new-application" />
    <div style={{ wordWrap: 'break-word' }}>add-new-application</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("arrived-letter") }} sm={2} md={2}>
    <Icon.Large type="arrived-letter" />
    <div style={{ wordWrap: 'break-word' }}>arrived-letter</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("banknote") }} sm={2} md={2}>
    <Icon.Large type="banknote" />
    <div style={{ wordWrap: 'break-word' }}>banknote</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("calendar") }} sm={2} md={2}>
    <Icon.Large type="calendar" />
    <div style={{ wordWrap: 'break-word' }}>calendar</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("letter") }} sm={2} md={2}>
    <Icon.Large type="letter" />
    <div style={{ wordWrap: 'break-word' }}>letter</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("offline-store") }} sm={2} md={2}>
    <Icon.Large type="offline-store" />
    <div style={{ wordWrap: 'break-word' }}>offline-store</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("sim-card") }} sm={2} md={2}>
    <Icon.Large type="sim-card" />
    <div style={{ wordWrap: 'break-word' }}>sim-card</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("wallet") }} sm={2} md={2}>
    <Icon.Large type="wallet" />
    <div style={{ wordWrap: 'break-word' }}>wallet</div>
  </Col>
  <Col style={{ textAlign: 'center', ...checkVisible("web-card") }} sm={2} md={2}>
    <Icon.Large type="web-card" />
    <div style={{ wordWrap: 'break-word' }}>web-card</div>
  </Col>
  </Row>
</Container>
```

#### ClipArt

```js
import React, {useState} from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title => title.indexOf(search) >= 0 ? {} : {display: 'none'}

;<Container>
  <Row style={{ marginBottom: '1rem'}}>
    <Col md={12}>
      <SearchInput onChange={e=>setSearch(e.target.value)} onRemove={()=>setSearch('')} block/>
    </Col>
  </Row>
  <Row>
  <Col style={{ textAlign: 'center', ...checkVisible("project-tag") }} sm={2} md={3}>
      <Icon.ClipArt type="project-tag" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>project-tag</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("new-folder") }} sm={2} md={3}>
      <Icon.ClipArt type="new-folder" />
      <div style={{ wordWrap: 'break-word' }}>new-folder</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("list-cards") }} sm={2} md={3}>
      <Icon.ClipArt type="list-cards" fill="blue" />
      <div style={{ wordWrap: 'break-word' }}>list-cards</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("check") }} sm={2} md={3}>
      <Icon.ClipArt type="check" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>check</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("empty-state-machine-learning") }} sm={2} md={3}>
      <Icon.ClipArt type="empty-state-machine-learning" fill="error" />
      <div style={{ wordWrap: 'break-word' }}>empty-state-machine-learning</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("project-to-archive") }} sm={2} md={3}>
      <Icon.ClipArt type="project-to-archive" />
      <div style={{ wordWrap: 'break-word' }}>project-to-archive</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("basic-preferences") }} sm={2} md={3}>
      <Icon.ClipArt type="basic-preferences" fill="error" />
      <div style={{ wordWrap: 'break-word' }}>basic-preferences</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("image-upload") }} sm={2} md={3}>
      <Icon.ClipArt type="image-upload" fill="blue" />
      <div style={{ wordWrap: 'break-word' }}>image-upload</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("empty-state-feather") }} sm={2} md={3}>
      <Icon.ClipArt type="empty-state-feather" fill="blue" />
      <div style={{ wordWrap: 'break-word' }}>empty-state-feather</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("trash") }} sm={2} md={3}>
      <Icon.ClipArt type="trash" />
      <div style={{ wordWrap: 'break-word' }}>trash</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("error") }} sm={2} md={3}>
      <Icon.ClipArt type="error" fill="error" />
      <div style={{ wordWrap: 'break-word' }}>error</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("image-sms") }} sm={2} md={3}>
      <Icon.ClipArt type="image-sms" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>image-sms</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("broken-robot") }} sm={2} md={3}>
      <Icon.ClipArt type="broken-robot" />
      <div style={{ wordWrap: 'break-word' }}>broken-robot</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("terminal-book") }} sm={2} md={3}>
      <Icon.ClipArt type="terminal-book" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>terminal-book</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("arrived-letter") }} sm={2} md={3}>
      <Icon.ClipArt type="arrived-letter" fill="blue" />
      <div style={{ wordWrap: 'break-word' }}>arrived-letter</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("folder") }} sm={2} md={3}>
      <Icon.ClipArt type="folder" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>folder</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("group") }} sm={2} md={3}>
      <Icon.ClipArt type="group" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>group</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("handshake") }} sm={2} md={3}>
      <Icon.ClipArt type="handshake" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>handshake</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("instant-loan") }} sm={2} md={3}>
      <Icon.ClipArt type="instant-loan" />
      <div style={{ wordWrap: 'break-word' }}>instant-loan</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("machine-learning-tags") }} sm={2} md={3}>
      <Icon.ClipArt type="machine-learning-tags" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>machine-learning-tags</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("photo") }} sm={2} md={3}>
      <Icon.ClipArt type="photo" fill="error" />
      <div style={{ wordWrap: 'break-word' }}>photo</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("store") }} sm={2} md={3}>
      <Icon.ClipArt type="store" fill="primary" />
      <div style={{ wordWrap: 'break-word' }}>store</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("car") }} sm={2} md={3}>
      <Icon.ClipArt type="car" fill="error" />
      <div style={{ wordWrap: 'break-word' }}>car</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("sms") }} sm={2} md={3}>
      <Icon.ClipArt type="sms" fill="blue" />
      <div style={{ wordWrap: 'break-word' }}>sms</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("giraffe") }} sm={2} md={3}>
      <Icon.ClipArt type="giraffe" fill="error" />
      <div style={{ wordWrap: 'break-word' }}>giraffe</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("log-viewer") }} sm={2} md={3}>
      <Icon.ClipArt type="log-viewer" />
      <div style={{ wordWrap: 'break-word' }}>log-viewer</div>
    </Col>
    <Col style={{ textAlign: 'center', ...checkVisible("ui-components") }} sm={2} md={3}>
      <Icon.ClipArt type="ui-components" fill="blue" />
      <div style={{ wordWrap: 'break-word' }}>ui-components</div>
    </Col>
     <Col style={{ textAlign: 'center' }} sm={2} md={3}>
      <Icon.ClipArt type="no-result" />
      <div style={{ wordWrap: 'break-word' }}>no-result</div>
    </Col>
  </Row>
</Container>
```
