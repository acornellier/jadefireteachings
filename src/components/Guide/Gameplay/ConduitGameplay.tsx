import { SubSection } from '../SubSection.tsx'
import {
  AugustDynasty,
  CelestialConduit,
  DiffuseMagic,
  EnvelopingMist,
  FortifyingBrew,
  HeartOfTheJadeSerpent,
  JadefireStomp,
  JadeSanctuary,
  SheilunsGift,
  StrengthOfTheBlackOx,
  Vivify,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'
import { healingAoeTitle } from './AoeHealing.tsx'

export function ConduitGameplay() {
  return (
    <SubSection title="Conduit gameplay">
      <p>
        The main change is <CelestialConduit />, an extra active healing CD on 1.5 min CD. This is a
        powerful cooldown. See <Link href={`#${healingAoeTitle}`}>{healingAoeTitle}</Link> above for
        more details on how to use it to heal.
      </p>
      <p>
        <CelestialConduit /> doubles up as a defensive when you run <JadeSanctuary />. Since{' '}
        <FortifyingBrew /> and <DiffuseMagic /> are also 1.5 min CD, you can rotate this alongside
        them on 30 second boss mechanics which are quite common, such as CoT’s last boss.
      </p>
      <p>
        <StrengthOfTheBlackOx /> gives you <EnvelopingMist /> procs that create a small shield on
        your party. This actually does pretty good HPS, so use these procs on cooldown whenever you
        need to do group healing.
      </p>
      <p>
        <HeartOfTheJadeSerpent /> gives you a bunch of CDR. It is not worth planning your{' '}
        <SheilunsGift /> stacks around it.
      </p>
      <p>
        <AugustDynasty /> gives you a powerful single target <Vivify /> after a <JadefireStomp />.
      </p>
    </SubSection>
  )
}
