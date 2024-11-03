import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  AnimateShadows,
  AugustDynasty,
  DarkOrb,
  DiffuseMagic,
  ElusiveMists,
  FortifyingBrew,
  JadeEmpowerment,
  JadefireStomp,
  LifeCocoon,
  ObsidianBeam,
  ShadowyDecay,
  SheilunsGift,
  TerrifyingSlam,
} from '../Common/WowheadLink/Spells.tsx'
import { ConduitOfTheCelestials } from '../Common/SpecialTexts.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

export function Dawnbreaker() {
  return (
    <DungeonSection title="Dawnbreaker" tree="conduit">
      <BossSubSection title="Speaker Shadowcrown" difficulty="easy">
        <p>
          Very easy boss, the healing check is almost non-existent. <ObsidianBeam /> does hit the
          tank quite hard, so top them for it every time and give them <ElusiveMists />, and{' '}
          <LifeCocoon /> if needed.
        </p>
      </BossSubSection>
      <BossSubSection title="Anub'ikkaj" difficulty="hard">
        <p>
          <DarkOrb /> is a single heavy hit, just top your group for it.
        </p>
        <p>
          <AnimateShadows /> summons ads that allow you to heal with <JadeEmpowerment />.
        </p>
        <p>
          <TerrifyingSlam /> hits the tank hard, but hopefully they don{"'"}t need your{' '}
          <LifeCocoon /> because you really need it to keep the rest of the group alive!
        </p>
        <p>
          <ShadowyDecay /> is the big scary pulse damage every 35 seconds. Rotate your defensives
          and healing CDs on this. The <SheilunsGift /> + <JadefireStomp /> + <AugustDynasty />{' '}
          combo is great here.
        </p>
        <p>
          <ShadowyDecay />, <DarkOrb />, and <AnimateShadows /> are on timers that do not sync up,
          so each one will cause different overlaps.
        </p>
        <UnorderedList>
          <li>
            Casts 1, 2, 4, and 6 are normal. Use <FortifyingBrew /> or <ConduitOfTheCelestials />.
          </li>
          <li>
            Cast 3 overlaps prefectly <DarkOrb />, so this is the hardest one. Massive defensives
            are required here – <DiffuseMagic /> for you. powerful.
          </li>
          <li>
            Cast 5 is right after <AnimateShadows />, so this one is easy since you can heal it with{' '}
            <JadeEmpowerment />.
          </li>
        </UnorderedList>
        <img src="/images/s1/anubikkaj.png" alt="ui_screenshot" width={1200} />
      </BossSubSection>
      <BossSubSection title="Rasha'nan" difficulty="EXTREME">
        <p>TODO: write the guide for this boss.</p>
      </BossSubSection>
    </DungeonSection>
  )
}
