import { SubSection } from '../SubSection.tsx'
import { Link } from '../../Common/Link.tsx'

export function UiPack() {
  return (
    <SubSection title="UI Pack">
      <p>
        The best way to get my UI is through my{' '}
        <Link href="https://uipacks.wago.io/pack/ortemist-mistweaver-ui">Wago UI pack</Link>. This
        includes all addon profiles and Weakauras in their most up-to-date configuration. It
        requires a 1$ membership to <Link href="https://www.patreon.com/c/ortemis">my patreon</Link>
        , or a subscription to my twitch.
      </p>
      <p>
        Alternatively, you can use the links below to get various parts of my UI for free! Please
        note that these may not remain available forever.
      </p>
    </SubSection>
  )
}
