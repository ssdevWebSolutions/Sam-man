import WhatWeDoHeader from './WhatWeDoHeader'
import WhatWeDoContent from './WhatWeDoContent'

function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-heading" className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-[120px] sm:px-8 lg:px-10">
        <WhatWeDoHeader />
        <WhatWeDoContent />
      </div>
    </section>
  )
}

export default WhatWeDo
