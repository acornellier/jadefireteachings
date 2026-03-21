import { SubSection } from '../SubSection.tsx'
import {
  CelestialConduit,
  EnvelopingMist,
  FortifyingBrew,
  HeartOfTheJadeSerpent,
  JadeSanctuary,
  LifeCocoon,
  StrengthOfTheBlackOx,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'
import { healingCooldownsTitle } from './HealingCooldowns.tsx'

export function Conduit() {
  return (
    <SubSection title="Conduit">
      <p>
        The main change is <CelestialConduit />, an extra active healing CD on 1.5 min CD. This is a
        powerful cooldown. See{' '}
        <Link href={`#${healingCooldownsTitle}`}>{healingCooldownsTitle}</Link> above for more
        details on how to use it to heal.
      </p>
      <p>
        <CelestialConduit /> doubles up as a defensive when you run <JadeSanctuary />. Since{' '}
        <FortifyingBrew /> are also 1.5 min CD, you can rotate this alongside them on 30 second boss
        mechanics which are quite common, such as CoT’s last boss.
      </p>
      <p>
        <StrengthOfTheBlackOx /> gives you <EnvelopingMist /> procs that create a small shield on
        your party. This actually does pretty good HPS, so use these procs on cooldown whenever you
        need to do group healing.
      </p>
      <p>
        <HeartOfTheJadeSerpent /> gives you a bunch of CDR and haste, mainly meaning you will get
        more <ThunderFocusTea /> and more <LifeCocoon />. This is one of the most powerful nodes in
        the tree.
      </p>
    </SubSection>
  )
}
