import AboutContent from './AboutContent'
import AboutCollage from './AboutCollage'

function About() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 px-6 py-[96px] sm:px-8 sm:py-[110px] lg:flex-row lg:items-center lg:gap-[80px] lg:px-10 lg:py-[120px]">
        <div className="w-full lg:w-[45%]">
          <AboutContent />
        </div>
        <div className="w-full lg:w-[55%]">
          <AboutCollage />
        </div>
      </div>
    </section>
  )
}

export default About
