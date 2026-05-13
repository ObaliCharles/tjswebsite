import facial from "@/assets/facial.jpg";
import massage from "@/assets/massage.jpg";
import makeup from "@/assets/makeup.jpg";
import scrub from "@/assets/scrub.jpg";
import wellness from "@/assets/wellness.jpg";
import serum from "@/assets/product-serum.jpg";
import cream from "@/assets/product-cream.jpg";
import oil from "@/assets/product-oil.jpg";
import lips from "@/assets/product-lips.jpg";

export const formatUGX = (n: number) =>
  `UGX ${n.toLocaleString("en-UG")}`;

export type Service = {
  slug: string;
  name: string;
  category: string;
  duration: string;
  price: number;
  image: string;
  short: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "specialized-facials",
    name: "Specialized Facials",
    category: "Skin Care",
    duration: "60 min",
    price: 120000,
    image: facial,
    short: "Targeted facial treatments for radiant, healthy skin.",
    description:
      "Our specialized facials are tailored to your unique skin type — from deep cleansing and hydration to brightening and anti-ageing therapies, using premium botanical ingredients.",
  },
  {
    slug: "massage-therapy",
    name: "Massage Therapy",
    category: "Spa",
    duration: "75 min",
    price: 150000,
    image: massage,
    short: "Relaxing full-body massage for total wellness.",
    description:
      "Unwind with our signature massage therapy — Swedish, deep tissue, hot stone, and aromatherapy options to release tension and restore balance.",
  },
  {
    slug: "makeup",
    name: "Professional Makeup",
    category: "Beauty",
    duration: "90 min",
    price: 200000,
    image: makeup,
    short: "Bridal, event and editorial makeup artistry.",
    description:
      "From soft glam to bridal perfection — our makeup artists craft a flawless look that lasts all day. Trial sessions available.",
  },
  {
    slug: "body-scrubs",
    name: "Face & Body Scrubs",
    category: "Spa",
    duration: "45 min",
    price: 90000,
    image: scrub,
    short: "Exfoliating scrubs that reveal soft, glowing skin.",
    description:
      "Natural sugar, coffee and salt scrubs that gently exfoliate and nourish, leaving skin polished and luminous.",
  },
  {
    slug: "wellness",
    name: "Wellness Rituals",
    category: "Wellness",
    duration: "120 min",
    price: 280000,
    image: wellness,
    short: "Holistic rituals for body, mind and spirit.",
    description:
      "A complete wellness journey: steam, scrub, massage, and herbal tea — designed to reset and renew.",
  },
  {
    slug: "skin-care",
    name: "Skin Care Consultation",
    category: "Skin Care",
    duration: "30 min",
    price: 50000,
    image: facial,
    short: "Personalized skincare routine built for you.",
    description:
      "One-on-one consultation with our skin specialist to analyze your skin and build a routine that works.",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "glow-serum",
    name: "Radiance Glow Serum",
    category: "Skincare",
    price: 85000,
    image: serum,
    badge: "New",
    description: "Vitamin C + botanical serum for luminous skin.",
  },
  {
    slug: "rose-cream",
    name: "Rose Hydrating Cream",
    category: "Skincare",
    price: 95000,
    image: cream,
    badge: "Best Seller",
    description: "Deep moisture with rose extract and hyaluronic acid.",
  },
  {
    slug: "body-oil",
    name: "Botanical Body Oil",
    category: "Body",
    price: 70000,
    image: oil,
    description: "Nourishing oil blend with eucalyptus and jojoba.",
  },
  {
    slug: "lip-collection",
    name: "Signature Lip Collection",
    category: "Makeup",
    price: 60000,
    image: lips,
    badge: "Limited",
    description: "Long-wear matte lipsticks in five flattering shades.",
  },
  {
    slug: "coffee-scrub",
    name: "Coffee Body Scrub",
    category: "Body",
    price: 45000,
    image: scrub,
    description: "Energising exfoliator with Ugandan coffee grounds.",
  },
  {
    slug: "facial-mist",
    name: "Hydrating Facial Mist",
    category: "Skincare",
    price: 40000,
    image: serum,
    description: "Refreshing mist with rosewater and aloe.",
  },
  {
    slug: "night-cream",
    name: "Overnight Recovery Cream",
    category: "Skincare",
    price: 110000,
    image: cream,
    description: "Restorative night cream with retinol and shea.",
  },
  {
    slug: "lash-set",
    name: "Lash & Brow Set",
    category: "Makeup",
    price: 55000,
    image: lips,
    description: "Pro mascara, brow pencil and tinted gel.",
  },
];
