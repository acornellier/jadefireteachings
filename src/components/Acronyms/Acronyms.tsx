import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  AncientTeachings,
  AspectOfHarmony,
  AwakenedJadefire,
  BlackoutKick,
  ChiHarmony,
  CracklingJadeLightning,
  DeepClarity,
  EnvelopingMist,
  ExpelHarm,
  FocusedThunder,
  GiftOfTheCelestials,
  HealingElixir,
  InvokersDelight,
  JadeBond,
  JadefireStomp,
  JadefireTeachings,
  MendingProliferation,
  MistWrap,
  RapidDiffusion,
  RefreshingJadeWind,
  RenewingMist,
  RingOfPeace,
  RisingMist,
  RisingSunKick,
  RushingWindKick,
  SecretInfusion,
  SheilunsGift,
  SoothingMist,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  TouchOfDeath,
  VeilOfPride,
  YulonsGrace,
  ZenPulse
} from '../Common/WowheadLink/Spells.tsx'
import type { ReactElement } from 'react'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { SubSection } from '../Guide/SubSection.tsx'

const coreSpells: Record<string, () => ReactElement> = {
  AT: AncientTeachings,
  BoK: BlackoutKick,
  CJL: CracklingJadeLightning,
  CoC: ConduitOfTheCelestials,
  CotC: ConduitOfTheCelestials,
  EH: ExpelHarm,
  EM: EnvelopingMist,
  JFS: JadefireStomp,
  MoH: MasterOfHarmony,
  RM: RenewingMist,
  RoP: RingOfPeace,
  RSK: RisingSunKick,
  RWK: RushingWindKick,
  SCK: SpinningCraneKick,
  SG: SheilunsGift,
  SooM: SoothingMist,
  TFT: ThunderFocusTea,
  TP: TigerPalm,
  ToD: TouchOfDeath,
}

const advanced: Record<string, () => ReactElement> = {
  AJ: AwakenedJadefire,
  AoH: AspectOfHarmony,
  CH: ChiHarmony,
  DC: DeepClarity,
  FT: FocusedThunder,
  Gift: GiftOfTheCelestials,
  HE: HealingElixir,
  ID: InvokersDelight,
  JB: JadeBond,
  JT: JadefireTeachings,
  MendyP: MendingProliferation,
  MW: MistWrap,
  RD: RapidDiffusion,
  RJW: RefreshingJadeWind,
  RM: RisingMist,
  SI: SecretInfusion,
  TotM: TeachingsOfTheMonastery,
  VoP: VeilOfPride,
  YG: YulonsGrace,
  ZP: ZenPulse,
}

export function Acronyms() {
  return (
    <div className="flex gap-20 flex-wrap">
      <div>
        <SubSection title="Core Spells">
          <UnorderedList>
            {Object.entries(coreSpells).map(([key, Component]) => (
              <li key={key}>
                {key} - <Component />
              </li>
            ))}
          </UnorderedList>
        </SubSection>
      </div>
      <div>
        <SubSection title="Other Spells">
          <UnorderedList>
            {Object.entries(advanced).map(([key, Component]) => (
              <li key={key}>
                {key} - <Component />
              </li>
            ))}
          </UnorderedList>
        </SubSection>
      </div>
    </div>
  )
}
