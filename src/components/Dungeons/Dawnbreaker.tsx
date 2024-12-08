import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  AcidicStupor,
  AnimateShadows,
  ArathiBombs,
  AugustDynasty,
  CelestialConduit,
  ChiJi,
  DarkOrb,
  DiffuseMagic,
  ElusiveMists,
  ErosiveSpray,
  FortifyingBrew,
  JadeEmpowerment,
  JadefireStomp,
  JadeSanctuary,
  LifeCocoon,
  ObsidianBeam,
  Revival,
  ShadowyDecay,
  SheilunsGift,
  SoothingMist,
  SpinneretsStrands,
  TerrifyingSlam,
} from '../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'

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
      <BossSubSection title="Anub'ikkaj" difficulty="EXTREME">
        <p>
          This is probably the second hardest boss of the season for mistweaver to heal, after Izo.
        </p>
        <p>
          <AnimateShadows /> summons ads that allow you to heal with <JadeEmpowerment />.
        </p>
        <p>
          <TerrifyingSlam /> hits the tank hard, but hopefully they don{"'"}t need your{' '}
          <LifeCocoon /> because you really need it to keep the rest of the group alive!
        </p>
        <p>
          <DarkOrb /> is a single heavy hit, just top your group for it. It is often followed
          shortly by a <ShadowyDecay />, so you will need to top your group quickly after an orb,
          without using major healing CDs.
        </p>
        <p>
          <ShadowyDecay /> is the big scary pulse damage every 35 seconds. Rotate your defensives
          and healing CDs on this. The <SheilunsGift /> + <JadefireStomp /> + <AugustDynasty />{' '}
          combo is great here. Be sure to ramp for every one.
        </p>
        <p>
          <ShadowyDecay />, <DarkOrb />, and <AnimateShadows /> are on timers that do not sync up,
          so each one will cause different overlaps.
        </p>
        <UnorderedList>
          <li>
            Casts 1, 2, 4, and 6 are normal. Use <FortifyingBrew /> or <JadeSanctuary />.
          </li>
          <li>
            Cast 3 overlaps perfectly <DarkOrb />, so this is the hardest one. Massive defensives
            are required here – <DiffuseMagic /> for you.
          </li>
          <li>
            Cast 5 is right after <AnimateShadows />, so this one is easy since you can heal it with{' '}
            <JadeEmpowerment />.
          </li>
        </UnorderedList>
        <img src="/images/s1/anubikkaj.png" alt="ui_screenshot" width={1200} />
      </BossSubSection>
      <BossSubSection title="Rasha'nan" difficulty="hard">
        <p>
          This is a very healing intensive fight. Thankfully ,there aren{"'"}t a lot of mechanics
          for you to do, since you are not responsible for carrying <ArathiBombs /> and you will
          never be targetted by <AcidicStupor /> or <SpinneretsStrands />. So you can fully focus on
          your healing!
        </p>
        <p>
          In phase 1, there will only be 2 <ErosiveSpray />, and then downtime before phase 2. So
          dump all of your healing CDs in phase 1 to be safe, 2 CDs on each spray. Then top players
          targetted by <AcidicStupor />. Watch players carrying <ArathiBombs /> as the debuff does
          hurt.
        </p>
        <p>
          In phase 2, he will cast <ErosiveSpray /> and <SpinneretsStrands /> every 30 seconds, 15
          seconds apart. Use <SheilunsGift /> on every <ErosiveSpray />, <ChiJi /> on every 2nd, and{' '}
          <CelestialConduit /> on every 3rd. Use <Revival /> if you don{"'"}t have either. In
          summary:
        </p>
        <OrderedList>
          <li>
            <ChiJi /> + <SheilunsGift />
          </li>
          <li>
            <CelestialConduit /> + <SheilunsGift />
          </li>
          <li>
            <ChiJi /> + <SheilunsGift />
          </li>
          <li>
            <Revival /> + <SheilunsGift />
          </li>
          <li>
            <ChiJi /> + <SheilunsGift /> (+ <CelestialConduit /> if boss will die)
          </li>
          <li>
            <CelestialConduit /> + <SheilunsGift />
          </li>
        </OrderedList>
        <p>
          For the <SpinneretsStrands />, you will not have any large healing CDs, so it is important
          that your dps use defensives here. Use OmniCD to determine which player is the most
          vulnerable, and <SoothingMist /> them. Alternatively, you can move <SheilunsGift /> to
          this ability instead of using it on <ErosiveSpray />, but then the sprays will be harder.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
