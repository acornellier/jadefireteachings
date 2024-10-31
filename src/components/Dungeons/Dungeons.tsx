import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Section } from '../Guide/Section.tsx'

export function Dungeons() {
  return (
    <div className="w-full">
      <div className="flex items-center text-4xl gap-4 justify-center text-red-500">
        <ExclamationTriangleIcon height={32} /> UNDER CONSTRUCTION{' '}
        <ExclamationTriangleIcon height={32} />
      </div>
      <Section title="Ara-Kara"></Section>
      <Section title="City of Threads"></Section>
      <Section title="Dawnbreaker"></Section>
      <Section title="Grim Batol"></Section>
      <Section title="Mists of Tirna-Scithe"></Section>
      <Section title="Necrotic Wake"></Section>
      <Section title="Siege of Boralus"></Section>
      <Section title="Stonevault"></Section>
    </div>
  )
}
