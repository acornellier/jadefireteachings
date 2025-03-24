import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  ArcingVoid,
  AttractingShadows,
  ChaoticVulnerability,
  CrushReality,
  DiffuseMagic,
  FortifyingBrew,
  GiftOfTheCelestials,
  JadeBond,
  JadeEmpowerment,
  LifeCocoon,
  Revival,
  SheilunsGift,
  ThunderFocusTea,
  VeilOfPride,
} from '../Common/WowheadLink/Spells.tsx'
import { MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { BurstingLightshard } from '../Common/WowheadLink/Items.tsx'
import { Link } from '../Common/Link.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function TheRookery() {
  return (
    <DungeonSection title="The Rookery" video="https://www.youtube.com/watch?v=vfqhyTErhyI">
      <p>
        I recommend <JadeBond /> for healing through the double Diffuser pack, but{' '}
        <GiftOfTheCelestials /> is fine as well.
      </p>
      <BossSubSection title="Kyrioss" difficulty="easy">
        <p>
          This boss doesn{"'"}t do much. If you have a lot of melee, I recommend stepping out during
          the AoE circles to give them room. Topping the group between the AoE circles, and healing
          through the intermission is easily done with maintenance healing, so you can focus on
          DPSing.
        </p>
      </BossSubSection>
      <BossSubSection title="Stormguard Gorren" difficulty="easy">
        <p>
          Be sure to top your group quickly after a <CrushReality />, as the boss often immediately
          casts a dot on a player after this. Help with holding the debuff when you have a defensive
          up, but be sure not to take it when you have <ChaoticVulnerability />!
        </p>
      </BossSubSection>
      <BossSubSection title="Voidstone Monstrosity" difficulty="medium">
        <p>
          This boss is mostly just annoying, due to your teammates being out of range and needing to
          dispel two players. Stand in the middle where you are in range of the most number of
          players. I recommend assuming ranged is standing in position already and dispelling one
          immediately when debuffs go out. Then watch the other dispel and keep them topped for any
          overlaps with the stomp, or simply send <LifeCocoon /> or <Revival />. The tank buster
          also hurts, so try to stay reasonable close to them in case they need help.
        </p>
        <p>
          Your damage during the burn is important! Stack up two charges of <JadeEmpowerment />, at
          least one charge of <ThunderFocusTea />, have full vitality if running <MasterOfHarmony />
          , save your <BurstingLightshard /> if you have it, and blast that boss!{' '}
          <Link href="https://www.warcraftlogs.com/reports/ZDbKF2qzNfBJVT14?fight=23&type=damage-done&pull=11&start=31016310&end=31056646">
            Here{"'"}s a log
          </Link>{' '}
          of me doing big dam.
        </p>
      </BossSubSection>
      <NotableTrash>
        <SubSubSection title="Coalescing Void Diffuser">
          <p>
            These mobs are scary since they pulse damage with <AttractingShadows />, and target
            someone with <ArcingVoid /> which is large direct damage that can occur during the
            pulsing. If you are targeted by <ArcingVoid />, try to step back and to the side to
            avoid hitting your teammates. On top of all this, you cannot be in melee when{' '}
            <AttractingShadows /> ends! In the single diffuser packs, players should only use
            defensives on the overlap. It is your job to heal through the pulsing damage, which is
            not too difficult when there is only one.
          </p>
          <p>
            The double diffuser pack is <i>very</i> scary. Try to go into this pull with several
            cooldowns available, your defensives, and hopefully your group will use Bloodlust here!{' '}
            <JadeBond /> will make this pull much easier. Each diffuser will use{' '}
            <AttractingShadows /> back to back. Use either <FortifyingBrew /> or <DiffuseMagic />{' '}
            for each pair of casts. Have BIG healing, like 2 charges of <JadeEmpowerment />. During
            each pair, 2 <ArcingVoid />s will go out. Watch whoever is targeted and use{' '}
            <LifeCocoon /> to save them if needed. Make sure to use everything you have on this
            pull, since the next boss is easy.
          </p>
        </SubSubSection>
        <SubSubSection title="Void Ascendant">
          <p>
            This mob regularly puts out a healing absorb on your whole group. Be ready for this with
            a stack of <JadeEmpowerment /> which should be enough to remove the absorb entirely.{' '}
            <SheilunsGift /> is also good if you are running <VeilOfPride />. In an emergency, use{' '}
            <Revival />.
          </p>
        </SubSubSection>
        <SubSubSection title="Radiating Voidstone">
          <p>
            This mob will pulse heavy damage when it reaches 40% HP. Its damage is buffed by how
            many other units were around it casts Void Extraction. Be sure to save healing for when
            it hits 40%, and do not be caught unaware as it will pulse immediately.
          </p>
          <p>
            With <JadeBond /> you can easily heal through the 1st and 3rd instances of these mobs.
            Then you will need to use your other cooldowns on the 2nd one.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
