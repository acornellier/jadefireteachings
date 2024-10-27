import { Profiles } from './Profiles.tsx'
import { WeakAuras } from './WeakAuras.tsx'
import { Addons } from './Addons.tsx'

export function UserInterface() {
  return (
    <>
      <h2 className="text-2xl font-bold text-teal-500">User Interface</h2>
      <Profiles />
      <WeakAuras />
      <Addons />
      <img src="/images/ui_screenshot.png" alt="ui_screenshot" width={1200} />
    </>
  )
}
