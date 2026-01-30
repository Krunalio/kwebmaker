import Image from 'next/image';
import Button from './Button';
import SectionHead from './SectionHead';

export default function KeyFeatures({ data, glimpsData }) {
  return (
    <section className="py-16 px-4"
      style={{
        backgroundImage: "url('/images/waves-two.png')",
        backgroundRepeat:'no-repeat',
        backgroundSize:"contain"
      }}
    >
      <div className="max-w-284 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-4">
          <div className="flex-1">
            <SectionHead
              title={data.title}
              description={data.description}
            />
          </div>
          <Button className="self-start md:self-auto">
            {data.buttonText}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-14">
          {data.features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="">
                <div className="flex items-center">
                  {feature.icon}
                </div>
              </div>
              <div className="">
                <h3 className="text-lg font-matter font-extralight text-black">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* glipms section start */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 pt-14 gap-4">
          <div className="flex-1">
            <SectionHead
              title={glimpsData.title}
              description={glimpsData.description}
            />
          </div>
          <Button className="self-start md:self-auto">
            {glimpsData.buttonText}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          {glimpsData.images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${image.colSpan || ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                style={{ minHeight: image.height || '300px' }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
