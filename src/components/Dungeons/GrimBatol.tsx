import { DungeonSection } from './DungeonSection.tsx'
import {
  AbyssalCorruption,
  AugustDynasty,
  CelestialConduit,
  Crush,
  CurseOfEntropy,
  ElusiveMists,
  ForgeWeapon,
  JadeEmpowerment,
  JadefireStomp,
  LegSweep,
  LifeCocoon,
  MoltenSpark,
  PressurePoints,
  RingOfPeace,
  RockSpike,
  Shadowmeld,
  SheilunsGift,
  Skullsplitter,
  TwilightBuffet,
  VoidSurge,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function GrimBatol() {
  return (
    <DungeonSection title="Grim Batol" tree="either" Talents={[PressurePoints]}>
      <BossSubSection title="General Umbriss" difficulty="easy">
        <p>
          It{"'"}s quite easy to top your group between damage events. You can <Shadowmeld /> the{' '}
          <RockSpike />. Watch the tank during <Skullsplitter />.
        </p>
      </BossSubSection>
      <BossSubSection
        title="Forgemaster Throngus"
        difficulty="medium"
        mrt="MRTREMD1Lo5Yojmquy49(umjDHRO5CMlf6SRukiMuRbqbChXuKjPEj0cUWWBdlppK2cgaPqeHzv30VV))ZCgj5a0voyfiOPNQUVSsOm4(iS)qI(k9J4KenY5vRjwWAygpEwAmrkc5Ue1RxxQ4GGcw9bNacjXYLGw6AxRe1WhhaBOk4k0T6cM)etLBnNauuRaBvjOdAf5SFulOjQPwrt)tSzHJEX88USJMMf)QjnJYnOqEUPClCTcTfewiCfSLRpy5zKQF7TIrfhYNrnFFAgR(04pp)c9GN7GTtjxxPl(7c1DsSjz2BxNYAzgN9FA0AAhTrHbT933mBJTtOr88laBzzU(G8I4ES9jppVlKBEEHY3aWD5)rJodzDd6rK4VWW1c8qXRXnpDrXdl4EGfp)i5UlEcewW6ep3mFuYjrfrBNYPnQt05)4e0cWwAz10Y67p"
      >
        <p>
          Rotate CDs on the <ForgeWeapon />. I like to do the <SheilunsGift /> + <JadefireStomp /> +{' '}
          <AugustDynasty /> combo on every 2nd set. Note that every 3rd <ForgeWeapon /> overlaps
          with the <MoltenSpark /> debuffs, making it much scarier, so send defensives and extra
          healing here.
        </p>
      </BossSubSection>
      <BossSubSection title="Drahga Shadowburner" difficulty="easy">
        <p>
          Easy healing check through <CurseOfEntropy /> to ensure being topped for{' '}
          <TwilightBuffet />, especially with decurses. Do the boss mechanics properly and let the
          DPS do their job and it will fall over.
        </p>
        <p>
          Use <RingOfPeace /> and <LegSweep /> to keep the ads away from their fixated targets. Try
          to keep them near the boss so they get cleaved.
        </p>
      </BossSubSection>
      <BossSubSection title="Erudax, the Duke of Below" difficulty="medium">
        <p>
          A tricky fight for positioning. You must dodge tentacles, spread in a small safe spot
          while remaining in melee.
        </p>
        <p>
          To heal the <VoidSurge /> pulsing damage, <JadeEmpowerment /> hard carries every one
          except the first. Make sure you are ready to heal the first one, a full <SheilunsGift />{' '}
          should do the trick.
        </p>
        <p>
          Use healing cooldowns on the <AbyssalCorruption /> debuffs. <CelestialConduit /> is very
          good here, as well as <LifeCocoon />.
        </p>
        <p>
          Watch your tank when ads spawn, as they will be trying to group the ads and shortly after
          taking a big <Crush /> hit. Help them with <RingOfPeace /> and <ElusiveMists />.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
