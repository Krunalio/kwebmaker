'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHead from './SectionHead';
import Button from './Button';
import Image from 'next/image';

export default function AboutUs({ data }) {
  const [activeTab, setActiveTab] = useState('about');

  const galleryImages = [
    {
      id: 1,
      src: "/images/high-five.jpg",
      title: "",
      colSpan: "md:col-span-3",
      height: "h-auto md:h-full"
    },
    {
      id: 2,
      src: "/images/hand-shake.jpg",
      title: "",
      colSpan: "md:col-span-1",
      height: ""
    },
    {
      id: 3,
      src: "/images/male-playing.jpg",
      title: "",
      colSpan: "md:col-span-2",
      height: "md:h-full"
    },
    {
      id: 4,
      src: "/images/woman-playing.jpg",
      title: "",
      colSpan: "md:col-span-2",
      height: ""
    },
  ];

  return (
    <section className="bg-white">
      <div className="pt-16 pb-0 md:pb-16 px-4 mx-auto max-w-284">
        {/* Intro Text */}
        <div className="text-center mb-12 flex justify-center items-center pt-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={307}
            height={380}
            viewBox="0 0 307 380"
            fill="none"
            className='absolute left-0 opacity-30'
          >
            <path
              d="M-94.9426 379.188L84.0621 0H130.897L306.695 379.188H206.609L105.876 149.494L6.43037 379.188H-94.9426Z"
              fill="#D1F04F"
            />
          </svg>
          <p className="font-matter mb-4 text-2xl max-w-3xl pr-1">
            {Array.isArray(data.introText) ? (
              data.introText.map((part, index) => (
                <span key={index} className={part.color}>
                  {part.text}
                </span>
              ))
            ) : (
              <span className="text-gray-600">{data.introText}</span>
            )}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-0 md:mb-12 mt-[90px] md:mt-0 justify-center mx-auto">
          {data.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-matter font-semibold transition-colors ${activeTab === tab.id
                  ? 'text-black border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pt-14">
          {/* Left Content */}
          <div className="md:col-span-1">
            <SectionHead
              title={data.contentTitle}
              description={data.contentDescription}
            />

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {data.stats.map((stat, index) => (
                <div key={index} className="">
                  <div className="text-3xl font-bold font-matter text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-matter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button>
              {data.buttonText}
            </Button>
          </div>

          {/* Right Image Gallery */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className={`col-span-1 sm:col-span-1 ${image.colSpan} ${image.height} flex flex-col bg-gray-50 overflow-hidden group`}
                >
                  <Link href="/" className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40 grow">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={300}
                      height={300}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    {/* <div className="absolute inset-0 bg-linear-to-b from-gray-900/25 to-gray-900/5"></div> */}
                    <h3 className="z-10 text-xl font-matter font-bold text-white absolute top-0 left-0 p-4">
                      {image.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
