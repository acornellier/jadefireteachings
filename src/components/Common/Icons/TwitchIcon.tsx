import type { SVGProps } from 'react'
import { forwardRef } from 'react'
import type { IconComponent } from '../../../util/types.ts'

export const TwitchIcon: IconComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 20 20" ref={ref} {...props}>
        <title>{'twitch [#182]'}</title>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M12 10h2V5h-2v5Zm-5 0h2V5H7v5Zm10 1.307V2H3v12h4v2.953L9.56 14h4.78L17 11.307ZM13.907 17H9.993l-2.606 3H5v-3H0V3.48L1.3 0H19v12.173L13.907 17Z"
        />
      </svg>
    )
  },
)

TwitchIcon.displayName = 'TwitchIcon'
