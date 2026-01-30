import SectionHead from './SectionHead';
import Button from './Button';

export default function Professionals({ data }) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-284 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-4">
          <div className="flex-1 max-w-2xl">
            <SectionHead
              title={data.title}
              description={data.description}
            />
          </div>
          <Button className="self-start md:self-auto">
            {data.buttonText}
          </Button>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.professionals.map((professional, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-lg h-80">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-matter text-xl font-semibold text-black mb-2">
                  {professional.name}
                </h3>
                <p className="font-matter text-sm text-gray-600 leading-relaxed">
                  {professional.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
