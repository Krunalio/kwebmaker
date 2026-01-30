export default function Marquee({ data }) {
  const items = data?.items || [];

  return (
    <section className="bg-white py-12.5 px-0 md:py-36">
      <div className="marquee">
        <div className="marquee__track">
          {[...items, ...items].map((item, index) => (
            <div key={`${item.text}-${index}`} className="marquee__item font-matter">
              <span className={item.outlined ? "marquee-outline text-2xl md:text-4xl lg:text-5xl" : "text-primary text-2xl md:text-4xl lg:text-5xl"}>
                {item.text}
              </span>
              <span className="marquee__dot">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
