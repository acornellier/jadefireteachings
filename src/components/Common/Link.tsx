import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string
}

export function Link({ className, href, ...rest }: Props) {
  const isInternal = href.includes('#')

  return (
    <a
      href={href}
      target={isInternal ? '' : '_blank'}
      rel={isInternal ? '' : 'noreferrer'}
      className={`text-blue-500 hover:underline ${className}`}
      {...rest}
    />
  )
}
