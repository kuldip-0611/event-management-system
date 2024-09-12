import * as React from 'react'
const Local = ({color}: {color?: string}) => (
  <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.0013 8.60709C7.26797 8.60709 6.64019 8.34598 6.11797 7.82376C5.59575 7.30154 5.33464 6.67376 5.33464 5.94042C5.33464 5.20709 5.59575 4.57931 6.11797 4.05709C6.64019 3.53487 7.26797 3.27376 8.0013 3.27376C8.73464 3.27376 9.36241 3.53487 9.88464 4.05709C10.4069 4.57931 10.668 5.20709 10.668 5.94042C10.668 6.67376 10.4069 7.30154 9.88464 7.82376C9.36241 8.34598 8.73464 8.60709 8.0013 8.60709ZM2.66797 13.9404V12.0738C2.66797 11.696 2.76519 11.3488 2.95964 11.0321C3.15408 10.7154 3.41241 10.4738 3.73464 10.3071C4.42352 9.96265 5.12352 9.70431 5.83464 9.53209C6.54575 9.35987 7.26797 9.27376 8.0013 9.27376C8.73464 9.27376 9.45686 9.35987 10.168 9.53209C10.8791 9.70431 11.5791 9.96265 12.268 10.3071C12.5902 10.4738 12.8485 10.7154 13.043 11.0321C13.2374 11.3488 13.3346 11.696 13.3346 12.0738V13.9404H2.66797ZM4.0013 12.6071H12.0013V12.0738C12.0013 11.9515 11.9707 11.8404 11.9096 11.7404C11.8485 11.6404 11.768 11.5626 11.668 11.5071C11.068 11.2071 10.4624 10.9821 9.8513 10.8321C9.24019 10.6821 8.62352 10.6071 8.0013 10.6071C7.37908 10.6071 6.76241 10.6821 6.1513 10.8321C5.54019 10.9821 4.93464 11.2071 4.33464 11.5071C4.23464 11.5626 4.15408 11.6404 4.09297 11.7404C4.03186 11.8404 4.0013 11.9515 4.0013 12.0738V12.6071ZM8.0013 7.27376C8.36797 7.27376 8.68186 7.1432 8.94297 6.88209C9.20408 6.62098 9.33464 6.30709 9.33464 5.94042C9.33464 5.57376 9.20408 5.25987 8.94297 4.99876C8.68186 4.73765 8.36797 4.60709 8.0013 4.60709C7.63464 4.60709 7.32075 4.73765 7.05964 4.99876C6.79852 5.25987 6.66797 5.57376 6.66797 5.94042C6.66797 6.30709 6.79852 6.62098 7.05964 6.88209C7.32075 7.1432 7.63464 7.27376 8.0013 7.27376Z"
      fill={color || 'black'}
    />
  </svg>
)
export default Local
