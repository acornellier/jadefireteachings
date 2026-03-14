import { useCopy } from '../../../util/hooks/useCopy.ts'
import { SubSection } from '../SubSection.tsx'
import {
  abeProfile,
  arcuiBarsProfile,
  arcuiIconsProfile,
  dandersProfile,
  detailsProfile,
  eqolProfile,
  eqolUnitFramesProfile,
  platynatorProfile,
} from '../../../util/profiles.ts'
import { Profile } from './Profile.tsx'

export function Profiles() {
  const handleClick = useCopy('profile')

  return (
    <SubSection title="Addon profiles">
      <div className="flex flex-col gap-2">
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
          For ArcUI, you must have CDM enabled, and all the appropriate buffs added as Tracked Buffs
          in the CDM settings. I only use CDM for Buffs not Spells, so I have moved every Spell into
          Not Displayed. For spells, I use action bars with ActionBarsEnhanced for styling. Icons
          use{' '}
          <a className="text-blue-500" href="https://www.curseforge.com/wow/addons/masque-leo">
            Masque: Leo
          </a>{' '}
          as a skin.
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
