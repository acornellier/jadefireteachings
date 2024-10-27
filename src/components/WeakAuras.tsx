import { Link } from './Common/Link.tsx'
import { UnorderedList } from './Common/UnorderedList.tsx'
import { Header } from './Common/Header.tsx'

export function WeakAuras() {
  return (
    <>
      <Header Tag="h3">Weakauras</Header>
      <UnorderedList>
        <li>
          <Link href="https://wago.io/LesINvLBL">Made by me (custom bars, icons, teachings)</Link>
        </li>
        <li>
          <Link href="https://wago.io/twwdungeons">Dungeons pack (I disable most of it)</Link>
        </li>
        <li>
          <Link href="https://wago.io/GZMPP3LDH">Targeted Spells</Link>
        </li>
        <li>
          <Link href="https://wago.io/bRl2gJIgz">Character sheet</Link>
        </li>
        <li>
          <Link href="https://wago.io/BqbpSOt">MoH vitality</Link>
        </li>
        <li>Tons more, ask me in chat if you’re curious what one is</li>
      </UnorderedList>
    </>
  )
}
