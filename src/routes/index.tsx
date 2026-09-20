import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QuoteDialog } from "@/components/quote-dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bluegrass Carpet Pros | Carpet, Floor & Air Duct Cleaning" },
      {
        name: "description",
        content:
          "Bluegrass Carpet Pros provides deep-cleaning services for carpets, floors, and air ducts for homes and businesses. Trusted, professional, and satisfaction guaranteed.",
      },
      { property: "og:title", content: "Bluegrass Carpet Pros | Carpet, Floor & Air Duct Cleaning" },
      {
        property: "og:description",
        content:
          "Professional residential and commercial carpet, floor, and air duct cleaning. Get a free quote today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "(502) 501-3397";
const EMAIL = "bluegrasscarpetpros@gmail.com";
const BUSINESS_NAME = "Bluegrass Carpet Pros";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function CarpetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 19h18M4 19V8a2 2 0 012-2h12a2 2 0 012 2v11M7 19v-9M10 19v-9M13 19v-9M16 19v-9" strokeLinecap="round" />
    </svg>
  );
}

function FloorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 20h18M3 16h18M3 12h18M3 8h18M3 4h18" strokeLinecap="round" />
    </svg>
  );
}

function DuctIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M6 14h.01M10 12h.01M14 12h.01M18 10h.01M18 14h.01" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" strokeLinecap="round" />
      <path d="M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" strokeLinecap="round" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM19 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
    </svg>
  );
}

function Header({ onGetQuote }: { onGetQuote: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
          <img
            src="/images/blue-grass-logo.png"
            alt="Bluegrass Carpet Pros logo"
            className="h-8 w-8 object-contain md:h-9 md:w-9"
          />
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight md:text-lg">{BUSINESS_NAME}</span>
            <span className="hidden text-[10px] font-medium tracking-wide text-muted-foreground sm:inline">
              Carpet · Floor · Air Duct Cleaning
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`tel:${PHONE.replace(/\s|-/g, "")}`} className="text-sm font-semibold text-primary hover:underline">
            {PHONE}
          </a>
          <button
            type="button"
            onClick={onGetQuote}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Get a Free Quote
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-tight flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href={`tel:${PHONE.replace(/\s|-/g, "")}`}
                className="inline-flex items-center gap-2 px-3 text-base font-semibold text-primary"
              >
                <PhoneIcon className="h-5 w-5" />
                {PHONE}
              </a>
              <button
                type="button"
                className="mx-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={() => {
                  setMobileOpen(false);
                  onGetQuote();
                }}
              >
                Get a Free Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section id="hero" className="relative flex min-h-[600px] items-center md:min-h-[700px]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-carpet.jpg"
          alt="Bright, clean living room with freshly cleaned carpet"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
      </div>

      <div className="container-tight relative z-10 py-20 md:py-28">
        <div className="max-w-2xl text-primary-foreground">
          <p className="mb-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            Serving homes & businesses across the Bluegrass region
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Deep-Cleaned Carpets, Floors & Air Ducts for a Healthier Space
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
            Trusted residential and commercial cleaning that removes dirt, allergens, and odors, so
            you can breathe easier and love your floors again.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onGetQuote}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-base font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-white/95"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${PHONE.replace(/\s|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {PHONE}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-white/90">
            <span className="flex items-center gap-1.5">
              <ShieldIcon className="h-5 w-5" /> Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <SparklesIcon className="h-5 w-5" /> Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: CarpetIcon,
    title: "Carpet Cleaning",
    description: "Hot-water extraction lifts embedded dirt, stains, and allergens from carpet fibers for a fresh, like-new feel.",
  },
  {
    icon: FloorIcon,
    title: "All Types of Floors",
    description: "Safe, specialized care for tile, hardwood, vinyl, laminate, and more, restored to a spotless shine.",
  },
  {
    icon: DuctIcon,
    title: "Air Duct Cleaning",
    description: "Remove dust and buildup from your HVAC system to improve indoor air quality and system efficiency.",
  },
  {
    icon: HomeIcon,
    title: "Residential Cleaning",
    description: "From living rooms to bedrooms, we help your family enjoy a cleaner, healthier home environment.",
  },
  {
    icon: BuildingIcon,
    title: "Commercial Cleaning",
    description: "Keep offices, retail spaces, and facilities looking professional with flexible scheduling and minimal disruption.",
  },
];

function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Cleaning Services You Can Count On
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From carpets to air ducts, we deliver a deeper clean for homes and businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex rounded-xl bg-brand-50 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trustBadges = [
  {
    icon: AwardIcon,
    title: "Experienced Technicians",
    description: "Skilled professionals trained in the latest cleaning methods and equipment.",
  },
  {
    icon: ShieldIcon,
    title: "Safe & Effective Cleaning",
    description: "Family- and pet-friendly products that are tough on grime but gentle on surfaces.",
  },
  {
    icon: SparklesIcon,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work. If you're not happy, we'll make it right.",
  },
  {
    icon: UsersIcon,
    title: "Serving Homes & Businesses",
    description: "Flexible scheduling and reliable service for residential and commercial clients alike.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-brand-50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Bluegrass Carpet Pros?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're committed to cleaner spaces, healthier air, and complete customer satisfaction.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="text-center">
              <div className="mx-auto inline-flex rounded-full bg-white p-4 text-primary shadow-sm">
                <badge.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{badge.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Technician steam cleaning a residential carpet" },
  { src: "/images/gallery-2.jpg", alt: "Before and after carpet cleaning comparison" },
  { src: "/images/gallery-3.jpg", alt: "Polished hardwood and tile entryway floors" },
  { src: "/images/gallery-4.jpg", alt: "Clean commercial office carpet and workspace" },
  { src: "/images/gallery-5.jpg", alt: "Clean HVAC air duct vent on ceiling" },
  { src: "/images/gallery-6.jpg", alt: "Freshly cleaned carpet in a bright bedroom" },
];

function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            See the Difference a Professional Clean Makes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real results from carpets, floors, and spaces we've transformed.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={944}
                height={704}
                className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah M.",
    location: "Lexington, KY",
    text: "Our carpets look brand new! The team was professional, on time, and the house smelled fresh for days. Highly recommend.",
  },
  {
    name: "James T.",
    location: "Richmond, KY",
    text: "They cleaned the air ducts in our office and the difference in air quality was noticeable immediately. Great commercial service.",
  },
  {
    name: "The Henderson Family",
    location: "Georgetown, KY",
    text: "Friendly technicians, fair pricing, and our tile floors have never looked better. We'll definitely call them again.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-brand-50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Hear from happy homeowners and business owners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-1 text-brand-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-card-foreground">"{review.text}"</p>
              <div className="mt-6">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onGetQuote }: { onGetQuote: () => void }) {
  const phoneHref = `tel:${PHONE.replace(/\s|-/g, "")}`;
  const emailHref = `mailto:${EMAIL}`;

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get Your Free Quote Today</h2>
              <p className="mt-4 text-lg text-white/90">
                Ready for a cleaner home or business? Send us a quick request, or call or email us, and we'll get back to you quickly.
              </p>
              <button
                type="button"
                onClick={onGetQuote}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-base font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-white/95"
              >
                Request a Free Quote
              </button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <a
                href={phoneHref}
                className="group flex min-w-0 items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <div className="shrink-0 rounded-full bg-white/20 p-3">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white/80">Call us</p>
                  <p className="break-words text-lg font-semibold">{PHONE}</p>
                </div>
              </a>

              <a
                href={emailHref}
                className="group flex min-w-0 items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <div className="shrink-0 rounded-full bg-white/20 p-3">
                  <EmailIcon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white/80">Email us</p>
                  <p className="break-words text-lg font-semibold">{EMAIL}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/20 pt-8 text-center sm:grid-cols-2 sm:text-left">
              <div className="flex items-start justify-center gap-3 sm:justify-start">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/80" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-sm text-white/80">Mon–Fri: 8am – 6pm</p>
                  <p className="text-sm text-white/80">Saturday: 9am – 2pm</p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-3 sm:justify-start">
                <LocationIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/80" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-sm text-white/80">Lexington, Richmond, Georgetown & surrounding Bluegrass communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const phoneHref = `tel:${PHONE.replace(/\s|-/g, "")}`;
  const emailHref = `mailto:${EMAIL}`;

  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container-tight">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2 text-primary">
              <img
                src="/images/blue-grass-logo.png"
                alt="Bluegrass Carpet Pros logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold">{BUSINESS_NAME}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional carpet, floor, and air duct cleaning for homes and businesses across the
              Bluegrass region.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  <span className="break-words">{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={emailHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <EmailIcon className="h-4 w-4 shrink-0" />
                  <span className="break-words">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <LocationIcon className="mt-0.5 h-4 w-4 shrink-0" />
                Lexington, KY and surrounding areas
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <>
      <Header onGetQuote={openQuote} />
      <main>
        <Hero onGetQuote={openQuote} />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact onGetQuote={openQuote} />
      </main>
      <Footer />
      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} phone={PHONE} />
    </>
  );
}
