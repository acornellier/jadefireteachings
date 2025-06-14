import {
  cellProfile,
  detailsProfile,
  omnicdProfile,
  platerProfile,
} from '../../../util/profiles.ts'
import { Link } from '../../Common/Link.tsx'
import { Profile } from './Profile.tsx'
import { useCopy } from '../../../util/hooks/useCopy.ts'
import { SubSection } from '../SubSection.tsx'

export function Profiles() {
  const handleClick = useCopy('profile')

  return (
    <SubSection title="Addon profiles">
      <div className="flex flex-col gap-1">
        <Profile name="Cell" profile={cellProfile} onCopy={handleClick} />
        <p>
          Import from About {'>'} Import & Export All Settings {'>'} Import
        </p>
        <p>
          Chi Harmony indicator: included in my profile, but if you want just the indicator, here is
          a <Link href="https://github.com/lolswirl/chi-harmony-in-cell/">guide</Link>
        </p>
      </div>
      <Profile name="OmniCD" profile={omnicdProfile} onCopy={handleClick} />
      <Profile name="Plater" profile={platerProfile} onCopy={handleClick} />
      <Profile name="Details" profile={detailsProfile} onCopy={handleClick} />
    </SubSection>
  )
}
