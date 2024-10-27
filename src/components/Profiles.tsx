import { useCallback } from 'react'
import { copyText } from '../util/dev.ts'
import { cellProfile, detailsProfile, omnicdProfile, platerProfile } from '../util/profiles.ts'
import { Button } from './Common/Button.tsx'
import { Link } from './Common/Link.tsx'
import { useToasts } from './Common/Toasts/useToasts.ts'

export function Profiles() {
  const { addToast } = useToasts()

  const handleClick = useCallback(
    async (text: string) => {
      await copyText(text)
      addToast({ type: 'success', message: 'Copied profile to clipboard' })
    },
    [addToast],
  )

  return (
    <>
      <h2 className="text-2xl font-bold text-teal-500">Addon profiles</h2>
      <p>My old links broke so these are from my laptop and the scaling might be off.</p>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="text-2xl min-w-[100px]">Cell</div>
          <Button onClick={() => handleClick(cellProfile)}>Copy to clipboard</Button>
        </div>
        <p>Does not import Cell Unit Frames settings</p>
        <p>
          My profile includes this, but if you want just the Chi Harmony indicator:{' '}
          <Link href="https://docs.google.com/document/d/1Q3NAt-VDijbiHOGb68BIWQxonsnaESbuF_Q-JrRUWXM/edit">
            Guide
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl min-w-[100px]">OmniCD</div>
        <Button onClick={() => handleClick(omnicdProfile)}>Copy to clipboard</Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl min-w-[100px]">Plater</div>
        <Button onClick={() => handleClick(platerProfile)}>Copy to clipboard</Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl min-w-[100px]">Details</div>
        <Button onClick={() => handleClick(detailsProfile)}>Copy to clipboard</Button>
      </div>
    </>
  )
}
