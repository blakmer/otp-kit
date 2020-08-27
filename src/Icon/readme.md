#### Icon types

#### Small

```js
import React, { useState } from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title =>
  title.indexOf(search) >= 0 ? {} : { display: 'none' }

;<Container>
  <Row style={{ marginBottom: '1rem' }}>
    <Col md={12}>
      <SearchInput
        onChange={e => setSearch(e.target.value)}
        onRemove={() => setSearch('')}
        block
      />
    </Col>
  </Row>
  <Row>
<Col style={{ textAlign: 'center', ...checkVisible("alert-triangle") }} sm={3} md={3}>
  <Icon.Small type="alert-triangle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>alert-triangle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("analytics-pie") }} sm={3} md={3}>
  <Icon.Small type="analytics-pie" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>analytics-pie</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-down") }} sm={3} md={3}>
  <Icon.Small type="arrow-down" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-down</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-left") }} sm={3} md={3}>
  <Icon.Small type="arrow-left" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-left</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-right") }} sm={3} md={3}>
  <Icon.Small type="arrow-right" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-right</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-up") }} sm={3} md={3}>
  <Icon.Small type="arrow-up" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-up</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("award-ribbon-star") }} sm={3} md={3}>
  <Icon.Small type="award-ribbon-star" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>award-ribbon-star</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("baby-care-trolley") }} sm={3} md={3}>
  <Icon.Small type="baby-care-trolley" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>baby-care-trolley</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bank") }} sm={3} md={3}>
  <Icon.Small type="bank" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bank</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bicycle") }} sm={3} md={3}>
  <Icon.Small type="bicycle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bicycle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("book") }} sm={3} md={3}>
  <Icon.Small type="book" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>book</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bulb") }} sm={3} md={3}>
  <Icon.Small type="bulb" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bulb</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("button-play") }} sm={3} md={3}>
  <Icon.Small type="button-play" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>button-play</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar-add") }} sm={3} md={3}>
  <Icon.Small type="calendar-add" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar-add</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar-clock") }} sm={3} md={3}>
  <Icon.Small type="calendar-clock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar-clock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar") }} sm={3} md={3}>
  <Icon.Small type="calendar" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("car-online") }} sm={3} md={3}>
  <Icon.Small type="car-online" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>car-online</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("car") }} sm={3} md={3}>
  <Icon.Small type="car" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>car</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("chrome") }} sm={3} md={3}>
  <Icon.Small type="chrome" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>chrome</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("close") }} sm={3} md={3}>
  <Icon.Small type="close" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>close</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("credit-card") }} sm={3} md={3}>
  <Icon.Small type="credit-card" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>credit-card</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("delete") }} sm={3} md={3}>
  <Icon.Small type="delete" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>delete</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("discount-circle") }} sm={3} md={3}>
  <Icon.Small type="discount-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>discount-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("double-files") }} sm={3} md={3}>
  <Icon.Small type="double-files" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>double-files</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("download") }} sm={3} md={3}>
  <Icon.Small type="download" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>download</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("earth") }} sm={3} md={3}>
  <Icon.Small type="earth" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>earth</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("edit") }} sm={3} md={3}>
  <Icon.Small type="edit" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>edit</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("email") }} sm={3} md={3}>
  <Icon.Small type="email" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>email</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("entertainment") }} sm={3} md={3}>
  <Icon.Small type="entertainment" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>entertainment</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("envelope") }} sm={3} md={3}>
  <Icon.Small type="envelope" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>envelope</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("error") }} sm={3} md={3}>
  <Icon.Small type="error" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>error</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("external-link") }} sm={3} md={3}>
  <Icon.Small type="external-link" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>external-link</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("family-add-new-member") }} sm={3} md={3}>
  <Icon.Small type="family-add-new-member" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>family-add-new-member</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("family-child") }} sm={3} md={3}>
  <Icon.Small type="family-child" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>family-child</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("firefox") }} sm={3} md={3}>
  <Icon.Small type="firefox" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>firefox</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("fixed-money") }} sm={3} md={3}>
  <Icon.Small type="fixed-money" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>fixed-money</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("flash") }} sm={3} md={3}>
  <Icon.Small type="flash" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>flash</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("gear") }} sm={3} md={3}>
  <Icon.Small type="gear" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>gear</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hammer") }} sm={3} md={3}>
  <Icon.Small type="hammer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hammer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hospital-first-aid") }} sm={3} md={3}>
  <Icon.Small type="hospital-first-aid" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hospital-first-aid</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hourglass") }} sm={3} md={3}>
  <Icon.Small type="hourglass" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hourglass</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("house-chimney") }} sm={3} md={3}>
  <Icon.Small type="house-chimney" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>house-chimney</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("info") }} sm={3} md={3}>
  <Icon.Small type="info" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>info</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("laptop") }} sm={3} md={3}>
  <Icon.Small type="laptop" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>laptop</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("legal-hammer") }} sm={3} md={3}>
  <Icon.Small type="legal-hammer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>legal-hammer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("list") }} sm={3} md={3}>
  <Icon.Small type="list" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>list</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("location-target") }} sm={3} md={3}>
  <Icon.Small type="location-target" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>location-target</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("lock") }} sm={3} md={3}>
  <Icon.Small type="lock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>lock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("minus") }} sm={3} md={3}>
  <Icon.Small type="minus" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>minus</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("mobile-phone") }} sm={3} md={3}>
  <Icon.Small type="mobile-phone" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>mobile-phone</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("money-atm") }} sm={3} md={3}>
  <Icon.Small type="money-atm" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>money-atm</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("money-transfer") }} sm={3} md={3}>
  <Icon.Small type="money-transfer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>money-transfer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("move-back") }} sm={3} md={3}>
  <Icon.Small type="move-back" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>move-back</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("notes-paper-text") }} sm={3} md={3}>
  <Icon.Small type="notes-paper-text" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>notes-paper-text</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("office-file-pdf") }} sm={3} md={3}>
  <Icon.Small type="office-file-pdf" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>office-file-pdf</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phone-actions-call") }} sm={3} md={3}>
  <Icon.Small type="phone-actions-call" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phone-actions-call</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phone") }} sm={3} md={3}>
  <Icon.Small type="phone" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phone</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("piggy") }} sm={3} md={3}>
  <Icon.Small type="piggy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>piggy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("pin-location") }} sm={3} md={3}>
  <Icon.Small type="pin-location" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>pin-location</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("plus") }} sm={3} md={3}>
  <Icon.Small type="plus" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>plus</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("power-off") }} sm={3} md={3}>
  <Icon.Small type="power-off" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>power-off</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("refresh") }} sm={3} md={3}>
  <Icon.Small type="refresh" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>refresh</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("restaurant") }} sm={3} md={3}>
  <Icon.Small type="restaurant" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>restaurant</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("rotate-forward") }} sm={3} md={3}>
  <Icon.Small type="rotate-forward" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>rotate-forward</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("saving-safe") }} sm={3} md={3}>
  <Icon.Small type="saving-safe" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>saving-safe</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("search") }} sm={3} md={3}>
  <Icon.Small type="search" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>search</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("send-email") }} sm={3} md={3}>
  <Icon.Small type="send-email" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>send-email</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("shopping") }} sm={3} md={3}>
  <Icon.Small type="shopping" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>shopping</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("single-neutral") }} sm={3} md={3}>
  <Icon.Small type="single-neutral" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>single-neutral</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smile-unhappy") }} sm={3} md={3}>
  <Icon.Small type="smile-unhappy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smile-unhappy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("star") }} sm={3} md={3}>
  <Icon.Small type="star" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>star</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("telephone") }} sm={3} md={3}>
  <Icon.Small type="telephone" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>telephone</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tick-in-circle") }} sm={3} md={3}>
  <Icon.Small type="tick-in-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tick-in-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tick") }} sm={3} md={3}>
  <Icon.Small type="tick" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tick</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("time-clock-circle") }} sm={3} md={3}>
  <Icon.Small type="time-clock-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>time-clock-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("transactions") }} sm={3} md={3}>
  <Icon.Small type="transactions" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>transactions</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("transport") }} sm={3} md={3}>
  <Icon.Small type="transport" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>transport</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("trash") }} sm={3} md={3}>
  <Icon.Small type="trash" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>trash</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("travel-bag") }} sm={3} md={3}>
  <Icon.Small type="travel-bag" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>travel-bag</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("trip-road") }} sm={3} md={3}>
  <Icon.Small type="trip-road" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>trip-road</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("try-again") }} sm={3} md={3}>
  <Icon.Small type="try-again" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>try-again</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("unlock") }} sm={3} md={3}>
  <Icon.Small type="unlock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>unlock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("upload") }} sm={3} md={3}>
  <Icon.Small type="upload" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>upload</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("zoom-in") }} sm={3} md={3}>
  <Icon.Small type="zoom-in" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>zoom-in</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("zoom-out") }} sm={3} md={3}>
  <Icon.Small type="zoom-out" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>zoom-out</div>
</Col>
  </Row>
</Container>
```

#### Medium

```js
import React, { useState } from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title =>
  title.indexOf(search) >= 0 ? {} : { display: 'none' }

;<Container>
  <Row style={{ marginBottom: '1rem' }}>
    <Col md={12}>
      <SearchInput
        onChange={e => setSearch(e.target.value)}
        onRemove={() => setSearch('')}
        block
      />
    </Col>
  </Row>
  <Row>
<Col style={{ textAlign: 'center', ...checkVisible("add-circle") }} sm={3} md={3}>
  <Icon.Medium type="add-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>add-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("add-partner") }} sm={3} md={3}>
  <Icon.Medium type="add-partner" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>add-partner</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("ai-brain") }} sm={3} md={3}>
  <Icon.Medium type="ai-brain" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>ai-brain</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("alarm-bell") }} sm={3} md={3}>
  <Icon.Medium type="alarm-bell" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>alarm-bell</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("alert-triangle") }} sm={3} md={3}>
  <Icon.Medium type="alert-triangle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>alert-triangle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("analytics-pie") }} sm={3} md={3}>
  <Icon.Medium type="analytics-pie" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>analytics-pie</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("announcement") }} sm={3} md={3}>
  <Icon.Medium type="announcement" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>announcement</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-down-big") }} sm={3} md={3}>
  <Icon.Medium type="arrow-down-big" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-down-big</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-down") }} sm={3} md={3}>
  <Icon.Medium type="arrow-down" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-down</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-left-big") }} sm={3} md={3}>
  <Icon.Medium type="arrow-left-big" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-left-big</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-left") }} sm={3} md={3}>
  <Icon.Medium type="arrow-left" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-left</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-right-big") }} sm={3} md={3}>
  <Icon.Medium type="arrow-right-big" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-right-big</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-right-bold") }} sm={3} md={3}>
  <Icon.Medium type="arrow-right-bold" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-right-bold</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-right") }} sm={3} md={3}>
  <Icon.Medium type="arrow-right" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-right</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-up-big") }} sm={3} md={3}>
  <Icon.Medium type="arrow-up-big" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-up-big</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrow-up") }} sm={3} md={3}>
  <Icon.Medium type="arrow-up" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrow-up</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("award-ribbon-star") }} sm={3} md={3}>
  <Icon.Medium type="award-ribbon-star" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>award-ribbon-star</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("baby-care-trolley") }} sm={3} md={3}>
  <Icon.Medium type="baby-care-trolley" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>baby-care-trolley</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bank-customer") }} sm={3} md={3}>
  <Icon.Medium type="bank-customer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bank-customer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bank") }} sm={3} md={3}>
  <Icon.Medium type="bank" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bank</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("banking-account") }} sm={3} md={3}>
  <Icon.Medium type="banking-account" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>banking-account</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bicycle") }} sm={3} md={3}>
  <Icon.Medium type="bicycle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bicycle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bill") }} sm={3} md={3}>
  <Icon.Medium type="bill" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bill</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("book") }} sm={3} md={3}>
  <Icon.Medium type="book" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>book</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("briefcase") }} sm={3} md={3}>
  <Icon.Medium type="briefcase" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>briefcase</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bug-search") }} sm={3} md={3}>
  <Icon.Medium type="bug-search" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bug-search</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("building") }} sm={3} md={3}>
  <Icon.Medium type="building" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>building</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("buildings") }} sm={3} md={3}>
  <Icon.Medium type="buildings" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>buildings</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bulb") }} sm={3} md={3}>
  <Icon.Medium type="bulb" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bulb</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("bus") }} sm={3} md={3}>
  <Icon.Medium type="bus" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>bus</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("business") }} sm={3} md={3}>
  <Icon.Medium type="business" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>business</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("button-play") }} sm={3} md={3}>
  <Icon.Medium type="button-play" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>button-play</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar-add") }} sm={3} md={3}>
  <Icon.Medium type="calendar-add" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar-add</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar-black") }} sm={3} md={3}>
  <Icon.Medium type="calendar-black" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar-black</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar-clock") }} sm={3} md={3}>
  <Icon.Medium type="calendar-clock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar-clock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar-warning") }} sm={3} md={3}>
  <Icon.Medium type="calendar-warning" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar-warning</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar") }} sm={3} md={3}>
  <Icon.Medium type="calendar" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("car-2") }} sm={3} md={3}>
  <Icon.Medium type="car-2" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>car-2</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("car-online") }} sm={3} md={3}>
  <Icon.Medium type="car-online" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>car-online</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("car") }} sm={3} md={3}>
  <Icon.Medium type="car" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>car</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("card-online-limit") }} sm={3} md={3}>
  <Icon.Medium type="card-online-limit" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>card-online-limit</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("chair") }} sm={3} md={3}>
  <Icon.Medium type="chair" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>chair</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("chat") }} sm={3} md={3}>
  <Icon.Medium type="chat" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>chat</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("cheque") }} sm={3} md={3}>
  <Icon.Medium type="cheque" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>cheque</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("clock") }} sm={3} md={3}>
  <Icon.Medium type="clock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>clock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("close") }} sm={3} md={3}>
  <Icon.Medium type="close" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>close</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("code") }} sm={3} md={3}>
  <Icon.Medium type="code" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>code</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("communication") }} sm={3} md={3}>
  <Icon.Medium type="communication" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>communication</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("company-info") }} sm={3} md={3}>
  <Icon.Medium type="company-info" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>company-info</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("computer") }} sm={3} md={3}>
  <Icon.Medium type="computer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>computer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("contract-approve") }} sm={3} md={3}>
  <Icon.Medium type="contract-approve" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>contract-approve</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("credit-card-lock") }} sm={3} md={3}>
  <Icon.Medium type="credit-card-lock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>credit-card-lock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("credit-card-payment") }} sm={3} md={3}>
  <Icon.Medium type="credit-card-payment" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>credit-card-payment</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("credit-card-remove") }} sm={3} md={3}>
  <Icon.Medium type="credit-card-remove" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>credit-card-remove</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("credit-card") }} sm={3} md={3}>
  <Icon.Medium type="credit-card" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>credit-card</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("csoportos-beszedes") }} sm={3} md={3}>
  <Icon.Medium type="csoportos-beszedes" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>csoportos-beszedes</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("currency") }} sm={3} md={3}>
  <Icon.Medium type="currency" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>currency</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("dashboard-tiles") }} sm={3} md={3}>
  <Icon.Medium type="dashboard-tiles" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>dashboard-tiles</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("default-app") }} sm={3} md={3}>
  <Icon.Medium type="default-app" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>default-app</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("delete") }} sm={3} md={3}>
  <Icon.Medium type="delete" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>delete</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("disability-wheelchair") }} sm={3} md={3}>
  <Icon.Medium type="disability-wheelchair" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>disability-wheelchair</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("discount-circle") }} sm={3} md={3}>
  <Icon.Medium type="discount-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>discount-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("docs-tag-editor") }} sm={3} md={3}>
  <Icon.Medium type="docs-tag-editor" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>docs-tag-editor</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document-checked") }} sm={3} md={3}>
  <Icon.Medium type="document-checked" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document-checked</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document-empty") }} sm={3} md={3}>
  <Icon.Medium type="document-empty" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document-empty</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document-hand") }} sm={3} md={3}>
  <Icon.Medium type="document-hand" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document-hand</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document-incorrect") }} sm={3} md={3}>
  <Icon.Medium type="document-incorrect" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document-incorrect</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document-warning") }} sm={3} md={3}>
  <Icon.Medium type="document-warning" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document-warning</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document") }} sm={3} md={3}>
  <Icon.Medium type="document" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("download-file") }} sm={3} md={3}>
  <Icon.Medium type="download-file" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>download-file</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("download") }} sm={3} md={3}>
  <Icon.Medium type="download" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>download</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("earth-globe") }} sm={3} md={3}>
  <Icon.Medium type="earth-globe" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>earth-globe</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("earth-lock") }} sm={3} md={3}>
  <Icon.Medium type="earth-lock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>earth-lock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("earth") }} sm={3} md={3}>
  <Icon.Medium type="earth" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>earth</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("edit-profile") }} sm={3} md={3}>
  <Icon.Medium type="edit-profile" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>edit-profile</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("edit-user") }} sm={3} md={3}>
  <Icon.Medium type="edit-user" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>edit-user</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("edit") }} sm={3} md={3}>
  <Icon.Medium type="edit" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>edit</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("egyeb") }} sm={3} md={3}>
  <Icon.Medium type="egyeb" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>egyeb</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("email") }} sm={3} md={3}>
  <Icon.Medium type="email" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>email</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("empty-box") }} sm={3} md={3}>
  <Icon.Medium type="empty-box" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>empty-box</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("entertainment") }} sm={3} md={3}>
  <Icon.Medium type="entertainment" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>entertainment</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("envelope") }} sm={3} md={3}>
  <Icon.Medium type="envelope" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>envelope</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("error-state") }} sm={3} md={3}>
  <Icon.Medium type="error-state" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>error-state</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("family-add-new-member") }} sm={3} md={3}>
  <Icon.Medium type="family-add-new-member" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>family-add-new-member</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("family-child") }} sm={3} md={3}>
  <Icon.Medium type="family-child" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>family-child</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("feed") }} sm={3} md={3}>
  <Icon.Medium type="feed" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>feed</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-award") }} sm={3} md={3}>
  <Icon.Medium type="file-award" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-award</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-doc") }} sm={3} md={3}>
  <Icon.Medium type="file-doc" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-doc</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-double") }} sm={3} md={3}>
  <Icon.Medium type="file-double" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-double</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-ppt") }} sm={3} md={3}>
  <Icon.Medium type="file-ppt" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-ppt</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-rar") }} sm={3} md={3}>
  <Icon.Medium type="file-rar" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-rar</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-rtf") }} sm={3} md={3}>
  <Icon.Medium type="file-rtf" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-rtf</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-text-cash") }} sm={3} md={3}>
  <Icon.Medium type="file-text-cash" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-text-cash</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-txt") }} sm={3} md={3}>
  <Icon.Medium type="file-txt" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-txt</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-upload") }} sm={3} md={3}>
  <Icon.Medium type="file-upload" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-upload</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-zip") }} sm={3} md={3}>
  <Icon.Medium type="file-zip" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-zip</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("filter-text") }} sm={3} md={3}>
  <Icon.Medium type="filter-text" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>filter-text</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("filter") }} sm={3} md={3}>
  <Icon.Medium type="filter" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>filter</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("fixed-money") }} sm={3} md={3}>
  <Icon.Medium type="fixed-money" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>fixed-money</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("flash") }} sm={3} md={3}>
  <Icon.Medium type="flash" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>flash</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("folder") }} sm={3} md={3}>
  <Icon.Medium type="folder" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>folder</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("gear") }} sm={3} md={3}>
  <Icon.Medium type="gear" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>gear</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("giraffe") }} sm={3} md={3}>
  <Icon.Medium type="giraffe" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>giraffe</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("glass-lab") }} sm={3} md={3}>
  <Icon.Medium type="glass-lab" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>glass-lab</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hamburger") }} sm={3} md={3}>
  <Icon.Medium type="hamburger" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hamburger</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hammer") }} sm={3} md={3}>
  <Icon.Medium type="hammer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hammer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hand-shake") }} sm={3} md={3}>
  <Icon.Medium type="hand-shake" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hand-shake</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hard-of-hearing") }} sm={3} md={3}>
  <Icon.Medium type="hard-of-hearing" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hard-of-hearing</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("health") }} sm={3} md={3}>
  <Icon.Medium type="health" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>health</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hierarchy") }} sm={3} md={3}>
  <Icon.Medium type="hierarchy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hierarchy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hospital-first-aid") }} sm={3} md={3}>
  <Icon.Medium type="hospital-first-aid" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hospital-first-aid</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hotel-bedroom") }} sm={3} md={3}>
  <Icon.Medium type="hotel-bedroom" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hotel-bedroom</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("hourglass") }} sm={3} md={3}>
  <Icon.Medium type="hourglass" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>hourglass</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("house-chimney") }} sm={3} md={3}>
  <Icon.Medium type="house-chimney" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>house-chimney</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("house-nature") }} sm={3} md={3}>
  <Icon.Medium type="house-nature" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>house-nature</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("human-hierarchy") }} sm={3} md={3}>
  <Icon.Medium type="human-hierarchy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>human-hierarchy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("image-add") }} sm={3} md={3}>
  <Icon.Medium type="image-add" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>image-add</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("info") }} sm={3} md={3}>
  <Icon.Medium type="info" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>info</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("keyboard-arrow-right") }} sm={3} md={3}>
  <Icon.Medium type="keyboard-arrow-right" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>keyboard-arrow-right</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("kolcson") }} sm={3} md={3}>
  <Icon.Medium type="kolcson" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>kolcson</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("laptop") }} sm={3} md={3}>
  <Icon.Medium type="laptop" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>laptop</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("left-right-arrow") }} sm={3} md={3}>
  <Icon.Medium type="left-right-arrow" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>left-right-arrow</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("legal-hammer") }} sm={3} md={3}>
  <Icon.Medium type="legal-hammer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>legal-hammer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("legal-information") }} sm={3} md={3}>
  <Icon.Medium type="legal-information" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>legal-information</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("legal-scale") }} sm={3} md={3}>
  <Icon.Medium type="legal-scale" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>legal-scale</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("list") }} sm={3} md={3}>
  <Icon.Medium type="list" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>list</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("location-target") }} sm={3} md={3}>
  <Icon.Medium type="location-target" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>location-target</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("lock") }} sm={3} md={3}>
  <Icon.Medium type="lock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>lock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("login") }} sm={3} md={3}>
  <Icon.Medium type="login" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>login</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("machine-learning") }} sm={3} md={3}>
  <Icon.Medium type="machine-learning" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>machine-learning</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("map-search") }} sm={3} md={3}>
  <Icon.Medium type="map-search" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>map-search</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("menu-kebab") }} sm={3} md={3}>
  <Icon.Medium type="menu-kebab" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>menu-kebab</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("minus") }} sm={3} md={3}>
  <Icon.Medium type="minus" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>minus</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("mobile-phone") }} sm={3} md={3}>
  <Icon.Medium type="mobile-phone" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>mobile-phone</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("module-three") }} sm={3} md={3}>
  <Icon.Medium type="module-three" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>module-three</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("money-atm") }} sm={3} md={3}>
  <Icon.Medium type="money-atm" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>money-atm</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("money-transfer-between-accounts") }} sm={3} md={3}>
  <Icon.Medium type="money-transfer-between-accounts" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>money-transfer-between-accounts</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("money-transfer") }} sm={3} md={3}>
  <Icon.Medium type="money-transfer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>money-transfer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("move-back") }} sm={3} md={3}>
  <Icon.Medium type="move-back" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>move-back</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("news") }} sm={3} md={3}>
  <Icon.Medium type="news" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>news</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("no-filter") }} sm={3} md={3}>
  <Icon.Medium type="no-filter" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>no-filter</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("no-tags") }} sm={3} md={3}>
  <Icon.Medium type="no-tags" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>no-tags</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("office-file-csv") }} sm={3} md={3}>
  <Icon.Medium type="office-file-csv" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>office-file-csv</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("office-file-iso") }} sm={3} md={3}>
  <Icon.Medium type="office-file-iso" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>office-file-iso</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("office-file-pdf") }} sm={3} md={3}>
  <Icon.Medium type="office-file-pdf" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>office-file-pdf</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("office-file-xls") }} sm={3} md={3}>
  <Icon.Medium type="office-file-xls" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>office-file-xls</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("paper-write") }} sm={3} md={3}>
  <Icon.Medium type="paper-write" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>paper-write</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("paragraph") }} sm={3} md={3}>
  <Icon.Medium type="paragraph" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>paragraph</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("party-confetti") }} sm={3} md={3}>
  <Icon.Medium type="party-confetti" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>party-confetti</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("paste") }} sm={3} md={3}>
  <Icon.Medium type="paste" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>paste</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("pause") }} sm={3} md={3}>
  <Icon.Medium type="pause" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>pause</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phone-actions-call") }} sm={3} md={3}>
  <Icon.Medium type="phone-actions-call" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phone-actions-call</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phone-code") }} sm={3} md={3}>
  <Icon.Medium type="phone-code" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phone-code</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phone-noti") }} sm={3} md={3}>
  <Icon.Medium type="phone-noti" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phone-noti</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phone") }} sm={3} md={3}>
  <Icon.Medium type="phone" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phone</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("phonebook") }} sm={3} md={3}>
  <Icon.Medium type="phonebook" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>phonebook</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("photo") }} sm={3} md={3}>
  <Icon.Medium type="photo" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>photo</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("piggy") }} sm={3} md={3}>
  <Icon.Medium type="piggy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>piggy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("pin-location") }} sm={3} md={3}>
  <Icon.Medium type="pin-location" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>pin-location</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("pin") }} sm={3} md={3}>
  <Icon.Medium type="pin" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>pin</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("play") }} sm={3} md={3}>
  <Icon.Medium type="play" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>play</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("plus") }} sm={3} md={3}>
  <Icon.Medium type="plus" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>plus</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("power-off") }} sm={3} md={3}>
  <Icon.Medium type="power-off" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>power-off</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("preferences") }} sm={3} md={3}>
  <Icon.Medium type="preferences" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>preferences</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("print-2") }} sm={3} md={3}>
  <Icon.Medium type="print-2" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>print-2</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("print") }} sm={3} md={3}>
  <Icon.Medium type="print" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>print</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("profil") }} sm={3} md={3}>
  <Icon.Medium type="profil" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>profil</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("profile") }} sm={3} md={3}>
  <Icon.Medium type="profile" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>profile</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("programming-code") }} sm={3} md={3}>
  <Icon.Medium type="programming-code" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>programming-code</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("qr-code") }} sm={3} md={3}>
  <Icon.Medium type="qr-code" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>qr-code</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("queuing-long") }} sm={3} md={3}>
  <Icon.Medium type="queuing-long" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>queuing-long</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("redo") }} sm={3} md={3}>
  <Icon.Medium type="redo" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>redo</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("reflect-right") }} sm={3} md={3}>
  <Icon.Medium type="reflect-right" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>reflect-right</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("refresh") }} sm={3} md={3}>
  <Icon.Medium type="refresh" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>refresh</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("repeat") }} sm={3} md={3}>
  <Icon.Medium type="repeat" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>repeat</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("restaurant") }} sm={3} md={3}>
  <Icon.Medium type="restaurant" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>restaurant</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("room-service-give-plate") }} sm={3} md={3}>
  <Icon.Medium type="room-service-give-plate" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>room-service-give-plate</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("rotate-forward") }} sm={3} md={3}>
  <Icon.Medium type="rotate-forward" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>rotate-forward</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("saving-safe") }} sm={3} md={3}>
  <Icon.Medium type="saving-safe" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>saving-safe</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("scissors") }} sm={3} md={3}>
  <Icon.Medium type="scissors" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>scissors</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("scooter") }} sm={3} md={3}>
  <Icon.Medium type="scooter" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>scooter</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("search-partner") }} sm={3} md={3}>
  <Icon.Medium type="search-partner" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>search-partner</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("search") }} sm={3} md={3}>
  <Icon.Medium type="search" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>search</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("send-email") }} sm={3} md={3}>
  <Icon.Medium type="send-email" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>send-email</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("server-phone-exchange") }} sm={3} md={3}>
  <Icon.Medium type="server-phone-exchange" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>server-phone-exchange</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("shield") }} sm={3} md={3}>
  <Icon.Medium type="shield" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>shield</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("shirt-plain") }} sm={3} md={3}>
  <Icon.Medium type="shirt-plain" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>shirt-plain</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("shop") }} sm={3} md={3}>
  <Icon.Medium type="shop" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>shop</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("shopping") }} sm={3} md={3}>
  <Icon.Medium type="shopping" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>shopping</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("single-neutral") }} sm={3} md={3}>
  <Icon.Medium type="single-neutral" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>single-neutral</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smile-unhappy") }} sm={3} md={3}>
  <Icon.Medium type="smile-unhappy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smile-unhappy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smiley-happy") }} sm={3} md={3}>
  <Icon.Medium type="smiley-happy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smiley-happy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smiley-indifferent") }} sm={3} md={3}>
  <Icon.Medium type="smiley-indifferent" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smiley-indifferent</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smiley-sad") }} sm={3} md={3}>
  <Icon.Medium type="smiley-sad" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smiley-sad</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smiley-unhappy") }} sm={3} md={3}>
  <Icon.Medium type="smiley-unhappy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smiley-unhappy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("smiley-very-happy") }} sm={3} md={3}>
  <Icon.Medium type="smiley-very-happy" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>smiley-very-happy</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("star") }} sm={3} md={3}>
  <Icon.Medium type="star" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>star</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("style-three-pin-parking") }} sm={3} md={3}>
  <Icon.Medium type="style-three-pin-parking" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>style-three-pin-parking</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("subtract-circle") }} sm={3} md={3}>
  <Icon.Medium type="subtract-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>subtract-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tablet") }} sm={3} md={3}>
  <Icon.Medium type="tablet" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tablet</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tag-alert") }} sm={3} md={3}>
  <Icon.Medium type="tag-alert" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tag-alert</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tag-auto") }} sm={3} md={3}>
  <Icon.Medium type="tag-auto" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tag-auto</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tag-block") }} sm={3} md={3}>
  <Icon.Medium type="tag-block" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tag-block</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tag-check") }} sm={3} md={3}>
  <Icon.Medium type="tag-check" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tag-check</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tag-shopping-new") }} sm={3} md={3}>
  <Icon.Medium type="tag-shopping-new" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tag-shopping-new</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tag") }} sm={3} md={3}>
  <Icon.Medium type="tag" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tag</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tags") }} sm={3} md={3}>
  <Icon.Medium type="tags" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tags</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("telefone") }} sm={3} md={3}>
  <Icon.Medium type="telefone" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>telefone</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tennis-player") }} sm={3} md={3}>
  <Icon.Medium type="tennis-player" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tennis-player</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("text-options") }} sm={3} md={3}>
  <Icon.Medium type="text-options" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>text-options</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tick-in-circle") }} sm={3} md={3}>
  <Icon.Medium type="tick-in-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tick-in-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tick") }} sm={3} md={3}>
  <Icon.Medium type="tick" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tick</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("time-clock-circle") }} sm={3} md={3}>
  <Icon.Medium type="time-clock-circle" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>time-clock-circle</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("timeline") }} sm={3} md={3}>
  <Icon.Medium type="timeline" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>timeline</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("touch-id") }} sm={3} md={3}>
  <Icon.Medium type="touch-id" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>touch-id</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("toys") }} sm={3} md={3}>
  <Icon.Medium type="toys" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>toys</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("trailer") }} sm={3} md={3}>
  <Icon.Medium type="trailer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>trailer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("transactions") }} sm={3} md={3}>
  <Icon.Medium type="transactions" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>transactions</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("transfer-user") }} sm={3} md={3}>
  <Icon.Medium type="transfer-user" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>transfer-user</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("transport") }} sm={3} md={3}>
  <Icon.Medium type="transport" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>transport</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("trash") }} sm={3} md={3}>
  <Icon.Medium type="trash" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>trash</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("travel-bag") }} sm={3} md={3}>
  <Icon.Medium type="travel-bag" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>travel-bag</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("trip-road") }} sm={3} md={3}>
  <Icon.Medium type="trip-road" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>trip-road</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("try-again") }} sm={3} md={3}>
  <Icon.Medium type="try-again" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>try-again</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("tv") }} sm={3} md={3}>
  <Icon.Medium type="tv" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>tv</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("undo") }} sm={3} md={3}>
  <Icon.Medium type="undo" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>undo</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("unlock") }} sm={3} md={3}>
  <Icon.Medium type="unlock" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>unlock</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("upload-file") }} sm={3} md={3}>
  <Icon.Medium type="upload-file" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>upload-file</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("upload") }} sm={3} md={3}>
  <Icon.Medium type="upload" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>upload</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("user-contact") }} sm={3} md={3}>
  <Icon.Medium type="user-contact" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>user-contact</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("view-off") }} sm={3} md={3}>
  <Icon.Medium type="view-off" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>view-off</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("view") }} sm={3} md={3}>
  <Icon.Medium type="view" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>view</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("vignette-second") }} sm={3} md={3}>
  <Icon.Medium type="vignette-second" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>vignette-second</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("vignette") }} sm={3} md={3}>
  <Icon.Medium type="vignette" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>vignette</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("vintage-car") }} sm={3} md={3}>
  <Icon.Medium type="vintage-car" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>vintage-car</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("wench") }} sm={3} md={3}>
  <Icon.Medium type="wench" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>wench</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("wifi") }} sm={3} md={3}>
  <Icon.Medium type="wifi" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>wifi</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("xml") }} sm={3} md={3}>
  <Icon.Medium type="xml" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>xml</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("zoom-in") }} sm={3} md={3}>
  <Icon.Medium type="zoom-in" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>zoom-in</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("zoom-out") }} sm={3} md={3}>
  <Icon.Medium type="zoom-out" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>zoom-out</div>
</Col>
  </Row>
</Container>
```

#### Large

```js
import React, { useState } from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title =>
  title.indexOf(search) >= 0 ? {} : { display: 'none' }

;<Container>
  <Row style={{ marginBottom: '1rem' }}>
    <Col md={12}>
      <SearchInput
        onChange={e => setSearch(e.target.value)}
        onRemove={() => setSearch('')}
        block
      />
    </Col>
  </Row>
  <Row>
<Col style={{ textAlign: 'center', ...checkVisible("add-new-application") }} sm={3} md={3}>
  <Icon.Large type="add-new-application" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>add-new-application</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("arrived-letter") }} sm={3} md={3}>
  <Icon.Large type="arrived-letter" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrived-letter</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("banknote") }} sm={3} md={3}>
  <Icon.Large type="banknote" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>banknote</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("calendar") }} sm={3} md={3}>
  <Icon.Large type="calendar" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>calendar</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("document-empty") }} sm={3} md={3}>
  <Icon.Large type="document-empty" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>document-empty</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("file-sheet") }} sm={3} md={3}>
  <Icon.Large type="file-sheet" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>file-sheet</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("letter") }} sm={3} md={3}>
  <Icon.Large type="letter" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>letter</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("offline-store") }} sm={3} md={3}>
  <Icon.Large type="offline-store" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>offline-store</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("sim-card") }} sm={3} md={3}>
  <Icon.Large type="sim-card" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>sim-card</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("wallet") }} sm={3} md={3}>
  <Icon.Large type="wallet" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>wallet</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("web-card") }} sm={3} md={3}>
  <Icon.Large type="web-card" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>web-card</div>
</Col>
  </Row>
</Container>
```

#### ClipArt

```js
import React, { useState } from 'react'
import Grid from '../Grid'
import SearchInput from '../SearchInput'
const [search, setSearch] = useState('')
const { Container, Row, Col } = Grid
const checkVisible = title =>
  title.indexOf(search) >= 0 ? {} : { display: 'none' }

;<Container>
  <Row style={{ marginBottom: '1rem' }}>
    <Col md={12}>
      <SearchInput
        onChange={e => setSearch(e.target.value)}
        onRemove={() => setSearch('')}
        block
      />
    </Col>
  </Row>
  <Row>
<Col style={{ textAlign: 'center', ...checkVisible("arrived-letter") }} sm={3} md={3}>
  <Icon.ClipArt type="arrived-letter" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>arrived-letter</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("basic-preferences") }} sm={3} md={3}>
  <Icon.ClipArt type="basic-preferences" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>basic-preferences</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("broken-robot") }} sm={3} md={3}>
  <Icon.ClipArt type="broken-robot" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>broken-robot</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("car") }} sm={3} md={3}>
  <Icon.ClipArt type="car" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>car</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("check") }} sm={3} md={3}>
  <Icon.ClipArt type="check" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>check</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("default-app") }} sm={3} md={3}>
  <Icon.ClipArt type="default-app" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>default-app</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("empty-state-feather") }} sm={3} md={3}>
  <Icon.ClipArt type="empty-state-feather" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>empty-state-feather</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("empty-state-machine-learning") }} sm={3} md={3}>
  <Icon.ClipArt type="empty-state-machine-learning" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>empty-state-machine-learning</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("error") }} sm={3} md={3}>
  <Icon.ClipArt type="error" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>error</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("folder") }} sm={3} md={3}>
  <Icon.ClipArt type="folder" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>folder</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("giraffe") }} sm={3} md={3}>
  <Icon.ClipArt type="giraffe" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>giraffe</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("group") }} sm={3} md={3}>
  <Icon.ClipArt type="group" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>group</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("handshake") }} sm={3} md={3}>
  <Icon.ClipArt type="handshake" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>handshake</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("image-sms") }} sm={3} md={3}>
  <Icon.ClipArt type="image-sms" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>image-sms</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("image-upload") }} sm={3} md={3}>
  <Icon.ClipArt type="image-upload" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>image-upload</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("instant-loan") }} sm={3} md={3}>
  <Icon.ClipArt type="instant-loan" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>instant-loan</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("list-cards") }} sm={3} md={3}>
  <Icon.ClipArt type="list-cards" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>list-cards</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("log-viewer") }} sm={3} md={3}>
  <Icon.ClipArt type="log-viewer" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>log-viewer</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("machine-learning-tags") }} sm={3} md={3}>
  <Icon.ClipArt type="machine-learning-tags" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>machine-learning-tags</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("new-folder") }} sm={3} md={3}>
  <Icon.ClipArt type="new-folder" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>new-folder</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("no-result") }} sm={3} md={3}>
  <Icon.ClipArt type="no-result" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>no-result</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("photo") }} sm={3} md={3}>
  <Icon.ClipArt type="photo" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>photo</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("project-tag") }} sm={3} md={3}>
  <Icon.ClipArt type="project-tag" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>project-tag</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("project-to-archive") }} sm={3} md={3}>
  <Icon.ClipArt type="project-to-archive" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>project-to-archive</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("sms") }} sm={3} md={3}>
  <Icon.ClipArt type="sms" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>sms</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("store") }} sm={3} md={3}>
  <Icon.ClipArt type="store" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>store</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("terminal-book") }} sm={3} md={3}>
  <Icon.ClipArt type="terminal-book" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>terminal-book</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("trash") }} sm={3} md={3}>
  <Icon.ClipArt type="trash" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>trash</div>
</Col>
<Col style={{ textAlign: 'center', ...checkVisible("ui-components") }} sm={3} md={3}>
  <Icon.ClipArt type="ui-components" />
  <div style={{ wordWrap: 'break-word', padding: '.5rem 0' }}>ui-components</div>
</Col>
  </Row>
</Container>
```