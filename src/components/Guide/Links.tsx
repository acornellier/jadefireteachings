import { GithubIcon } from '../Common/Icons/GithubIcon.tsx'
import { Button } from '../Common/Button.tsx'
import { TwitchIcon } from '../Common/Icons/TwitchIcon.tsx'
import { DiscordIcon } from '../Common/Icons/DiscordIcon.tsx'
import { RaiderIoIcon } from '../Common/Icons/RaiderIoIcon.tsx'
import { Section } from './Section.tsx'

export function Links() {
  return (
    <Section title="My Links">
      <div className="flex gap-2">
        <a href="https://www.twitch.tv/ortemismw" target="_blank" rel="noreferrer">
          <Button Icon={TwitchIcon}>Twitch</Button>
        </a>
        <a href="https://discord.gg/NU6TvbPcMZ" target="_blank" rel="noreferrer">
          <Button Icon={DiscordIcon}>Discord</Button>
        </a>
        <a href="https://raider.io/characters/us/zuljin/Ortemist" target="_blank" rel="noreferrer">
          <Button Icon={RaiderIoIcon}>Raider.io</Button>
        </a>
        <a href="https://github.com/acornellier/jadefireteachings" target="_blank" rel="noreferrer">
          <Button Icon={GithubIcon}>Github</Button>
        </a>
      </div>
    </Section>
  )
}
