import { UnorderedList } from './Common/UnorderedList.tsx'
import { Link } from './Common/Link.tsx'
import { Section } from './Guide/Section.tsx'

export function OtherLinks() {
  return (
    <Section title="Other Links">
      <UnorderedList>
        <li>
          <Link href="https://discord.com/invite/peakofserenity">Peak of Serenity Discord</Link>:
          the official mistweaver discord
        </li>
        <li>
          <Link href="https://www.wowhead.com/mistweaver-monk-guide">Wowhead by June</Link>: the
          most extensive guide out there, explains every single ability, stat, piece of gear, etc.
        </li>
        <li>
          <Link href="https://www.youtube.com/@Megasett/videos">Megasett{"'"}s YouTube</Link>: Meg
          is our wonderful Mistweaver ambassador and makes great videos about anything mistweaver
          related. She also streams!
        </li>
      </UnorderedList>
    </Section>
  )
}
