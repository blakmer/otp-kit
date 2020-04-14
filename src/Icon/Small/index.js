import React from 'react'
import PropTypes from 'prop-types'
import styles from '../index.module.css'
import classes from '../../classes.css'
import classnames from 'classnames'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import Calendar from './types/calendar'
import Edit from './types/edit'
import HourGlass from './types/hourglass'
import Hammer from './types/hammer'
import Plus from './types/plus'
import Minus from './types/minus'
import Tick from './types/tick'
import Close from './types/close'
import Info from './types/info'
import Refresh from './types/refresh'
import HouseChimney from './types/house-chimney'
import Trash from './types/trash'
import AlertTriangle from './types/allert-triangle'
import Search from './types/search'
import Bulb from './types/bulb'
import TickInCircle from './types/tick-in-circle'
import TryAgain from './types/try-again'
import MobilePhone from './types/mobile-phone'
import Bank from './types/bank'
import Transactions from './types/transactions'
import DownLoad from './types/download'
import Entertainment from './types/entertainment'
import Shopping from './types/shopping'
import Restaurant from './types/restaurant'
import Transport from './types/transport'
import Telephone from './types/telephone'
import Email from './types/email'
import NotesPaperText from './types/notes-paper-text'
import Laptop from './types/laptop'
import Upload from './types/upload'
import Car from './types/car'
import MoneyTransfer from './types/money-transfer'
import ErrorState from './types/error'
import CarOnline from './types/car-online'
import TravelBag from './types/travel-bag'
import SmileUnhappy from './types/smile-unhappy'
import Envelope from './types/envelope'
import FixedMoney from './types/fixed-money'
import ButtonPlay from './types/button-play'
import Gear from './types/gear'
import PowerOff from './types/power-off'
import MoveBack from './types/move-back'
import Phone from './types/phone'
import TimeClockCircle from './types/time-clock-circle'
import Piggy from './types/piggy'
import LegalHammer from './types/legal-hammer'
import CreditCard from './types/credit-card'
import CalendarAdd from './types/calendar-add'
import Flash from './types/flash'
import Lock from './types/lock'
import Unlock from './types/unlock'
import SendEmail from './types/send-email'
import TripRoad from './types/trip-road'
import SingleNeutral from './types/single-neutral'
import FamilyChild from './types/family-child'
import FamilyAddNewMember from './types/family-add-new-member'
import HospitalFirstAid from './types/hospital-first-aid'
import AwardRibbonStar from './types/award-ribbon-star'
import AnalyticsPie from './types/analytics-pie'
import OfficeFilePdf from './types/office-file-pdf'
import DiscountCircle from './types/discount-circle'
import MoneyAtm from './types/money-atm'
import CalendarClock from './types/calendar-clock'
import PinLocation from './types/pin-location'
import ZoomIn from './types/zoom-in'
import ZoomOut from './types/zoom-out'
import RotateForward from './types/rotate-forward'
import Delete from './types/delete'
import PhoneActionsCall from './types/phone-actions-call'
import Book from './types/book'
import LocationTarget from './types/location-target'
import Bicycle from './types/bicycle'
import ExternalLink from './types/external-link'
import BabyCareTrolley from './types/baby-care-trolley'
import SavingSafe from './types/saving-safe'
import List from './types/list'
import Earth from './types/earth'
import Star from './types/star'
import Chrome from './types/chrome'
import Firefox from './types/firefox'

const REFERENCES = {
  edit: Edit,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  hourglass: HourGlass,
  hammer: Hammer,
  plus: Plus,
  minus: Minus,
  tick: Tick,
  close: Close,
  info: Info,
  calendar: Calendar,
  refresh: Refresh,
  'house-chimney': HouseChimney,
  trash: Trash,
  'alert-triangle': AlertTriangle,
  search: Search,
  bulb: Bulb,
  'tick-in-circle': TickInCircle,
  'try-again': TryAgain,
  'mobile-phone': MobilePhone,
  bank: Bank,
  transactions: Transactions,
  download: DownLoad,
  entertainment: Entertainment,
  shopping: Shopping,
  restaurant: Restaurant,
  transport: Transport,
  telephone: Telephone,
  email: Email,
  'notes-paper-text': NotesPaperText,
  laptop: Laptop,
  upload: Upload,
  car: Car,
  'money-transfer': MoneyTransfer,
  error: ErrorState,
  'car-online': CarOnline,
  'travel-bag': TravelBag,
  'smile-unhappy': SmileUnhappy,
  envelope: Envelope,
  'fixed-money': FixedMoney,
  'button-play': ButtonPlay,
  gear: Gear,
  'power-off': PowerOff,
  'move-back': MoveBack,
  phone: Phone,
  'time-clock-circle': TimeClockCircle,
  piggy: Piggy,
  'legal-hammer': LegalHammer,
  'credit-card': CreditCard,
  'calendar-add': CalendarAdd,
  flash: Flash,
  lock: Lock,
  unlock: Unlock,
  'send-email': SendEmail,
  'trip-road': TripRoad,
  'single-neutral': SingleNeutral,
  'family-child': FamilyChild,
  'family-add-new-member': FamilyAddNewMember,
  'hospital-first-aid': HospitalFirstAid,
  'award-ribbon-star': AwardRibbonStar,
  'analytics-pie': AnalyticsPie,
  'office-file-pdf': OfficeFilePdf,
  'discount-circle': DiscountCircle,
  'money-atm': MoneyAtm,
  'calendar-clock': CalendarClock,
  'pin-location': PinLocation,
  'zoom-in': ZoomIn,
  'zoom-out': ZoomOut,
  'rotate-forward': RotateForward,
  delete: Delete,
  'phone-actions-call': PhoneActionsCall,
  book: Book,
  'location-target': LocationTarget,
  bicycle: Bicycle,
  'external-link': ExternalLink,
  'baby-care-trolley': BabyCareTrolley,
  'saving-safe': SavingSafe,
  list: List,
  earth: Earth,
  star: Star,
  chrome: Chrome,
  firefox: Firefox,
}

const Small = props => {
  const { type, fill, className, onClick } = props
  const SVG = REFERENCES[type]

  return SVG ? (
    <span
      className={classnames(styles.small, styles.wrapper, className)}
      onClick={onClick}>
      {
        <SVG
          className={classnames(
            classes[`${fill}-stroke`],
            classes[`${fill}-fill`]
          )}
        />
      }
    </span>
  ) : null
}

Small.propTypes = {
  fill: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Small.defaultProps = {
  fill: 'text-primary',
}

export default Small
