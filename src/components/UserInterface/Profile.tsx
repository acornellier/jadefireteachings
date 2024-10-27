import { useCallback } from 'react'
import { Button } from '../Common/Button.tsx'

interface ProfileProps {
  name: string
  profile: string
  onCopy: (profile: string) => void
}

export function Profile({ name, profile, onCopy }: ProfileProps) {
  const handleCopy = useCallback(() => onCopy(profile), [onCopy, profile])

  return (
    <div className="flex items-center gap-2">
      <div className="text-xl min-w-[100px]">{name}</div>
      <Button short onClick={handleCopy}>
        Copy to clipboard
      </Button>
    </div>
  )
}
