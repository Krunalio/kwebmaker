import { Fragment } from 'react';
import Button from './Button';

export default function Banner({ data }) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/banner.gif')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
                <p className="mb-4 text-sm tracking-[40%] tracking- uppercase font-matter font-bold text-[18px]">
                    {data.location}
                </p>

                <h1 className="mb-2 text-center text-[34px] font-light font-matter leading-tight md:text-6xl lg:text-[50px]">
                    {data.mainTitle}
                </h1>

                <h2 className="mb-8 border-b-[1.5px] border-white pb-2 text-center font-matter text-[34px] font-bold md:text-6xl lg:text-[50px]">
                    {data.subtitle}
                </h2>

                <div
                    className="mb-12 flex items-center gap-6 text-sm tracking-[0.2em] uppercase font-matter w-full md:w-1/2 p-2 justify-center"
                    style={{
                        background: 'linear-gradient(90deg, rgba(205, 237, 78, 0) 7.45%, #D2F24F 50.62%, rgba(210, 242, 79, 0) 90.38%)'
                    }}
                >
                    {data.tags.map((tag, index) => (
                        <Fragment key={`${tag}-${index}`}>
                            <span>
                                {tag}
                            </span>
                            {index < data.tags.length - 1 && <span className="text-white">●</span>}
                        </Fragment>
                    ))}
                </div>

                <Button variant="outline">
                    {data.buttonText}
                </Button>
            </div>

            {/* Ongoing Matches - Slider */}
            <div className="absolute right-0 top-[50%] z-20 hidden md:block">
                <div className="flex items-center">
                    {/* Matches Content */}
                    <div className="text-white flex p-6 pr-0">
                        <h3 className="slider-title text-sm font-matter flex items-center ml-1 uppercase font-bold mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                className="mr-3.5"
                            >
                                <path
                                    d="M9.61589 8.95925L15.587 14.6485C15.6866 14.7435 15.819 14.7965 15.9566 14.7965C16.0942 14.7965 16.2266 14.7435 16.3262 14.6485L16.3327 14.6421C16.3811 14.5961 16.4197 14.5406 16.4461 14.4792C16.4725 14.4178 16.4861 14.3516 16.4861 14.2848C16.4861 14.2179 16.4725 14.1518 16.4461 14.0904C16.4197 14.0289 16.3811 13.9735 16.3327 13.9275L10.7098 8.57032L16.3327 3.21532C16.3811 3.16928 16.4197 3.11386 16.4461 3.05243C16.4725 2.991 16.4861 2.92485 16.4861 2.858C16.4861 2.79115 16.4725 2.725 16.4461 2.66357C16.4197 2.60214 16.3811 2.54672 16.3327 2.50068L16.3262 2.49425C16.2266 2.39927 16.0942 2.34629 15.9566 2.34629C15.819 2.34629 15.6866 2.39927 15.587 2.49425L9.61589 8.18353C9.56337 8.23357 9.52157 8.29374 9.493 8.36041C9.46444 8.42708 9.44971 8.49886 9.44971 8.57139C9.44971 8.64392 9.46444 8.7157 9.493 8.78237C9.52157 8.84904 9.56337 8.90922 9.61589 8.95925Z"
                                    fill="#D2F24F"
                                />
                                <path
                                    d="M1.04411 8.95925L7.01518 14.6485C7.11481 14.7435 7.24718 14.7965 7.38482 14.7965C7.52247 14.7965 7.65483 14.7435 7.75446 14.6485L7.76089 14.6421C7.80936 14.5961 7.84795 14.5406 7.87432 14.4792C7.9007 14.4178 7.9143 14.3516 7.9143 14.2848C7.9143 14.2179 7.9007 14.1518 7.87432 14.0904C7.84795 14.0289 7.80936 13.9735 7.76089 13.9275L2.13804 8.57032L7.76089 3.21532C7.80936 3.16928 7.84795 3.11386 7.87432 3.05243C7.9007 2.991 7.9143 2.92485 7.9143 2.858C7.9143 2.79115 7.9007 2.725 7.87432 2.66357C7.84795 2.60214 7.80936 2.54672 7.76089 2.50068L7.75446 2.49425C7.65483 2.39927 7.52247 2.34629 7.38482 2.34629C7.24718 2.34629 7.11481 2.39927 7.01518 2.49425L1.04411 8.18353C0.991595 8.23357 0.949789 8.29374 0.921224 8.36041C0.892659 8.42708 0.87793 8.49886 0.87793 8.57139C0.87793 8.64392 0.892659 8.7157 0.921224 8.78237C0.949789 8.84904 0.991595 8.90922 1.04411 8.95925Z"
                                    fill="#D2F24F"
                                />
                            </svg>
                            {data.weather.label}</h3>
                    </div>
                </div>
            </div>

            {/* Weather Widget - Slider */}
            <div className="absolute right-0 top-[60%] z-20 hidden md:block">
                <div className="flex items-center">
                    {/* Weather Content */}
                    <div className="bg-primary/55 text-white flex flex-col pt-6 pb-5 px-6 min-w-62.5">
                        <div className="mb-1 text-sm font-matter flex gap-2.5 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={8}
                                height={11}
                                viewBox="0 0 8 11"
                                fill="none"
                            >
                                <path
                                    d="M3.96171 0.5C2.05056 0.5 0.5 1.97579 0.5 3.79343C0.5 5.88488 2.80781 9.19923 3.6552 10.344C3.69038 10.3923 3.73648 10.4316 3.78975 10.4588C3.84302 10.4859 3.90194 10.5 3.96171 10.5C4.02148 10.5 4.0804 10.4859 4.13367 10.4588C4.18694 10.4316 4.23304 10.3923 4.26822 10.344C5.11561 9.19971 7.42342 5.88657 7.42342 3.79343C7.42342 1.97579 5.87286 0.5 3.96171 0.5Z"
                                    stroke="#99B81B"
                                    strokeOpacity={0.28}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.96152 5.11561C4.5988 5.11561 5.11542 4.59899 5.11542 3.9617C5.11542 3.32442 4.5988 2.8078 3.96152 2.8078C3.32424 2.8078 2.80762 3.32442 2.80762 3.9617C2.80762 4.59899 3.32424 5.11561 3.96152 5.11561Z"
                                    stroke="#99B81B"
                                    strokeOpacity={0.28}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {data.weather.location}
                        </div>
                        <div className="flex gap-8">
                            <div className="flex items-start">
                                <span className="text-4xl font-bold font-matter">{data.weather.temperature}</span>
                                <span className="text-xl font-matter">°C</span>
                            </div>
                            <div className="flex flex-col gap-1.75">
                                <div className="mt-1 text-xs font-matter font-bold">{data.weather.description}</div>
                                <div className="text-xs opacity-80 font-matter">{data.weather.time}</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Ongoing Matches - Slider */}
            <div className="absolute right-0 bottom-[10%] z-20 hidden md:block">

                <div className="flex items-center">
                    {/* Matches Content */}
                    <div className="text-white flex p-6 pr-0">
                        <h3 className="slider-title text-sm font-matter flex items-center ml-1 uppercase font-bold mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                className="mr-3.5"
                            >
                                <path
                                    d="M9.61589 8.95925L15.587 14.6485C15.6866 14.7435 15.819 14.7965 15.9566 14.7965C16.0942 14.7965 16.2266 14.7435 16.3262 14.6485L16.3327 14.6421C16.3811 14.5961 16.4197 14.5406 16.4461 14.4792C16.4725 14.4178 16.4861 14.3516 16.4861 14.2848C16.4861 14.2179 16.4725 14.1518 16.4461 14.0904C16.4197 14.0289 16.3811 13.9735 16.3327 13.9275L10.7098 8.57032L16.3327 3.21532C16.3811 3.16928 16.4197 3.11386 16.4461 3.05243C16.4725 2.991 16.4861 2.92485 16.4861 2.858C16.4861 2.79115 16.4725 2.725 16.4461 2.66357C16.4197 2.60214 16.3811 2.54672 16.3327 2.50068L16.3262 2.49425C16.2266 2.39927 16.0942 2.34629 15.9566 2.34629C15.819 2.34629 15.6866 2.39927 15.587 2.49425L9.61589 8.18353C9.56337 8.23357 9.52157 8.29374 9.493 8.36041C9.46444 8.42708 9.44971 8.49886 9.44971 8.57139C9.44971 8.64392 9.46444 8.7157 9.493 8.78237C9.52157 8.84904 9.56337 8.90922 9.61589 8.95925Z"
                                    fill="#D2F24F"
                                />
                                <path
                                    d="M1.04411 8.95925L7.01518 14.6485C7.11481 14.7435 7.24718 14.7965 7.38482 14.7965C7.52247 14.7965 7.65483 14.7435 7.75446 14.6485L7.76089 14.6421C7.80936 14.5961 7.84795 14.5406 7.87432 14.4792C7.9007 14.4178 7.9143 14.3516 7.9143 14.2848C7.9143 14.2179 7.9007 14.1518 7.87432 14.0904C7.84795 14.0289 7.80936 13.9735 7.76089 13.9275L2.13804 8.57032L7.76089 3.21532C7.80936 3.16928 7.84795 3.11386 7.87432 3.05243C7.9007 2.991 7.9143 2.92485 7.9143 2.858C7.9143 2.79115 7.9007 2.725 7.87432 2.66357C7.84795 2.60214 7.80936 2.54672 7.76089 2.50068L7.75446 2.49425C7.65483 2.39927 7.52247 2.34629 7.38482 2.34629C7.24718 2.34629 7.11481 2.39927 7.01518 2.49425L1.04411 8.18353C0.991595 8.23357 0.949789 8.29374 0.921224 8.36041C0.892659 8.42708 0.87793 8.49886 0.87793 8.57139C0.87793 8.64392 0.892659 8.7157 0.921224 8.78237C0.949789 8.84904 0.991595 8.90922 1.04411 8.95925Z"
                                    fill="#D2F24F"
                                />
                            </svg>
                            {data.ongoingMatches.label}</h3>
                    </div>
                </div>
            </div>

            {/* Score - Slider */}
            <div className="absolute right-0 bottom-[0%] z-20 hidden md:block">
                <div className="flex items-center">
                    {/* Matches Content */}
                    <div className="text-white flex p-6 pr-0">
                        <h3 className="slider-title text-sm font-matter flex items-center ml-1 uppercase font-bold mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                className="mr-3.5"
                            >
                                <path
                                    d="M9.61589 8.95925L15.587 14.6485C15.6866 14.7435 15.819 14.7965 15.9566 14.7965C16.0942 14.7965 16.2266 14.7435 16.3262 14.6485L16.3327 14.6421C16.3811 14.5961 16.4197 14.5406 16.4461 14.4792C16.4725 14.4178 16.4861 14.3516 16.4861 14.2848C16.4861 14.2179 16.4725 14.1518 16.4461 14.0904C16.4197 14.0289 16.3811 13.9735 16.3327 13.9275L10.7098 8.57032L16.3327 3.21532C16.3811 3.16928 16.4197 3.11386 16.4461 3.05243C16.4725 2.991 16.4861 2.92485 16.4861 2.858C16.4861 2.79115 16.4725 2.725 16.4461 2.66357C16.4197 2.60214 16.3811 2.54672 16.3327 2.50068L16.3262 2.49425C16.2266 2.39927 16.0942 2.34629 15.9566 2.34629C15.819 2.34629 15.6866 2.39927 15.587 2.49425L9.61589 8.18353C9.56337 8.23357 9.52157 8.29374 9.493 8.36041C9.46444 8.42708 9.44971 8.49886 9.44971 8.57139C9.44971 8.64392 9.46444 8.7157 9.493 8.78237C9.52157 8.84904 9.56337 8.90922 9.61589 8.95925Z"
                                    fill="#D2F24F"
                                />
                                <path
                                    d="M1.04411 8.95925L7.01518 14.6485C7.11481 14.7435 7.24718 14.7965 7.38482 14.7965C7.52247 14.7965 7.65483 14.7435 7.75446 14.6485L7.76089 14.6421C7.80936 14.5961 7.84795 14.5406 7.87432 14.4792C7.9007 14.4178 7.9143 14.3516 7.9143 14.2848C7.9143 14.2179 7.9007 14.1518 7.87432 14.0904C7.84795 14.0289 7.80936 13.9735 7.76089 13.9275L2.13804 8.57032L7.76089 3.21532C7.80936 3.16928 7.84795 3.11386 7.87432 3.05243C7.9007 2.991 7.9143 2.92485 7.9143 2.858C7.9143 2.79115 7.9007 2.725 7.87432 2.66357C7.84795 2.60214 7.80936 2.54672 7.76089 2.50068L7.75446 2.49425C7.65483 2.39927 7.52247 2.34629 7.38482 2.34629C7.24718 2.34629 7.11481 2.39927 7.01518 2.49425L1.04411 8.18353C0.991595 8.23357 0.949789 8.29374 0.921224 8.36041C0.892659 8.42708 0.87793 8.49886 0.87793 8.57139C0.87793 8.64392 0.892659 8.7157 0.921224 8.78237C0.949789 8.84904 0.991595 8.90922 1.04411 8.95925Z"
                                    fill="#D2F24F"
                                />
                            </svg>
                            {data.score.label}</h3>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={36}
                    viewBox="0 0 12 36"
                    fill="none"
                >
                    <path
                        d="M4.99262 35.5303C5.28551 35.8232 5.76039 35.8232 6.05328 35.5303L10.8262 30.7574C11.1191 30.4645 11.1191 29.9896 10.8262 29.6967C10.5334 29.4038 10.0585 29.4038 9.76559 29.6967L5.52295 33.9393L1.28031 29.6967C0.987415 29.4038 0.512542 29.4038 0.219649 29.6967C-0.0732449 29.9896 -0.0732449 30.4645 0.219649 30.7574L4.99262 35.5303ZM4.77295 0L4.77295 35L6.27295 35L6.27295 0H4.77295Z"
                        fill="#CEED4E"
                    />
                </svg>
            </div>
        </section>
    );
}

