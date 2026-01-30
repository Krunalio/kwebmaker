import Button from './Button';
import SectionHead from './SectionHead';

export default function Programs({ data }) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-284 mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-10">
          <div className="max-w-xl">
            <SectionHead
              title={data.title}
              description={data.description}
            />
          </div>
          <Button className="self-start md:self-auto">
            {data.buttonText}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card) => (
            <div
              key={card.id}
              className={`relative overflow-hidden rounded-2xl group ${card.isActive ? 'ring-2 ring-blue-500' : ''}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center flex-col gap-1.5">
                <h3 className="text-white text-2xl font-matter font-medium">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm font-light font-matter">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
