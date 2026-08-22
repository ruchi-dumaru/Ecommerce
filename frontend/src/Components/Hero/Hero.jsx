import Hero from "../../assets/women/Hero3.jpg";
import Hero1 from "../../assets/women/w1.jpg";
import Hero3 from "../../assets/women/w2.jpg";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-10 px-4 py-10 sm:px-8 lg:flex-row lg:px-12">
      {/* Left side text */}
      <div className="fade-up flex max-w-md flex-col gap-6 text-center lg:text-left">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          New arrivals only
        </h1>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold sm:text-4xl">New</h1>
          <p className="text-xl sm:text-2xl">Collection</p>
          <p className="text-xl sm:text-2xl">for everyone</p>
        </div>
        <button className="border-2 border-gray-600 rounded-2xl px-6 py-2 text-xl hover:bg-gray-100 transition">
          New collection
        </button>
      </div>

      {/* Right side image */}
      <div className="flex h-full w-full flex-shrink-0 items-center justify-center lg:w-1/2">
        <img
          className="floating-card h-52 w-40 rounded-full object-cover sm:h-64 sm:w-44 lg:h-80 lg:w-52"
          src={Hero}
          alt="Hero"
        />
        <img
          className="floating-card floating-card-delay h-56 w-44 rounded-full object-cover sm:mx-3 sm:h-72 sm:w-48 lg:h-96 lg:w-56"
          src={Hero1}
          alt="Hero collection"
        />
        <img
          className="floating-card h-52 w-40 rounded-full object-cover sm:h-64 sm:w-44 lg:h-80 lg:w-52"
          src={Hero3}
          alt="Hero style"
        />
      </div>
    </div>
  );
};

export default HeroSection;
