import { Profiles } from './Profiles.tsx'
import { Section } from '../Section.tsx'
import { Macros } from './Macros.tsx'

export const userInterfaceTitle = 'User Interface'

export function UserInterface() {
  return (
    <Section title={userInterfaceTitle}>
      <Profiles />
      <Macros />
    </Section>
  )
}
