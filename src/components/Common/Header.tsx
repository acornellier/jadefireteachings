import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  id?: string
  children: string
  Tag: 'h2' | 'h3' | 'h4'
}

const color = {
  h2: 'text-teal-500',
  h3: 'text-teal-500',
  h4: 'text-teal-500',
}

const textSize = {
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
}

export function Header({ Tag, id, children, className, ...rest }: Props) {
  return (
    <Tag
      id={id ?? children}
      className={`font-bold font-serif ${textSize[Tag]} ${color[Tag]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
