import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      title: "Sales & Quotes",
      phone: "1-800-SUNSYNC",
      email: "sales@sunsync.com",
      hours: "Mon-Fri: 8AM-6PM EST"
    },
    {
      title: "Technical Support",
      phone: "1-800-SUNSYNC-2",
      email: "support@sunsync.com",
      hours: "24/7 Support Available"
    },
    {
      title: "Customer Service",
      phone: "1-800-SUNSYNC-3",
      email: "info@sunsync.com",
      hours: "Mon-Fri: 9AM-5PM EST"
    }
  ];

  const offices = [
    {
      city: "Headquarters",
      address: "123 Solar Street, Suite 100",
      cityState: "Phoenix, AZ 85001",
      phone: "(602) 555-0123",
      hours: "Mon-Fri: 8AM-6PM MST"
    },
    {
      city: "East Coast",
      address: "456 Renewable Road",
      cityState: "Boston, MA 02101",
      phone: "(617) 555-0456",
      hours: "Mon-Fri: 8AM-6PM EST"
    },
    {
      city: "West Coast",
      address: "789 Green Avenue",
      cityState: "San Francisco, CA 94101",
      phone: "(415) 555-0789",
      hours: "Mon-Fri: 8AM-6PM PST"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Contact SUNSYNC Hardware
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with our solar experts. We're here to help with quotes, 
            technical support, and any questions about your solar project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-orange-300 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="quote">Get a Quote</option>
                  <option value="support">Technical Support</option>
                  <option value="installation">Installation Services</option>
                  <option value="maintenance">Maintenance Services</option>
                  <option value="parts">Parts & Equipment</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl bg-orange-700 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="border-b border-orange-500 pb-4 last:border-b-0">
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <div className="space-y-1 text-sm text-orange-100">
                      <p>📞 {info.phone}</p>
                      <p>✉️ {info.email}</p>
                      <p>🕒 {info.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-3xl border border-orange-300 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Office Locations</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-orange-200 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-slate-900 mb-2">{office.city}</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>{office.address}</p>
                      <p>{office.cityState}</p>
                      <p>📞 {office.phone}</p>
                      <p>🕒 {office.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl border border-orange-300 p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer list-none font-medium text-slate-900 hover:text-orange-700">
                  How quickly do you respond to inquiries?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent technical support, we offer 24/7 phone support.
                </p>
              </details>
              
              <details className="group">
                <summary className="cursor-pointer list-none font-medium text-slate-900 hover:text-orange-700">
                  Do you provide free consultations?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes! We offer free initial consultations to discuss your solar needs, 
                  assess your site, and provide preliminary recommendations.
                </p>
              </details>
              
              <details className="group">
                <summary className="cursor-pointer list-none font-medium text-slate-900 hover:text-orange-700">
                  What areas do you serve?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  We serve customers nationwide with offices in Arizona, Massachusetts, 
                  and California. We can handle projects in all 50 states.
                </p>
              </details>
            </div>
            
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer list-none font-medium text-slate-900 hover:text-orange-700">
                  How do I schedule a site visit?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Contact our sales team to schedule a site visit. We'll send a qualified 
                  technician to assess your property and discuss installation options.
                </p>
              </details>
              
              <details className="group">
                <summary className="cursor-pointer list-none font-medium text-slate-900 hover:text-orange-700">
                  What warranty do you provide?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  We provide comprehensive warranties on all equipment and workmanship. 
                  Equipment warranties range from 10-30 years depending on the product.
                </p>
              </details>
              
              <details className="group">
                <summary className="cursor-pointer list-none font-medium text-slate-900 hover:text-orange-700">
                  Can you help with permits and utility interconnection?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Absolutely! We handle all permitting and utility interconnection applications 
                  as part of our full-service installation package.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Solar Journey?</h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Get a free consultation and quote for your solar project. 
              Our experts are ready to help you save money and reduce your carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:1-800-SUNSYNC" 
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50 transition-colors"
              >
                📞 Call Now: 1-800-SUNSYNC
              </a>
              <a 
                href="mailto:sales@sunsync.com" 
                className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-orange-700 transition-colors"
              >
                ✉️ Email Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

