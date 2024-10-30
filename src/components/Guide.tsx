import { Gameplay } from './Guide/Gameplay/Gameplay.tsx'
import { Gear } from './Guide/Gear.tsx'
import { UserInterface } from './Guide/UserInterface/UserInterface.tsx'
import { Talents } from './Guide/Talents.tsx'
import { Links } from './Links.tsx'
import { OtherLinks } from './OtherLinks.tsx'
import { Introduction } from './Introduction.tsx'

export const pageTitle = 'Jadefire Teachings'

export function Guide() {
  return (
    <div className="flex flex-col">
      <Introduction />
      <Links />
      <Gameplay />
      <Talents />
      <Gear />
      <UserInterface />
      <OtherLinks />
    </div>
  )
}
