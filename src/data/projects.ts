export interface StoryApproachPoint {
  label: string;
  text: string;
}

export interface ProjectStory {
  approach: {
    intro: string;
    points: StoryApproachPoint[];
  };
  pages: {
    label: string;
    description: string;
  }[];
  conclusion: string;
}

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
  story: ProjectStory;
}

export const projects: Project[] = [
  {
    id: "jurneo",
    title: "Jurneo",
    subtitle: "End-to-End Travel Planning & Itinerary UX Case Study",
    href: "/project-details/jurneo",
    imageSrc: "/projects/jurneo/journeo.png",
    imageAlt: "Jurneo travel mobile application high-fidelity mockup",
    Tools: "Figma, Stitch AI, HTML",
    category: "Travel & Lifestyle",
    year: "2026",
    overview:
      "Jurneo is a comprehensive UX/UI case study designed to eliminate cognitive overload and fragmented decision-making in travel planning. By unifying destination discovery, transparent pricing breakdowns, interactive day-by-day itineraries, flight/stay selections, and instant digital QR ticketing into a single seamless flow, Jurneo reduces decision-making time by 75% and workflow fragmentation by 60%. Crafted with strict visual hierarchy using Poppins and Inter typography systems.",
    liveUrl: "https://casestudy-jurneo.vercel.app/",
    secondaryImages: {
      topBig: "/projects/jurneo/gallery (2).png",
      middleLeft: "/projects/jurneo/gallery (1).png",
      middleRight: "/projects/jurneo/gallery (3).png",
      bottomBig: "/projects/jurneo/gallery (4).png",
    },
    story: {
      approach: {
        intro:
          "Jurneo began with a frustration every traveler knows: planning a trip means juggling five apps, three spreadsheets, and one very patient friend. The case study was designed to prove that a single, well-structured flow can carry the entire journey.",
        points: [
          {
            label: "Vision and Innovation",
            text: "The vision was a travel companion that owns the whole arc — discovery, itinerary, booking, and ticketing — in one unified flow. Uniting flight/stay selection with day-by-day planning and instant QR ticketing removes the fragmentation that makes travel planning exhausting.",
          },
          {
            label: "Identifying Unique Challenges",
            text: "The core challenge was cognitive overload: travelers evaluate destinations, compare prices, and sequence activities simultaneously. Any screen that added mental load risked derailing the entire plan.",
          },
          {
            label: "Resolving Complex Problems",
            text: "I resolved this with transparent pricing breakdowns that surface costs before commitment, an interactive day-by-day itinerary that absorbs planning without tab-switching, and instant digital QR ticketing that collapses the post-booking admin into a single screen.",
          },
          {
            label: "User-Centric Design",
            text: "Strict visual hierarchy, built on Poppins and Inter typography systems, keeps each screen singular: one decision per view. Mobile-first layouts honor that the planning often happens mid-commute.",
          },
          {
            label: "Meeting User Needs",
            text: "The measured outcomes — a 75% reduction in decision-making time and a 60% reduction in workflow fragmentation — reflect the real need to reclaim planning time and restore confidence in the trip.",
          },
        ],
      },
      pages: [
        {
          label: "Discovery",
          description:
            "Destination discovery that presents options with transparent context, letting travelers shortlist without mental gymnastics.",
        },
        {
          label: "Itinerary",
          description:
            "Interactive day-by-day itinerary that sequences activities, transit, and rest so the plan is visible and adjustable at a glance.",
        },
        {
          label: "Pricing",
          description:
            "Transparent pricing breakdowns that surface total costs before commitment — no surprise line items at checkout.",
        },
        {
          label: "Booking",
          description:
            "Unified flight and stay selection that keeps the trip coherent across transport and lodging.",
        },
        {
          label: "Tickets",
          description:
            "Instant digital QR ticketing that eliminates printouts and entry-line fumbling on the day itself.",
        },
      ],
      conclusion:
        "Jurneo demonstrates that travel planning doesn't need to be a project-management exercise. By unifying the scattered fragments of a trip into one deliberate flow and measuring the effect on decision fatigue, the case study shows how a single product can make the hardest part of travel feel like the easiest.",
    },
  },
  {
    id: "electrohub",
    title: "ElectroHub",
    subtitle: "Minimalist Consumer Electronics E-Commerce Platform",
    href: "/project-details/electrohub",
    imageSrc: "/projects/electrohub/electrohub.png",
    imageAlt: "ElectroHub Luxury E-Commerce Interface Showcase",
    Tools: "Figma, Auto Layout, Prototyping",
    category: "E-Commerce / Tech Retail",
    year: "2026",
    overview:
      "ElectroHub is a high-end electronics e-commerce UI system designed to elevate tech retail through clean visual architecture and content-first layout hierarchy. Moving away from cluttered grids, the platform utilizes generous whitespace, refined typography, rating tags, color swatch selectors, and flexible EMI breakdown cards. The interface features intuitive brand filters, item spec badges, and detailed product-page layouts engineered to guide purchasing confidence across desktop and mobile screens.",
    liveUrl:
      "https://www.figma.com/proto/qbJbrDvU0WiPwu5SULB2CH/ElectroHub_Website?node-id=1-549&t=3UdkZtL2SLUTw2Bc-1&scaling=contain&content-scaling=responsive&page-id=0%3A1",
    secondaryImages: {
      topBig: "/projects/electrohub/electrohub (1).png",
      bottomBig: "/projects/electrohub/electrohub (2).png",
    },
    story: {
      approach: {
        intro:
          "ElectroHub was designed against the noise of typical electronics retail. Where most tech stores cram grids with glowing deals, this system bet on restraint — generous whitespace and refined typography doing the work of selling premium hardware.",
        points: [
          {
            label: "Vision and Innovation",
            text: "The vision was a luxury-grade electronics storefront: content-first layouts where products breathe, and hierarchy guides the eye from hero to spec to purchase. Whitespace became the differentiator against cluttered competitor grids.",
          },
          {
            label: "Identifying Unique Challenges",
            text: "Premium electronics carry heavy decisions — specs, compatibility, financing. The challenge was presenting enough technical detail to build confidence while keeping the interface calm enough to browse.",
          },
          {
            label: "Resolving Complex Problems",
            text: "I resolved this with rating tags and item spec badges that summarize decisions at card level, color swatch selectors for quick configuration, and flexible EMI breakdown cards that translate financing into human numbers.",
          },
          {
            label: "User-Centric Design",
            text: "Every layout follows a content-first hierarchy: the product is the hero, specs support it, and price/EMI resolve it. Intuitive brand filters narrow the field without making the catalog feel like a warehouse.",
          },
          {
            label: "Meeting User Needs",
            text: "Purchasing confidence is the real need in tech retail. Detailed product-page layouts and transparent EMI options give buyers the certainty to click purchase — on desktop and mobile alike.",
          },
        ],
      },
      pages: [
        {
          label: "Homepage",
          description:
            "A content-first hero with generous whitespace that sets a premium tone before a single product appears.",
        },
        {
          label: "Category Filters",
          description:
            "Intuitive brand filters that shrink the catalog quickly without turning discovery into a scavenger hunt.",
        },
        {
          label: "Product Cards",
          description:
            "Cards carrying rating tags, item spec badges, and color swatch selectors for instant comparison.",
        },
        {
          label: "Product Detail",
          description:
            "Detailed product-page layouts engineered to answer spec and compatibility questions before checkout.",
        },
        {
          label: "EMI Breakdown",
          description:
            "Flexible EMI breakdown cards that translate total cost into approachable monthly figures.",
        },
        {
          label: "Cart",
          description:
            "A calm, configurable cart that preserves the premium feel through to purchase.",
        },
      ],
      conclusion:
        "ElectroHub makes a quiet argument: luxury retail online doesn't need more stimulation, it needs more trust. By pairing restraint with detail — whitespace where competitors shout, specs where competitors hide — the system builds the confidence that premium hardware purchases demand.",
    },
  },

  {
    id: "legdr",
    title: "Ledgr",
    subtitle: "Adaptive Financial Analytics & Dual-Theme Design System",
    href: "/project-details/legdr",
    imageSrc: "/projects/ledgr/1.png",
    imageAlt: "Ledgr Financial Analytics & Expense Management Dashboard",
    Tools: "Next.js 15, TypeScript, Tailwind CSS",
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
    story: {
      approach: {
        intro:
          "Ledgr was built around a single conviction: financial data is only useful when it can be absorbed at a glance. The entire product — from the three-column dashboard grid to the command palette — was designed so that a finance team could extract answers without hunting for them.",
        points: [
          {
            label: "Vision and Innovation",
            text: "Most fintech dashboards force users to choose between density and legibility. Ledgr's vision was to dissolve that trade-off by building a dual dark/light architecture where every chart, token, and surface is tuned per theme — so high-density analytics never arrive at the cost of visual fatigue.",
          },
          {
            label: "Identifying Unique Challenges",
            text: "The core challenge was theming: a chart or progress bar that reads beautifully on a white surface can disappear entirely on black. Every color token, grid line, and hover state had to be re-authored for two environments while preserving brand identity and keeping contrast ratios accessible in both.",
          },
          {
            label: "Resolving Complex Problems",
            text: "I resolved this by introducing theme-aware Tailwind design tokens at the system level, then wiring a seamless theme context toggle across the entire app. Interactive Recharts visualizations and modular budget trackers were built to inherit these tokens, and a ⌘K quick-search command palette was added so users could jump between modules without navigating menus.",
          },
          {
            label: "User-Centric Design",
            text: "The responsive 3-column layout was arranged around how finance users actually work: high-level summary at the top, mid-level tracking in the center column, and granular detail on the right. Visual hierarchy and glanceable metrics were prioritized so that scanning, not searching, drives the experience.",
          },
          {
            label: "Meeting User Needs",
            text: "AAA accessibility compliance across both themes means users who rely on high-contrast or low-fatigue interfaces can use Ledgr daily. Budget trackers give immediate spend context, and the command palette turns frequent navigation into a keystroke — meeting real needs of power users.",
          },
        ],
      },
      pages: [
        {
          label: "Dashboard",
          description:
            "A responsive 3-column analytics hub with custom interactive charts, modular budget progress trackers, and high-density financial data arranged for at-a-glance scanning.",
        },
        {
          label: "Global Search",
          description:
            "A ⌘K command palette providing instant cross-module navigation — jump to accounts, budgets, or reports without touching the sidebar.",
        },
        {
          label: "Budget Tracker",
          description:
            "Modular progress trackers for monthly spending limits, with theme-aware color states that signal proximity to caps.",
        },
        {
          label: "Analytics & Charts",
          description:
            "Custom Recharts visualizations built on scalable TypeScript components, fully tokenized so they re-theme between light and dark modes.",
        },
        {
          label: "Theme System",
          description:
            "A seamless dual dark/light mode with tailored design tokens per environment, toggled via context without a page reload.",
        },
      ],
      conclusion:
        "Ledgr shows how a design system can carry the weight of a data-heavy product. By solving theming at the token level and treating legibility as a first-class feature, the platform delivers dense financial analytics that remain calm, accessible, and easy to navigate in either theme.",
    },
  },
  {
    id: "aurospace",
    title: "AuroSpace",
    subtitle: "Luxury Real Estate & Long-Term Rental Platform",
    href: "/project-details/aurospace",
    imageSrc: "/projects/aurospace/hero.png",
    imageAlt: "AuroSpace Luxury Real Estate Landing Page Showcase",
    Tools: "Next.js, TypeScript, Tailwind CSS",
    category: "Real Estate Platform",
    year: "2026",
    overview:
      "AuroSpace is an ultra-premium, long-term residential rental platform engineered to streamline high-end property discovery across premier metro locations. Built with clean visual hierarchy, low-friction navigation, and curated asset cards, the platform bridges deep real estate intelligence with high-conversion UI/UX. The web architecture features a location-and-budget-driven hero search engine, social proof metrics, a structured 4-step onboarding journey, interactive filter controls, and dynamic listing displays tailored for high-net-worth individuals, expats, and luxury tenants.",
    liveUrl: "https://aurospacerealestatemarket.vercel.app/",
    secondaryImages: {
      topBig: "/projects/aurospace/1 (1).png",
      bottomBig: "/projects/aurospace/1 (2).png",
    },
    story: {
      approach: {
        intro:
          "AuroSpace was built for a demanding audience: high-net-worth individuals, expats, and luxury tenants who expect a broker-grade experience online. The design premise was that premium real estate deserves a search experience as curated as the properties themselves.",
        points: [
          {
            label: "Vision and Innovation",
            text: "The vision was a location-and-budget-driven hero search that feels like speaking to a concierge, not a database. Social proof metrics and curated asset cards position AuroSpace as a broker, not a listing dump.",
          },
          {
            label: "Identifying Unique Challenges",
            text: "Luxury tenants need depth — neighborhood intelligence, amenities, financing context — but they won't tolerate clutter. The challenge was delivering broker-grade insight inside a low-friction, elegant interface.",
          },
          {
            label: "Resolving Complex Problems",
            text: "I resolved this with a structured 4-step onboarding journey that captures requirements once, interactive filter controls that refine without resetting the search, and dynamic listing displays tuned for curated asset cards.",
          },
          {
            label: "User-Centric Design",
            text: "Clean visual hierarchy and low-friction navigation keep the experience appropriate to the audience's standard — every interaction feels deliberate, from the hero search to the final asset view.",
          },
          {
            label: "Meeting User Needs",
            text: "High-net-worth renters don't browse; they evaluate. Social proof metrics, curated cards, and deep listing intelligence let them assess a property's fit in a single glance, matching the decisiveness of a real broker.",
          },
        ],
      },
      pages: [
        {
          label: "Hero Search",
          description:
            "A location-and-budget-driven engine that opens the platform with a single, concierge-like query.",
        },
        {
          label: "Onboarding",
          description:
            "A structured 4-step journey that captures requirements once and tailors every subsequent screen.",
        },
        {
          label: "Filters",
          description:
            "Interactive filter controls that refine listings precisely without ever resetting the broader search.",
        },
        {
          label: "Listings",
          description:
            "Dynamic listing displays with curated asset cards built for at-a-glance evaluation.",
        },
        {
          label: "Listing Details",
          description:
            "Deep real estate intelligence — amenities, neighborhood context, and pricing — presented with broker-grade polish.",
        },
        {
          label: "Social Proof",
          description:
            "Trust metrics woven through the journey to reinforce the platform's premium positioning.",
        },
      ],
      conclusion:
        "AuroSpace shows how a platform can earn the trust of a demanding audience through curation rather than volume. By making every screen feel like a broker's recommendation, it turns property discovery into an experience worthy of the homes it represents.",
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
    category: "E-Commerce / Food & Beverage",
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
    story: {
      approach: {
        intro:
          "The KFC redesign treated ordering as a series of micro-decisions to be removed, not accumulated. The goal was simple: get a hungry customer from landing to checkout in as few decisions as possible, without stripping away the brand's bold personality.",
        points: [
          {
            label: "Vision and Innovation",
            text: "The vision was a fast-food ordering flow with the decisiveness of a drive-thru: localized by default, bestsellers surfaced immediately, and offers applied themselves. Bold brand typography and high-impact heroes kept the experience unmistakably KFC.",
          },
          {
            label: "Identifying Unique Challenges",
            text: "Decision fatigue is the silent killer of fast-food conversion. With dozens of menu items, dietary callouts, and promo codes, the interface risked burying the order under choices — the challenge was prioritization, not information.",
          },
          {
            label: "Resolving Complex Problems",
            text: "I resolved this with a localized location bar that anchors the correct store from the start, quick-add Bestseller grids with clear dietary and promotional callouts, and dynamic offer cards that apply coupons directly — removing the copy-paste ritual that usually kills redemptions.",
          },
          {
            label: "User-Centric Design",
            text: "Every pattern was built around speed: large touch targets for thumbs, contrast that holds up in bright light, and a menu hierarchy that surfaces proven favorites before long-tail items.",
          },
          {
            label: "Meeting User Needs",
            text: "Reducing cart abandonment and increasing average order value are commercial needs, but they're served by human ones — clarity, speed, and confidence that the right meal lands in the cart the first time.",
          },
        ],
      },
      pages: [
        {
          label: "Location Bar",
          description:
            "Localized store detection that anchors menu availability, pricing, and delivery to the right location from the first view.",
        },
        {
          label: "Hero",
          description:
            "High-impact hero for new product releases, using bold brand typography to make launches unmissable.",
        },
        {
          label: "Bestsellers",
          description:
            "Quick-add grid of proven favorites with dietary and promotional callouts baked into each card.",
        },
        {
          label: "Offers",
          description:
            "Dynamic offer application cards that apply coupon codes in one tap, eliminating manual entry friction.",
        },
        {
          label: "Menu",
          description:
            "Category-driven menu navigation designed to surface top sellers ahead of long-tail items.",
        },
        {
          label: "Cart",
          description:
            "Streamlined cart summary engineered to reduce abandonment and lift average order value.",
        },
      ],
      conclusion:
        "The redesign shows that conversion isn't about adding pressure — it's about removing friction. By deleting decisions at the moment they matter most, the platform turns a crowded menu into a confident, fast path to checkout that works for both the customer and the business.",
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
    category: "E-Commerce / Retail",
    year: "2026",
    overview:
      "KEITON is a high-performance e-commerce application engineered for premium athletic footwear and streetwear discovery. Designed to maximize retail conversion, the platform blends high-impact editorial heroes with conversion-focused visual architectures—featuring interactive category gateways, customizable sidebar product filters, micro-interaction drop counters, and structured brand ecosystem carousels. Built with Next.js and Tailwind CSS, it incorporates social proof metrics, verified customer review grids, and high-contrast product cards optimized for seamless cross-device exploration.",
    liveUrl: "https://store-e-commerce-xi.vercel.app/",
    secondaryImages: {
      topBig: "/projects/keiton/gallery (1).png",

      bottomBig: "/projects/keiton/gallery (2).png",
    },
    story: {
      approach: {
        intro:
          "KEITON's design was driven by a retail truth: a premium product deserves a premium path to purchase. Every screen — from the editorial hero to the drop counter — was built to move shoppers from inspiration to checkout without friction.",
        points: [
          {
            label: "Vision and Innovation",
            text: "Rather than a conventional storefront, KEITON was envisioned as an ecosystem — high-impact editorial heroes, brand carousels, and category gateways working together to make discovery feel curated rather than catalogued.",
          },
          {
            label: "Identifying Unique Challenges",
            text: "Athletic streetwear shoppers are famously decisive but easily distracted. The challenge was compressing the browse-to-buy journey while still delivering enough editorial energy to keep premium products feeling exclusive.",
          },
          {
            label: "Resolving Complex Problems",
            text: "I solved this by layering conversion tools directly into the discovery flow: customizable sidebar product filters with micro-interaction drop counters, high-contrast product cards carrying social proof, and structured carousels that surface the brand ecosystem without overwhelming the grid.",
          },
          {
            label: "User-Centric Design",
            text: "Navigation, filtering, and product scannability were designed around how shoppers window-shop first and compare second. Cards lead with price, rating, and availability so the eye lands on the deciding factors immediately.",
          },
          {
            label: "Meeting User Needs",
            text: "Verified customer review grids answer pre-purchase doubt where it forms, and cross-device responsiveness ensures the same premium experience from a phone on the go to a desktop deep-dive.",
          },
        ],
      },
      pages: [
        {
          label: "Homepage",
          description:
            "Editorial hero fused with brand ecosystem carousels — the first screen sells the lifestyle, not just the shoe.",
        },
        {
          label: "Category Gateway",
          description:
            "Interactive category tiles that make exploration feel curated, guiding visitors toward footwear or streetwear without a click-tax.",
        },
        {
          label: "Product Listing",
          description:
            "Customizable sidebar product filters paired with micro-interaction drop counters for fast, precise refinement.",
        },
        {
          label: "Product Cards",
          description:
            "High-contrast cards carrying price, rating, and availability — engineered to be scanned and compared in seconds.",
        },
        {
          label: "Reviews",
          description:
            "Verified customer review grid that places social proof directly in the decision path.",
        },
        {
          label: "Cart",
          description:
            "Conversion-focused cart that preserves momentum from listing to checkout.",
        },
      ],
      conclusion:
        "KEITON proves that performance retail is a design discipline. By marrying editorial energy with surgical conversion mechanics, the store keeps shoppers inspired on the surface and decisive underneath — a balance that turns browsing into buying.",
    },
  },
];
