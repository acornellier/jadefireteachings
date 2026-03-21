import { CodeBlock } from '../Common/CodeBlock.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { CelestialConduit } from '../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

const TalentCodeBlock = ({ children }: { children: string }) => (
  <CodeBlock
    type="talents"
    extraButton={
      <a
        href={`https://www.wowhead.com/talent-calc/blizzard/${children}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button short>View in Wowhead</Button>
      </a>
    }
  >
    {children}
  </CodeBlock>
)

export function Talents() {
  return (
    <Section title="Talents">
      <SubSection title="Hero talent choice">
        <p>
          Currently, I recommend sticking to <ConduitOfTheCelestials />. <CelestialConduit /> is too
          powerful cooldown to lose. <MasterOfHarmony /> no longer has what made it powerful in The
          War Within: the 20% damage and healing amp.
        </p>
        <p>
          That said, <MasterOfHarmony /> is not terrible by any means, and I will experiment with
          it. It might be the optimal choice for rot healing situations.
        </p>
      </SubSection>
      <SubSection title="Conduit build">
        <p>There are 3 main builds currently.</p>
        <UnorderedList>
          <li>
            Standard Crane: this should be your go-to build, and this is what you will find other
            guides.
          </li>
          <TalentCodeBlock>
            C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghxyMLDL2MmZshtltZMDzsttMzYhhmxMgBDYMzMzwsNMDzyMBAAAAQAWsNzysNzAAADYAmBMGYRGzA
          </TalentCodeBlock>
          <li>
            Big Dam: this is what you will see me play on stream. It drops all 4 Apex talent points
            for 4 nodes that increase damage in the bottom third of the tree. Spiritfont is{' '}
            <i>probably</i> more healing but only time will tell.
          </li>
          <TalentCodeBlock>
            C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghxyMLjZx2MmZsZstsNjZ2Mz22yMjFGaGzAGMgxMzMDz2wMMLzEAAAAABYx2MLz2MDAAMAAzAGDsIjZA
          </TalentCodeBlock>
          <li>
            Serpent build: I have never played this, so will not try to share a build or comment on
            it. I hope to never have to play it.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Master of Harmony build">TODO: Update for Midnight</SubSection>
      <SubSection title="Class tree">TODO: Update for Midnight</SubSection>
      <SubSection title="Spec tree">TODO: Update for Midnight</SubSection>
    </Section>
  )
}
