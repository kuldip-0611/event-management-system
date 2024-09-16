import * as React from 'react'
const Offline = ({color}: {color?: string}) => (
  <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_160)">
      <path
        d="M13.1628 15.6738L6.89609 9.37376C6.37387 9.49598 5.88776 9.67931 5.43776 9.92376C4.98776 10.1682 4.58498 10.4738 4.22943 10.8404L2.82943 9.40709C3.18498 9.05153 3.56832 8.74042 3.97943 8.47376C4.39054 8.20709 4.82943 7.97376 5.29609 7.77376L3.79609 6.27376C3.34054 6.50709 2.91554 6.76542 2.52109 7.04876C2.12665 7.33209 1.75165 7.65153 1.39609 8.00709L-0.00390625 6.57376C0.351649 6.2182 0.721094 5.89876 1.10443 5.61542C1.48776 5.33209 1.89609 5.06264 2.32943 4.80709L0.929427 3.40709L1.86276 2.47375L14.1294 14.7404L13.1628 15.6738ZM7.99609 14.6071C7.52943 14.6071 7.13498 14.4432 6.81276 14.1154C6.49054 13.7876 6.32943 13.396 6.32943 12.9404C6.32943 12.4738 6.49054 12.0793 6.81276 11.7571C7.13498 11.4349 7.52943 11.2738 7.99609 11.2738C8.46276 11.2738 8.85721 11.4349 9.17943 11.7571C9.50165 12.0793 9.66276 12.4738 9.66276 12.9404C9.66276 13.396 9.50165 13.7876 9.17943 14.1154C8.85721 14.4432 8.46276 14.6071 7.99609 14.6071ZM11.9294 10.6404L11.4461 10.1571L10.9628 9.67376L8.56276 7.27376C9.46276 7.36264 10.3044 7.59042 11.0878 7.95709C11.8711 8.32376 12.5628 8.80709 13.1628 9.40709L11.9294 10.6404ZM14.5961 8.00709C13.7405 7.15153 12.7489 6.48209 11.6211 5.99875C10.4933 5.51542 9.28498 5.27376 7.99609 5.27376C7.76276 5.27376 7.53776 5.28209 7.32109 5.29875C7.10443 5.31542 6.88498 5.34042 6.66276 5.37375L4.96276 3.67375C5.45165 3.54042 5.94887 3.44042 6.45443 3.37375C6.95998 3.30709 7.47387 3.27375 7.99609 3.27375C9.57387 3.27375 11.0461 3.5682 12.4128 4.15709C13.7794 4.74598 14.9739 5.55153 15.9961 6.57376L14.5961 8.00709Z"
        fill={color || 'black'}
        opacity={0.5}
      />
    </g>
    <defs>
      <clipPath id="clip0_1_160">
        <rect width={16} height={16} fill="white" transform="translate(0 0.607086)" />
      </clipPath>
    </defs>
  </svg>
)
export default Offline
