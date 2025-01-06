"use client";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-semibold mb-20">
          <span>Crafting </span>
          <span className="text-[#6366F1]">Digital</span>
          <br />
          <span>Experiences</span>
        </h1>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 flex-1">
          {/* Awards Section */}
          <div className="flex items-center gap-4">
            <div className="bg-black text-white w-[70px] h-[70px] rounded-full flex items-center justify-center">
              <span className="text-3xl font-semibold">15</span>
            </div>
            <span className="text-2xl text-gray-500">Website Awards</span>
          </div>

          {/* Description and CTA */}
          <div className="flex flex-col md:flex-row flex-1 justify-end">
            <p className="text-2xl md:text-2xl font-medium max-w-[500px]">
              We build engaging websites, brands & innovative e-commerce solutions.
            </p>
            <button className="bg-[#6366F1] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5558E6] transition-colors">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 