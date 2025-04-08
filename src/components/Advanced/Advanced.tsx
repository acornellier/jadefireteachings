import { ChiJiGuide } from './ChiJiGuide.tsx'
import { DamageOptimization } from './DamageOptimization.tsx'

export function Advanced() {
  return (
    <div>
      <div className="sub-section flex flex-col mb-3">
        <p>
          This section is for experienced mistweavers looking to optimize their gameplay, or learn
          in-depth information about some complex abilities.
        </p>
      </div>
      <ChiJiGuide />
      <DamageOptimization />
    </div>
  )
}
