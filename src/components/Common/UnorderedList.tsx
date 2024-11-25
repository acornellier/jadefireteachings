import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  indent?: boolean
}

export function UnorderedList({ className, indent, ...rest }: Props) {
  const leftIndent = indent ? 'ml-6' : ''
  return <ul {...rest} className={`space-y-1 list-disc list-inside ${leftIndent} ${className}`} />
}
