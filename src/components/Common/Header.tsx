import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: string
  Tag: 'h2' | 'h3'
}

const commonClasses = 'font-bold text-teal-500 font-serif'

const textSize = {
  h2: 'text-2xl',
  h3: 'text-xl',
}

export function Header({ Tag, children, className, ...rest }: Props) {
  return (
    <Tag id={children} className={`${textSize[Tag]} ${commonClasses} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
