import DecorativePath from './DecorativePath'
import DecorativeCircles from './DecorativeCircles'
import DarkBackground from './DarkBackground'
import UserActivityCard from './UserActivityCard'
import PersonImage from './PersonImage'
import ProductCard from './ProductCard'

function AboutCollage() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px] overflow-visible sm:h-[560px] lg:h-[620px]">
      <DecorativePath />
      {/* <DecorativeCircles /> */}
      <DarkBackground />
      <UserActivityCard />
      <PersonImage />
      <ProductCard />
    </div>
  )
}

export default AboutCollage
