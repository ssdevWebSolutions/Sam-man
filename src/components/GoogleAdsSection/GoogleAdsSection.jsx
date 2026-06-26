import GoogleAdsContent from './GoogleAdsContent'

function GoogleAdsSection() {
  return (
    <section aria-labelledby="google-ads-heading" className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-[120px] sm:px-8 lg:px-10">
        <GoogleAdsContent />
      </div>
    </section>
  )
}

export default GoogleAdsSection
