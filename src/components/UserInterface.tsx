import { Profiles } from './Profiles.tsx'
import { WeakAuras } from './WeakAuras.tsx'
import { Addons } from './Addons.tsx'
import { Header } from './Common/Header.tsx'

export function UserInterface() {
  return (
    <>
      <Header size="h2">User Interface</Header>
      <Profiles />
      <WeakAuras />
      <Addons />
      <img src="/images/ui_screenshot.png" alt="ui_screenshot" width={1200} />
    </>
  )
}
