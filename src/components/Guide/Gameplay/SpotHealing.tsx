import { SubSection } from '../SubSection.tsx'
import {
  EnvelopingMist,
  SoothingMist,
  VivaciousVivification,
  Vivify,
} from '../../Common/WowheadLink/Spells.tsx'

export function SpotHealing() {
  return (
    <SubSection title="Spot healing">
      <p>
        If an ally needs a single burst of healing, <Vivify /> is the spell for that. Generally you
        want to only use it if buffed by <VivaciousVivification />.
      </p>
      <p>
        If an ally is taking large ticking damage over an extended period of time, then use{' '}
        <SoothingMist /> {'>'} <EnvelopingMist /> {'>'} <Vivify /> spam. The most common use case is
        the tank.
      </p>
    </SubSection>
  )
}
