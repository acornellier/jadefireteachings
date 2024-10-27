import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export function UnorderedList({ className, ...rest }: Props) {
  return (
    <ul
      {...rest}
      className={`max-w-md space-y-1 list-disc list-inside text-gray-100 ${className}`}
    />
  )
}
