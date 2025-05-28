import { SubSection } from '../SubSection.tsx'
import {
  EnvelopingMist,
  MendingProliferation,
  MistWrap,
  RisingMist,
  RisingSunKick,
  StrengthOfTheBlackOx,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../../Common/SpecialTexts.tsx'

export function MendingProliferationGameplay() {
  return (
    <SubSection title="Mending Proliferation">
      <p>
        <MendingProliferation /> is a powerful talent that is especially powerful in rot healing,
        but good for any HPS scenario. Here is how it works:
      </p>
      <UnorderedList>
        <li>
          Each time an <EnvelopingMist /> ticks, it has a 50% chance to create a{' '}
          <MendingProliferation /> on a nearby ally
        </li>
        <li>
          The generated <MendingProliferation /> is a buff with a duration equal to the{' '}
          <EnvelopingMist /> that created it, and increases healing by the same amount. Therefore,
          this talent has very strong synergy with <MistWrap /> and <RisingMist />
        </li>
        <li>
          <MendingProliferation /> is never created on a target that already has <EnvelopingMist />.
          This means that one or two <EnvelopingMist /> already maximizes <MendingProliferation />{' '}
          uptime. Also, the only way for a target to get both <EnvelopingMist /> and{' '}
          <MendingProliferation /> is to place an <EnvelopingMist /> on a target that already has{' '}
          <MendingProliferation />
        </li>
      </UnorderedList>
      <p>Here is how to play with this talent:</p>
      <UnorderedList>
        <li>
          Whenever you need to do significant healing, ensure that at least one <EnvelopingMist />{' '}
          is out
        </li>
        <li>
          After using <EnvelopingMist />, extend it as soon as possible with <RisingSunKick />.
        </li>
        <li>
          It is often beneficial to place the <EnvelopingMist /> on a target with{' '}
          <MendingProliferation />
        </li>
        <li>
          With <ConduitOfTheCelestials />, <StrengthOfTheBlackOx /> is an incredible tool to get{' '}
          <MendingProliferation />s out. In rot healing, you will rarely need to hardcast{' '}
          <EnvelopingMist />. If you have a proc and <ThunderFocusTea />, you should use it on{' '}
          <RisingSunKick /> to quickly extend the <EnvelopingMist /> twice.
        </li>
        <li>
          With <MasterOfHarmony />, you will mostly need to use <ThunderFocusTea /> on{' '}
          <EnvelopingMist />, and also hardcast <EnvelopingMist /> quite often.
        </li>
      </UnorderedList>
    </SubSection>
  )
}
