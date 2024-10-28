import { Header } from './Common/Header.tsx'
import { GithubIcon } from './Common/Icons/GithubIcon.tsx'
import { Button } from './Common/Button.tsx'
import { TwitchIcon } from './Common/Icons/TwitchIcon.tsx'
import { DiscordIcon } from './Common/Icons/DiscordIcon.tsx'
import { RaiderIoIcon } from './Common/Icons/RaiderIoIcon.tsx'

export function Links() {
  return (
    <>
      <Header Tag="h2">My Links</Header>
      <div className="flex gap-2">
        <a href="https://www.twitch.tv/ortemismw" target="_blank" rel="noreferrer">
          <Button Icon={TwitchIcon}>Twitch</Button>
        </a>
        <a href="https://discord.gg/NU6TvbPcMZ" target="_blank" rel="noreferrer">
          <Button Icon={DiscordIcon}>Discord</Button>
        </a>
        <a href="https://github.com/acornellier/jadefireteachings" target="_blank" rel="noreferrer">
          <Button Icon={GithubIcon}>Github</Button>
        </a>
        <a href="https://raider.io/characters/us/zuljin/Ortemist" target="_blank" rel="noreferrer">
          <Button Icon={RaiderIoIcon}>Raider.io</Button>
        </a>
      </div>
    </>
  )
}
