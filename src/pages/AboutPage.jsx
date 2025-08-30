import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Systems Installed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "25+", label: "States Served" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every system we design and install meets the highest industry standards.",
      icon: "🏆"
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We're here to guide you through every step of your solar journey.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve with the latest solar technology and best practices in the industry.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "We're committed to helping create a cleaner, more sustainable future for generations to come.",
      icon: "🌱"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "15+ years in renewable energy. Former VP at a Fortune 500 solar company.",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Expert in solar system design and energy storage solutions.",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Operations",
      bio: "Oversees all installation projects and customer service operations.",
      image: "👩‍🔧"
    },
    {
      name: "David Thompson",
      position: "Head of Sales",
      bio: "Helps customers find the perfect solar solution for their needs.",
      image: "👨‍💼"
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "SUNSYNC Hardware was founded with a mission to make solar energy accessible to everyone."
    },
    {
      year: "2012",
      title: "First 100 Installations",
      description: "Reached our first milestone of 100 successful solar installations across the region."
    },
    {
      year: "2016",
      title: "Expansion to 10 States",
      description: "Expanded operations to serve customers in 10 states across the country."
    },
    {
      year: "2019",
      title: "Battery Storage Launch",
      description: "Added energy storage solutions to our product portfolio."
    },
    {
      year: "2022",
      title: "500+ Systems Milestone",
      description: "Celebrated installing over 500 solar systems and helping customers save millions on energy costs."
    },
    {
      year: "2024",
      title: "National Recognition",
      description: "Recognized as one of the top solar companies in the nation for customer satisfaction."
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About SUNSYNC Hardware
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We're a leading solar energy company dedicated to making clean, renewable power 
            accessible and affordable for homes and businesses across the nation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-orange-700 mb-2">{stat.number}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl border border-orange-300 p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 mb-4">
              To accelerate the adoption of solar energy by providing high-quality, 
              affordable solar solutions that help our customers save money while 
              protecting the environment.
            </p>
            <p className="text-slate-600">
              We believe that clean energy should be accessible to everyone, and we're 
              committed to making the transition to solar as simple and cost-effective as possible.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 text-white">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-orange-100 mb-4">
              To be the most trusted name in solar energy, leading the transition to a 
              sustainable, clean energy future for all.
            </p>
            <p className="text-orange-100">
              We envision a world where every home and business is powered by clean, 
              renewable energy, creating a healthier planet for future generations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl border border-orange-300 p-6 text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the experienced professionals who are driving innovation and excellence in solar energy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl border border-orange-300 p-6 text-center">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-orange-700 mb-3">{member.position}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted leader in solar energy.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-300"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl border border-orange-300 p-6">
                      <div className="text-2xl font-bold text-orange-700 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-700 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="bg-white rounded-3xl border border-orange-300 p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Certifications & Awards</h2>
            <p className="text-slate-600">
              Our commitment to excellence has been recognized by industry leaders and satisfied customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "NABCEP Certified", description: "North American Board of Certified Energy Practitioners" },
              { title: "BBB A+ Rating", description: "Better Business Bureau Accredited Business" },
              { title: "SolarReviews Top Rated", description: "Consistently rated 5 stars by our customers" },
              { title: "EPA Green Power Partner", description: "Environmental Protection Agency recognition" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">🏅</div>
                <h3 className="font-semibold text-slate-900 mb-1">{cert.title}</h3>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Join the Solar Revolution?</h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Let our experienced team help you harness the power of the sun and start 
              saving money on your energy bills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quote" 
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-orange-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

