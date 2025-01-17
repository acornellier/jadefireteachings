﻿import type { SVGProps } from 'react'
import { forwardRef } from 'react'
import type { IconComponent } from '../../../util/types.ts'

export const KofiIcon: IconComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        viewBox="167.42 281.82 665.18 436.36"
        {...props}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="336.01"
            y1="4124.64"
            x2="421.72"
            y2="3861.61"
            gradientTransform="translate(4.1 4362.59) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff4ea3" />
            <stop offset="1" stopColor="#ff5e5b" />
          </linearGradient>
        </defs>
        <g id="Layer_1-2">
          <g id="Layer_1-3">
            <g>
              <path
                fill="#fff"
                d="M683.95,523.77c-23.89,2.65-43.75,1.28-43.75,1.28v-149.64h30.49c19.86,0,38.44,7.97,51.62,23.9,9.24,10.62,15.93,25.17,15.92,46.41,0,48.96-25.17,68.82-54.28,78.06Zm128.51-104.6c-9.24-46.41-33.13-75.51-59.58-92.72-26.45-18.58-58.3-27.83-90.06-27.83l-455.8-.02c-15.93,0-22.52,15.93-22.52,23.89v5.31s-1.29,201.35,1.26,309.99c3.93,63.61,67.54,63.61,67.54,63.61,0,0,207.94,.01,308.62-1.26,5.31,0,9.24,0,14.55-1.28,56.93-14.55,62.24-67.54,62.24-96.74,114.05,5.12,194.87-75.69,173.74-182.96Z"
              />
              <g>
                <path d="M828.94,416.04v-.02l-.02-.1-.02-.12c-11.32-56.74-42.46-87.47-66.61-103.25-28.29-19.8-63.61-30.71-99.46-30.71l-455.8-.02c-25.63,0-39.29,23.62-39.29,40.67v5.2c-.01,2.02-1.26,202.77,1.27,310.49,0,.21,.01,.43,.03,.64,2.53,40.94,25.68,60.51,44.67,69.72,19.61,9.51,38.81,9.63,39.62,9.64h.08c8.52,0,209.91-.01,308.62-1.26,5.73,0,11.15,0,18.37-1.74l.25-.06c30.03-7.68,51.43-25.25,63.6-52.23,5.75-12.75,9.23-27.12,10.59-43.84,27.55-.7,53.46-6.14,77.07-16.2,24.87-10.6,45.93-25.78,62.58-45.13,32.7-38,44.94-88.31,34.46-141.68ZM202.53,637.06c-2.47-105.83-1.3-300.97-1.25-309.27v-5.21c.07-.47,1.26-7.22,5.74-7.22l455.8,.02c29.12,0,57.68,8.8,80.41,24.78,.17,.12,.33,.23,.5,.34,27.41,17.83,45,45.39,52.27,81.91,8.49,43.08-1.09,83.36-26.95,113.41-29.14,33.87-76.36,51.93-129.57,49.53-4.55-.21-9.05,1.48-12.35,4.63-3.29,3.15-5.18,7.57-5.18,12.12,0,45.59-16.21,71.91-49.46,80.45-3.3,.79-5.69,.79-10.44,.79h-.33c-87.58,1.11-256.78,1.24-306.56,1.26h-1.81c-.12,0-12.58-.24-25.02-6.27-15.82-7.68-24.51-21.57-25.8-41.3Z" />
                <path d="M639.03,541.78c.59,.04,6.03,.4,14.53,.4,11,0,21.84-.59,32.23-1.74,1.09-.12,2.18-.35,3.23-.68,43.77-13.9,65.97-45.54,65.97-94.05,0-22.75-6.71-42.03-19.88-57.22-15.98-19.25-38.87-29.85-64.44-29.85h-30.48c-9.25,0-16.77,7.52-16.78,16.77v149.64c0,8.78,6.85,16.13,15.61,16.73Zm17.94-33.18v-116.42h13.71c15.45,0,29.19,6.33,38.7,17.82l.26,.31c7.94,9.13,11.8,20.7,11.8,35.39,0,33.49-12.28,51.93-41.03,61.57-7.49,.78-15.36,1.22-23.44,1.32Z" />
              </g>
            </g>
            <path
              fill="#ff5e5b"
              d="M408.36,616.47c5.31,2.65,7.96,0,7.96,0,0,0,72.86-66.26,105.99-104.6,29.1-34.41,30.48-91.43-18.58-112.57-50.34-21.24-91.44,25.16-91.44,25.16-35.79-39.72-90.06-37.07-115.23-10.62-25.17,26.45-15.93,71.57,2.65,98.02,17.2,23.89,94.08,92.72,105.98,103.34,0-1.38,1.38,0,2.65,1.28Z"
            />
          </g>
        </g>
      </svg>
    )
  },
)

KofiIcon.displayName = 'KofiIcon'
