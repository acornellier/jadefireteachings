import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import type { IconComponent } from '../../util/types.ts'
import { TooltipStyled } from './TooltipStyled.tsx'
import type { TooltipRefProps } from 'react-tooltip'

export type ButtonTooltipProps =
  | {
      tooltip: ReactNode
      tooltipId: string
    }
  | {
      tooltip?: never
      tooltipId?: never
    }

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  Icon?: IconComponent
  iconSize?: number
  iconRight?: boolean
  innerClass?: string
  outline?: boolean
  short?: boolean
  tiny?: boolean
  twoDimensional?: boolean
  justifyStart?: boolean
  color?: 'teal' | 'red' | 'green' | 'yellow'
  tooltipPlace?: TooltipRefProps['place']
} & ButtonTooltipProps

function ButtonIconText({
  Icon,
  iconSize,
  iconRight,
  children,
}: Pick<ButtonProps, 'Icon' | 'iconSize' | 'iconRight' | 'children'>) {
  if (!Icon) return children

  if (!children && Icon) {
    return <Icon width={iconSize ?? 24} height={iconSize ?? 24} />
  }

  return (
    <div className={`flex gap-1 items-center ${iconRight ? 'flex-row-reverse' : ''}`}>
      <Icon
        width={iconSize ?? 18}
        height={iconSize ?? 18}
        className={!iconRight ? '-ml-0.5' : ''}
      />
      {children}
    </div>
  )
}

export function Button({
  Icon,
  iconSize,
  iconRight,
  innerClass,
  outline,
  short,
  tiny,
  twoDimensional,
  justifyStart,
  className,
  children,
  color,
  tooltip,
  tooltipId,
  tooltipPlace,
  ...props
}: ButtonProps) {
  const buttonIconText = (
    <ButtonIconText Icon={Icon} iconSize={iconSize} iconRight={iconRight}>
      {children}
    </ButtonIconText>
  )

  return (
    <>
      <button
        className={`fancy-button
                  ${color ?? ''}
                  ${outline ? 'outline-button' : ''} 
                  ${tiny ? 'tiny' : short ? 'short' : ''} 
                  ${twoDimensional ? 'two-d' : ''} 
                  ${className ?? ''}`}
        data-tooltip-id={tooltipId}
        {...props}
      >
        <div className="fancy-button-hover flex-1 z-[1]" />
        <div
          className={`fancy-button-inner z-[2] ${innerClass ?? ''}`}
          style={{
            ...(justifyStart ? { justifyContent: 'flex-start' } : {}),
          }}
        >
          {buttonIconText}
        </div>
      </button>
      {tooltip && (
        <TooltipStyled id={tooltipId} place={tooltipPlace}>
          {tooltip}
        </TooltipStyled>
      )}
    </>
  )
}
