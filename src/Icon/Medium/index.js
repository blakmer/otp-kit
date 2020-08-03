import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../index.module.css'
import classes from '../../classes.module.css'
import Edit from './types/edit'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import HourGlass from './types/hourglass'
import Hammer from './types/hammer'
import Plus from './types/plus'
import Minus from './types/minus'
import Tick from './types/tick'
import Close from './types/close'
import Info from './types/info'
import Calendar from './types/calendar'
import Refresh from './types/refresh'
import Search from './types/search'
import AlertTriangle from './types/alert-trianlge'
import Bulb from './types/bulb'
import Hamburger from './types/hamburger'
import Car from './types/car'
import AnalyticsPie from './types/analytics-pie'
import AlarmBell from './types/alarm-bell'
import Profile from './types/profile'
import PowerOff from './types/power-off'
import Gear from './types/gear'
import DocsTagEditor from './types/docs-tag-editor'
import MachineLearning from './types/machine-learning'
import Trash from './types/trash'
import Folder from './types/folder'
import Photo from './types/photo'
import Tag from './types/tag'
import DocumentChecked from './types/document-checked'
import DocumentEmpty from './types/document-empty'
import DocumentWarning from './types/document-warning'
import DocumentIncorrect from './types/document-incorrect'
import Preferences from './types/preferences'
import TagCheck from './types/tag-check'
import TagAlert from './types/tag-alert'
import TagBlock from './types/tag-block'
import TryAgain from './types/try-again'
import CarOnline from './types/car-online'
import SmileUnhappy from './types/smile-unhappy'
import MoveBack from './types/move-back'
import Email from './types/email'
import Phone from './types/phone'
import TimeClockCircle from './types/time-clock-circle'
import Upload from './types/upload'
import CreditCard from './types/credit-card'
import CalendarBlack from './types/calendar-black'
import CalendarAdd from './types/calendar-add'
import Bank from './types/bank'
import Transactions from './types/transactions'
import Download from './types/download'
import Entertainment from './types/entertainment'
import Shopping from './types/shopping'
import Restaurant from './types/restaurant'
import Transport from './types/transport'
import Flash from './types/flash'
import Lock from './types/lock'
import Unlock from './types/unlock'
import SendEmail from './types/send-email'
import LocationTarget from './types/location-target'
import SingleNeutral from './types/single-neutral'
import FamilyChild from './types/family-child'
import FamilyAddNewMember from './types/family-add-new-member'
import HospitalFirstAid from './types/hospital-first-aid'
import AwardRibbonStar from './types/award-ribbon-star'
import ButtonPlay from './types/button-play'
import OfficeFilePdf from './types/office-file-pdf'
import DiscountCircle from './types/discount-circle'
import MoneyAtm from './types/money-atm'
import HouseChimney from './types/house-chimney'
import CalendarClock from './types/calendar-clock'
import PinLocation from './types/pin-location'
import ZoomIn from './types/zoom-in'
import ZoomOut from './types/zoom-out'
import ReflectRight from './types/reflect-right'
import RotateForward from './types/rotate-forward'
import PhoneActionsCall from './types/phone-actions-call'
import Book from './types/book'
import TripRoad from './types/trip-road'
import Bicycle from './types/bicycle'
import StylethreePinParking from './types/style-three-pin-parking'
import BabyCareTrolley from './types/baby-care-trolley'
import SavingSafe from './types/saving-safe'
import Wifi from './types/wifi'
import DisabilityWheelchair from './types/disability-wheelchair'
import Earth from './types/earth'
import Clock from './types/clock'
import BankingAccount from './types/banking-account'
import Hierarchy from './types/hierarchy'
import BankCustomer from './types/bank-customer'
import TransferUser from './types/transfer-user'
import Computer from './types/computer'
import News from './types/news'
import PhoneBook from './types/phonebook'
import LegalScale from './types/legal-scale'
import TextOptions from './types/text-options'
import Paragraph from './types/paragraph'
import Profil from './types/profil'
import Document from './types/document'
import CalendarWarning from './types/calendar-warning'
import CreditCardLock from './types/cradit-card-lock'
import CreditCardRemove from './types/credit-card-remove'
import HouseNature from './types/house-nature'
import Scooter from './types/scooter'
import QrCode from './types/qr-code'
import TouchId from './types/touch-id'
import PartyConfetti from './types/party-confetti'
import EarthGlobe from './types/earth-globe'
import CreditCardPayment from './types/credit-card-payment'
import Trailer from './types/trailer'
import Bus from './types/bus'
import EarthLock from './types/earth-lock'
import LeftRightArrow from './types/left-right-arrow'
import List from './types/list'
import TimeLine from './types/timeline'
import Login from './types/login'
import Currency from './types/currency'
import EditUser from './types/edit-user'
import Vignette from './types/vignette'
import Health from './types/health'
import LegalInformaton from './types/legal-information'
import Chat from './types/chat'
import Toys from './types/toys'
import HardOfHearing from './types/hard-of-hearing'
import View from './types/view'
import ViewOff from './types/view-off'
import CardOnlineLimit from './types/card-online-limit'
import EditProfile from './types/edit-profile'
import AddPartner from './types/add-partner'
import SearchPartner from './types/search-partner'
import QueuingLong from './types/queuing-long'
import Print from './types/print'
import OfficeFileIso from './types/office-file-iso'
import OfficeFileCsv from './types/office-file-csv'
import OfficeFileXls from './types/office-file-xls'
import Filter from './types/filter'
import Buildings from './types/buildings'
import ShirtPlain from './types/shirt-plain'
import PhoneCode from './types/phone-code'
import PhoneNoti from './types/phone-noti'
import Chair from './types/chair'
import Announcement from './types/announcement'
import Wench from './types/wench'
import Business from './types/business'
import Shield from './types/shield'
import MoneyTransferBetweenAccounts from './types/money-transfer-between-accounts'
import SmileyVeryHappy from './types/smiley-happy'
import SmileyHappy from './types/smiley-happy'
import SmileyIndifferent from './types/smiley-indifferent'
import SmileyUnhappy from './types/smiley-unhappy'
import SmileySad from './types/smiley-sad'
import RoomServiceGivePlate from './types/room-service-give-plate'
import TennisPlayer from './types/tennis-player'
import HotelBedroom from './types/hotel-bedroom'
import MapSearch from './types/map-searcch'
import NoFilter from './types/no-filter'
import TickInCircle from './types/tick-in-circle'
import MobilePhone from './types/mobile-phone'
import Telefone from './types/telefone'
import Bill from './types/bill'
import Laptop from './types/laptop'
import MoneyTransfer from './types/money-transfer'
import ErrorState from './types/error-state'
import TravelBag from './types/travel-bag'
import Envelope from './types/envelope'
import FixedMoney from './types/fixed-money'
import Piggy from './types/piggy'
import LegalHammer from './types/legal-hammer'
import Repeat from './types/repeat'
import Star from './types/star'
import Feed from './types/feed'
import Cheque from './types/cheque'
import CsoportosBeszedes from './types/csoportos-beszedes'
import Kolcson from './types/kolcson'
import VignetteSecond from './types/vignette-second'
import Tv from './types/tv'
import Tablet from './types/tablet'
import Egyeb from './types/egyeb'
import AiBrain from './types/ai-brain'
import GlassLab from './types/glass-lab'
import EmptyBox from './types/empty-box'
import Tags from './types/tags'
import Play from './types/play'
import Pause from './types/pause'
import BugSearch from './types/bug-search'
import FileDouble from './types/file-double'
import MenuKebab from './types/menu-kebab'
import NoTags from './types/no-tags'
import DownloadFile from './types/download-file'
import FilterText from './types/filter-text'
import Code from './types/code'
import AddCircle from './types/add-circle'
import ArrowDownBig from './types/arrow-down-big'
import ArrowLeftBig from './types/arrow-left-big'
import ArrowRightBig from './types/arrow-right-big'
import ArrowUpBig from './types/arrow-up-big'
import ArrowRightBold from './types/arrow-right-bold'
import Briefcase from './types/briefcase'
import Building from './types/building'
import Car2 from './types/car-2'
import CompanyInfo from './types/company-info'
import ContractApprove from './types/contract-approve'
import FileAward from './types/file-award'
import FileDoc from './types/file-doc'
import FilePpt from './types/file-ppt'
import FileRar from './types/file-rar'
import FileRtf from './types/file-rtf'
import FileTextCash from './types/file-text-cash'
import FileTxt from './types/file-txt'
import FileUpload from './types/file-upload'
import FileZip from './types/file-zip'
import Giraffe from './types/giraffe'
import HandShake from './types/hand-shake'
import HumanHierarchy from './types/human-hierarchy'
import KeyboardArrowRight from './types/keyboard-arrow-right'
import ModuleThree from './types/module-three'
import Paste from './types/paste'
import Pin from './types/pin'
import Print2 from './types/print-2'
import ProgrammingCode from './types/programming-code'
import Redo from './types/redo'
import Scissors from './types/scissors'
import ServerPhoneExchange from './types/server-phone-exchange'
import Shop from './types/shop'
import SubtractCircle from './types/subtract-circle'
import TagAuto from './types/tag-auto'
import TagShoppingNew from './types/tag-shopping-new'
import Undo from './types/undo'
import UploadFile from './types/upload-file'
import VintageCar from './types/vintage-car'
import Xml from './types/xml'
import DocumentHand from './types/document-hand'
import DashboardTiles from './types/dashboard-tiles'
import Delete from './types/delete'

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
  search: Search,
  'alert-triangle': AlertTriangle,
  bulb: Bulb,
  hamburger: Hamburger,
  car: Car,
  'analytics-pie': AnalyticsPie,
  'alarm-bell': AlarmBell,
  profile: Profile,
  'power-off': PowerOff,
  gear: Gear,
  trash: Trash,
  'docs-tag-editor': DocsTagEditor,
  'machine-learning': MachineLearning,
  folder: Folder,
  photo: Photo,
  tag: Tag,
  'tag-check': TagCheck,
  'tag-alert': TagAlert,
  'tag-block': TagBlock,
  'document-checked': DocumentChecked,
  'document-empty': DocumentEmpty,
  'document-warning': DocumentWarning,
  'document-incorrect': DocumentIncorrect,
  preferences: Preferences,
  'try-again': TryAgain,
  'car-online': CarOnline,
  'smile-unhappy': SmileUnhappy,
  'move-back': MoveBack,
  email: Email,
  phone: Phone,
  'time-clock-circle': TimeClockCircle,
  upload: Upload,
  'credit-card': CreditCard,
  'calendar-black': CalendarBlack,
  'calendar-add': CalendarAdd,
  bank: Bank,
  transactions: Transactions,
  download: Download,
  entertainment: Entertainment,
  shopping: Shopping,
  restaurant: Restaurant,
  transport: Transport,
  flash: Flash,
  lock: Lock,
  unlock: Unlock,
  'send-email': SendEmail,
  'location-target': LocationTarget,
  'single-neutral': SingleNeutral,
  'family-child': FamilyChild,
  'family-add-new-member': FamilyAddNewMember,
  'hospital-first-aid': HospitalFirstAid,
  'award-ribbon-star': AwardRibbonStar,
  'button-play': ButtonPlay,
  'office-file-pdf': OfficeFilePdf,
  'discount-circle': DiscountCircle,
  'money-atm': MoneyAtm,
  'house-chimney': HouseChimney,
  'calendar-clock': CalendarClock,
  'pin-location': PinLocation,
  'zoom-in': ZoomIn,
  'zoom-out': ZoomOut,
  'reflect-right': ReflectRight,
  'rotate-forward': RotateForward,
  'phone-actions-call': PhoneActionsCall,
  book: Book,
  'trip-road': TripRoad,
  bicycle: Bicycle,
  'style-three-pin-parking': StylethreePinParking,
  'baby-care-trolley': BabyCareTrolley,
  'saving-safe': SavingSafe,
  wifi: Wifi,
  'disability-wheelchair': DisabilityWheelchair,
  earth: Earth,
  clock: Clock,
  'banking-account': BankingAccount,
  hierarchy: Hierarchy,
  'bank-customer': BankCustomer,
  'transfer-user': TransferUser,
  computer: Computer,
  news: News,
  phonebook: PhoneBook,
  'legal-scale': LegalScale,
  'text-options': TextOptions,
  paragraph: Paragraph,
  profil: Profil,
  document: Document,
  'calendar-warning': CalendarWarning,
  'credit-card-lock': CreditCardLock,
  'credit-card-remove': CreditCardRemove,
  'house-nature': HouseNature,
  scooter: Scooter,
  'qr-code': QrCode,
  'touch-id': TouchId,
  'party-confetti': PartyConfetti,
  'earth-globe': EarthGlobe,
  'credit-card-payment': CreditCardPayment,
  trailer: Trailer,
  bus: Bus,
  'earth-lock': EarthLock,
  'left-right-arrow': LeftRightArrow,
  list: List,
  timeline: TimeLine,
  login: Login,
  currency: Currency,
  'edit-user': EditUser,
  vignette: Vignette,
  health: Health,
  'legal-information': LegalInformaton,
  chat: Chat,
  toys: Toys,
  'hard-of-hearing': HardOfHearing,
  view: View,
  'view-off': ViewOff,
  'card-online-limit': CardOnlineLimit,
  'edit-profile': EditProfile,
  'add-partner': AddPartner,
  'search-partner': SearchPartner,
  'queuing-long': QueuingLong,
  print: Print,
  'office-file-iso': OfficeFileIso,
  'office-file-csv': OfficeFileCsv,
  'office-file-xls': OfficeFileXls,
  filter: Filter,
  buildings: Buildings,
  'shirt-plain': ShirtPlain,
  'phone-code': PhoneCode,
  'phone-noti': PhoneNoti,
  chair: Chair,
  announcement: Announcement,
  wench: Wench,
  business: Business,
  shield: Shield,
  'money-transfer-between-accounts': MoneyTransferBetweenAccounts,
  'smiley-very-happy': SmileyVeryHappy,
  'smiley-happy': SmileyHappy,
  'smiley-indifferent': SmileyIndifferent,
  'smiley-unhappy': SmileyUnhappy,
  'smiley-sad': SmileySad,
  'room-service-give-plate': RoomServiceGivePlate,
  'tennis-player': TennisPlayer,
  'hotel-bedroom': HotelBedroom,
  'map-search': MapSearch,
  'no-filter': NoFilter,
  'tick-in-circle': TickInCircle,
  'mobile-phone': MobilePhone,
  telefone: Telefone,
  bill: Bill,
  laptop: Laptop,
  'money-transfer': MoneyTransfer,
  'error-state': ErrorState,
  'travel-bag': TravelBag,
  envelope: Envelope,
  'fixed-money': FixedMoney,
  piggy: Piggy,
  'legal-hammer': LegalHammer,
  repeat: Repeat,
  star: Star,
  feed: Feed,
  cheque: Cheque,
  'csoportos-beszedes': CsoportosBeszedes,
  kolcson: Kolcson,
  'vignette-second': VignetteSecond,
  tv: Tv,
  tablet: Tablet,
  egyeb: Egyeb,
  'ai-brain': AiBrain,
  'glass-lab': GlassLab,
  'empty-box': EmptyBox,
  tags: Tags,
  play: Play,
  pause: Pause,
  'bug-search': BugSearch,
  'file-double': FileDouble,
  'menu-kebab': MenuKebab,
  'no-tags': NoTags,
  'filter-text': FilterText,
  'download-file': DownloadFile,
  code: Code,
  'add-circle': AddCircle,
  'arrow-down-big': ArrowDownBig,
  'arrow-left-big': ArrowLeftBig,
  'arrow-right-big': ArrowRightBig,
  'arrow-up-big': ArrowUpBig,
  'arrow-right-bold': ArrowRightBold,
  briefcase: Briefcase,
  building: Building,
  'car-2': Car2,
  'company-info': CompanyInfo,
  'contract-approve': ContractApprove,
  'file-award': FileAward,
  'file-doc': FileDoc,
  'file-ppt': FilePpt,
  'file-rar': FileRar,
  'file-rtf': FileRtf,
  'file-text-cash': FileTextCash,
  'file-txt': FileTxt,
  'file-upload': FileUpload,
  'file-zip': FileZip,
  giraffe: Giraffe,
  'hand-shake': HandShake,
  'human-hierarchy': HumanHierarchy,
  'keyboard-arrow-right': KeyboardArrowRight,
  'module-three': ModuleThree,
  paste: Paste,
  pin: Pin,
  'print-2': Print2,
  'programming-code': ProgrammingCode,
  redo: Redo,
  scissors: Scissors,
  'server-phone-exchange': ServerPhoneExchange,
  shop: Shop,
  'subtract-circle': SubtractCircle,
  'tag-auto': TagAuto,
  'tag-shopping-new': TagShoppingNew,
  undo: Undo,
  'upload-file': UploadFile,
  'vintage-car': VintageCar,
  xml: Xml,
  'document-hand': DocumentHand,
  'dashboard-tiles': DashboardTiles,
  delete: Delete,
}

const Medium = props => {
  const { type, fill, className, onClick } = props
  const SVG = REFERENCES[type]

  return SVG ? (
    <span
      className={classnames(styles.medium, styles.wrapper, className)}
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

Medium.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Medium.defaultProps = {
  fill: 'text-primary',
}

export default Medium
