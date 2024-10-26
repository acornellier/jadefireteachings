import { useCallback } from 'react'
import { copyText } from '../util/dev.ts'
import { cellProfile, detailsProfile, omnicdProfile, platerProfile } from '../util/profiles.ts'
import { Button } from './Common/Button.tsx'

export function Profiles() {
  const handleClick = useCallback(async (text: string) => {
    await copyText(text)
  }, [])

  return (
    <>
      <h2 className="text-2xl font-bold text-teal-500">Addon profiles</h2>
      <div className="flex items-center gap-2">
        <div className="text-2xl min-w-[100px]">Cell</div>
        <Button onClick={() => handleClick(cellProfile)}>Copy to clipboard</Button>
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
