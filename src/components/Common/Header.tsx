import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: string
  Tag: 'h2' | 'h3' | 'h4'
}

const color = {
  h2: 'text-teal-500',
  h3: 'text-teal-500',
  h4: 'text-teal-300',
}

const textSize = {
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
}

export function Header({ Tag, children, className, ...rest }: Props) {
  return (
    <Tag
      id={children}
      className={`font-bold font-serif ${textSize[Tag]} ${color[Tag]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
