import { useState } from 'react'
import { TwitchStream } from './TwitchStream.tsx'

export function Footer() {
  const [minimized, setMinimized] = useState(false)

  return (
    <div className={`${minimized ? '' : 'fixed bottom-0 right-0'} z-20 transition-all`}>
      <TwitchStream minimized={minimized} setMinimized={setMinimized} />
    </div>
  )
}
