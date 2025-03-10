import { CodeBlock, type CodeBlockProps } from '../../Common/CodeBlock.tsx'
import { SpinningCraneKick } from '../../Common/WowheadLink/Spells.tsx'
import { SubSection } from '../SubSection.tsx'

const Macro = ({ children }: Omit<CodeBlockProps, 'type'>) => (
  <CodeBlock type="macro">{children}</CodeBlock>
)

export function Macros() {
  return (
    <SubSection title="Macros">
      <div className="flex flex-col gap-1">
        <p>
          Avoid interrupting your important chanelled spells by using /stopmacro. This one is for
          Chi Burst.
        </p>
        <Macro>
          {
            '/stopmacro [channeling:Celestial Conduit]\n/stopmacro [channeling:Crackling Jade Lightning]\n /cast Chi Burst'
          }
        </Macro>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          Important macro that allows you to recast <SpinningCraneKick /> before the previous one
          finishes, so that there is no downtime between casts.
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
          If you are running Bursting Lightspawn, press this macro TWICE to summon it, and then
          focus it.
        </p>
        <Macro>
          {'/use [@cursor] 13\n/targetexact Bursting Lightspawn\n/focus\n/targetlasttarget'}
        </Macro>
      </div>
    </SubSection>
  )
}
