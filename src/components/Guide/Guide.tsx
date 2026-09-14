import { OtherGameplay } from './Gameplay/OtherGameplay.tsx'
import { Gear } from './Gear.tsx'
import { UserInterface } from './UserInterface/UserInterface.tsx'
import { Talents } from './Talents.tsx'
import { Links } from './Links.tsx'
import { YouTubeStream } from './YouTubeStream.tsx'
import { Introduction } from './Introduction.tsx'
import { Healing } from './Gameplay/Healing.tsx'
import { HealingCooldowns } from './Gameplay/HealingCooldowns.tsx'
import { PatchChanges } from './Gameplay/PatchChanges.tsx'

export const pageTitle = 'Jadefire Teachings'

export function Guide() {
  return (
    <div className="flex flex-col">
      <Introduction />
      <Links />
      <YouTubeStream />
      <PatchChanges />
      <Healing />
      <HealingCooldowns />
      <OtherGameplay />
      <Talents />
      <Gear />
      <UserInterface />
    </div>
  )
}
