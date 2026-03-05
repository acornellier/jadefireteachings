import { CodeBlock } from '../Common/CodeBlock.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'

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
      <SubSection title="Hero talent choice">TODO</SubSection>
      <SubSection title="Conduit build">TODO</SubSection>
      <SubSection title="Master of Harmony build">TODO</SubSection>
      <SubSection title="Class tree">TODO</SubSection>
      <SubSection title="Spec tree">TODO</SubSection>
    </Section>
  )
}
