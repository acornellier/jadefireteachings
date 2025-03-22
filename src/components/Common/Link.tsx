import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

export function Link({ className, ...rest }: Props) {
  return <a target="_blank" className={`text-blue-500 hover:underline ${className}`} {...rest} />
}
