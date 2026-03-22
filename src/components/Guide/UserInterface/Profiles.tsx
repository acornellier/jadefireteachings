import { useCopy } from '../../../util/hooks/useCopy.ts'
import { SubSection } from '../SubSection.tsx'
import {
  abeProfile,
  arcuiBarsProfile,
  arcuiIconsProfile,
  dandersProfile,
  detailsProfile,
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
          <Link href="https://www.curseforge.com/wow/addons/ort-sharedmedia">Ort_SharedMedia</Link>{' '}
          (it{"'"}s just a couple textures).
        </p>
        <Profile name="Edit Mode" profile={editModeProfile} onCopy={handleClick} />
        <Profile
          name="ArcUI Icons"
          profile={arcuiIconsProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/arc-ui'}
        />
        <Profile
          name="ArcUI Bars"
          profile={arcuiBarsProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/arc-ui'}
        />
        <p>
          WARNING: importing ArcUI profiles is a pain. You must have CDM enabled, and all the
          appropriate buffs added as Tracked Buffs in the CDM settings. I only use CDM for Buffs not
          Spells, so I have moved every Spell into Not Displayed.
        </p>
        <p>
          ArcUI Icons are the horizontal buffs bar above my action bars and use{' '}
          <Link href="https://www.curseforge.com/wow/addons/masque-leo">Masque: Leo</Link> as a
          skin.
        </p>
        <p>
          ArcUI Bars are like weakauras. They include the circles used for Teachings, Spiritfont,
          and Dance of Chi-Ji, as well as the Renewing Mist Cooldown Bars.
        </p>
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
        <Profile
          name="Details"
          profile={detailsProfile}
          onCopy={handleClick}
          link={'https://www.curseforge.com/wow/addons/details'}
        />
      </div>
    </SubSection>
  )
}
