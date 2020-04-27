import React, { Fragment } from 'react'
import styles from './index.module.css'
import classes from '../classes.module.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Logo = props => {
  const { mini, className, onClick, fill, style } = props

  const setWidth = mini ? 30 : 152

  return (
    <div
      className={classnames(styles.logo, className)}
      onClick={onClick}
      style={style}>
      <svg
        width={setWidth}
        height="30"
        viewBox={`0 0 ${setWidth} 30`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          className={fill ? classes[`${fill}-fill`] : classes['logo-1-fill']}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 14.999C-3.1888e-06 11.024 1.57774 7.21161 4.38668 4.39911C7.19562 1.58661 11.006 0.0040355 14.981 -0.000999451V5.42C12.4429 5.42345 10.01 6.43424 8.21673 8.23034C6.42345 10.0264 5.41647 12.4609 5.417 14.999C5.417 16.2574 5.66488 17.5035 6.14648 18.6661C6.62809 19.8287 7.33398 20.8851 8.22386 21.7749C9.11373 22.6646 10.1702 23.3704 11.3328 23.8519C12.4955 24.3334 13.7416 24.5811 15 24.581C16.2609 24.5804 17.5093 24.3309 18.6736 23.8469C19.8379 23.3629 20.8952 22.6538 21.785 21.7604C22.6748 20.867 23.3795 19.8068 23.8588 18.6405C24.3381 17.4743 24.5825 16.2249 24.578 14.964H29.999C30.0028 16.9365 29.6177 18.8903 28.8657 20.7138C28.1138 22.5373 27.0097 24.1947 25.6166 25.5911C24.2235 26.9875 22.5688 28.0956 20.7471 28.852C18.9254 29.6083 16.9725 29.9981 15 29.999C11.0218 29.999 7.20644 28.4186 4.3934 25.6056C1.58035 22.7926 0 18.9772 0 14.999H0Z"
        />
        <path
          className={fill ? classes[`${fill}-fill`] : classes['logo-2-fill']}
          d="M8.38 14.999C8.38054 13.2344 9.08175 11.5423 10.3295 10.2945C11.5773 9.04675 13.2694 8.34553 15.034 8.345C16.7986 8.34553 18.4908 9.04675 19.7385 10.2945C20.9863 11.5423 21.6875 13.2344 21.688 14.999C21.6872 16.7631 20.9858 18.4547 19.738 19.7018C18.4902 20.9489 16.7981 21.6493 15.034 21.649C13.2699 21.6493 11.5778 20.9489 10.33 19.7018C9.08223 18.4547 8.3808 16.7631 8.38 14.999V14.999Z"
        />
        <path
          className={fill ? classes[`${fill}-fill`] : classes['logo-1-fill']}
          d="M19.649 6.568C19.6489 6.0674 19.7473 5.57168 19.9388 5.10914C20.1302 4.64659 20.4109 4.22629 20.7648 3.87222C21.1187 3.51815 21.5388 3.23725 22.0013 3.04556C22.4637 2.85386 22.9594 2.75513 23.46 2.755C23.9609 2.75487 24.4569 2.85339 24.9196 3.04494C25.3824 3.23649 25.8029 3.51732 26.1572 3.87139C26.5115 4.22546 26.7925 4.64584 26.9843 5.10852C27.1761 5.57121 27.2749 6.06714 27.275 6.568C27.2754 7.06934 27.177 7.56585 26.9855 8.02916C26.794 8.49248 26.5131 8.91353 26.1588 9.26826C25.8045 9.62299 25.3839 9.90446 24.9208 10.0966C24.4577 10.2887 23.9613 10.3877 23.46 10.388C22.9589 10.3875 22.4629 10.2882 22.0001 10.096C21.5374 9.90371 21.1171 9.62217 20.7632 9.26743C20.4093 8.9127 20.1288 8.49172 19.9376 8.02855C19.7464 7.56538 19.6483 7.06908 19.649 6.568V6.568Z"
        />
        {!mini && (
          <Fragment>
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-2-fill']
              }
              d="M136.775 10.349L136.312 12.625C135.228 17.575 134.823 19.17 133.88 24.093L133.671 24.269L130.671 24.358L130.525 24.152L131.728 19.083L132.082 17.422C130.793 17.392 129.502 17.37 128.213 17.37C127.206 17.37 126.439 17.383 125.654 17.403C125.217 19.393 124.846 21.151 124.281 24.093L124.072 24.269L121.072 24.358L120.926 24.152L122.128 19.083L122.602 16.874C123.205 14.4161 123.676 11.9279 124.015 9.42L124.224 9.214C125.272 9.09073 126.312 8.91315 127.341 8.682L127.495 8.888L127.175 10.349L126.716 12.625L126.236 14.777C127.319 14.805 128.403 14.821 129.49 14.821C130.64 14.821 131.396 14.801 132.672 14.775C133.085 12.89 133.252 11.86 133.615 9.419L133.821 9.213C134.87 9.09003 135.912 8.91246 136.943 8.681L137.089 8.887L136.775 10.349Z"
            />
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-2-fill']
              }
              d="M103.671 17.887C103.017 20.437 101.21 24.847 95.645 24.847C91.708 24.847 89.545 22.804 89.545 18.778C89.5476 18.2064 89.5897 17.6358 89.671 17.07C89.691 16.918 89.712 16.77 89.734 16.616C90.804 9.945 93.697 3.616 100.044 3.556C101.296 3.5491 102.544 3.42387 103.772 3.182L103.348 5.849C101.993 6.14345 100.611 6.29859 99.224 6.312C98.1337 6.29381 97.0804 6.70756 96.294 7.463C96.002 7.74569 95.747 8.06422 95.535 8.411C95.3758 8.66594 95.2306 8.92933 95.1 9.2C96.0136 8.91154 96.9659 8.76418 97.924 8.763C101.802 8.763 104.111 10.926 104.111 14.745C104.096 15.8066 103.948 16.8621 103.671 17.887V17.887ZM100.594 16.968C100.81 16.137 100.929 15.2835 100.948 14.425C100.948 11.432 99.024 10.925 97.927 10.925C93.28 10.925 92.686 18.148 92.686 19.244C92.686 21.613 94.106 22.65 95.708 22.65C98.873 22.654 100.056 19.398 100.594 16.968Z"
            />
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-2-fill']
              }
              d="M141.852 15.155C142.558 14.542 142.965 14.155 143.937 13.218C144.965 12.218 147.471 9.625 147.937 9.123L148.263 8.947H151.654L151.741 9.214C151.441 9.477 151.297 9.596 150.117 10.596C149.645 10.985 149.356 11.276 148.797 11.776L144.97 15.31L149.539 24.01L149.365 24.241L146.093 24.332L145.852 24.151C145.085 22.323 144.88 21.914 143.822 19.758L141.76 15.577C141.112 18.477 140.71 20.3 139.982 24.092L139.776 24.268L136.77 24.357L136.624 24.151L137.834 19.083L138.304 16.874C138.906 14.4159 139.377 11.9278 139.717 9.42L139.924 9.214C140.974 9.09088 142.017 8.9133 143.048 8.682L143.194 8.888L142.879 10.349L142.418 12.625L141.852 15.155Z"
            />
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-2-fill']
              }
              d="M121.444 9.002L121.298 8.765L117.211 8.739C114.487 8.739 110.672 8.913 107.911 12.139C106.455 13.9426 105.624 16.1697 105.542 18.486C105.542 22.177 108.001 24.309 111.018 24.309C112.597 24.3646 114.139 23.8274 115.342 22.803L115.135 23.983L115.279 24.194L118.061 24.133L118.274 23.926C118.863 20.405 119.074 19.287 120.107 14.735L121.444 9.002ZM115.788 20.527C115.478 20.7998 115.152 21.0546 114.812 21.29C114.029 21.739 113.141 21.9745 112.238 21.973C111.762 21.9788 111.29 21.8855 110.851 21.6989C110.413 21.5123 110.018 21.2366 109.693 20.8892C109.367 20.5419 109.117 20.1306 108.958 19.6813C108.8 19.2321 108.737 18.7549 108.773 18.28C108.81 17.0934 109.114 15.9304 109.662 14.8775C110.211 13.8245 110.989 12.9087 111.94 12.198C113.329 11.3265 114.949 10.894 116.588 10.957C117.034 10.957 117.473 10.985 117.921 10.985L115.788 20.527Z"
            />
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-1-fill']
              }
              d="M44.478 21.492C46.732 21.492 47.787 19.14 48.471 16.116C48.954 13.986 49.477 10.866 46.756 10.866C44.439 10.866 43.411 13.088 42.728 16.116C42.089 18.927 41.947 21.492 44.478 21.492ZM43.43 24.764C40.221 24.764 35.6 23.747 37.274 16.334C37.9 13.55 39.822 7.654 47.728 7.654C55.419 7.654 54.275 13.954 53.801 16.179C52.384 22.448 48.556 24.764 43.43 24.764Z"
            />
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-1-fill']
              }
              d="M62.23 24.396C60.745 24.396 58.306 24.396 57.282 24.426L57.107 24.242C57.392 23.253 58.087 20.595 58.818 17.351C59.411 14.725 59.937 12.412 60.14 11.36C58.899 11.39 56.984 11.39 56.051 11.421L55.882 11.206C56.126 10.406 56.473 9.015 56.689 8.182L56.974 8.025C57.8 8.055 60.943 8.086 63.474 8.086C66.533 8.086 69.511 8.025 70.137 7.993L70.346 8.15C70.12 8.887 69.716 10.404 69.511 11.172L69.22 11.359C67.996 11.331 67.068 11.331 65.303 11.331C65.149 12.005 64.673 13.985 63.877 17.505C63.277 20.164 62.786 22.605 62.501 24.144L62.23 24.396Z"
            />
            <path
              className={
                fill ? classes[`${fill}-fill`] : classes['logo-1-fill']
              }
              d="M79.39 11.728C78.399 11.728 77.282 11.759 76.79 11.759C76.636 12.439 76.033 14.974 75.475 17.443C74.818 20.343 74.236 23.067 74.01 24.206L73.719 24.395C72.206 24.395 70.261 24.395 68.708 24.425L68.536 24.242C68.855 22.973 69.666 19.516 70.442 16.084C71.224 12.63 71.898 9.23 72.116 8.272L72.377 8.053C74.046 8.053 75.731 8.116 79.87 8.116C83.113 8.116 86.254 8.023 87.928 7.992L88.071 8.181C87.852 9.014 86.921 12.998 86.03 16.948C85.31 20.132 84.648 23.31 84.48 24.206L84.252 24.395C82.924 24.395 80.483 24.395 79.211 24.425L79.074 24.206C79.346 23.128 79.943 20.628 80.644 17.535C81.172 15.187 81.707 12.687 81.918 11.759C81.422 11.76 80.318 11.728 79.39 11.728Z"
            />
          </Fragment>
        )}
      </svg>
    </div>
  )
}
Logo.propTypes = {
  mini: PropTypes.bool,
  fill: PropTypes.string,
}

export default Logo
