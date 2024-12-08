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
import { ConduitOfTheCelestials } from '../Common/SpecialTexts.tsx'

export function Dawnbreaker() {
  return (
    <DungeonSection title="Dawnbreaker" tree="conduit">
      <p>
        There is a lot of healing to be done in this dungeon, so I highly recommend running{' '}
        <ConduitOfTheCelestials />. The MRT notes will assume you have <CelestialConduit />.
      </p>
      <BossSubSection title="Speaker Shadowcrown" difficulty="easy">
        <p>
          Very easy boss, the healing check is almost non-existent. <ObsidianBeam /> does hit the
          tank quite hard, so top them for it every time and give them <ElusiveMists />, and{' '}
          <LifeCocoon /> if needed.
        </p>
      </BossSubSection>
      <BossSubSection
        title="Anub'ikkaj"
        difficulty="hard"
        mrt="MRTREMD1TsDZUPkuqCa893NcsyXDLMZNWb2byrRrQXpAST7m9ESEsOqJGTPPPVnUCEiVQyvSTiNfWgD18J5)mmmWcb)Xc3cDvOh3pG1kIHyopWVdGpYErgh7IjeBb9ta4avWby60jUDulwSotAen)j1JWUhIGk2(ZWv5YNvz5aGaoMaeGUzd2LHBZb8U)UVyBkEW)a2F8SGJWuhhMd(C4jlLQ41j)nRwuIlH22EpArHQenW(MBBmuUOnrhuF)HwNIymNG(wehMUkxT4DvYtg(RKV970KsHm16RmEF1QuwmSRxd1UixcRnsN21EQ9KABx9AuKlMRxN607(WsOwcMZNgbPpMMMyCQ0hEj0Oz3oBTo4URwv7goBqJLWhrRjHfrD6woHPy05OJLVQEDESgKhhQfLPssp8G(N6tch7yFozWsvR(QAflDFOOkvVgf1FAJiY1ZlW66gPdlFx4YI(Jg1RQDw)5jzlLRY0FNT0rWA2z98UPPUkuECwZo79wJoIYyuer8T4nn5FRv51sU9ZeYbYIYu9eLh9WLjLXYSC18ydDXlnCph30m008))"
      >
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
      <BossSubSection
        title="Rasha'nan"
        difficulty="EXTREME"
        mrt="MRTREMD1TA5ZUPkquC499POjSORKm)vHzNLkLkGOG6THDMCPPKqBVrq7IM7BJlppKxvUrhSfhwmSbwD(Y578BodmOpcUPpUhAK7q(9oSEHmelC2Zba8v5FYkkeymNIr)faoqT4amFEIioBB(2vfWHhIf1E)RO1vzVLxwbac4ycqa6UDmbMzIb8(pRlZU6h83qolfnrlirc2at7UGC64r4ZijKbw0MiFi)Lx2uMPej)qxIQrESmTImeVW9eskHJTh0ePZR59gNRKivWWM8JeRRs7erob6GirqT6iXf(N1k12MzJBsm51S8InVFxPsOmbJBsQHESqTc1py5qTmlLJpxFwo11HRfKsdtvXNWaUMulvGSn73j1gNUuhjiKaB)FZQibfq8IL3fqqxyw3pwxD79RZ(8NHs(rO1fQD3sFmrhTPCMvXbLjr)sBtZZ7dU(0CQtOLMCR0kbvU13Z7eugJIiwx42pE)3BYR6qFEk1wxM2r6fgOj5kV6tHC9iEAsUnV58QYno9jn1PsqvTuyXqFnbvEVGc9MYhD9yuwrwzv(QIB7AGs60QIavezEKM6yP)xqrhh8ysSwo4iDTwZ(0WW1W4F)"
      >
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
