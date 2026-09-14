import { Section } from '../Section.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import {
  ChiJi,
  DanceOfChiJi,
  RisingSunKick,
  SpinningCraneKick,
  Spiritfont,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'

export function PatchChanges() {
  return (
    <Section title="TL;DR for Season 2">
      <UnorderedList>
        <li>
          We have a new build with <Spiritfont />, see <Link href={`#Talents`}>Talents</Link>.
        </li>
        <li>Mastery is our second best stat now after Haste.</li>
        <li>
          Most of our healing comes from <RisingSunKick />.
        </li>
        <li>
          <ThunderFocusTea /> and <Spiritfont /> are our main short CD cooldowns, and 1-minute{' '}
          <ChiJi /> is our main big cooldown.
        </li>
        <li>
          <SpinningCraneKick /> for healing is back to being quite weak, even at very high target
          count. <DanceOfChiJi /> procs are still good.
        </li>
      </UnorderedList>
    </Section>
  )
}
