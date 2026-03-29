import { Section } from './Section.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  ChiJi,
  RenewingMist,
  SheilunsGift,
  SpinningCraneKick,
  Spiritfont,
  Vivify,
  WayOfTheSerpent,
} from '../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

export function Midnight() {
  return (
    <Section title="Midnight">
      <p>
        Jadefire Teachings has been partially updated for Midnight. Some information is still
        missing, but what is here is up to date and accurate! I will be updating this site regularly
        after Mythic+ is released and get more concrete data on what the optimal build is.{' '}
      </p>
      <p>
        Please note that while there are alternate <WayOfTheSerpent /> builds, I am not interested
        in them (in M+ at least), so I recommend looking elsewhere for guides on that.
      </p>
      <p>
        <b>TL;DR of gameplay changes for The War Within players:</b>
        <UnorderedList>
          <li>
            <RenewingMist /> coverage is important now.
          </li>
          <li>
            <SpinningCraneKick /> is stronger than ever with its new and improved healing profile!
          </li>
          <li>
            Treat <SheilunsGift /> as if it{"'"}s old <Vivify /> and don{"'"}t think about clouds.
          </li>
          <li>
            <ChiJi /> is mainly used for the shield and ramping. The healing from <BlackoutKick />{' '}
            is miniscule.
          </li>
          <li>
            <CelestialConduit /> is powerful now, your best healing cooldown.
          </li>
          <li>
            <Spiritfont /> is decently strong in dungeons and can be worth playing around if running
            it.
          </li>
        </UnorderedList>
      </p>
    </Section>
  )
}
