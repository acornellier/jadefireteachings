import { SubSection } from '../SubSection.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import {
  AlertingShrill,
  ChiHarmony,
  ChiJi,
  Coalescence,
  EnvelopingMist,
  LifeCocoon,
  PeerIntoPeace,
  RapidDiffusion,
  RenewingMist,
  RisingMist,
  RisingSunKick,
  SecretInfusion,
  StrengthOfTheBlackOx,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { MasterOfHarmony } from '../../Common/SpecialTexts.tsx'
import { Link } from '../../Common/Link.tsx'
import { healingCooldownsTitle } from './HealingCooldowns.tsx'

export const rampingTitle = 'Ramping'

export function Ramping() {
  return (
    <SubSection title={rampingTitle}>
      <p>
        Mistweaver has many abilities that enhance the healing of your other abilities. Applying
        these buffs ahead of time to increase your healing when it is required is known as ramping
        and is a very important of your healing that mistweaver is currently very reliant on.
      </p>
      <UnorderedList>
        <li>
          <ChiHarmony />: increases healing by 50% for 8 seconds. Applied by hard-casting{' '}
          <RenewingMist />, as well as by the ones generated by <RapidDiffusion />, <RisingMist />,
          and <LifeCocoon />.
        </li>
        <li>
          <EnvelopingMist />: increases healing by 30% for its duration of 6 seconds. Hard-casting
          it is slow, but <ThunderFocusTea />, <ChiJi />, <StrengthOfTheBlackOx />, and{' '}
          <PeerIntoPeace /> can help you get it out quickly. Sometimes, it is still worth
          hard-casting if you have no other options.
        </li>
        <li>
          <Coalescence />: increases healing by 20%. Applied by <ThunderFocusTea /> when running{' '}
          <MasterOfHarmony />. Lasts 8 seconds, but can be extended. This is very easily applied to
          the whole group, and is core to <MasterOfHarmony /> healing.
        </li>
        <li>
          <SecretInfusion />: not really considered ramping per-say, but another buff to give
          yourself before doing significant healing. Using it on versatility or crit is a 15%
          healing increase.
        </li>
      </UnorderedList>
      <p>
        Start ramping a few seconds before damage goes out. <ChiHarmony /> lasts the longest, so
        apply this first by hard-casting <RenewingMist />. <EnvelopingMist /> is much harder to
        apply, and lasts less long, so apply this second. If you still have a spare GCD,{' '}
        <RisingSunKick /> is great to extend the <EnvelopingMist /> and generate another{' '}
        <ChiHarmony /> with <RisingMist />. <Coalescence /> is trivial to apply, and you should do
        it on every ramp if you have a <ThunderFocusTea /> charge. With all 3 buffs applied, you
        will have a 134% healing increase!
      </p>
      <p>
        After your buffs are applied, simply do whatever other healing you want, following the{' '}
        <Link href={`#${healingCooldownsTitle}`}>section above</Link>. Do not fret about perfectly
        executing your ramp.
      </p>
      <p>
        <Link href="https://www.twitch.tv/ortemismw/clip/HardGiantWebGivePLZ-irG31gqw2AJ7SSVZ">
          Here is an example
        </Link>{' '}
        of me ramping for <AlertingShrill /> in Ara-Kara. The orange box is <ChiHarmony />, and the
        yellow box is <EnvelopingMist />. You will see that going in to the <AlertingShrill />,
        three members have <ChiHarmony />, and three members have <EnvelopingMist />. If I had been
        running <MasterOfHarmony />, they would also all have <Coalescence /> since I pressed{' '}
        <ThunderFocusTea />.
      </p>
    </SubSection>
  )
}
