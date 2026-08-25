import Hero from "../../assets/women/Hero3.jpg";
import Hero1 from "../../assets/women/w1.jpg";
import Hero3 from "../../assets/women/w2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f7f4] px-5 py-10 sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#e9d5c5] opacity-900 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#d8d2cb] opacity-90 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:gap-10">
        <div className="fade-up z-10 flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-5xl font-light leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
            New arrivals
            <span className="block font-serif italic">made for you.</span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
            Discover timeless pieces designed to elevate your everyday style.
            Curated fashion for every mood, moment and occasion.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <button className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-gray-900 px-7 py-4 text-sm font-medium text-white shadow-xl shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/30">
              <span className="relative z-10">Shop collection</span>

              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              {/* Hover shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <button className="rounded-full border border-gray-300 px-7 py-4 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-gray-900 hover:bg-white">
              Explore more
            </button>
          </div>
        </div>

        <div className="relative flex h-[500px] w-full max-w-2xl items-center justify-center sm:h-[600px] lg:h-[650px]">
          <div className="absolute h-[380px] w-[380px] rounded-full bg-[#e7d8cc]/60 blur-[100px] sm:h-[450px] sm:w-[450px]" />

          <div className="absolute h-[390px] w-[390px] rounded-full border border-[#d8ccc1]/50 sm:h-[500px] sm:w-[500px]" />

          <div className="group relative mt-16">
            <div className="absolute -inset-4 rounded-full bg-[#d8bfae]/30 opacity-70 blur-2xl transition-all duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-full border-[5px] border-white bg-white p-1 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-translate-y-3">
              <img
                src={Hero}
                alt="Women's fashion"
                className="h-48 w-48 object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              />
            </div>
          </div>

          <div className="group relative z-10 mx-4 sm:mx-7">
            <div className="absolute -inset-8 rounded-full bg-[#d5b8a3]/40 blur-3xl transition-all duration-700 group-hover:bg-[#d5b8a3]/60" />

            <div className="relative overflow-hidden rounded-full border-[6px] border-white bg-white p-1 shadow-[0_30px_70px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-3">
              <img
                src={Hero1}
                alt="New collection"
                className="h-64 w-64 object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80 sm:w-80 lg:h-[360px] lg:w-[360px]"
              />
            </div>
          </div>

          <div className="group relative mb-16">
            <div className="absolute -inset-4 rounded-full bg-[#d8bfae]/30 opacity-70 blur-2xl transition-all duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-full border-[5px] border-white bg-white p-1 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-translate-y-3">
              <img
                src={Hero3}
                alt="Women's style"
                className="h-48 w-48 object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
