import { SubSection } from '../SubSection.tsx'
import {
  AugustDynasty,
  ChiHarmony,
  EnvelopingMist,
  RenewingMist,
  SoothingMist,
  VivaciousVivification,
  Vivify,
  ZenPulse,
} from '../../Common/WowheadLink/Abilities.tsx'

export function SpotHealing() {
  return (
    <SubSection title="Spot healing">
      <p>
        If an ally needs a single burst of healing, <Vivify /> is the spell for that. Generally you
        want to only use it if buffed by <VivaciousVivification />, and ideally also by <ZenPulse />{' '}
        and/or <AugustDynasty />. If you have time, and they need a large burst of healing, first
        give them <ChiHarmony /> (by casting <RenewingMist /> on them), then cast the <Vivify />.
      </p>
      <p>
        If an ally is taking large ticking damage over an extended period of time, then use{' '}
        <SoothingMist /> {'>'} <EnvelopingMist /> {'>'} <Vivify /> spam. The most common use case is
        the tank. Another case is a debuff on a dps or yourself, such as a Corrupt in Grim Batol, or
        a Dawnbreaker debuff from the minibosses.
      </p>
    </SubSection>
  )
}
