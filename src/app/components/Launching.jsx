import Image from "next/image";

export default function Launching({ data }) {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-stretch">
      {/* Left Side */}
      <div 
        className="w-full md:w-[42%] px-4 md:px-8 lg:px-12 py-16 md:py-24 flex flex-col justify-center"
        style={{
          background: "linear-gradient(148.19deg, #003A5D 3.49%, #99B81B 113.07%)"
        }}
      >
        <div className="max-w-xl">
          <p className="text-white/70 text-xs md:text-sm font-matter tracking-widest uppercase mb-6">
            {data.label}
          </p>
          
          <h2 className="font-matter text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {data.title}
          </h2>
          
          <p className="font-matter text-white/80 text-sm md:text-base mb-12">
            {data.subtitle}
          </p>

          {/* Connectivity List */}
          <div className="space-y-6">
            {data.locations.map((location, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                  {data.icon}
                </div>
                <div className="flex-1 flex items-center justify-between gap-2">
                  <span className="font-matter text-white text-[13px] md:text-[16px] w-fit min-w-fit">
                    {location.name}
                  </span>
                  <span className="border border-dashed w-full border-white"></span>
                  <span className="font-matter text-white/60 text-sm shrink-0">
                    {location.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[58%] h-64 md:h-auto">
        <Image
          width={400}
          height={300}
          src={data.coverImage}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
