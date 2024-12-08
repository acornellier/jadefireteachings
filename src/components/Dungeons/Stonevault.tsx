import { DungeonSection } from './DungeonSection.tsx'
import {
  BlazingCrescendo,
  CelestialConduit,
  ChiJi,
  EntropicReckoning,
  ExhaustVents,
  Restoral,
  Revival,
  SeismicReverberation,
  SheilunsGift,
  VoidCorruption,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { Link } from '../Common/Link.tsx'

export function Stonevault() {
  return (
    <DungeonSection title="Stonevault" tree="conduit" Talents={[Restoral]}>
      <BossSubSection
        title="E.D.N.A."
        difficulty="hard"
        mrt="MRTREMD1TszVUjpmuy49Evujg6eiFo2oK4nc0a9taTabsOBv6liIukurc0HQE3WOVilHWpjuOod2ljtVp654xFysdI8odOk5rNgC7MSQ9OthAyy3wk)k(JGOibf5Gv9VLsUKAYLsx3rIMZdR(Vqz6bn5SDFEEvsW7HXjsjrYbuIs62TubAuJiH0F3NY2Sd8lIi2VZjImgLGMxqC5I)VomrjsuaSAw7rMfZnrY70V7LsE)rXotwjrqGWbIkKKo129mrllMfuuYrZdcJwV4HyLqPcaooz3h01HYimVgEpDckaCKqlc1z5QK7Txf851HINHseuZdMMf0nHo5f2R6OareaTeZ2De9hynvlfOCsQQan2KPdjrbILqY0c04UGMkqGGE8DIIcKVDD38fikqkcDyWMWnVfvcK72gCQ(SlMB3z75BOjpjcMrj8mD4652rtqZFJQy46KRdbiw38IxNTcNnBDCGsK5UpZI5wEoW3RzlTGm3oO)g5qs7Xt00oOC73lUdQsfNkv(5"
      >
        <p>
          This is a challenging HPS boss. Follow the fundamentals of healing, keeping up the melee
          rotation and rotating through all your CDs as efficiently as possible.
        </p>
        <p>
          <Restoral /> is taken to avoid dispelling <SeismicReverberation /> off the tank with{' '}
          <Revival /> on the first boss. Use{' '}
          <Link href="https://wago.io/ednaDispel">Ellesmere{"'"}s weakaura</Link> to know when to
          dispel the tank.
        </p>
        <p>
          There are several ways to break pillars, and I am not sure which is best yet. Will update
          this later.
        </p>
      </BossSubSection>
      <BossSubSection
        title="Master Machinists"
        difficulty="medium"
        mrt="MRTREMD19szZUjomuu49ZtrKYIztjY)coExWqyiadTaQOm7qdMbRHcvKaDrvEByPFiBGebbkqaPi8MKvNV75C9XeDzG(hLHLa1DDOvfKsDW(9AW62wR)m4D5SzCicvHHJmQPMmzvG0OZO)P(Rwt1ygvRhmOVE7bXyS4pDxgkFtfeQ1anfI0inEZgmhXSQOHX)Mi2MKd8BGB3Y719GX22eByuwu8(tLQzRM)ZGCHc5yGfyh0eHUi0giO7J3Teaf4oy4PGpYTPdXTGKArYfzSxDB)RIlGP4BmGbIQp(aogS4fp2b3IOq7krgnNVEX)LgIPQsEQNmcNkn6jhBiwoAU8oNdijn1t0(IZr961ATFoiemaXoo1flMpELkmxKioPSfDhYezU8I(vhXHmhsrGtUB5UyzOr1LYpopuuwOis6IorOlc15z)ANM3h7ZDHEU2eWXel4TKSD7s)twBIHGO415A16rZURLzMNlsK58i32AD(nTqATXiTTW3094w(IIixZwzVEU2qG784RSXPl0PQxHuvGCak9o01QkeaX3V5WcQQa4KZvumnDnn)k"
      >
        <p>
          Have a good amount of healing for each <ExhaustVents />, and top your group for the{' '}
          <BlazingCrescendo />. The third <ExhaustVents /> overlaps with a <BlazingCrescendo />. Use
          big healing and defensives here.
        </p>
      </BossSubSection>
      <BossSubSection title="Skarmorak" difficulty="EXTREME">
        <p>
          The difficulty of this boss will vary based on how good your DPS are at killing the
          shards, and breaking the shield. If two spikes go off at once, or if the shield lasts more
          than a few ticks, then you are going to have a very rough time. Even if DPS play well,
          this is a very hard healing check.
        </p>
        <p>
          I usually grab 2 healing increase orbs from the first set to help me keep up in HPS for
          the shards breaking, and a 3rd orb from the second set. Follow healing fundamentals,
          maximizing your HPS. You may need to send healing CDs in the main phase.
        </p>
        <p>
          Ideally the DPS can communicate to you how quickly the shield will die, and you can plan
          your healing accordingly. If you do not, then you should assume it will last and commit
          healing CDs before it{"'"}s too late.
        </p>
      </BossSubSection>
      <BossSubSection title="Void Speaker Eirich" difficulty="hard">
        <p>
          A tough fight for melee, but not unmanageable. It is very fast paced, and you will like
          you never get a break. Have a plan for which 2 players will clear their <VoidCorruption />{' '}
          first and be ready to heal the other 2 players who don{"'"}t clear right away. They will
          be especially in trouble if the debuff overlaps with <EntropicReckoning /> – defensives!
        </p>
        <p>
          The healing check itself is not too hard. The abilities are offset in a weird way, so
          planning CDs is hard. Use <SheilunsGift /> on the <EntropicReckoning /> and <ChiJi /> on
          CD for any required healing. Use <CelestialConduit /> or <Revival /> when dry.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
