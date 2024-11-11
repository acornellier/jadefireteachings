import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  indent?: number
}

export function UnorderedList({ className, indent, ...rest }: Props) {
  const topIndent = indent ? 1 : 0
  const leftIndent = indent ? indent * 6 : 0
  const indentClass = `mt-${topIndent} ml-${leftIndent}`
  return <ul {...rest} className={`space-y-1 list-disc list-inside ${indentClass} ${className}`} />
}
