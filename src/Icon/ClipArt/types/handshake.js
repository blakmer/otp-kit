import React from 'react'

const HandShake = props => {
  const { className } = props
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.231 35.895L10.931 36.607L21.331 26.071C21.565 26.3089 21.8124 26.5333 22.072 26.743L8.862 40.125C8.31089 40.685 8.00202 41.4393 8.00202 42.225C8.00202 43.0107 8.31089 43.7649 8.862 44.325C9.132 44.6004 9.45424 44.8193 9.80984 44.9686C10.1655 45.118 10.5473 45.195 10.933 45.195C11.3187 45.195 11.7005 45.118 12.0562 44.9686C12.4118 44.8193 12.734 44.6004 13.004 44.325L15.084 42.218C15.1756 42.1255 15.2846 42.052 15.4048 42.0019C15.5249 41.9518 15.6538 41.926 15.784 41.926C15.9142 41.926 16.0431 41.9518 16.1632 42.0019C16.2834 42.052 16.3924 42.1255 16.484 42.218C16.6703 42.4079 16.7747 42.6634 16.7747 42.9295C16.7747 43.1956 16.6703 43.451 16.484 43.641L14.404 45.748C13.8529 46.308 13.544 47.0623 13.544 47.848C13.544 48.6337 13.8529 49.3879 14.404 49.948C14.674 50.2234 14.9962 50.4423 15.3518 50.5916C15.7075 50.741 16.0893 50.818 16.475 50.818C16.8607 50.818 17.2425 50.741 17.5982 50.5916C17.9538 50.4423 18.276 50.2234 18.546 49.948L20.626 47.841C20.7177 47.7477 20.827 47.6736 20.9476 47.6231C21.0682 47.5725 21.1977 47.5464 21.3285 47.5464C21.4593 47.5464 21.5888 47.5725 21.7094 47.6231C21.83 47.6736 21.9393 47.7477 22.031 47.841C22.2173 48.0309 22.3217 48.2864 22.3217 48.5525C22.3217 48.8186 22.2173 49.074 22.031 49.264L19.951 51.371C19.3999 51.931 19.091 52.6853 19.091 53.471C19.091 54.2567 19.3999 55.0109 19.951 55.571C20.221 55.8464 20.5432 56.0653 20.8988 56.2146C21.2545 56.364 21.6363 56.441 22.022 56.441C22.4077 56.441 22.7895 56.364 23.1452 56.2146C23.5008 56.0653 23.823 55.8464 24.093 55.571L26.173 53.464C26.2647 53.3707 26.374 53.2966 26.4946 53.2461C26.6152 53.1955 26.7447 53.1694 26.8755 53.1694C27.0063 53.1694 27.1358 53.1955 27.2564 53.2461C27.377 53.2966 27.4863 53.3707 27.578 53.464C27.7643 53.6539 27.8687 53.9094 27.8687 54.1755C27.8687 54.4416 27.7643 54.697 27.578 54.887L25.498 56.994C24.9469 57.554 24.638 58.3083 24.638 59.094C24.638 59.8797 24.9469 60.6339 25.498 61.194C25.768 61.4694 26.0902 61.6883 26.4458 61.8376C26.8015 61.987 27.1833 62.064 27.569 62.064C27.9547 62.064 28.3365 61.987 28.6922 61.8376C29.0478 61.6883 29.37 61.4694 29.64 61.194L31.72 59.087L33.12 60.51L31.04 62.617C30.5866 63.0789 30.0457 63.4458 29.4488 63.6962C28.852 63.9467 28.2112 64.0756 27.564 64.0756C26.9168 64.0756 26.276 63.9467 25.6792 63.6962C25.0823 63.4458 24.5414 63.0789 24.088 62.617C23.5487 62.0693 23.1426 61.405 22.901 60.6753C22.6595 59.9457 22.589 59.1702 22.695 58.409C21.9405 58.5152 21.1716 58.4429 20.4501 58.1978C19.7286 57.9528 19.0747 57.5418 18.541 56.998C18.0017 56.4503 17.5956 55.786 17.354 55.0563C17.1125 54.3267 17.042 53.5512 17.148 52.79C16.3935 52.8962 15.6246 52.8239 14.9031 52.5788C14.1816 52.3338 13.5277 51.9228 12.994 51.379C12.4547 50.8313 12.0486 50.167 11.807 49.4373C11.5655 48.7077 11.495 47.9322 11.601 47.171C10.8465 47.2772 10.0776 47.2049 9.35608 46.9598C8.6346 46.7148 7.98071 46.3038 7.447 45.76C6.52442 44.8202 6.00753 43.5559 6.00753 42.239C6.00753 40.9221 6.52442 39.6577 7.447 38.718L10.231 35.895ZM34.89 15.925L33.327 14.341C36.0184 13.2973 38.9567 13.0654 41.7786 13.6739C44.6004 14.2825 47.182 15.7048 49.204 17.765L51.721 20.315C53.6315 22.2585 54.9855 24.679 55.6419 27.324C56.2983 29.969 56.2331 32.7418 55.453 35.353L53.821 33.699C54.269 31.5713 54.1839 29.3658 53.5733 27.2789C52.9626 25.192 51.8454 23.2886 50.321 21.738L47.796 19.187C46.1509 17.5119 44.0767 16.3216 41.8004 15.7463C39.5241 15.1709 37.1335 15.2328 34.89 15.925V15.925Z"
      />
      <path
        d="M42.133 5L41.476 5.665C40.7301 6.42471 40.3122 7.44684 40.3122 8.5115C40.3122 9.57617 40.7301 10.5983 41.476 11.358L58.043 28.141C58.4096 28.5143 58.8469 28.8109 59.3293 29.0134C59.8118 29.2158 60.3298 29.3201 60.853 29.3201C61.3762 29.3201 61.8942 29.2158 62.3767 29.0134C62.8591 28.8109 63.2964 28.5143 63.663 28.141L64.32 27.476"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.067 7.85699L45.11 5.78699L67.496 28.469L65.453 30.539C65.0864 30.9123 64.6491 31.2089 64.1667 31.4113C63.6842 31.6138 63.1662 31.718 62.643 31.718C62.1198 31.718 61.6018 31.6138 61.1193 31.4113C60.6369 31.2089 60.1996 30.9123 59.833 30.539L59.191 29.888C59.3935 32.5391 58.8508 35.1941 57.624 37.553L53.234 33.106C52.7818 32.6454 52.2423 32.2796 51.6472 32.0298C51.052 31.7801 50.413 31.6514 49.7675 31.6514C49.122 31.6514 48.483 31.7801 47.8878 32.0298C47.2927 32.2796 46.7532 32.6454 46.301 33.106C45.5221 33.895 45.0293 34.9217 44.901 36.023C43.9595 35.3732 42.8188 35.0766 41.68 35.1854C40.5412 35.2943 39.4774 35.8016 38.676 36.618C38.1361 37.1663 37.7301 37.8318 37.4895 38.5627C37.249 39.2936 37.1803 40.0702 37.289 40.832C36.5341 40.7231 35.7642 40.7936 35.0417 41.0377C34.3191 41.2818 33.6642 41.6926 33.13 42.237C32.3228 43.0581 31.8226 44.1318 31.7134 45.2781C31.6041 46.4243 31.8925 47.5732 32.53 48.532C31.4357 48.6645 30.419 49.1652 29.647 49.952C28.8558 50.758 28.3597 51.8074 28.239 52.9304C28.1183 54.0534 28.3801 55.1843 28.982 56.14C28.6187 56.5017 28.1874 56.7879 27.713 56.9821C27.2386 57.1764 26.7305 57.2749 26.2178 57.2719C25.7052 57.2689 25.1982 57.1646 24.7261 56.9648C24.254 56.765 23.8261 56.4738 23.467 56.108C22.7308 55.3582 22.3183 54.3493 22.3183 53.2985C22.3183 52.2476 22.7308 51.2388 23.467 50.489C23.1053 50.8576 22.6737 51.1504 22.1974 51.3503C21.7212 51.5501 21.21 51.6531 20.6935 51.6531C20.177 51.6531 19.6658 51.5501 19.1896 51.3503C18.7133 51.1504 18.2817 50.8576 17.92 50.489C17.1838 49.7392 16.7713 48.7303 16.7713 47.6795C16.7713 46.6286 17.1838 45.6198 17.92 44.87C17.5583 45.2386 17.1267 45.5314 16.6504 45.7313C16.1742 45.9311 15.663 46.0341 15.1465 46.0341C14.63 46.0341 14.1188 45.9311 13.6426 45.7313C13.1663 45.5314 12.7347 45.2386 12.373 44.87C11.6368 44.1202 11.2243 43.1113 11.2243 42.0605C11.2243 41.0096 11.6368 40.0008 12.373 39.251L23.722 27.751C28.062 29.64 32.422 26.069 32.422 26.069L34.746 28.425C35.153 28.8396 35.6385 29.1689 36.1742 29.3937C36.7099 29.6185 37.285 29.7343 37.866 29.7343C38.447 29.7343 39.0221 29.6185 39.5578 29.3937C40.0935 29.1689 40.579 28.8396 40.986 28.425C41.8145 27.5815 42.2787 26.4464 42.2787 25.264C42.2787 24.0816 41.8145 22.9465 40.986 22.103L35.396 16.437C37.9098 14.842 40.873 14.1052 43.841 14.337L43.065 13.551C42.3191 12.791 41.9013 11.7685 41.9017 10.7036C41.9021 9.63867 42.3205 8.61648 43.067 7.85699V7.85699ZM28.989 56.14C29.18 56.4417 29.403 56.722 29.654 56.976L34.454 61.838C33.7136 62.5328 32.7306 62.9103 31.7154 62.8895C30.7002 62.8688 29.7334 62.4515 29.022 61.727C28.2909 60.9829 27.8785 59.9833 27.8724 58.9402C27.8662 57.8971 28.2667 56.8926 28.989 56.14V56.14Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.933 36.606C10.0127 35.6687 9.49715 34.4076 9.49715 33.094C9.49715 31.7804 10.0127 30.5193 10.933 29.582L24.033 16.311C24.7661 15.5643 25.6407 14.9712 26.6057 14.5663C27.5706 14.1614 28.6066 13.9529 29.653 13.9529C30.6994 13.9529 31.7354 14.1614 32.7003 14.5663C33.6653 14.9712 34.5399 15.5643 35.273 16.311L36.586 17.642L40.986 22.099C41.8142 22.9425 42.2782 24.0774 42.2782 25.2595C42.2782 26.4416 41.8142 27.5765 40.986 28.42C40.579 28.8346 40.0935 29.1639 39.5578 29.3887C39.0221 29.6135 38.447 29.7293 37.866 29.7293C37.285 29.7293 36.7099 29.6135 36.1742 29.3887C35.6385 29.1639 35.153 28.8346 34.746 28.42L32.426 26.07C32.426 26.07 26.293 31.096 21.333 26.07L10.933 36.606Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M26.187 7.10599L26.844 7.77099C27.5899 8.53069 28.0078 9.55282 28.0078 10.6175C28.0078 11.6822 27.5899 12.7043 26.844 13.464L10.277 30.248C9.91043 30.6213 9.47314 30.9179 8.99067 31.1203C8.5082 31.3228 7.99022 31.427 7.467 31.427C6.94378 31.427 6.4258 31.3228 5.94333 31.1203C5.46086 30.9179 5.02357 30.6213 4.657 30.248L3.996 29.583"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M47.007 33.818C47.3676 33.4508 47.7977 33.1592 48.2723 32.9601C48.7469 32.761 49.2564 32.6584 49.771 32.6584C50.2856 32.6584 50.7951 32.761 51.2697 32.9601C51.7443 33.1592 52.1744 33.4508 52.535 33.818L57.388 38.735C58.1209 39.4827 58.5314 40.488 58.5314 41.535C58.5314 42.582 58.1209 43.5873 57.388 44.335C57.0274 44.7022 56.5973 44.9938 56.1227 45.1929C55.6481 45.392 55.1386 45.4946 54.624 45.4946C54.1094 45.4946 53.5999 45.392 53.1253 45.1929C52.6507 44.9938 52.2206 44.7022 51.86 44.335L47.007 39.418C46.2741 38.6703 45.8636 37.665 45.8636 36.618C45.8636 35.571 46.2741 34.5657 47.007 33.818V33.818Z"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M39.381 37.325C39.7416 36.9578 40.1717 36.6662 40.6463 36.4671C41.1209 36.268 41.6304 36.1654 42.145 36.1654C42.6596 36.1654 43.1691 36.268 43.6437 36.4671C44.1183 36.6662 44.5484 36.9578 44.909 37.325L51.842 44.349C52.5749 45.0967 52.9854 46.102 52.9854 47.149C52.9854 48.196 52.5749 49.2013 51.842 49.949C51.4814 50.3162 51.0513 50.6078 50.5767 50.8069C50.1021 51.006 49.5926 51.1086 49.078 51.1086C48.5634 51.1086 48.0539 51.006 47.5793 50.8069C47.1047 50.6078 46.6746 50.3162 46.314 49.949L39.381 42.925C38.6481 42.1773 38.2376 41.172 38.2376 40.125C38.2376 39.078 38.6481 38.0727 39.381 37.325V37.325Z"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M33.834 42.949C34.1946 42.5818 34.6247 42.2902 35.0993 42.0911C35.5739 41.892 36.0834 41.7894 36.598 41.7894C37.1126 41.7894 37.6221 41.892 38.0967 42.0911C38.5713 42.2902 39.0014 42.5818 39.362 42.949L46.296 49.973C47.0289 50.7207 47.4394 51.726 47.4394 52.773C47.4394 53.82 47.0289 54.8253 46.296 55.573C45.9354 55.9402 45.5053 56.2318 45.0307 56.4309C44.5561 56.63 44.0466 56.7325 43.532 56.7325C43.0174 56.7325 42.5079 56.63 42.0333 56.4309C41.5587 56.2318 41.1286 55.9402 40.768 55.573L33.835 48.549C33.102 47.8014 32.6913 46.7962 32.6911 45.7492C32.6909 44.7022 33.1012 43.6968 33.834 42.949V42.949Z"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M30.356 50.663C30.7166 50.2958 31.1467 50.0042 31.6213 49.8051C32.0959 49.606 32.6054 49.5034 33.12 49.5034C33.6346 49.5034 34.1441 49.606 34.6187 49.8051C35.0933 50.0042 35.5234 50.2958 35.884 50.663L40.737 55.58C41.4699 56.3277 41.8804 57.333 41.8804 58.38C41.8804 59.427 41.4699 60.4323 40.737 61.18C40.3765 61.5473 39.9463 61.8391 39.4718 62.0382C38.9972 62.2374 38.4877 62.34 37.973 62.34C37.4583 62.34 36.9488 62.2374 36.4742 62.0382C35.9996 61.8391 35.5695 61.5473 35.209 61.18L30.356 56.264C29.6228 55.5163 29.2121 54.5108 29.2121 53.4635C29.2121 52.4163 29.6228 51.4108 30.356 50.663Z"
        strokeWidth="2"
        fill="none"
      />
      <path
        opacity="0.5"
        d="M38.608 65.432C38.3428 65.432 38.0884 65.5374 37.9009 65.7249C37.7134 65.9124 37.608 66.1668 37.608 66.432C37.608 66.6972 37.7134 66.9516 37.9009 67.1391C38.0884 67.3266 38.3428 67.432 38.608 67.432V65.432ZM40.564 67.197C40.8222 67.1363 41.0457 66.9754 41.1853 66.7499C41.3249 66.5244 41.3692 66.2527 41.3085 65.9945C41.2478 65.7363 41.087 65.5128 40.8614 65.3732C40.6359 65.2336 40.3642 65.1893 40.106 65.25L40.564 67.197ZM42.273 64.35C42.0488 64.4916 41.89 64.7165 41.8315 64.9752C41.7731 65.2339 41.8199 65.5052 41.9615 65.7295C42.1031 65.9537 42.328 66.1125 42.5867 66.1709C42.8454 66.2294 43.1168 66.1826 43.341 66.041L42.273 64.35ZM45.573 60.628L45.518 59.628L44.598 59.678L44.573 60.599L45.573 60.628ZM52.352 54.512C52.352 54.2468 52.2466 53.9924 52.0591 53.8049C51.8716 53.6173 51.6172 53.512 51.352 53.512C51.0868 53.512 50.8324 53.6173 50.6449 53.8049C50.4574 53.9924 50.352 54.2468 50.352 54.512H52.352ZM38.608 67.432C39.2669 67.4289 39.9232 67.3501 40.564 67.197L40.106 65.25C39.6146 65.368 39.1113 65.4291 38.606 65.432L38.608 67.432ZM43.341 66.041C44.2898 65.488 45.0837 64.7044 45.649 63.7629C46.2143 62.8214 46.5328 61.7524 46.575 60.655L44.575 60.6C44.5416 61.3688 44.3129 62.1164 43.9105 62.7724C43.5081 63.4283 42.9452 63.9709 42.275 64.349L43.341 66.041ZM45.63 61.625C47.4065 61.4145 49.0528 60.587 50.2816 59.2869C51.5105 57.9868 52.2439 56.2966 52.354 54.511H50.354C50.2436 55.7837 49.706 56.9816 48.8285 57.9101C47.9511 58.8385 46.7854 59.4429 45.521 59.625L45.63 61.625Z"
      />
    </svg>
  )
}

export default HandShake
