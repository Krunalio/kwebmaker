'use client';

import SectionHead from './SectionHead';

export default function Facilities({ data }) {
  return (
    <section className="">
      <div className="bg-white pb-0 md:pb-96">
        {/* Header */}
        <div className="p-4 m-0 md:mb-12 max-w-284 md:mx-auto md:pb-36">
          <SectionHead
            title={data.title}
            description={data.description}
          />
        </div>

        <div className="facilities-gradient relative">
           <img
            src="/images/trophy.png"
            alt="Trophy"
            className="absolute right-0 w-auto h-[7%] md:h-5/6 z-0 opacity-25 bottom-0"
          />
          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-0 max-w-284 md:mx-auto md:pt-64 md:pb-64">
            {data.facilities.map((facility, index) => (
              <div
                key={index}
                className="relative md:absolute group w-full md:w-96.5"
                style={
                  window.innerWidth >= 768 ? (
                    index === 0 ? { top: '-170px' } :
                    index === 1 ? { top: '-170px', right: '440px' } :
                    index === 2 ? { bottom: '-290px', right: '600px' } :
                    index === 3 ? { bottom: '-290px', right: '180px' } :
                    {}
                  ) : {}
                }
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-4">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M14.5833 0C11.699 0 8.87949 0.855298 6.48127 2.45774C4.08306 4.06017 2.21387 6.33778 1.1101 9.00253C0.00631873 11.6673 -0.28248 14.5995 0.280221 17.4284C0.842922 20.2573 2.23185 22.8558 4.27137 24.8953C6.31088 26.9348 8.90938 28.3238 11.7383 28.8865C14.5672 29.4492 17.4994 29.1604 20.1641 28.0566C22.8289 26.9528 25.1065 25.0836 26.7089 22.6854C28.3114 20.2872 29.1667 17.4676 29.1667 14.5833C29.1667 12.6682 28.7895 10.7719 28.0566 9.00253C27.3237 7.2332 26.2495 5.62555 24.8953 4.27136C23.5411 2.91717 21.9335 1.84297 20.1641 1.11009C18.3948 0.377209 16.4984 0 14.5833 0ZM11.6667 21.1458V8.02083L20.4167 14.5833L11.6667 21.1458Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-matter text-xl font-semibold text-white mb-3"
                    style={
                      window.innerWidth >= 768 ? (index === 2 ? { color: 'black' } :
                        index === 3 ? { color: 'black' } :
                          {}) : {}
                    }
                  >
                    {facility.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {facility.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-3 py-1 bg-primary text-white text-xs font-matter rounded-full"
                        style={
                           window.innerWidth >= 768 ? (index === 2 ? { color: 'white', background: '#99b81b', fontWeight: '300' } :
                            index === 3 ? { color: 'white', background: '#99b81b', fontWeight: '300' } :
                              {}) : {}
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="font-matter text-sm text-white leading-relaxed"
                    style={
                      window.innerWidth >= 768 ? (index === 0 ? { color: 'white' } :
                        index === 1 ? { color: 'white' } :
                          index === 2 ? { color: 'black' } :
                            index === 3 ? { color: 'black' } :
                              {}) : {}
                    }
                  >
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
