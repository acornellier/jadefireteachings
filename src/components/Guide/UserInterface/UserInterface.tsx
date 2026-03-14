import { Profiles } from './Profiles.tsx'
import { Section } from '../Section.tsx'
import { Macros } from './Macros.tsx'

export const userInterfaceTitle = 'User Interface'

export function UserInterface() {
  return (
    <Section title={userInterfaceTitle}>
      <Profiles />
      <img src="/images/ui_screenshot.jpg" alt="ui_screenshot" width={1200} />
      <Macros />
    </Section>
  )
}
