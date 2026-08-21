
import Hero from '../../assets/head.jpg'
import Hero1 from "../../assets/Hero_img.jpg"
import Hero3 from "../../assets/Hero3.jpg"
const HeroSection = () => {
  return (
    <div className="flex items-center justify-between px-12 h-screen">
      {/* Left side text */}
      <div className="flex flex-col gap-6 max-w-md">
        <h1 className="text-6xl font-bold leading-tight">New arrivals only</h1>
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">New</h1>
          <p className="text-2xl">Collection</p>
          <p className="text-2xl">for everyone</p>
        </div>
        <button className="border-2 border-gray-600 rounded-2xl px-6 py-2 text-xl hover:bg-gray-100 transition">
          New collection
        </button>
      </div>

      {/* Right side image */}
      <div className="flex-shrink-0 w-1/2 h-screen flex items-center justify-center">
  <img
    className="rounded-full object-cover w-1/5 h-3/5"
    src={Hero}
    alt="Hero"
  />
   <img
    className="rounded-full m-2 object-cover w-1/5 h-3/5"
    src={Hero1}
    alt="Hero"
  />
    <img
    className="rounded-full object-cover w-1/5 h-3/5"
    src={Hero3}
    alt="Hero"
  />
</div>

    </div>
  )
}

export default HeroSection
