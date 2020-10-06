import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'
import Multi from './dist/multi'
import Simple from './dist/simple'
import { statuses } from './dist/utils'

const Select = props => {
  const { multi } = props
  return multi ? <Multi {...props} /> : <Simple {...props} />
}

Select.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Элементы всплывающго меню */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
      PropTypes.shape({
        group: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        closable: PropTypes.bool,
        expanded: PropTypes.bool,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          })
        ),
      }),
    ])
  ),
  /** Элемент из списка, выбранный по умолчанию */
  defaultValue: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  ]),
  /** Заданное значение элемента из списка */
  value: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  ]),
  onChange: PropTypes.func,
  /** Текст, отображаемый при отсутствии элементов во всплывающем меню */
  emptyText: PropTypes.string,
  /** Состояние элемента */
  status: PropTypes.oneOf(Object.keys(statuses)),
  /** Направление всплывающего меню */
  listDirection: PropTypes.oneOf(['bottom', 'top']),
  placeholder: PropTypes.string,
  /** Располагает элемент по ширине родителя */
  block: PropTypes.bool,
  /** Класс для всплывающего меню */
  menuClassName: PropTypes.string,
  /** Стилизация всплывающего меню */
  menuStyle: PropTypes.object,
  /** Кастомный рендеринг внутри всплывающего меню */
  renderMenu: PropTypes.func,
  /** Высота выбираемых элементов */
  elementHeight: PropTypes.number,
  /** Отображение поля поиска во всплывающем меню */
  showSearch: PropTypes.bool,
  /** CallBack вызываемый при вводе текста в поле поиска */
  onSearchChange: PropTypes.func,
  /** CallBack вызываемый при нажатии на клавишу Enter в поле поиска */
  onSearchEnter: PropTypes.func,
  /** CallBack вызываемый при нажатии на кнопку "Очистить поле" */
  onSearchRemove: PropTypes.func,
  /** Функция, преобразования выбранного элемента в строку */
  itemToString: PropTypes.func,
  /** Параметр, отвечающий за подгрузку данных при скроллинге */
  hasMore: PropTypes.bool,
  /** Должен ли компонент подгружать первый набор элементов */
  initialLoad: PropTypes.bool,
  /** Направление подгрузки элементов */
  isReverse: PropTypes.bool,
  /** Функция для загрузки новых элементов при прокрутке */
  loadMore: PropTypes.func,
  /** Компонент, отображаемый во время загрузки новых элементов */
  loader: PropTypes.node,
  /** Номер первой страницы для подгрузки элементов */
  pageStart: PropTypes.number,
  /** Отступ снизу в пикселях, достигнув которого, начнётся подгрузка нового набора элементов */
  threshold: PropTypes.number,
  /** Отступ снизу в пикселях, достигнув которого, начнётся подгрузка нового набора элементов */
  /** For example: 150, '12rem', '10em' */
  listMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Добавляет возможность мультивыбора элементов */
  multi: PropTypes.bool,
  /** Отображает выбранные элементы внутри компонента в виде отдельных блоков */
  multiChips: PropTypes.bool,
  /** Строка, подсвечиваемая в элементах списка */
  highlight: PropTypes.string,
  /** Класс, задаваемый для подсветки выбранных элементов */
  highlightClassName: PropTypes.string,
  /** Свойства для маскирования инпута внутри */
  maskProps: PropTypes.object,
  /** Добавляет возможность ввода значения прямо в поле поиска */
  isSearchInputChange: PropTypes.bool,
  /** Отображает пустое значение */
  emptyState: PropTypes.bool,
  /** Добавляет возможность устанавливать значение не из списка. Работает только со свойством isSearchInputChange */
  editable: PropTypes.bool,
}

Select.defaultProps = {
  items: [],
  emptyText: 'Нет данных',
  emptyState: true,
  status: statuses.default,
  onChange: value => {},
  listDirection: 'bottom',
  elementHeight: 40,
  threshold: 40,
  loadMore: () => {},
  renderMenu: menu => menu,
  onSearchChange: e => {},
  onSearchEnter: e => {},
  onSearchRemove: e => {},
  onInfiniteLoad: () => {},
  listMaxHeight: '15rem',
  loader: (
    <Spinner
      style={{ margin: '0 auto', width: '100%' }}
      key={`'loader-0'`}
      size="medium"
    />
  ),
}

Select.displayName = 'Select' //Needed for FormItem component

export default Select
