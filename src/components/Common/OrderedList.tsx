import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement> {}

export function OrderedList({ className, ...rest }: Props) {
  return <ol {...rest} className={`space-y-1 list-decimal list-inside ${className}`} />
}
