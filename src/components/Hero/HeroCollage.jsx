import BackgroundCard from './BackgroundCard'
import PersonImage from './PersonImage'
import ProductCard from './ProductCard'
import ActivityCard from './ActivityCard'
import DashboardCard from './DashboardCard'

function HeroCollage() {
  return (
    <div className="relative mx-auto h-[560px] w-[560px] overflow-visible">
      <BackgroundCard />
      <DashboardCard />
      <PersonImage />
      <ActivityCard />
      <ProductCard />
    </div>
  )
}

export default HeroCollage
