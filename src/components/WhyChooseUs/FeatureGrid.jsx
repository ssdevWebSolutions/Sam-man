import FeatureCard from './FeatureCard'
import FeatureItem from './FeatureItem'
import { features } from './features'

function FeatureGrid() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
      {features.map((feature, index) =>
        feature.accent ? (
          <FeatureCard key={feature.id} feature={feature} />
        ) : (
          <FeatureItem key={feature.id} feature={feature} index={index} />
        ),
      )}
    </div>
  )
}

export default FeatureGrid
