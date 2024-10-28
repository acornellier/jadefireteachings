import { Profiles } from './Profiles.tsx'
import { WeakAuras } from './WeakAuras.tsx'
import { Addons } from './Addons.tsx'
import { Header } from '../Common/Header.tsx'

export const userInterfaceLabel = 'User Interface'

export function UserInterface() {
  return (
    <>
      <Header Tag="h2">{userInterfaceLabel}</Header>
      <p>
        This section is mostly about <i>my personal</i> user interface.
      </p>
      <Profiles />
      <WeakAuras />
      <Addons />
      <img src="/images/ui_screenshot.png" alt="ui_screenshot" width={1200} />
    </>
  )
}
