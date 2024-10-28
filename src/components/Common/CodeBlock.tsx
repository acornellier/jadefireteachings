import { useCallback } from 'react'
import { Button } from './Button.tsx'
import { copyText } from '../../util/dev.ts'
import { useToasts } from './Toasts/useToasts.ts'

interface Props {
  children: string
}

export function CodeBlock({ children }: Props) {
  const { addToast } = useToasts()

  const handleClick = useCallback(
    async (text: string) => {
      await copyText(text)
      addToast({ type: 'success', message: 'Copied macro to clipboard' })
    },
    [addToast],
  )

  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <div className="font-mono px-2 py-1 bg-gray-700 text-sm">
        {children.split('\n').map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      <Button short onClick={() => handleClick(children)}>
        Copy to clipboard
      </Button>
    </div>
  )
}
