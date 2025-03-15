import { Link } from '../../Common/Link.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import { SubSection } from '../SubSection.tsx'

export function WeakAuras() {
  return (
    <SubSection title="Weakauras">
      <UnorderedList>
        <li>
          <Link href="https://wago.io/LesINvLBL">Made by me (custom bars, icons, teachings)</Link>
          <UnorderedList indent>
            <li>
              <Link href="https://wago.io/Qc2ZiKeiN">Teachings of the Monastery</Link>
            </li>
            <li>
              <Link href="https://wago.io/GTcnwgYeC">
                Icons (Sheilun{"'"}s, Touch of Death, Vivify)
              </Link>
            </li>
            <li>
              <Link href="https://wago.io/2nCpTtHYb">
                Bars (Renewing Mist, Jadefire Teachings, Chi-Ji stacks)
              </Link>
            </li>
          </UnorderedList>
        </li>
        <li>
          <Link href="https://wago.io/twwdungeons">Dungeons pack (I disable most of it)</Link>
        </li>
        <li>
          <Link href="https://wago.io/s08yL_PCP">Targeted Spells</Link>
        </li>
        <li>
          <Link href="https://wago.io/bRl2gJIgz">Character sheet</Link>
        </li>
        <li>
          <Link href="https://wago.io/H-BqbpSOt">MoH vitality</Link>
        </li>
        <li>Tons more, ask me in chat if you’re curious what one is</li>
      </UnorderedList>
    </SubSection>
  )
}
