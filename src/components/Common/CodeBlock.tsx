import { Button } from './Button.tsx'
import { useCopy } from '../../util/hooks/useCopy.ts'
import type { ReactNode } from 'react'

export interface CodeBlockProps {
  children: string
  type: string
  extraButton?: ReactNode
}

export function CodeBlock({ children, type, extraButton }: CodeBlockProps) {
  const handleClick = useCopy(type)

  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <div className="font-mono px-2 py-1 bg-gray-700 text-sm">
        {children.split('\n').map((text, i) => (
          <p key={i} className="break-all">
            {text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <Button short onClick={() => handleClick(children)}>
          Copy to clipboard
        </Button>
        {extraButton}
      </div>
    </div>
  )
}
