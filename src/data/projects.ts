export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  Tools: string;
  category: string;
  year: string;
  overview: string;
  liveUrl?: string;
  secondaryImages?: {
    topBig?: string;
    middleLeft?: string;
    middleRight?: string;
    bottomBig?: string;
  };
}

export const projects: Project[] = [
  {
    id: "legdr",
    title: "Ledgr",
    subtitle: "Adaptive Financial Analytics & Dual-Theme Design System",
    href: "/project-details/legdr",
    imageSrc: "/projects/ledgr/1.png",
    imageAlt: "Ledgr Financial Analytics & Expense Management Dashboard",
    Tools: "Next.js 15, Recharts",
    category: "Fintech Application",
    year: "2026",
    overview:
      "Ledgr is a comprehensive fintech application engineered with a dual dark/light mode architecture to deliver high-density data analytics without visual fatigue. Featuring a responsive 3-column desktop layout, the dashboard leverages Tailwind CSS custom design tokens and seamless theme context toggling to ensure AAA accessibility standards across both light and dark environments. The platform integrates custom interactive charts, modular budget progress trackers, and quick-search global navigation (⌘K) built with scalable TypeScript components.",
    liveUrl: "https://ledgr-eta-nine.vercel.app/",
    secondaryImages: {
      topBig: "/projects/ledgr/2 (1).png",
      middleLeft: "/projects/ledgr/2 (3).png",
      middleRight: "/projects/ledgr/2 (4).png",
      bottomBig: "/projects/ledgr/2 (2).png",
    },
  },

  {
    id: "keiton",
    title: "KEITON",
    subtitle: "High-Performance Footwear & Athletic E-Commerce Ecosystem",
    href: "/project-details/keiton",
    imageSrc: "/projects/keiton/keiton.png",
    imageAlt: "Keiton Premium Footwear E-Commerce Homepage Showcase",
    Tools: "Next.js 15, Tailwind CSS v4",
    category: "E-Commerce",
    year: "2026",
    overview:
      "KEITON is a high-performance e-commerce application engineered for premium athletic footwear and streetwear discovery. Designed to maximize retail conversion, the platform blends high-impact editorial heroes with conversion-focused visual architectures—featuring interactive category gateways, customizable sidebar product filters, micro-interaction drop counters, and structured brand ecosystem carousels. Built with Next.js and Tailwind CSS, it incorporates social proof metrics, verified customer review grids, and high-contrast product cards optimized for seamless cross-device exploration.",
    liveUrl: "https://store-e-commerce-xi.vercel.app/",
    secondaryImages: {
      topBig: "/projects/keiton/gallery (1).png",

      bottomBig: "/projects/keiton/gallery (2).png",
    },
  },

  {
    id: "kfc-redesign",
    title: "KFC Redesign",
    subtitle: "High-Conversion Fast-Food Ordering & Digital Menu System",
    href: "/project-details/kfc-redesign",
    imageSrc: "/projects/kfc-redesign/KFC Hero.png",
    imageAlt: "KFC brand identity and digital interface design",
    Tools: "Next.js 15, VS Code",
    category: "Web Application",
    year: "2026",
    overview:
      "A modern, conversion-focused web app redesign of the KFC digital ordering platform. Engineered to eliminate decision fatigue, the interface features a localized location bar, high-impact hero product releases, and quick-add Bestseller grids with clear dietary & promotional callouts. The layout incorporates dynamic offer application cards (such as direct coupon-code redemption) and bold brand typography designed to reduce cart abandonment and increase average order value.",
    liveUrl: "https://kfc-redesign-rho.vercel.app/",
    secondaryImages: {
      topBig: "/projects/kfc-redesign/kfc (1).png",
      middleLeft: "/projects/kfc-redesign/kfc (2).png",
      middleRight: "/projects/kfc-redesign/kfc (3).png",
      bottomBig: "/projects/kfc-redesign/kfc (4).png",
    },
  },

  {
    id: "jurneo",
    title: "Jurneo",
    subtitle: "End-to-End Travel Planning & Itinerary UX Case Study",
    href: "/project-details/jurneo",
    imageSrc: "/projects/jurneo/journeo.png",
    imageAlt: "Jurneo travel mobile application high-fidelity mockup",
    Tools: "Figma",
    category: "HTML,Figma, Auto Layout",
    year: "2026",
    overview:
      "Jurneo is a comprehensive UX/UI case study designed to eliminate cognitive overload and fragmented decision-making in travel planning. By unifying destination discovery, transparent pricing breakdowns, interactive day-by-day itineraries, flight/stay selections, and instant digital QR ticketing into a single seamless flow, Jurneo reduces decision-making time by 75% and workflow fragmentation by 60%. Crafted with strict visual hierarchy using Poppins and Inter typography systems.",
    liveUrl:
      "https://casestudy-jurneo.vercel.app/",
    secondaryImages: {
      topBig: "/projects/jurneo/gallery (2).png",
      middleLeft: "/projects/jurneo/gallery (1).png",
      middleRight: "/projects/jurneo/gallery (3).png",
      bottomBig: "/projects/jurneo/gallery (4).png",
    },
  },

  {
    id: "electrohub",
    title: "ElectroHub",
    subtitle: "Minimalist Consumer Electronics E-Commerce Platform",
    href: "/project-details/electrohub",
    imageSrc: "/projects/electrohub/electrohub.png",
    imageAlt: "ElectroHub Luxury E-Commerce Interface Showcase",
    Tools: "Figma, Auto Layout",
    category: "Web Design",
    year: "2026",
    overview:
      "ElectroHub is a high-end electronics e-commerce UI system designed to elevate tech retail through clean visual architecture and content-first layout hierarchy. Moving away from cluttered grids, the platform utilizes generous whitespace, refined typography, rating tags, color swatch selectors, and flexible EMI breakdown cards. The interface features intuitive brand filters, item spec badges, and detailed product-page layouts engineered to guide purchasing confidence across desktop and mobile screens.",
    liveUrl:
      "https://www.figma.com/proto/qbJbrDvU0WiPwu5SULB2CH/ElectroHub_Website?node-id=1-549&t=3UdkZtL2SLUTw2Bc-1&scaling=contain&content-scaling=responsive&page-id=0%3A1",
    secondaryImages: {
      topBig: "/projects/electrohub/electrohub (1).png",
      bottomBig: "/projects/electrohub/electrohub (2).png",
    },
  },

  {
    id: "aurospace",
    title: "AuroSpace",
    subtitle: "Luxury Real Estate & Long-Term Rental Platform",
    href: "/project-details/aurospace",
    imageSrc: "/projects/aurospace/hero.png",
    imageAlt: "AuroSpace Luxury Real Estate Landing Page Showcase",
    Tools: "Next.js 15, VS Code",
    category: "Web Application",
    year: "2026",
    overview:
      "AuroSpace is an ultra-premium, long-term residential rental platform engineered to streamline high-end property discovery across premier metro locations. Built with clean visual hierarchy, low-friction navigation, and curated asset cards, the platform bridges deep real estate intelligence with high-conversion UI/UX. The web architecture features a location-and-budget-driven hero search engine, social proof metrics, a structured 4-step onboarding journey, interactive filter controls, and dynamic listing displays tailored for high-net-worth individuals, expats, and luxury tenants.",
    liveUrl: "https://aurospacerealestatemarket.vercel.app/",
    secondaryImages: {
      topBig: "/projects/aurospace/1 (1).png",
      bottomBig: "/projects/aurospace/1 (2).png",
    },
  },
];
