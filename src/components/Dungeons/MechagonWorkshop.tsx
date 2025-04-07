import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  BlazingChomp,
  ChiJi,
  EnvelopingMist,
  GroundPound,
  JadeBond,
  JadefireStomp,
  LifeCocoon,
  MagnetoArm,
  MegaZap,
  RenewingMist,
  ShaohaosLessons,
  TigerPalm,
  Transcendence,
} from '../Common/WowheadLink/Spells.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function MechagonWorkshop() {
  return (
    <DungeonSection
      title="Mechagon: Workshop"
      video="https://www.youtube.com/watch?v=RfpR7RN1_28"
      tree="moh"
      RecommendedTalents={[JadeBond, ShaohaosLessons]}
    >
      <p>
        I highly recommend <JadeBond /> for healing through the Spider Tank pull, which is easily
        the hardest pull to heal in the dungeon.
      </p>
      <BossSubSection title="Tussle Tonks" difficulty="easy">
        <p>
          <GroundPound /> does little damage, so as long as your group is topped beforehand and you
          do maintenance healing during it, nobody will die. Focus on your positioning and your
          damage. Use <Transcendence /> after being knocked away.
        </p>
      </BossSubSection>
      <BossSubSection title="K.U.-J.O." difficulty="medium">
        <p>
          In higher keys, <BlazingChomp /> will do very high damage to the group. You cannot afford
          to wait long before dispelling it, so make sure the group is topped before every one,
          watching timers.
        </p>
      </BossSubSection>
      <BossSubSection title="Machinist's Garden" difficulty="easy">
        <p>
          Dodging everything actually gets surprisingly difficult as the fight progresses. Point
          your camera down, and stay on your toes!
        </p>
      </BossSubSection>
      <BossSubSection title="King Mechagon" difficulty="medium">
        <p>
          The initial hit of <MegaZap /> hits quite hard, and is followed by a light dot. Be ready
          with a quick heal right after someone is hit.
        </p>
        <p>
          In the second phase, <MegaZap /> will hit slightly harder. <MagnetoArm /> does not hit
          very hard, so use your healing cooldowns on the <MegaZap /> debuffs.
        </p>
      </BossSubSection>
      <NotableTrash dungeon="mw">
        <SubSubSection title="Spider Tanks">
          <p>
            This is probably the highest HPS pull of the season. Be sure to go into this pull with
            all your cooldowns and defensives, as you should not need them in the previous boss.
            Send your <RenewingMist />s before the pull, and <EnvelopingMist /> if you have time.
            Then place your <JadefireStomp />, 2x <TigerPalm />, and <ChiJi /> with <JadeBond /> and
            your group should be safe for the next 20 seconds! If someone drops low, give them{' '}
            <LifeCocoon />. When <ChiJi /> runs out, desperately send everything else, because
            assuming your group is focusing one down, it should not be alive for much longer.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
