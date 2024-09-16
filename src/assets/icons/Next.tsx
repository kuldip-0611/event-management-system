import * as React from 'react'
const Next = ({color}: {color?: string}) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4 12L9.4 6L8 7.4L12.6 12L8 16.6L9.4 18L15.4 12Z" fill={color || 'black'} />
  </svg>
)
export default Next
