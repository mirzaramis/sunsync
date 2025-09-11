import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();

  const nav = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Quote", href: "/quote" },
  ];

  return (
    <div className="min-h-screen bg-orange-100 text-slate-900">

      {/* Promotional Banner */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center space-x-2">
                  <span className="text-orange-200">🔥</span>
                  <span>Limited Time: Free Solar Design Package ($500 Value)</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="text-orange-200">⚡</span>
                  <span>30% Federal Tax Credit Available</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="text-orange-200">📞</span>
                  <span>Call: 409-797-6294</span>
                </span>
              </div>
              <button 
                onClick={() => setBannerVisible(false)}
                className="text-white hover:text-orange-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-orange-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/sunsync-logo.jpg" 
                alt="SUNSYNC Hardware Logo" 
                className="h-16 w-32"
                onError={(e) => {
                  // Fallback to sun icon if logo image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-flex';
                }}
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-700" style={{display: 'none'}}>
                <SunIcon />
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <Link 
                  key={n.href} 
                  to={n.href} 
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === n.href 
                      ? 'text-orange-700' 
                      : 'text-slate-700 hover:text-orange-800'
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl bg-orange-700 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-800"
              >
                Call for Price
              </Link>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-orange-200">
              <MenuIcon />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-orange-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
              {nav.map((n) => (
                <Link 
                  key={n.href} 
                  to={n.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === n.href 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'hover:bg-orange-50'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="block rounded-md px-3 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700"
                onClick={() => setOpen(false)}
              >
                Call for Price
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img 
                src="/images/sunsync-logo.jpg" 
                alt="SUNSYNC Hardware Logo" 
                className="h-16 w-32"
                onError={(e) => {
                  // Fallback to sun icon if logo image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-flex';
                }}
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-700" style={{display: 'none'}}><SunIcon /></span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Solar made simple: premium components, engineered designs, and installs you can trust.</p>
          </div>
          <FooterCol title="Products" links={["Solar Panels", "Inverters", "Batteries", "Racking", "Kits", "EV Chargers"]} />
          <FooterCol title="Services" links={["Design Service", "Installation", "Maintenance", "Financing", "Support"]} />
          <FooterCol title="Company" links={["About Us", "Contact", "Careers", "Support", "Privacy Policy"]} />
        </div>
        <div className="border-t border-slate-200 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SUNSYNC Hardware Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-700">Privacy</a>
              <a href="#" className="hover:text-slate-700">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-slate-800">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

