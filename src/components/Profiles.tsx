import { useCallback } from 'react'
import { copyText } from '../util/dev.ts'
import { cellProfile, detailsProfile, omnicdProfile, platerProfile } from '../util/profiles.ts'
import { Link } from './Common/Link.tsx'
import { useToasts } from './Common/Toasts/useToasts.ts'
import { Profile } from './Profile.tsx'
import { Header } from './Common/Header.tsx'

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
      <Header Tag="h3">Addon profiles</Header>
      <p>My old links broke so these are from my laptop and the scaling might be off.</p>
      <div className="flex flex-col gap-1">
        <Profile name="Cell" profile={cellProfile} onCopy={handleClick} />
        <p>Does not import Cell Unit Frames settings</p>
        <p>
          Chi Harmony indicator: included in my profile, but if you want just the indicator, here is
          a{' '}
          <Link href="https://docs.google.com/document/d/1Q3NAt-VDijbiHOGb68BIWQxonsnaESbuF_Q-JrRUWXM/edit">
            guide
          </Link>
        </p>
      </div>
      <Profile name="OmniCD" profile={omnicdProfile} onCopy={handleClick} />
      <Profile name="Plater" profile={platerProfile} onCopy={handleClick} />
      <Profile name="Details" profile={detailsProfile} onCopy={handleClick} />
    </>
  )
}
