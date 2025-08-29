import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { ConduitOfTheCelestials } from '../Common/SpecialTexts.tsx'
import {
  CelestialConduit,
  ChiJi,
  DiffuseMagic,
  HastyProvocation,
  JadeEmpowerment,
  LegSweep,
  LifeCocoon,
  Revival,
  RingOfPeace,
  RisingSunKick,
  SoothingMist,
  StoneShatteringLeap,
  Thrash,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { LoomitharsLivingSilk } from '../Common/WowheadLink/Items.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { Macro } from '../Guide/UserInterface/Macros.tsx'

export function HallsOfAtonement() {
  return (
    <DungeonSection title="Halls of Atonement" tree="conduit" Talents={[HastyProvocation]}>
      <p>
        I really like <ConduitOfTheCelestials /> in this dungeon to the amount of constant damage
        output and availability of AoE targets to heal off.
      </p>
      <BossSubSection title="Halkias" difficulty="easy">
        <p>
          This boss is pretty easy, simply heal your group up between tosses, which are sometimes
          only a few seconds apart. But they don{"'"}t hit too hard.
        </p>
        <p>
          It is very common to pull trash onto this boss, which can make it significantly harder.
          Watch for casts going off and Shoots on players synced with a toss, which can one-shot.
        </p>
      </BossSubSection>
      <BossSubSection title="Echelon" difficulty="hard">
        <p>
          A very scary boss. When the ads explode, the entire group takes many large AoE hits that
          can one-shot squishier party members. Try to time your <JadeEmpowerment /> to be
          channeling as the mobs are dying to quickly heal your group up as they explode. You can
          also use <ChiJi /> or <LoomitharsLivingSilk /> before they explode.
        </p>
        <p>
          The player hit by <StoneShatteringLeap /> will take a large initial hit, followed by a
          long-lasting heavy single target dot. I recommend using <LifeCocoon /> <i>after</i> the
          initial hit. Then, your standard <SoothingMist /> spot healing is very powerful here.
        </p>
      </BossSubSection>
      <BossSubSection title="High Adjudicator Aleez" difficulty="hard">
        <p>
          A tricky double dispel fight combined with pulsing AoE damage and tricky movement! Very
          fun, reactive, and high intensity.
        </p>
        <p>
          Use your standard tools to deal with double dispels: <DiffuseMagic /> and <Revival />,
          along with <LifeCocoon />.
        </p>
        <p>
          Be sure to run <HastyProvocation /> and use this macro whenever an ad spawns to make it
          reach the lantern faster!
        </p>
        <Macro>{'/tar Ghastly Parishioner\n/cast Provoke\n/targetlasttarget'}</Macro>
      </BossSubSection>
      <BossSubSection title="Lord Chamberlain" difficulty="easy">
        <p>
          This boss doesn{"'"}t really do anything. Use <ChiJi /> before each intermission for a
          group shield, and do some healing during the beam soaking. Hopefully your group knows how
          to double soak, otherwise you will have to do some serious healing!
        </p>
      </BossSubSection>
      <NotableTrash dungeon="hoa">
        <SubSubSection title="Shards of Halkias">
          <p>
            Shards cast <Thrash /> on a regular basis dealing heavy pulsing damage over 8 seconds.
            Meanwhile, casts and shoots are probably going off, as well as dispels.
          </p>
          <p>
            Be sure to participate with the kick and stop rotation, you are just as responsible as
            your dps!
          </p>
          <p>
            Spot healing is essential here, so be quick with those <RisingSunKick /> and instant{' '}
            <Vivify /> combos.
          </p>
          <p>
            These pulls are a big reason I love the play <ConduitOfTheCelestials /> in here for the
            high uptime on <JadeEmpowerment /> which shines here, as well as the aditional active.
            With the CDR and Haste, you don{"'"}t need to be afraid to oversend. Also, remember you
            can dispel during <CelestialConduit />!
          </p>
        </SubSubSection>
        <SubSubSection title="Inquisitor Sigar">
          <p>
            Mobs frantically meleeing your party members is terrifying. Again,{' '}
            <ConduitOfTheCelestials /> with its many <JadeEmpowerment />s shines here due to the
            uneven damage patterns. Watch for one person getting really harassed and use{' '}
            <LifeCocoon /> or even <LegSweep /> or <RingOfPeace />.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
