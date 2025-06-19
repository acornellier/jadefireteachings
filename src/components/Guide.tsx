import { OtherGameplay } from './Guide/Gameplay/OtherGameplay.tsx'
import { Gear } from './Guide/Gear.tsx'
import { UserInterface } from './Guide/UserInterface/UserInterface.tsx'
import { Talents } from './Guide/Talents.tsx'
import { Links } from './Guide/Links.tsx'
import { Introduction } from './Guide/Introduction.tsx'
import { Healing } from './Guide/Gameplay/Healing.tsx'

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
