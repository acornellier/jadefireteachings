import { useCallback } from 'react'
import { Button } from '../../Common/Button.tsx'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'

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
      <Button short onClick={handleCopy} Icon={DocumentDuplicateIcon}>
        Copy to clipboard
      </Button>
    </div>
  )
}
