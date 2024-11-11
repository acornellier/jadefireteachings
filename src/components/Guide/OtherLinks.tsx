import { UnorderedList } from '../Common/UnorderedList.tsx'
import { Link } from '../Common/Link.tsx'
import { Section } from './Section.tsx'

export function OtherLinks() {
  return (
    <Section title="Other Links">
      <UnorderedList>
        <li>
          <Link href="https://discord.com/invite/peakofserenity" target="_blank">
            Peak of Serenity Discord
          </Link>
          : the official Mistweaver discord
        </li>
        <li>
          <Link href="https://www.wowhead.com/mistweaver-monk-guide" target="_blank">
            Wowhead by June
          </Link>
          : the most extensive guide out there, explains every single ability, stat, piece of gear,
          etc.
        </li>
        <li>
          <Link href="https://www.youtube.com/@Megasett/videos" target="_blank">
            Megasett{"'"}s YouTube
          </Link>
          : Meg is our wonderful Mistweaver ambassador and makes great videos about anything
          mistweaver related. She also streams!
        </li>
      </UnorderedList>
    </Section>
  )
}
