import {
  cellProfile,
  detailsProfile,
  omnicdProfile,
  platerProfile,
} from '../../../util/profiles.ts'
import { Link } from '../../Common/Link.tsx'
import { Profile } from './Profile.tsx'
import { Header } from '../../Common/Header.tsx'
import { useCopy } from '../../../util/hooks/useCopy.ts'

export function Profiles() {
  const handleClick = useCopy('profile')

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
