import { useCopy } from '../../../util/hooks/useCopy.ts'
import { SubSection } from '../SubSection.tsx'
import {
  abeProfile,
  cdmProfile,
  dandersProfile,
  editModeProfile,
  eqolProfile,
  eqolUnitFramesProfile,
  platynatorProfile,
} from '../../../util/profiles.ts'
import { Profile } from './Profile.tsx'
import { Link } from '../../Common/Link.tsx'

export function Profiles() {
  const handleClick = useCopy('profile')

  return (
    <SubSection title="Profiles">
      <div className="flex flex-col gap-2">
        <p>
          INSTALL THIS ADDON FIRST:{' '}
          <Link href="https://www.curseforge.com/wow/addons/ortemis-tools">OrtemisTools</Link>. It
          includes my Teachings tracker, Talent Reminders, and a texture I use in EQOL. You may also
          need to install{' '}
          <Link href="https://www.curseforge.com/wow/addons/sharedmedia">SharedMedia</Link> if you
          do not already have it.
        </p>
        <Profile name="Edit Mode" profile={editModeProfile} onCopy={handleClick} />
        <Profile name="CDM" profile={cdmProfile} onCopy={handleClick} />
        <Profile
          name="EQOL Unit Frames"
          profile={eqolUnitFramesProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/eqol'}
        />
        <Profile
          name="EQOL general"
          profile={eqolProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/eqol'}
        />
        <p>
          The {'"'}EQOL general{'"'} profile contains a LOT of random settings such as cursor
          circle, auto combat logging etc.
        </p>
        <Profile
          name="Danders Frames"
          profile={dandersProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/danders-frames'}
        />
        <Profile
          name="Platynator"
          profile={platynatorProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/platynator'}
        />
        <Profile
          name="ActionBarsEnhanced"
          profile={abeProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/actionbarsenhanced'}
        />
      </div>
    </SubSection>
  )
}
