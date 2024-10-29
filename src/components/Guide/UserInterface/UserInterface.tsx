import { Profiles } from './Profiles.tsx'
import { WeakAuras } from './WeakAuras.tsx'
import { Addons } from './Addons.tsx'
import { Section } from '../Section.tsx'

export const userInterfaceTitle = 'User Interface'

export function UserInterface() {
  return (
    <Section title={userInterfaceTitle}>
      <p>
        This section is mostly about <i>my personal</i> user interface.
      </p>
      <Profiles />
      <WeakAuras />
      <Addons />
      <img src="/images/ui_screenshot.jpg" alt="ui_screenshot" width={1200} />
    </Section>
  )
}
