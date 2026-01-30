import Image from "next/image";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Testimonial from "./components/Testimonial";
import KeyFeatures from "./components/KeyFeatures";
import Programs from "./components/Programs";
import Marquee from "./components/Marquee";
import Launching from "./components/Launching";
import Professionals from "./components/Professionals";
import Facilities from "./components/Facilities";
import CoachesEvents from "./components/CoachesEvents";
import Footer from "./components/Footer";
import Header from "./components/Header";

const bannerSection = {
  location: "SSA Hunter Valley",
  mainTitle: "GROW YOUR GAME WITH THE",
  subtitle: "PROFESSIONALS",
  tags: ["ADOPT", "NURTURE", "DELIVER"],
  buttonText: "Register Now",
  weather: {
    label: "WEATHER",
    location: "Hunter Valley",
    temperature: 19,
    description: "Weather",
    time: "Saturday, 8 pm"
  },
  ongoingMatches: {
    label: "ONGOING MATCHES"
  },
  score: {
    label: "SCORE"
  }
};

const marqueeSection = {
  items: [
    { text: "Adopt", outlined: false },
    { text: "Nurture", outlined: true },
    { text: "Deliver", outlined: false },
    { text: "Adopt", outlined: true },
    { text: "Nurture", outlined: false }
  ]
};

const launchingSection = {
  label: "LAUNCHING",
  title: "Signature Slam Academy Hunter Valley",
  subtitle: "SSA Connectivity",
  icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={19}
    viewBox="0 0 16 19"
    fill="none"
  >
    <path
      d="M8 14.875V0.5L14.875 3.625L8 6.75"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00009 12.375C4.60166 12.375 1.15244 14.0625 0.514157 17.2477C0.437204 17.6316 0.678611 18 1.12509 18H14.8751C15.322 18 15.5634 17.6316 15.4864 17.2477C14.8478 14.0625 11.3985 12.375 8.00009 12.375Z"
      stroke="white"
      strokeMiterlimit={10}
    />
  </svg>,
  coverImage: "/images/golf-view.png",
  locations: [
    { name: "Hunter Valley Golf And Country Club", distance: "220m" },
    { name: "Rydges Resort Hunter Valley", distance: "550m" },
    { name: "Cessnock Airport", distance: "17km" },
    { name: "Cessnock CBD", distance: "7km" },
    { name: "Nulkaba Public School", distance: "4.8km" },
    { name: "Cessnock Hospital", distance: "7.3km" },
    { name: "Mcdonalds, KFC, Oporto", distance: "7km" }
  ]
};

const professionalsSection = {
  title: "Meet our professionals",
  description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText: "View all",
  professionals: [
    {
      name: "Craig Tiley",
      role: "CEO Tennis Australia & Australian Open",
      image: "/images/person_1.jpg"
    },
    {
      name: "Stephen Farrow",
      role: "Director - Tournament, Players & International Relations",
      image: "/images/person_2.jpg"
    },
    {
      name: "Cameron Pearson",
      role: "Head Major Events - Tennis Australia",
      image: "/images/person_3.png"
    }
  ]
};

const facilitiesSection = {
  title: "Facilities",
  description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  facilities: [
    {
      title: "Tennis",
      tags: ["20 courts", "3 surfaces"],
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/images/Tennis_ground.jpg"
    },
    {
      title: "Accommodation",
      tags: ["5 Star"],
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/images/Accommodation.jpg"
    },
    {
      title: "Fitness",
      tags: ["Modern", "Latest"],
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/images/Fitness.jpg"
    },
    {
      title: "Recovery",
      tags: ["SPA", "ICE", "Sauna"],
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/images/Recovery.jpg"
    }
  ]
};

const aboutUsSection = {
  introText: [
    { text: "To be the first venue in the world to have ", color: "text-black font-light" },
    { text: "60 multi surface courts", color: "text-primary font-bold" },
    { text: " at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.", color: "text-black font-light" }
  ],
  tabs: [
    { id: 'about', label: 'About Us' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
  ],
  contentTitle: "About Us",
  contentDescription: "To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.",
  stats: [
    { value: "20", label: "courts" },
    { value: "12", label: "coaches" },
    { value: "17", label: "years" },
    { value: "10", label: "clubs" },
  ],
  buttonText: "Read More"
};

const programsSection = {
  title: "Programs",
  description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  buttonText: "Register Now",
  cards: [
    {
      id: 1,
      title: "Academy",
      subtitle: "Live and train with us",
      image: "/images/ground-two.jpg"
    },
    {
      id: 2,
      title: "Camps",
      subtitle: "Train like a pro with us",
      image: "/images/players.png"
    },
    {
      id: 3,
      title: "Performance",
      subtitle: "Elevate your game with us",
      image: "/images/ground-three.jpg",
      isActive: true
    }
  ]
};

const testimonialSection = {
  quote: " We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world. ",
  author: "John Doe",
  title: "Chairman"
};

const keyFeaturesSection = {
  title: "Key Features",
  description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText: "register now",
  features: [
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First venue in the world",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First venue in the world",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First one stop tennis acaderny inAsia Pacific",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        viewBox="0 0 21 12"
        fill="none"
      >
        <path
          d="M20.5303 6.05328C20.8232 5.76039 20.8232 5.28551 20.5303 4.99262L15.7574 0.219648C15.4645 -0.073245 14.9896 -0.073245 14.6967 0.219648C14.4038 0.512542 14.4038 0.987415 14.6967 1.28031L18.9393 5.52295L14.6967 9.76559C14.4038 10.0585 14.4038 10.5334 14.6967 10.8263C14.9896 11.1191 15.4645 11.1191 15.7574 10.8263L20.5303 6.05328ZM0 5.52295V6.27295H20V5.52295V4.77295H0V5.52295Z"
          fill="#99B81B"
        />
      </svg>,
      title: "First one stop tennis acaderny inAsia Pacific",
    },

  ]
};

const glimpseOfExcellenceSection = {
  title: "A Glimpse of Excellence",
  description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText: "register now",
  images: [
    {
      src: "/images/man-playing.jpg",
      alt: "Tennis player",
      colSpan: "md:col-span-1",
      height: "400px"
    },
    {
      src: "/images/ground.jpg",
      alt: "Tennis courts aerial view",
      colSpan: "md:col-span-2",
      height: "400px"
    }
  ]
};

const footerSection = {
  logoPath: "/images/SSA-logo.png",
  logoAlt: "Adopt Nurture Deliver",
  navRows: [
    {
      id: "row-1",
      links: [
        { id: "about", label: "About Us", href: "#about" },
        { id: "coaches", label: "Coaches", href: "#coaches" },
        { id: "news", label: "News", href: "#news" },
        { id: "matches", label: "Matches", href: "#matches" },
        { id: "events", label: "Events", href: "#events" },
        { id: "faqs", label: "FAQs", href: "#faqs" }
      ]
    },
    {
      id: "row-2",
      links: [
        { id: "programs", label: "Programs", href: "#programs" },
        { id: "amenities", label: "Amenities", href: "#amenities" },
        { id: "blogs", label: "Blogs", href: "#blogs" }
      ]
    }
  ],
  contact: {
    title: "Signature Slam Academy",
    items: [
      {
        id: "address",
        label: "30 Wills Hill Road, Lovedale, NSW",
      },
      {
        id: "phone",
        label: "+91 5642589752",
        href: "tel:+915642589752",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={13}
            height={16}
            viewBox="0 0 13 16"
            fill="none"
          >
            <path
              d="M3.23993 0.084726L2.52293 0.300726C1.88451 0.493255 1.31437 0.864152 0.879622 1.36976C0.444873 1.87538 0.163608 2.49466 0.0689304 3.15473C-0.22807 5.22273 0.43593 7.64073 2.03693 10.4137C3.63393 13.1797 5.39193 14.9617 7.32693 15.7417C7.94866 15.9923 8.62926 16.0591 9.28783 15.9341C9.9464 15.8091 10.5552 15.4976 11.0419 15.0367L11.5839 14.5227C11.9359 14.1896 12.1549 13.7401 12.2004 13.2576C12.2458 12.7752 12.1145 12.2927 11.8309 11.8997L10.4749 10.0197C10.2916 9.76592 10.0334 9.57584 9.73666 9.47613C9.43987 9.37643 9.11931 9.37209 8.81993 9.46373L6.76893 10.0907L6.71593 10.1007C6.48993 10.1337 5.96793 9.64473 5.31793 8.51873C4.63793 7.34073 4.49793 6.65173 4.68493 6.47373L5.72793 5.50073C6.10934 5.14519 6.36988 4.67917 6.47301 4.16804C6.57613 3.65692 6.51665 3.12634 6.30293 2.65073L5.64093 1.17973C5.44187 0.737069 5.08863 0.381904 4.64706 0.180438C4.20549 -0.0210273 3.70473 -0.0550453 3.23993 0.084726ZM4.72993 1.58973L5.38993 3.06073C5.51847 3.34596 5.55441 3.66429 5.49271 3.971C5.43101 4.27771 5.27476 4.55739 5.04593 4.77073L3.99993 5.74473C3.33093 6.37873 3.55293 7.46073 4.45293 9.01873C5.29893 10.4847 6.07093 11.2087 6.90093 11.0827L7.02493 11.0567L9.11293 10.4197C9.21274 10.3891 9.31964 10.3904 9.41863 10.4236C9.51763 10.4568 9.60376 10.5201 9.66493 10.6047L11.0209 12.4847C11.1629 12.6812 11.2287 12.9225 11.2061 13.1639C11.1835 13.4052 11.074 13.6301 10.8979 13.7967L10.3549 14.3107C10.0073 14.6398 9.57247 14.8621 9.10218 14.9512C8.63189 15.0404 8.14589 14.9927 7.70193 14.8137C6.00393 14.1297 4.39893 12.5027 2.90393 9.91373C1.40493 7.31873 0.797931 5.11173 1.05893 3.29673C1.12649 2.82516 1.32738 2.38271 1.63795 2.02147C1.94852 1.66024 2.35583 1.39525 2.81193 1.25773L3.52893 1.04173C3.76139 0.971875 4.01132 0.988956 4.23211 1.08978C4.4529 1.19061 4.62949 1.36831 4.72893 1.58973H4.72993Z"
              fill="#99B81B"
            />
          </svg>
        )
      },
      {
        id: "email",
        label: "info@ssagroup.com",
        href: "mailto:info@ssagroup.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={13}
            viewBox="0 0 16 13"
            fill="none"
          >
            <path
              d="M0.500163 0.499674V0.0830078C0.389656 0.0830078 0.283675 0.126907 0.205535 0.205047C0.127395 0.283187 0.0834961 0.389168 0.0834961 0.499674H0.500163ZM15.5002 0.499674H15.9168C15.9168 0.389168 15.8729 0.283187 15.7948 0.205047C15.7167 0.126907 15.6107 0.0830078 15.5002 0.0830078V0.499674ZM0.500163 0.916341H15.5002V0.0830078H0.500163V0.916341ZM15.0835 0.499674V10.4997H15.9168V0.499674H15.0835ZM13.8335 11.7497H2.16683V12.583H13.8335V11.7497ZM0.916829 10.4997V0.499674H0.0834961V10.4997H0.916829ZM2.16683 11.7497C1.83531 11.7497 1.51737 11.618 1.28295 11.3836C1.04853 11.1491 0.916829 10.8312 0.916829 10.4997H0.0834961C0.0834961 11.0522 0.302989 11.5821 0.69369 11.9728C1.08439 12.3635 1.6143 12.583 2.16683 12.583V11.7497ZM15.0835 10.4997C15.0835 10.8312 14.9518 11.1491 14.7174 11.3836C14.483 11.618 14.165 11.7497 13.8335 11.7497V12.583C14.386 12.583 14.9159 12.3635 15.3066 11.9728C15.6973 11.5821 15.9168 11.0522 15.9168 10.4997H15.0835Z"
              fill="#99B81B"
            />
            <path
              d="M0.5 0.5L8 8L15.5 0.5"
              stroke="#99B81B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      }
    ]
  },
  social: {
    title: "Connect with us",
    links: [
      {
        id: "facebook",
        label: "Facebook",
        href: "#",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={20}
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.238 1.538C5.22244 0.553396 6.55768 0.000164749 7.95 0H10.65C10.8489 0 11.0397 0.0790175 11.1803 0.21967C11.321 0.360322 11.4 0.551088 11.4 0.75V4.35C11.4 4.54891 11.321 4.73968 11.1803 4.88033C11.0397 5.02098 10.8489 5.1 10.65 5.1H7.95C7.9303 5.1 7.9108 5.10388 7.8926 5.11142C7.8744 5.11896 7.85786 5.13 7.84393 5.14393C7.83001 5.15786 7.81896 5.1744 7.81142 5.1926C7.80388 5.2108 7.8 5.2303 7.8 5.25V7.2H10.65C10.764 7.19994 10.8766 7.22587 10.979 7.27583C11.0815 7.32579 11.1713 7.39846 11.2415 7.48832C11.3117 7.57817 11.3604 7.68285 11.3841 7.79439C11.4078 7.90593 11.4057 8.02139 11.378 8.132L10.478 11.732C10.4374 11.8943 10.3437 12.0384 10.2118 12.1413C10.0799 12.2442 9.91732 12.3001 9.75 12.3H7.8V18.75C7.8 18.9489 7.72098 19.1397 7.58033 19.2803C7.43968 19.421 7.24891 19.5 7.05 19.5H3.45C3.25109 19.5 3.06032 19.421 2.91967 19.2803C2.77902 19.1397 2.7 18.9489 2.7 18.75V12.3H0.75C0.551088 12.3 0.360322 12.221 0.21967 12.0803C0.0790175 11.9397 0 11.7489 0 11.55V7.95C0 7.85151 0.0193993 7.75398 0.0570903 7.66299C0.0947813 7.57199 0.150026 7.48931 0.21967 7.41967C0.289314 7.35003 0.371993 7.29478 0.462987 7.25709C0.553982 7.2194 0.651509 7.2 0.75 7.2H2.7V5.25C2.70016 3.85768 3.2534 2.52244 4.238 1.538ZM7.95 1.5C6.95544 1.5 6.00161 1.89509 5.29835 2.59835C4.59509 3.30161 4.2 4.25544 4.2 5.25V7.95C4.2 8.14891 4.12098 8.33968 3.98033 8.48033C3.83968 8.62098 3.64891 8.7 3.45 8.7H1.5V10.8H3.45C3.64891 10.8 3.83968 10.879 3.98033 11.0197C4.12098 11.1603 4.2 11.3511 4.2 11.55V18H6.3V11.55C6.3 11.3511 6.37902 11.1603 6.51967 11.0197C6.66032 10.879 6.85109 10.8 7.05 10.8H9.164L9.689 8.7H7.05C6.85109 8.7 6.66032 8.62098 6.51967 8.48033C6.37902 8.33968 6.3 8.14891 6.3 7.95V5.25C6.3 4.81239 6.47384 4.39271 6.78327 4.08327C7.09271 3.77384 7.51239 3.6 7.95 3.6H9.9V1.5H7.95Z"
              fill="black"
            />
          </svg>
        )
      },
      {
        id: "x",
        label: "X",
        href: "#",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.915L9.701 12.683L3.735 19.5H0.425L8.155 10.665L0 0H6.825L11.538 6.231L16.988 0H16.99ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
              fill="black"
            />
          </svg>
        )
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "#",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.75 13.75C10.8109 13.75 11.8283 13.3286 12.5784 12.5784C13.3286 11.8283 13.75 10.8109 13.75 9.75C13.75 8.68913 13.3286 7.67172 12.5784 6.92157C11.8283 6.17143 10.8109 5.75 9.75 5.75C8.68913 5.75 7.67172 6.17143 6.92157 6.92157C6.17143 7.67172 5.75 8.68913 5.75 9.75C5.75 10.8109 6.17143 11.8283 6.92157 12.5784C7.67172 13.3286 8.68913 13.75 9.75 13.75Z"
              stroke="black"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.75 13.75V5.75C0.75 4.42392 1.27678 3.15215 2.21447 2.21447C3.15215 1.27678 4.42392 0.75 5.75 0.75H13.75C15.0761 0.75 16.3479 1.27678 17.2855 2.21447C18.2232 3.15215 18.75 4.42392 18.75 5.75V13.75C18.75 15.0761 18.2232 16.3479 17.2855 17.2855C16.3479 18.2232 15.0761 18.75 13.75 18.75H5.75C4.42392 18.75 3.15215 18.2232 2.21447 17.2855C1.27678 16.3479 0.75 15.0761 0.75 13.75Z"
              stroke="black"
              strokeWidth={1.5}
            />
            <path
              d="M15.25 4.26002L15.26 4.24902"
              stroke="black"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      },
      {
        id: "youtube",
        label: "YouTube",
        href: "#",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
          >
            <path
              d="M12.75 7.84961L9.25 9.84961V5.84961L12.75 7.84961Z"
              fill="black"
              stroke="black"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.75 8.557V7.142C0.75 4.247 0.75 2.799 1.655 1.868C2.561 0.936 3.987 0.896 6.838 0.815C8.188 0.777 9.568 0.75 10.75 0.75C11.931 0.75 13.311 0.777 14.662 0.815C17.513 0.896 18.939 0.936 19.844 1.868C20.75 2.799 20.75 4.248 20.75 7.142V8.557C20.75 11.453 20.75 12.9 19.845 13.832C18.939 14.763 17.514 14.804 14.662 14.884C13.312 14.923 11.932 14.95 10.75 14.95C9.44576 14.9461 8.14163 14.9241 6.838 14.884C3.987 14.804 2.561 14.764 1.655 13.832C0.75 12.9 0.75 11.452 0.75 8.558V8.557Z"
              stroke="black"
              strokeWidth={1.5}
            />
          </svg>
        )
      }
    ]
  },
  bottomBar: [
    { id: "terms", label: "Terms And Condition", href: "#" },
    { id: "copyright", label: "© 2023 All Rights Reserved www.signatureslamacademy.com", href: "#" },
    { id: "privacy", label: "Privacy Policy", href: "#" }
  ]
};

const coachesEventsData = {
  sections: [
    {
      id: "coaches",
      title: "Our Coaches",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkText: "Read More",
      image: "/images/field.jpg",
      imageClass: "brightness-50"
    },
    {
      id: "events",
      title: "Events",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkText: "Read More",
      image: "",
      overlayImage: "/images/print_shadow.png",
      backgroundColor: "#C4D82E"
    }
  ]
};

  const headerData = {
    navLinks: [
      { id: 1, label: 'About Us', href: '#about' },
      { id: 2, label: 'Matches', href: '#matches' },
      { id: 3, label: 'Programs', href: '#programs' },
      { id: 4, label: 'Coaches', href: '#coaches' },
      { id: 5, label: 'Amenities', href: '#amenities' },
      { id: 6, label: 'Events', href: '#events' },
      { id: 7, label: 'News', href: '#news' },
      { id: 8, label: 'Blogs', href: '#blogs' },
    ],
    ctaText: 'Contact Us',
  };


export default function Home() {
  return (
    <div>
      <Header data={headerData} />
      <Banner data={bannerSection} />
      <AboutUs data={aboutUsSection} />
      <Programs data={programsSection} />
      <Testimonial data={testimonialSection} />
      <KeyFeatures data={keyFeaturesSection} glimpsData={glimpseOfExcellenceSection} />
      <Marquee data={marqueeSection} />
      <Launching data={launchingSection} />
      <Professionals data={professionalsSection} />
      <Facilities data={facilitiesSection} />
      <CoachesEvents data={coachesEventsData} />
      <Footer data={footerSection} />
    </div>
  );
}
