import { type Dispatch, memo, type SetStateAction, useEffect, useRef, useState } from 'react'
import { useExternalScript } from '../util/useExternalScript.ts'
import { Button } from './Common/Button.tsx'
import { XMarkIcon } from '@heroicons/react/24/outline'

const channel = 'ortemismw'
const defaultWidth = 380
const defaultWidthHeight = defaultWidth * (9 / 16)
const fullWidthHeight = 380

interface Props {
  minimized?: boolean
  setMinimized?: Dispatch<SetStateAction<boolean>>
}

function TwitchStreamComponent({ minimized, setMinimized }: Props) {
  const [isTwitchVisible, setTwitchVisible] = useState(false)

  const scriptStatus = useExternalScript('/twitch_v1.js')
  const twitchPlayer = useRef<Twitch.Embed | null>(null)

  useEffect(() => {
    if (scriptStatus !== 'ready' && !twitchPlayer.current) return

    const player = new Twitch.Embed('twitch-embed', {
      width: defaultWidth,
      height: defaultWidthHeight,
      channel,
      layout: 'video',
      autoplay: true,
      muted: true,
      theme: 'dark',
      parent: [window.location.hostname],
    })
    twitchPlayer.current = player

    player.addEventListener(Twitch.Player.READY, initiate)

    function initiate() {
      player.addEventListener(Twitch.Player.ONLINE, handleOnline)
      player.addEventListener(Twitch.Player.OFFLINE, handleOffline)
      player.removeEventListener(Twitch.Player.READY, initiate)
    }

    function handleOnline() {
      setTwitchVisible(true)
      player.removeEventListener(Twitch.Player.ONLINE, handleOnline)
      player.addEventListener(Twitch.Player.OFFLINE, handleOffline)
    }

    function handleOffline() {
      setTwitchVisible(false)
      player.removeEventListener(Twitch.Player.OFFLINE, handleOffline)
      player.addEventListener(Twitch.Player.ONLINE, handleOnline)
    }
  }, [scriptStatus])

  useEffect(() => {
    if (twitchPlayer.current) {
      twitchPlayer.current._iframe.width = `${minimized ? '100%' : defaultWidth}`
      twitchPlayer.current._iframe.height = `${minimized ? fullWidthHeight : defaultWidthHeight}`
    }
  }, [minimized])

  return (
    <div className={`${isTwitchVisible ? '' : 'hidden'} w-full`}>
      <div className="flex flex-col">
        {!minimized && (
          <Button
            short
            twoDimensional
            iconSize={16}
            Icon={XMarkIcon}
            onClick={() => setMinimized?.(true)}
            className="self-end"
          />
        )}
        <div id="twitch-embed" />
      </div>
    </div>
  )
}

export const TwitchStream = memo(TwitchStreamComponent)
