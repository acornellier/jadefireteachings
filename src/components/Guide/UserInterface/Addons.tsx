import { Link } from '../../Common/Link.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import { SubSection } from '../SubSection.tsx'

export function Addons() {
  return (
    <SubSection title="Addons">
      <p>Less common addons I use</p>
      <UnorderedList>
        <li>
          <Link href="https://www.curseforge.com/wow/addons/not-even-close">Not Even Close</Link>
        </li>
        <li>
          <Link href="https://www.curseforge.com/wow/addons/focus-interrupt-sounds">
            Focus Interrupt Sounds
          </Link>
        </li>
        <li>
          <Link href="https://www.curseforge.com/wow/addons/bind-pad">BindPad</Link>
        </li>
        <li>
          <Link href="https://www.curseforge.com/wow/addons/cell-unit-frames">
            Cell Unit Frames
          </Link>
        </li>
      </UnorderedList>
      <p>Other more common addons</p>
      <UnorderedList>
        <li>Weakauras</li>
        <li>Plater</li>
        <li>Cell</li>
        <li>BigWigs/LittleWigs</li>
        <li>OmniCD</li>
        <li>Details</li>
        <li>Bartender</li>
        <li>MDT</li>
        <li>WarpDeplete</li>
        <li>BetterBags</li>
      </UnorderedList>
    </SubSection>
  )
}
