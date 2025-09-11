import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);

  const trustedBrands = [
    { name: "Canadian Solar", logo: "/images/brands/canadian-solar.jpg" },
    { name: "Unirac", logo: "/images/brands/unirac.jpg" },
    { name: "Longi", logo: "/images/brands/longi.jpg" },
    { name: "Victron", logo: "/images/brands/victron.jpg" },
    { name: "Enphase", logo: "/images/brands/enphase.jpg" },
    { name: "SolarEdge", logo: "/images/brands/solaredge.png" },
    { name: "IronRidge", logo: "/images/brands/ironridge.png" },
    { name: "QCELLS", logo: "/images/brands/qcells.jpg" },
    { name: "REC", logo: "/images/brands/rec.jpg" },
    { name: "Hyundai", logo: "/images/brands/hyundai.png" },
    { name: "Jinko", logo: "/images/brands/jinko.jpg" },
    { name: "Fronius", logo: "/images/brands/fronius.png" },
    { name: "Schneider", logo: "/images/brands/schneider.jpg" },
    { name: "Midnite", logo: "/images/brands/midnite.webp" },
    { name: "Tesla", logo: "/images/brands/tesla.jpg" },
    { name: "SnapNrack", logo: "/images/brands/snaprack.png" }
  ];

  const solarImages = [
    {
      src: "/images/solar-array/solar-1.png",
      alt: "Solar panel array installation"
    },
    {
      src: "/images/solar-array/solar-2.png",
      alt: "Residential solar panel system"
    },
    {
      src: "/images/solar-array/solar-3.png",
      alt: "Commercial solar installation"
    }
  ];

  useEffect(() => {
    const brandInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(trustedBrands.length / 4));
    }, 3000);
    
    const imageInterval = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % solarImages.length);
    }, 4000);
    
    return () => {
      clearInterval(brandInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const categories = [
    {
      title: "Solar Panels",
      copy: "High‑efficiency mono & bifacial modules.",
      points: ["400–600W options", "Tier‑1 vendors", "25–30yr performance"],
      icon: <PanelIcon />,
    },
    {
      title: "Inverters",
      copy: "Hybrid, string & microinverters for any topology.",
      points: ["High/low voltage", "Rapid shutdown", "App monitoring"],
      icon: <InverterIcon />,
    },
    {
      title: "Batteries",
      copy: "Lithium iron phosphate storage — safe & scalable.",
      points: ["Rack‑mount & wall", "UPS/backup", "10yr warranty"],
      icon: <BatteryIcon />,
    },
    {
      title: "Racking & Mounts",
      copy: "Roof, ground, carport & tracking systems.",
      points: ["Stamped letters", "Wind/snow rated", "Rapid install"],
      icon: <RackingIcon />,
    },
    {
      title: "Complete Kits",
      copy: "Off‑grid, grid‑tie & hybrid kits — DIY or turnkey.",
      points: ["Residential", "Commercial", "Mobile/RV/Marine"],
      icon: <KitIcon />,
    },
    {
      title: "EV Chargers",
      copy: "Level‑2 smart charging integrated with solar.",
      points: ["Wi‑Fi control", "Utility rebates", "Load balancing"],
      icon: <EVIcon />,
    },
  ];

  const kits = [
    {
      name: "Grid‑Tie Starter (5 kW)",
      bullet: ["14x 370–400W panels", "1‑phase string inverter", "Roof racking"],
      price: "From $6,990",
    },
    {
      name: "Hybrid Home (10 kW + 10 kWh)",
      bullet: ["24x 410–450W panels", "Hybrid inverter", "10 kWh LiFePO₄"],
      price: "From $15,900",
    },
    {
      name: "Off‑Grid Pro (8 kW + 20 kWh)",
      bullet: ["20x 450–500W panels", "48V inverter/charger", "20 kWh LiFePO₄"],
      price: "From $21,800",
    },
  ];

  const faqs = [
    {
      q: "Grid‑tie vs hybrid vs off‑grid — what's the difference?",
      a: "Grid‑tie exports surplus to the utility with no batteries. Hybrid adds batteries for backup and time‑of‑use shifting. Off‑grid operates independently from the grid with appropriately sized storage and generator backup.",
    },
    {
      q: "How long does installation take?",
      a: "Typical residential timelines are 4–8 weeks end‑to‑end: site survey, engineering, permits, installation, inspection, and PTO (permission to operate). Commercial timelines vary with utility and AHJ complexity.",
    },
    {
      q: "Do you provide stamped engineering letters?",
      a: "Yes — for roof and ground systems we provide structural calcs, stamped letters, BOM, and layout drawings as part of our design package.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Solar Panel Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-orange-500/15 to-orange-400/10"></div>
        
        {/* Solar Panel Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700/5 via-transparent to-orange-600/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="grid grid-cols-12 gap-1 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="bg-orange-600/10 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Solar Panel Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-10 animate-pulse">
            <div className="w-16 h-16 bg-orange-600 rounded-lg shadow-lg"></div>
          </div>
          <div className="absolute top-40 right-20 opacity-8 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="w-12 h-12 bg-orange-500 rounded-lg shadow-lg"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 opacity-6 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="w-14 h-14 bg-orange-400 rounded-lg shadow-lg"></div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Clean power that pays for itself.
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-2xl">
                Shop pro‑grade solar equipment or get a turnkey install. We'll design, permit,
                and deliver a system that maximizes ROI and reliability — residential or commercial.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center rounded-xl bg-orange-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-orange-800">
                  Shop Kits
                </Link>
                <Link to="/services" className="inline-flex items-center rounded-xl border border-orange-400 px-5 py-3 text-sm font-semibold hover:bg-white">
                  Free Design & BOM
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
                {[
                  ["Up to", "45% lower bills"],
                  ["Installs", "4–8 weeks"],
                  ["Warranty", "25–30 yrs"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-orange-300 bg-white p-4">
                    <dt className="text-xs uppercase tracking-wide text-slate-500">{k}</dt>
                    <dd className="mt-1 text-base font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white/95 backdrop-blur shadow-lg ring-1 ring-orange-300 p-4 sm:p-6">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-400/20 flex items-center justify-center relative overflow-hidden">
                  {/* Solar Panel Array Sliding Banner */}
                  <div className="flex transition-transform duration-500 ease-in-out w-full h-full" 
                       style={{ transform: `translateX(-${currentImageSlide * 100}%)` }}>
                    {solarImages.map((image, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className={`w-full object-contain rounded-2xl ${
                            index === 0 || index === 1 ? 'h-full scale-[1.11]' : 
                            index === 2 ? 'h-full scale-x-[1.25]' : 'h-full'
                          }`}
                          style={{ objectPosition: 'center' }}
                          onError={(e) => {
                            // Fallback to CSS grid if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
                          <div className="grid grid-cols-3 gap-2 transform rotate-12 scale-75">
                            {[...Array(9)].map((_, i) => (
                              <div key={i} className="w-16 h-12 bg-gradient-to-br from-orange-600/40 to-orange-500/30 rounded-sm border border-orange-400/50 shadow-sm relative">
                                <div className="absolute inset-1 bg-gradient-to-br from-orange-500/60 to-orange-400/40 rounded-sm"></div>
                                <div className="absolute top-1 left-1 right-1 h-0.5 bg-orange-300/70"></div>
                                <div className="absolute top-3 left-1 right-1 h-0.5 bg-orange-300/70"></div>
                                <div className="absolute top-5 left-1 right-1 h-0.5 bg-orange-300/70"></div>
                                <div className="absolute top-7 left-1 right-1 h-0.5 bg-orange-300/70"></div>
                                <div className="absolute top-9 left-1 right-1 h-0.5 bg-orange-300/70"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Image Navigation Dots */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {solarImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageSlide ? 'bg-orange-600' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Full‑service or DIY: compare kits, components and financing in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Sliding Banner */}
      <section aria-label="Trusted brands" className="py-10 border-y border-orange-300 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Trusted equipment & mounting</p>
          
          {/* Sliding Banner Container */}
          <div className="mt-4 relative">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: Math.ceil(trustedBrands.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-stretch opacity-80">
                    {trustedBrands.slice(slideIndex * 4, (slideIndex + 1) * 4).map((brand) => (
                      <div key={brand.name} className="flex items-center justify-center rounded-xl border border-orange-300 px-4 py-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className={`h-28 w-auto object-contain transition-all duration-300 ${
                            brand.name === "Canadian Solar" ? "mt-1" : ""
                          }`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span className="text-sm font-semibold text-slate-700 hidden">{brand.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(trustedBrands.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-orange-600' : 'bg-orange-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Products & Components</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Build your system with bankable modules, smart inverters, safe LiFePO₄ batteries and engineered racking.
              </p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-orange-800 hover:text-orange-900">See kits →</Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article key={c.title} className="group rounded-3xl border border-orange-300 bg-white p-6 hover:shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-800">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{c.copy}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2"><CheckIcon /><span>{p}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Why choose SUNSYNC Hardware</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Price transparency"
              body="No pushy sales — instant kit pricing and clear labor breakouts."
            />
            <Feature
              title="Bankable equipment"
              body="Tier‑1 modules, UL‑listed inverters and storage with long warranties."
            />
            <Feature
              title="Permits & engineering"
              body="AHJ‑ready plan sets with structural calcs and stamped letters."
            />
          </div>
        </div>
      </section>

      {/* Kits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Popular Kits & Bundles</h2>
              <p className="mt-2 text-slate-600">DIY‑ready or installed by our certified partners. Financing available.</p>
            </div>
            <Link to="/quote" className="text-sm font-semibold text-orange-800 hover:text-orange-900">Ask an expert →</Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kits.map((k) => (
              <article key={k.name} className="rounded-3xl border border-orange-300 bg-white p-6">
                <h3 className="text-lg font-semibold">{k.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {k.bullet.map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckIcon /><span>{b}</span></li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-base font-semibold">{k.price}</p>
                  <Link to="/quote" className="text-sm font-semibold text-orange-800 hover:text-orange-900">Configure →</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-orange-300 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-700">
                Not sure what to pick? Start with a quick load profile and we'll recommend a kit sized for your home or business.
              </p>
              <Link to="/services" className="inline-flex items-center rounded-xl bg-orange-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-800">Start sizing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-orange-300 overflow-hidden rounded-3xl border border-orange-300 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group open:!bg-orange-100/40 open:!border-orange-300">
                <summary className="cursor-pointer list-none px-5 py-4 font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="px-5 pb-5 text-slate-700 text-sm">{f.a}</div>
                <div className="h-px bg-orange-300" />
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, body }) {
  return (
    <div className="rounded-3xl border border-orange-300 bg-white p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-800 mb-3"><ShieldIcon /></div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-700">{body}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2" />
      <line x1="9" y1="12" x2="15" y2="12" strokeWidth="2" />
      <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" />
    </svg>
  );
}

function InverterIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <path d="M9 9h6v6H9z" strokeWidth="2" />
      <path d="M12 6v3M12 15v3" strokeWidth="2" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" strokeWidth="2" />
      <line x1="22" y1="11" x2="22" y2="13" strokeWidth="2" />
      <line x1="6" y1="11" x2="6" y2="13" strokeWidth="2" />
    </svg>
  );
}

function RackingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4 9-4" strokeWidth="2" />
    </svg>
  );
}

function KitIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeWidth="2" />
    </svg>
  );
}

function EVIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" />
    </svg>
  );
}

