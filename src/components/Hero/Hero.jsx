import HeroContent from './HeroContent'
import HeroCollage from './HeroCollage'

function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:flex-row lg:gap-[80px] lg:px-10 lg:py-24">
        <div className="w-full lg:w-[45%]">
          <HeroContent />
        </div>
        <div className="w-full lg:w-[55%]">
          <HeroCollage />
        </div>
      </div>
    </section>
  )
}

export default Hero
