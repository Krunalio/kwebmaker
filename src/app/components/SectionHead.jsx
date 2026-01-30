export default function SectionHead({ title, description, DescclassList, TitleclassList }) {
  return (
    <div>
      <h2 className={`relative w-fit text-2xl md:text-3xl lg:text-4xl font-matter font-bold mb-4 md:mb-6 section-head-title ${TitleclassList && TitleclassList ? TitleclassList :'text-black'}`}>
        {title}
      </h2>
      <p className={`${DescclassList && DescclassList ? DescclassList : 'text-gray-600 font-matter mb-6 md:mb-8 text-sm md:text-base'}`}>
        {description}
      </p>
    </div>
  );
}
