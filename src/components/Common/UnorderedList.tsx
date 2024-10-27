import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export function UnorderedList({ className, ...rest }: Props) {
  return <ul {...rest} className={`space-y-1 list-disc list-inside ${className}`} />
}
