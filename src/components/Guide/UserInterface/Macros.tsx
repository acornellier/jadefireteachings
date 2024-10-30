import { CodeBlock, type CodeBlockProps } from '../../Common/CodeBlock.tsx'
import {
  RisingSunKick,
  SpinningCraneKick,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { SubSection } from '../SubSection.tsx'

const Macro = ({ children }: Omit<CodeBlockProps, 'type'>) => (
  <CodeBlock type="macro">{children}</CodeBlock>
)

export function Macros() {
  return (
    <SubSection title="Macros">
      <div className="flex flex-col gap-1">
        <p>
          VERY important macro that allows you to recast <SpinningCraneKick /> before the previous
          one finishes, so that there is no downtime between casts.
        </p>
        <Macro>/use !Spinning Crane Kick</Macro>
      </div>
      <div className="flex flex-col gap-1">
        <p>Mouseover cast any spell</p>
        <Macro>/use [@mouseover,exists][] Soothing Mist</Macro>
        <p>
          The [] means that if you have no mouseover, it will cast on yourself by default. I like
          this on some spells, but on others I like to enforce that I have a mouseover as such:
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Macro>/use [@mouseover,exists] Life Cocoon</Macro>
      </div>
      <div className="flex flex-col gap-1">
        <p>Cast immediately on your cursor without first showing the indicator</p>
        <Macro>/use [@cursor] Ring of Peace</Macro>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          Kick priority focus {'>'} mouseover {'>'} target. I use another keybind to focus my
          mouseover
        </p>
        <Macro>/use [@focus,harm,nodead][@mouseover,harm,nodead][@target] Spear Hand Strike</Macro>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          Macro <ThunderFocusTea /> and <RisingSunKick /> together for the lazy. I do this for the
          first few weeks of each season since it’s relaxing. I personally believe this is a
          completely fine way to play and save a keybind. Don’t do this if you’re running MoH or
          with Yu’lon in raid!
        </p>
        <Macro>{'/use Thunder Focus Tea\n/use Rising Sun kick'}</Macro>
      </div>
    </SubSection>
  )
}
