import { useCallback } from 'react'
import { Button } from '../../Common/Button.tsx'
import { ArrowTopRightOnSquareIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'

interface ProfileProps {
  name: string
  profile: string
  onCopy: (profile: string) => void
  link?: string
}

export function Profile({ name, profile, onCopy, link }: ProfileProps) {
  const handleCopy = useCallback(() => onCopy(profile), [onCopy, profile])

  return (
    <div className="flex items-center gap-2">
      <div className="text-xl min-w-[180px]">
        <a href="https://www.curseforge.com/wow/addons/arc-ui">{name}</a>
      </div>
      <Button short onClick={handleCopy} Icon={DocumentDuplicateIcon}>
        Copy to clipboard
      </Button>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <Button iconSize={22} short onClick={handleCopy} Icon={ArrowTopRightOnSquareIcon} />
        </a>
      )}
    </div>
  )
}
