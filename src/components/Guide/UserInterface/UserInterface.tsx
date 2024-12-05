import { Profiles } from './Profiles.tsx'
import { WeakAuras } from './WeakAuras.tsx'
import { Addons } from './Addons.tsx'
import { Section } from '../Section.tsx'
import { Macros } from './Macros.tsx'
import { UiPack } from './UiPack.tsx'

export const userInterfaceTitle = 'User Interface'

export function UserInterface() {
  return (
    <Section title={userInterfaceTitle}>
      <p>
        This section is mostly about <i>my personal</i> user interface.
      </p>
      <UiPack />
      <Profiles />
      <WeakAuras />
      <Macros />
      <Addons />
      <img src="/images/ui_screenshot.jpg" alt="ui_screenshot" width={1200} />
    </Section>
  )
}
