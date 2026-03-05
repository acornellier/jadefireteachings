import { OtherGameplay } from './Gameplay/OtherGameplay.tsx'
import { Gear } from './Gear.tsx'
import { UserInterface } from './UserInterface/UserInterface.tsx'
import { Talents } from './Talents.tsx'
import { Links } from './Links.tsx'
import { Introduction } from './Introduction.tsx'
import { Healing } from './Gameplay/Healing.tsx'

export const pageTitle = 'Jadefire Teachings'

export function Guide() {
  return (
    <div className="flex flex-col">
      <Introduction />
      <Links />
      <Healing />
      <OtherGameplay />
      <Talents />
      <Gear />
      <UserInterface />
    </div>
  )
}
