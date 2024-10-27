import { Link } from '../Common/Link.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import { Header } from '../Common/Header.tsx'

export function Addons() {
  return (
    <>
      <Header Tag="h3">Addons</Header>
      Less common addons I use
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
          <Link href="https://www.curseforge.com/wow/addons/raven">Raven</Link>
        </li>
        <li>
          <Link href="https://www.curseforge.com/wow/addons/cell-unit-frames">
            Cell Unit Frames
          </Link>
        </li>
      </UnorderedList>
      Other more common addons
      <UnorderedList>
        <li>Weakauras</li>
        <li>Plater</li>
        <li>Cell</li>
        <li>BigWigs/LittleWigs</li>
        <li>OmniCD</li>
        <li>Details</li>
        <li>Dominos</li>
        <li>MDT</li>
        <li>WarpDeplete</li>
        <li>BetterBags</li>
      </UnorderedList>
    </>
  )
}
