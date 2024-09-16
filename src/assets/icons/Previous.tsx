import * as React from 'react'
const Previous = ({color}: {color?: string}) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.6 12L14.6 6L16 7.4L11.4 12L16 16.6L14.6 18L8.6 12Z" fill={color || 'black'} />
  </svg>
)
export default Previous
