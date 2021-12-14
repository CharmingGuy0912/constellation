import React from 'react'

import type { IconProps } from './types'

const IconPending = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm4.598 13.554a.759.759 0 0 1-1.044.248L11 13V7.75a.75.75 0 0 1 1.5 0v4.45l3.842 2.305a.76.76 0 0 1 .256 1.049Z'
        fill={color}
      />
    </svg>
  )
}

export default IconPending