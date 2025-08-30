import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      title: "System Design & Engineering",
      description: "Professional solar system design with structural engineering and permit-ready documentation.",
      features: [
        "Site assessment & shading analysis",
        "Energy production modeling",
        "Structural engineering calculations",
        "Permit-ready plan sets",
        "Stamped engineering letters",
        "Bill of materials (BOM)"
      ],
      icon: "📐",
      price: "From $500",
      duration: "1-2 weeks"
    },
    {
      title: "Installation Services",
      description: "Turnkey installation by certified technicians with quality assurance and warranty coverage.",
      features: [
        "Certified NABCEP installers",
        "Roof & ground mounting",
        "Electrical integration",
        "Grid interconnection",
        "System commissioning",
        "Quality inspection"
      ],
      icon: "🔧",
      price: "From $2.50/W",
      duration: "4-8 weeks"
    },
    {
      title: "Maintenance & Monitoring",
      description: "Ongoing system monitoring, maintenance, and performance optimization services.",
      features: [
        "24/7 system monitoring",
        "Performance reporting",
        "Preventive maintenance",
        "Troubleshooting support",
        "Warranty management",
        "Annual inspections"
      ],
      icon: "📊",
      price: "From $200/year",
      duration: "Ongoing"
    },
    {
      title: "Financing Solutions",
      description: "Flexible financing options including loans, leases, and power purchase agreements.",
      features: [
        "Solar loans (0% down)",
        "Equipment leasing",
        "Power purchase agreements",
        "Tax credit optimization",
        "Utility rebate assistance",
        "Credit application support"
      ],
      icon: "💰",
      price: "0% down available",
      duration: "15-25 years"
    },
    {
      title: "Technical Support",
      description: "Expert technical support for DIY installers and system troubleshooting.",
      features: [
        "Installation guidance",
        "Technical documentation",
        "Video tutorials",
        "Phone & email support",
        "Remote diagnostics",
        "Parts replacement"
      ],
      icon: "🛠️",
      price: "Free with purchase",
      duration: "Lifetime"
    },
    {
      title: "Energy Storage Solutions",
      description: "Battery storage design and installation for backup power and energy independence.",
      features: [
        "Battery sizing & selection",
        "Backup power design",
        "Load management",
        "Grid independence",
        "Emergency power",
        "Time-of-use optimization"
      ],
      icon: "🔋",
      price: "From $8,000",
      duration: "2-4 weeks"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free consultation to understand your energy needs and goals.",
      icon: "📞"
    },
    {
      step: "02",
      title: "Site Assessment",
      description: "Comprehensive site evaluation including roof analysis and shading study.",
      icon: "🏠"
    },
    {
      step: "03",
      title: "System Design",
      description: "Custom system design with energy modeling and engineering calculations.",
      icon: "📐"
    },
    {
      step: "04",
      title: "Permitting",
      description: "Handle all permits and utility interconnection applications.",
      icon: "📋"
    },
    {
      step: "05",
      title: "Installation",
      description: "Professional installation by certified technicians.",
      icon: "🔧"
    },
    {
      step: "06",
      title: "Commissioning",
      description: "System testing, inspection, and utility approval.",
      icon: "✅"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Solar Services & Solutions
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide comprehensive solar services 
            to ensure your system delivers maximum performance and return on investment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl border border-orange-300 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="font-medium text-orange-700">{service.price}</span>
                    <span>•</span>
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/quote" 
                className="inline-flex items-center justify-center w-full rounded-xl bg-orange-700 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-800 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We make going solar simple with our proven 6-step process from consultation to commissioning.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl border border-orange-300 p-6 text-center">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="text-2xl font-bold text-orange-700 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose SUNSYNC Services?</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Professional expertise, quality assurance, and ongoing support for your solar investment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Certified Installers",
                description: "NABCEP certified technicians with years of experience",
                icon: "🏆"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality control and testing procedures",
                icon: "✅"
              },
              {
                title: "Warranty Coverage",
                description: "Comprehensive warranty on workmanship and equipment",
                icon: "🛡️"
              },
              {
                title: "Ongoing Support",
                description: "Lifetime technical support and maintenance services",
                icon: "📞"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-orange-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl border border-orange-300 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your solar needs and get a custom quote 
              for your project. No obligation, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quote" 
                className="inline-flex items-center justify-center rounded-xl bg-orange-700 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-800 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-xl border border-orange-300 px-6 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
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

