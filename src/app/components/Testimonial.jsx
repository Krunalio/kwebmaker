export default function Testimonial({ data }) {
  return (
    <section
      className="relative py-20 px-4"
      style={{
        backgroundImage: "url('/images/waves-gray.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for darker background */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-white">
          <p className="text-xl md:text-3xl font-matter font-semibold mb-8 leading-relaxed w-full md:w-[81%] border-0 border-b pb-9">
            &ldquo;{data.quote}&rdquo;
          </p>

          {/* Author Info */}
          <div>
            <h3 className="text-lg font-matter font-semibold mb-1">
              {data.author}
            </h3>
            <p className="text-sm font-matter text-white">
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
