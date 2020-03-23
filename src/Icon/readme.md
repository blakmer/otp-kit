#### Icon types

#### Small

```js
import Grid from '../Grid'
import Input from '../Input'

const search = {
  value: '',
}

function setValue(text) {
  if (text === '') {
    const smallIcons = document.querySelectorAll('.smallIcons div')
    smallIcons.forEach(elem => {
      elem.style.display = 'block'
    })
  }
  search.value = text.toLowerCase()
}

function submitSearch() {
  const smallIcons = document.querySelectorAll('.smallIcons div div')
  smallIcons.forEach(elem => {
    /** exact match */
    // if(search.value === elem.textContent)
    // {
    //   console.log(elem.textContent);
    // }
    if (elem.textContent.includes(search.value)) {
      elem.parentElement.style.display = 'block'
    } else {
      elem.parentElement.style.display = 'none'
    }
  })
}

const { Container, Row, Col } = Grid

;<Container>
  <div onChange={submitSearch}>
    <Row>
      <Col sm={12} md={4} style={{ textAlign: 'center' }}>
        <Input
          label="Search"
          onChange={e => setValue(e.target.value)}
          value="Search"
        />
      </Col>
    </Row>
  </div>
  <Row className="smallIcons">
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="edit" />
      <div>edit</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="arrow-right" />
      <div>arrow-right</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="arrow-left" />
      <div>arrow-left</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="arrow-down" />
      <div>arrow-down</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="arrow-up" />
      <div>arrow-up</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="hourglass" />
      <div>hourglass</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="hammer" />
      <div>hammer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="plus" />
      <div>plus</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="minus" />
      <div>minus</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="tick" />
      <div>tick</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="close" />
      <div>close</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="info" />
      <div>info</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="calendar" fill="green" />
      <div>calendar</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="refresh" />
      <div>refresh</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="house-chimney" />
      <div>house-chimney</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="trash" />
      <div>trash</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="alert-triangle" />
      <div>alert-triangle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="search" />
      <div>search</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="bulb" />
      <div>bulb</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="tick-in-circle" />
      <div>tick-in-circle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="try-again" />
      <div>try-again</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="mobile-phone" />
      <div>mobile-phone</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="bank" />
      <div>bank</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="transactions" />
      <div>transactions</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="download" />
      <div>download</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="entertainment" />
      <div>entertainment</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="shopping" />
      <div>shopping</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="restaurant" />
      <div>restaurant</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="transport" />
      <div>transport</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="telephone" />
      <div>telephone</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="email" />
      <div>email</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="notes-paper-text" />
      <div>notes-paper-text</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="laptop" />
      <div>laptop</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="upload" />
      <div>upload</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="car" />
      <div>car</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="money-transfer" />
      <div>money-transfer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="error" />
      <div>error</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="car-online" />
      <div>car-online</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="travel-bag" />
      <div>travel-bag</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="smile-unhappy" />
      <div>smile-unhappy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="envelope" />
      <div>envelope</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="fixed-money" />
      <div>fixed-money</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="button-play" />
      <div>button-play</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="gear" />
      <div>gear</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="power-off" />
      <div>power-off</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="move-back" />
      <div>move-back</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="phone" />
      <div>phone</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="time-clock-circle" />
      <div>time-clock-circle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="piggy" />
      <div>piggy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="legal-hammer" />
      <div>legal-hammer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="credit-card" />
      <div>credit-card</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="calendar-add" />
      <div>calendar-add</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="flash" />
      <div>flash</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="lock" />
      <div>lock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="unlock" />
      <div>unlock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="send-email" />
      <div>send-email</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="trip-road" />
      <div>trip-road</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="single-neutral" />
      <div>single-neutral</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="family-child" />
      <div>family-child</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="family-add-new-member" />
      <div>family-add-new-member</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="hospital-first-aid" />
      <div>hospital-first-aid</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="award-ribbon-star" />
      <div>award-ribbon-star</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="analytics-pie" />
      <div>analytics-pie</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="office-file-pdf" />
      <div>office-file-pdf</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="discount-circle" />
      <div>discount-circle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="money-atm" />
      <div>money-atm</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="calendar-clock" />
      <div>calendar-clock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="pin-location" />
      <div>pin-location</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="zoom-in" />
      <div>zoom-in</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="zoom-out" />
      <div>zoom-out</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="rotate-forward" />
      <div>rotate-forward</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="delete" />
      <div>delete</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="phone-actions-call" />
      <div>phone-actions-call</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="book" />
      <div>book</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="location-target" />
      <div>location-target</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="bicycle" />
      <div>bicycle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="external-link" />
      <div>external-link</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="baby-care-trolley" />
      <div>baby-care-trolley</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="saving-safe" />
      <div>saving-safe</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="list" />
      <div>list</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="earth" />
      <div>earth</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="star" />
      <div>star</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="chrome" />
      <div>chrome</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Small type="firefox" />
      <div>firefox</div>
    </Col>
  </Row>
</Container>
```

#### Medium

```js
import Grid from '../Grid'
import Input from '../Input'

const search = {
  value: '',
}

function setValue(text) {
  if (text === '') {
    const mediumIcons = document.querySelectorAll('.mediumIcons div')
    mediumIcons.forEach(elem => {
      elem.style.display = 'block'
    })
  }
  search.value = text.toLowerCase()
}

function submitSearch() {
  const mediumIcons = document.querySelectorAll('.mediumIcons div div')
  mediumIcons.forEach(elem => {
    /** exact match */
    // if(search.value === elem.textContent)
    // {
    //   console.log(elem.textContent);
    // }
    if (elem.textContent.includes(search.value)) {
      elem.parentElement.style.display = 'block'
    } else {
      elem.parentElement.style.display = 'none'
    }
  })
}

const { Container, Row, Col } = Grid

;<Container>
  <div>
    <div onChange={submitSearch}>
      <Row>
        <Col sm={12} md={4} style={{ textAlign: 'center' }}>
          <Input
            label="Search"
            onChange={e => setValue(e.target.value)}
            value="Search"
          />
        </Col>
      </Row>
    </div>
  </div>
  <Row className="mediumIcons">
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="edit" />
      <div>edit</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="arrow-right" />
      <div>arrow-right</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="arrow-left" />
      <div>arrow-left</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="arrow-down" />
      <div>arrow-down</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="arrow-up" />
      <div>arrow-up</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hourglass" />
      <div>hourglass</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hammer" />
      <div>hammer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="plus" />
      <div>plus</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="minus" />
      <div>minus</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tick" />
      <div>tick</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="close" />
      <div>close</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="info" />
      <div>info</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="calendar" fill="green" />
      <div>calendar</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="refresh" />
      <div>refresh</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="search" />
      <div>search</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="alert-triangle" />
      <div>alert-triangle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="bulb" />
      <div>bulb</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hamburger" />
      <div>hamburger</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="car" />
      <div>car</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="analytics-pie" />
      <div>analytics-pie</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="alarm-bell" />
      <div>alarm-bell</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="profile" />
      <div>profile</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="power-off" />
      <div>power-off</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="gear" />
      <div>gear</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="trash" />
      <div>trash</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="docs-tag-editor" />
      <div>docs-tag-editor</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="machine-learning" />
      <div>machine-learning</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="folder" />
      <div>folder</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="photo" />
      <div>photo</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tag" />
      <div>tag</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tag-check" fill="green" />
      <div>tag-check</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tag-alert" fill="highlighted" />
      <div>tag-alert</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tag-block" fill="danger" />
      <div>tag-block</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="document-checked" />
      <div>document-checked</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="document-empty" />
      <div>document-empty</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="document-warning" />
      <div>document-warning</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="document-incorrect" />
      <div>document-incorrect</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="preferences" />
      <div>preferences</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="try-again" />
      <div>try-again</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="car-online" />
      <div>car-online</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="smile-unhappy" />
      <div>smile-unhappy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="move-back" />
      <div>move-back</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="email" />
      <div>email</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="phone" />
      <div>phone</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="time-clock-circle" />
      <div>time-clock-circle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="upload" />
      <div>upload</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="credit-card" />
      <div>credit-card</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="calendar-black" />
      <div>calendar-black</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="calendar-add" />
      <div>calendar-add</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="bank" />
      <div>bank</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="transactions" />
      <div>transactions</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="download" />
      <div>download</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="entertainment" />
      <div>entertainment</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="shopping" />
      <div>shopping</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="restaurant" />
      <div>restaurant</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="transport" />
      <div>transport</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="flash" />
      <div>flash</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="lock" />
      <div>lock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="unlock" />
      <div>unlock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="send-email" />
      <div>send-email</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="location-target" />
      <div>location-target</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="single-neutral" />
      <div>single-neutral</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="family-child" />
      <div>family-child</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="family-add-new-member" />
      <div>family-add-new-member</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hospital-first-aid" />
      <div>hospital-first-aid</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="award-ribbon-star" />
      <div>award-ribbon-star</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="button-play" />
      <div>button-play</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="office-file-pdf" />
      <div>office-file-pdf</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="discount-circle" />
      <div>discount-circle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="money-atm" />
      <div>money-atm</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="house-chimney" />
      <div>house-chimney</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="calendar-clock" />
      <div>calendar-clock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="pin-location" />
      <div>pin-location</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="zoom-in" />
      <div>zoom-in</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="zoom-out" />
      <div>zoom-out</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="reflect-right" />
      <div>reflect-right</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="rotate-forward" />
      <div>rotate-forward</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="phone-actions-call" />
      <div>phone-actions-call</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="book" />
      <div>book</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="trip-road" />
      <div>trip-road</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="bicycle" />
      <div>bicycle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="style-three-pin-parking" />
      <div>style-three-pin-parking</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="baby-care-trolley" />
      <div>baby-care-trolley</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="saving-safe" />
      <div>saving-safe</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="wifi" />
      <div>wifi</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="disability-wheelchair" />
      <div>disability-wheelchair</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="earth" />
      <div>earth</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="clock" />
      <div>clock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="banking-account" />
      <div>banking-account</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hierarchy" />
      <div>hierarchy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="bank-customer" />
      <div>bank-customer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="transfer-user" />
      <div>transfer-user</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="computer" />
      <div>computer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="news" />
      <div>news</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="phonebook" />
      <div>phonebook</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="legal-scale" />
      <div>legal-scale</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="text-options" />
      <div>text-options</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="paragraph" />
      <div>paragraph</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="profil" />
      <div>profil</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="document" />
      <div>document</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="calendar-warning" />
      <div>calendar-warning</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="credit-card-lock" />
      <div>credit-card-lock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="credit-card-remove" />
      <div>credit-card-remove</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="house-nature" />
      <div>house-nature</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="scooter" />
      <div>scooter</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="qr-code" />
      <div>qr-code</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="touch-id" />
      <div>touch-id</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="party-confetti" />
      <div>party-confetti</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="earth-globe" />
      <div>earth-globe</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="credit-card-payment" />
      <div>credit-card-payment</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="trailer" />
      <div>trailer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="bus" />
      <div>bus</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="earth-lock" />
      <div>earth-lock</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="left-right-arrow" />
      <div>left-right-arrow</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="list" />
      <div>list</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="timeline" />
      <div>timeline</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="login" />
      <div>login</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="currency" />
      <div>currency</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="edit-user" />
      <div>edit-user</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="vignette" />
      <div>vignette</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="health" />
      <div>health</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="legal-information" />
      <div>legal-information</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="chat" />
      <div>chat</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="toys" />
      <div>toys</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hard-of-hearing" />
      <div>hard-of-hearing</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="view" />
      <div>view</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="view-off" />
      <div>view-off</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="card-online-limit" />
      <div>card-online-limit</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="edit-profile" />
      <div>edit-profile</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="add-partner" />
      <div>add-partner</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="search-partner" />
      <div>search-partner</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="queuing-long" />
      <div>queuing-long</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="print" />
      <div>print</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="office-file-iso" />
      <div>office-file-iso</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="office-file-csv" />
      <div>office-file-csv</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="office-file-xls" />
      <div>office-file-xls</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="filter" />
      <div>filter</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="no-filter" />
      <div>no-filter</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="buildings" />
      <div>buildings</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="shirt-plain" />
      <div>shirt-plain</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="phone-code" />
      <div>phone-code</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="phone-noti" />
      <div>phone-noti</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="chair" />
      <div>chair</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="announcement" />
      <div>announcement</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="wench" />
      <div>wench</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="business" />
      <div>business</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="shield" />
      <div>shield</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="money-transfer-between-accounts" />
      <div>money-transfer-between-accounts</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="smiley-very-happy" />
      <div>smiley-very-happy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="smiley-happy" />
      <div>smiley-happy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="smiley-indifferent" />
      <div>smiley-indifferent</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="smiley-unhappy" />
      <div>smiley-unhappy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="smiley-sad" />
      <div>smiley-sad</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="room-service-give-plate" />
      <div>room-service-give-plate</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tennis-player" />
      <div>tennis-player</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="hotel-bedroom" />
      <div>hotel-bedroom</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="map-search" />
      <div>map-search</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tick-in-circle" />
      <div>tick-in-circle</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="mobile-phone" />
      <div>mobile-phone</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="telefone" />
      <div>telefone</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="bill" />
      <div>bill</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="laptop" />
      <div>laptop</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="money-transfer" />
      <div>money-transfer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="error-state" />
      <div>error-state</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="travel-bag" />
      <div>travel-bag</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="envelope" />
      <div>envelope</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="fixed-money" />
      <div>fixed-money</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="piggy" />
      <div>piggy</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="legal-hammer" />
      <div>legal-hammer</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="repeat" />
      <div>repeat</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="star" />
      <div>star</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="feed" />
      <div>feed</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="cheque" />
      <div>cheque</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="csoportos-beszedes" />
      <div>csoportos-beszedes</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="kolcson" />
      <div>kolcson</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="vignette-second" />
      <div>vignette-second</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tv" />
      <div>tv</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tablet" />
      <div>tablet</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="egyeb" />
      <div>egyeb</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="ai-brain" />
      <div>ai-brain</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="glass-lab" />
      <div>glass-lab</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="empty-box" />
      <div>empty-box</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1}>
      <Icon.Medium type="tags" />
      <div>tags</div>
    </Col>
  </Row>
</Container>
```

#### ClipArt

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="project-tag" fill="green" />
      <div>project-tag</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="new-folder" />
      <div>new-folder</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="list-cards" fill="blue" />
      <div>list-cards</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="check" fill="green" />
      <div>check</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="empty-state-machine-learning" fill="danger" />
      <div>empty-state-machine-learning</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="project-to-archive" />
      <div>project-to-archive</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="basic-preferences" fill="danger" />
      <div>basic-preferences</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="image-upload" fill="blue" />
      <div>image-upload</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="empty-state-feather" fill="blue" />
      <div>empty-state-feather</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="trash" />
      <div>trash</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="error" fill="danger" />
      <div>error</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="image-sms" fill="green" />
      <div>image-sms</div>
    </Col>
    <Col style={{ textAlign: 'center' }} sm={2} md={1.5}>
      <Icon.ClipArt type="broken-robot" />
      <div>broken-robot</div>
    </Col>
  </Row>
</Container>
```
