import { Section } from '../Section.tsx'
import { OrderedList } from '../../Common/OrderedList.tsx'
import {
  CelestialConduit,
  ChiJi,
  EnvelopingMist,
  GiftOfTheCelestials,
  MistWrap,
  MorningBreeze,
  Revival,
  RisingSunKick,
  SheilunsGift,
  SoothingMist,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { LitanyOfLightblindWrath } from '../../Common/WowheadLink/Items.tsx'

export function SingleTargetHealing() {
  return (
    <Section title={'Single Target Healing'}>
      <p>
        Healing in AoE as Mistweaver is pretty easy, but single target healing is very complex and
        challenging. You must juggle many things at once and know when to use which tools in your
        kit.
      </p>
      <OrderedList>
        <li>
          Ramp with <EnvelopingMist />, by casting <SoothingMist iconOnly /> {'>'}{' '}
          <EnvelopingMist iconOnly /> {'>'} <EnvelopingMist iconOnly /> {'>'}{' '}
          <EnvelopingMist iconOnly /> {'>'} <EnvelopingMist iconOnly /> {'>'}{' '}
          <RisingSunKick iconOnly /> 5 seconds before damage intake. This is an <b>optional</b> step
          for handling heavy burst. It will consume a lot of mana, so you cannot do it every time.
          But it will give you 30% extra healing thanks to <MistWrap />.
        </li>
        <li>
          Rotate your cooldowns. Your order should generally be <CelestialConduit iconOnly /> {'>'}{' '}
          <LitanyOfLightblindWrath iconOnly /> {'>'} <ChiJi iconOnly /> {'>'} <Revival iconOnly />.
          If running <GiftOfTheCelestials /> then <ChiJi /> isn{"'"}t really a cooldown.
        </li>
        <li>
          Cast <RisingSunKick /> and <ThunderFocusTea />. Be sure to cast <RisingSunKick /> before{' '}
          <ThunderFocusTea /> to get the reset from <MorningBreeze />. You can weave in instant{' '}
          <SheilunsGift />s in between <RisingSunKick /> casts.
        </li>
        <li>
          Spam <SheilunsGift /> through <SoothingMist />. Do this when you have no cooldowns and{' '}
          <RisingSunKick /> is off cooldown. This consumes a lot of mana so you can{"'"}t do this
          infinitely.
        </li>
      </OrderedList>
    </Section>
  )
}
