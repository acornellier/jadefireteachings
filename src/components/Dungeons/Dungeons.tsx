import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {
  AlertingShrill,
  ChiJi,
  CultivatedPoisons,
  DanceOfTheWind,
  DiffuseMagic,
  FortifyingBrew,
  GossamerOnslaught,
  ImprovedDetox,
  JadeSanctuary,
  LifeCocoon,
  PeaceAndProsperity,
  PressurePoints,
  Restoral,
  Revival,
  SheilunsGift,
  SoothingMist,
  Transcendence,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { DungeonSection } from './DungeonSection.tsx'

export function Dungeons() {
  return (
    <div className="w-full">
      <div className="flex items-center text-4xl gap-4 justify-center text-red-500">
        <ExclamationTriangleIcon height={32} /> UNDER CONSTRUCTION{' '}
        <ExclamationTriangleIcon height={32} />
      </div>
      <DungeonSection title="Ara-Kara" tree="conduit" Talents={[ImprovedDetox, DanceOfTheWind]}>
        <BossSubSection title="Avanoxx" difficulty="hard">
          <p>
            Avanoxx is a 40 second loop with <AlertingShrill /> at 0:08, ads summoned, then{' '}
            <GossamerOnslaught /> at 0:30. The loop then repeats with <AlertingShrill /> being cast
            shortly after the <GossamerOnslaught /> ends.
          </p>
          <p>
            <AlertingShrill /> is easily the scarier of the two abilities. It channels very quickly
            over only 3 seconds, so you will only get 2 GCDs of healing in. Getting a well-timed{' '}
            <SheilunsGift /> is vital here, since it will be fully stacked on every cast. Use{' '}
            <ChiJi /> purely for the shield before the Shrill. <Revival /> is very powerful here
            when your team is dry.
          </p>
          <p>
            Strong defensives are very important for <AlertingShrill />, so communicate this with
            your team. The damage is physical, so <DiffuseMagic /> will not work. You will only have{' '}
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
            Pretty straightforward fight. Just heal the debuff. Use OmniCD to track your ally&apos;s
            defensives and give them extra healing if they need it. If you want to play it super
            safe, just <SoothingMist /> them every time until you are comfortable.
          </p>
        </BossSubSection>
        <BossSubSection title="Ki'katal the Harvester" difficulty="hard">
          <p>
            This fight varies widly in difficulty based on how many poison dispels you have.{' '}
            <CultivatedPoisons /> ticks quite hard, and I recommend stepping out of melee before it
            goes out, and dispelling yourself immediately every time. If your tank can dispel, ask
            them to get a dps that can&apos;t dispel themselves. Then, you need to spot heal whoever
            still has the debuff, which is easier said than done. Use <Revival /> on a set where you
            have little healing.
          </p>
          <p>
            <Transcendence /> is powerful here to avoid using a puddle. Place one outside at the
            start of the fight, and use it when there is less than 1 second left on the cast if
            there are not enough puddles for your team. I like to wait until everybody else is safe,
            then roll into a puddle, and kick the ooze to get out.
          </p>
          <p>
            Positioning and mental awareness is key here, as it is a very stressful fight! Stay
            calm, deep breaths, and watch your feet.
          </p>
        </BossSubSection>
      </DungeonSection>
      <DungeonSection
        title="City of Threads"
        tree="conduit"
        Talents={[ImprovedDetox]}
      ></DungeonSection>
      <DungeonSection title="Dawnbreaker" tree="conduit"></DungeonSection>
      <DungeonSection title="Grim Batol" tree="either" Talents={[PressurePoints]}></DungeonSection>
      <DungeonSection title="Mists of Tirna-Scithe" tree="moh" Talents={[ImprovedDetox]} />
      <DungeonSection
        title="Necrotic Wake"
        tree="either"
        Talents={[ImprovedDetox, DanceOfTheWind, PeaceAndProsperity]}
      ></DungeonSection>
      <DungeonSection
        title="Siege of Boralus"
        tree="either"
        Talents={[ImprovedDetox]}
      ></DungeonSection>
      <DungeonSection title="Stonevault" tree="conduit" Talents={[Restoral]}></DungeonSection>
    </div>
  )
}
