import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  size: 'h2' | 'h3'
}

const commonClasses = 'font-bold text-teal-500 font-serif'

export function Header({ size, ...rest }: Props) {
  return size === 'h2' ? (
    <h2 className={`text-2xl ${commonClasses}`} {...rest} />
  ) : size === 'h3' ? (
    <h3 className={`text-xl ${commonClasses}`} {...rest} />
  ) : null
}
