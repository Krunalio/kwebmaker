import Image from "next/image";
import SectionHead from "./SectionHead";

export default function CoachesEvents({ data }) {
  if (!data || !data.sections) return null;
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {data.sections.map((section, index) => (
        <div 
          key={section.id || index}
          className="relative overflow-hidden pl-4 md:pl-8 lg:pl-32" 
          style={{ backgroundColor: section.backgroundColor }}
        >
          { section.image &&
            <div className="absolute inset-0">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className={`object-cover ${section.imageClass || ''}`}
            />
          </div>
          }
          {section.overlayImage && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={section.overlayImage}
                alt={section.title}
                fill
                className="object-contain object-right"
              />
            </div>
          )}
          <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16 lg:p-20">
           <SectionHead title={section.title} description={section.description} DescclassList='font-extralight text-white w-full md:w-1/2 pb-9' TitleclassList='text-white section-head-title-white'/>
            
            <div className="flex items-center gap-2 text-white cursor-pointer group">
              <span className="text-base font-light">{section.linkText}</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
