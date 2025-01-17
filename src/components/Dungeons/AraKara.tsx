import {
  AlertingShrill,
  ChiJi,
  CosmicSingularity,
  CultivatedPoisons,
  DanceOfTheWind,
  DiffuseMagic,
  FortifyingBrew,
  GossamerOnslaught,
  ImprovedDetox,
  JadeSanctuary,
  LifeCocoon,
  Revival,
  SheilunsGift,
  SoothingMist,
  Transcendence,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { DungeonSection } from './DungeonSection.tsx'

export function AraKara() {
  return (
    <DungeonSection title="Ara-Kara" tree="either" Talents={[ImprovedDetox, DanceOfTheWind]}>
      <BossSubSection
        title="Avanoxx"
        difficulty="hard"
        mrt="MRTREMD1LsztVjimCC477tbjCyNK0(VVaLBkczAuNdqN6TLfmscrw0P7WcFB8y)qoBmz6wXecLtC6j)YZtBPsos(ah3bfg1L1lG2zmzzcFzisk)E)hzff(eGHfUvwbBY7mmxkzsmiKY00eP6dea)YpsKeljNoH8bHJqhAmB1VqXygbJQSIZoMF8TIgqf7tqo0)sL6o75qU71PkeubUYkztwEXHTpUVbCr(mKdrBTEXZM3Efu3ypdvSWR)vfaGRhPYQF(61h2N1aQeFmZb0vqWCHHkaJ(pxvWMS41BdgGoV2OYDFA1Bx2xnIBTQveoH2E1suQLRlHObZnsc3lzjrlmizyvYq6QDA8iJulOultJl0DvxJ4wNDv7DqA0nC5EuX5Kv(Ez52gaTUZxQKnU)lgLmWNQ9qJIB84zgX9EhXEItnIlO8GE0eWYHT)(aOglwVyJIN2(IDzP22r22)8"
      >
        <p>
          Avanoxx is a 40 second loop with <AlertingShrill /> at 0:08, ads summoned, then{' '}
          <GossamerOnslaught /> at 0:30. The loop then repeats with <AlertingShrill /> being cast
          shortly after the <GossamerOnslaught /> ends.
        </p>
        <p>
          <AlertingShrill /> is easily the scarier of the two abilities. It channels very quickly
          over only 3 seconds, so you will only get 2 GCDs of healing in. Getting a well-timed{' '}
          <SheilunsGift /> is vital here, since it will be fully stacked on every cast. Use{' '}
          <ChiJi /> purely for the shield before the Shrill. <Revival /> is very powerful here when
          your team is dry.
        </p>
        <p>
          Strong defensives are very important for <AlertingShrill />, so communicate this with your
          team. The damage is physical, so <DiffuseMagic /> will not work. You will only have{' '}
          <FortifyingBrew /> every 3 shrills! Very scary for you, you might need to rotate{' '}
          <JadeSanctuary />, <LifeCocoon />, and health pot.
        </p>
        <p>
          <GossamerOnslaught /> is much less scary, but you will be moving. Ideally ads are dead,
          you can stack with group, and a couple <Vivify />s should be enough. The most important
          thing is topping your group before the next <AlertingShrill />.
        </p>
      </BossSubSection>
      <BossSubSection title="Anub'zekt" difficulty="easy">
        <p>
          Pretty straightforward fight. Just heal the debuff. Use OmniCD to track your ally{"'"}s
          defensives and give them extra healing if they need it. If you want to play it super safe,
          just <SoothingMist /> them every time until you are comfortable.
        </p>
      </BossSubSection>
      <BossSubSection title="Ki'katal the Harvester" difficulty="hard">
        <p>
          This fight varies wildly in difficulty based on how many poison dispels you have.{' '}
          <CultivatedPoisons /> ticks quite hard, and I recommend stepping out of melee before it
          goes out, and dispelling yourself immediately every time. If your tank can dispel, ask
          them to get a dps that can{"'"}t dispel themselves. Then, you need to spot heal whoever
          still has the debuff, which is easier said than done. Use <Revival /> on a set where you
          have little healing.
        </p>
        <p>
          <Transcendence /> is powerful here to avoid using a puddle. Place one outside at the start
          of the fight, and use it when there is less than 1 second left on the{' '}
          <CosmicSingularity /> cast if there are not enough puddles for your team. I like to wait
          until everybody else is safe, then roll into a puddle, and kick the ooze to get out. Be
          careful not to use <ChiJi /> shortly before <CosmicSingularity /> since you will not be
          able to use an ooze.
        </p>
        <p>
          Positioning and mental awareness is key here, as it is a very stressful fight! Stay calm,
          deep breaths, and watch your feet.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
