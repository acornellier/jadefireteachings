import type { ReactNode } from 'react'
import { ZamIcon } from './ZamIcon.tsx'

interface Props {
  id: number
  icon: string
  children: ReactNode
}

export function Ability({ id, icon, children }: Props) {
  return (
    <a className="text-[#ffd100] whitespace-nowrap" href={`https://www.wowhead.com/spell=${id}/`}>
      <ZamIcon size={16} icon={icon} alt={icon} className="inline-block mr-0.5" />
      {children}
    </a>
  )
}

export function makeAbility(name: string, id: number, icon: string) {
  const NewAbility = () => (
    <Ability id={id} icon={icon}>
      {name}
    </Ability>
  )
  NewAbility.displayName = name
  return NewAbility
}

export const AncientTeachings = makeAbility('Ancient Teachings', 388023, 'inv_misc_book_07')
export const AugustDynasty = makeAbility(
  'August Dynasty',
  442818,
  'ability_monk_legacyoftheemperor',
)
export const ChiHarmony = makeAbility('Chi Harmony', 423458, 'ability_monk_counteractmagic')
export const EnvelopingMist = makeAbility('Enveloping Mist', 124682, 'spell_monk_envelopingmist')
export const GustOfMists = makeAbility('Gust of Mists', 191894, 'ability_monk_souldance')
export const JadefireStomp = makeAbility('Jadefire Stomp', 388193, 'inv_ability_monk_jadefirestomp')
export const RapidDiffusion = makeAbility('Rising Mist', 274909, 'ability_monk_effuse')
export const RenewingMist = makeAbility('Renewing Mist', 115151, 'ability_monk_renewingmists')
export const RisingMist = makeAbility('Rising Mist', 274909, 'ability_monk_effuse')
export const RisingSunKick = makeAbility('Rising Sun Kick', 107428, 'ability_monk_risingsunkick')
export const SoothingMist = makeAbility('Soothing Mist', 115175, 'ability_monk_soothingmists')
export const ThunderFocusTea = makeAbility(
  'Thunder Focus Tea',
  116680,
  'ability_monk_thunderfocustea',
)
export const VivaciousVivification = makeAbility(
  'Vivacious Vivification',
  388812,
  'ability_monk_vivify',
)
export const Vivify = makeAbility('Vivify', 116670, 'ability_monk_vivify')
export const ZenPulse = makeAbility('Zen Pulse', 446326, 'ability_monk_forcesphere')
