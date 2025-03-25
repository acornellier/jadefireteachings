import { Link } from '../Common/Link.tsx'

export function Introduction() {
  return (
    <div className="section flex flex-col">
      <p>
        Jadefire Teachings will teach you everything about playing Mistweaver in Mythic+, from
        gameplay, to build, to consumables.
      </p>
      <p>
        I am Ortemis, and I am, as of writing this, the top mistweaver in M+. I am also the
        developer of <Link href="https://not-even-close.com/">Not Even Close</Link> and{' '}
        <Link href="https://threechest.io/">Threechest</Link>.
      </p>
      <p>
        All my content, websites, and VODs are free and ad-free, other than embedding my own stream.
        Enjoy!
      </p>
    </div>
  )
}
