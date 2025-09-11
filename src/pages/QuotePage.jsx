import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Project Details
    projectType: 'residential',
    systemSize: '',
    roofType: '',
    roofAge: '',
    currentBill: '',
    
    // Preferences
    budget: '',
    timeline: '',
    financing: 'no',
    batteryStorage: 'no',
    
    // Additional Information
    additionalInfo: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateEstimate = () => {
    const baseCost = 3.50; // $3.50 per watt
    const systemSize = parseFloat(formData.systemSize) || 0;
    const batteryCost = formData.batteryStorage === 'yes' ? 8000 : 0;
    
    const totalCost = (systemSize * 1000 * baseCost) + batteryCost;
    const federalCredit = totalCost * 0.30;
    const finalCost = totalCost - federalCredit;
    
    setEstimatedCost({
      totalCost: totalCost.toLocaleString(),
      federalCredit: federalCredit.toLocaleString(),
      finalCost: finalCost.toLocaleString(),
      monthlySavings: Math.round((systemSize * 100) * 0.12)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_sunsync'; // Replace with your EmailJS service ID
      const templateId = 'template_quote'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      // Prepare email template parameters
      const templateParams = {
        to_email: 'sales@sunsynchardware.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
        project_type: formData.projectType,
        system_size: formData.systemSize,
        roof_type: formData.roofType,
        roof_age: formData.roofAge,
        current_bill: formData.currentBill,
        budget: formData.budget,
        timeline: formData.timeline,
        financing: formData.financing,
        battery_storage: formData.batteryStorage,
        additional_info: formData.additionalInfo,
        estimated_cost: estimatedCost ? `$${estimatedCost.finalCost}` : 'Not calculated',
        monthly_savings: estimatedCost ? `$${estimatedCost.monthlySavings}` : 'Not calculated'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      console.log('Quote request submitted successfully:', formData);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        projectType: 'residential',
        systemSize: '',
        roofType: '',
        roofAge: '',
        currentBill: '',
        budget: '',
        timeline: '',
        financing: 'no',
        batteryStorage: 'no',
        additionalInfo: ''
      });
      setCurrentStep(1);
      setEstimatedCost(null);
      
    } catch (error) {
      console.error('Error sending quote request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Project Details" },
    { number: 3, title: "Preferences" },
    { number: 4, title: "Review & Submit" }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get Your Free Solar Quote
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get a customized solar quote in minutes. Our experts will design a system 
            that maximizes your savings and fits your budget.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-orange-700 border-orange-700 text-white' 
                    : 'border-orange-300 text-slate-400'
                }`}>
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-orange-700' : 'bg-orange-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-slate-600">
            {steps.map((step) => (
              <span key={step.number} className={currentStep === step.number ? 'text-orange-700 font-medium' : ''}>
                {step.title}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-orange-300 p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Personal Information</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
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
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-2">
                          State *
                        </label>
                        <select
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select State</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>
                          <option value="FL">Florida</option>
                          <option value="TX">Texas</option>
                          <option value="NY">New York</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="IL">Illinois</option>
                          <option value="OH">Ohio</option>
                          <option value="GA">Georgia</option>
                          <option value="NC">North Carolina</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-slate-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Details</h2>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="agricultural">Agricultural</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="systemSize" className="block text-sm font-medium text-slate-700 mb-2">
                        Estimated System Size (kW) *
                      </label>
                      <input
                        type="number"
                        id="systemSize"
                        name="systemSize"
                        required
                        min="1"
                        max="100"
                        step="0.1"
                        value={formData.systemSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g., 5.0"
                      />
                      <p className="text-sm text-slate-500 mt-1">
                        Typical residential systems are 3-10 kW. Leave blank if unsure.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="roofType" className="block text-sm font-medium text-slate-700 mb-2">
                          Roof Type
                        </label>
                        <select
                          id="roofType"
                          name="roofType"
                          value={formData.roofType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select Roof Type</option>
                          <option value="asphalt">Asphalt Shingle</option>
                          <option value="tile">Tile</option>
                          <option value="metal">Metal</option>
                          <option value="flat">Flat</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="roofAge" className="block text-sm font-medium text-slate-700 mb-2">
                          Roof Age (years)
                        </label>
                        <input
                          type="number"
                          id="roofAge"
                          name="roofAge"
                          min="0"
                          max="50"
                          value={formData.roofAge}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="e.g., 10"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currentBill" className="block text-sm font-medium text-slate-700 mb-2">
                        Average Monthly Electric Bill ($)
                      </label>
                      <input
                        type="number"
                        id="currentBill"
                        name="currentBill"
                        min="0"
                        value={formData.currentBill}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g., 150"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preferences</h2>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-20k">$10,000 - $20,000</option>
                        <option value="20k-30k">$20,000 - $30,000</option>
                        <option value="30k-50k">$30,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="over-1-year">Over 1 year</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="financing" className="block text-sm font-medium text-slate-700 mb-2">
                        Interested in Financing?
                      </label>
                      <select
                        id="financing"
                        name="financing"
                        value={formData.financing}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="no">No, paying cash</option>
                        <option value="yes">Yes, interested in financing</option>
                        <option value="maybe">Maybe, would like to learn more</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="batteryStorage" className="block text-sm font-medium text-slate-700 mb-2">
                        Interested in Battery Storage?
                      </label>
                      <select
                        id="batteryStorage"
                        name="batteryStorage"
                        value={formData.batteryStorage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="no">No, grid-tie only</option>
                        <option value="yes">Yes, backup power</option>
                        <option value="maybe">Maybe, would like to learn more</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Any special requirements, questions, or additional details..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Review & Submit</h2>
                    
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="font-semibold text-slate-900 mb-4">Project Summary</h3>
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                          <p><span className="font-medium">Email:</span> {formData.email}</p>
                          <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                          <p><span className="font-medium">Location:</span> {formData.city}, {formData.state}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">Project Type:</span> {formData.projectType}</p>
                          <p><span className="font-medium">System Size:</span> {formData.systemSize} kW</p>
                          <p><span className="font-medium">Budget:</span> {formData.budget}</p>
                          <p><span className="font-medium">Timeline:</span> {formData.timeline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        id="agree"
                        required
                        className="rounded border-orange-300 text-orange-600 focus:ring-orange-500"
                      />
                      <label htmlFor="agree" className="text-sm text-slate-700">
                        I agree to receive communications from SUNSYNC Hardware regarding my quote request.
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-3 rounded-xl bg-orange-700 text-white hover:bg-orange-800 transition-colors"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto px-6 py-3 rounded-xl bg-orange-700 text-white hover:bg-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>
                  )}
                </div>
              </form>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">Quote Request Submitted Successfully!</p>
                  <p className="text-sm">Thank you for your interest. We will contact you within 24 hours with a detailed proposal.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-medium">Error Submitting Quote Request</p>
                  <p className="text-sm">There was an error sending your quote request. Please try again or contact us directly at 409-797-6294.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Estimate */}
            <div className="bg-white rounded-3xl border border-orange-300 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Estimate</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="estimateSize" className="block text-sm font-medium text-slate-700 mb-2">
                    System Size (kW)
                  </label>
                  <input
                    type="number"
                    id="estimateSize"
                    min="1"
                    max="100"
                    step="0.1"
                    className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 5.0"
                    onChange={(e) => {
                      const size = parseFloat(e.target.value);
                      if (size > 0) {
                        const totalCost = size * 1000 * 3.50;
                        const federalCredit = totalCost * 0.30;
                        const finalCost = totalCost - federalCredit;
                        setEstimatedCost({
                          totalCost: totalCost.toLocaleString(),
                          federalCredit: federalCredit.toLocaleString(),
                          finalCost: finalCost.toLocaleString(),
                          monthlySavings: Math.round((size * 100) * 0.12)
                        });
                      } else {
                        setEstimatedCost(null);
                      }
                    }}
                  />
                </div>

                {estimatedCost && (
                  <div className="bg-orange-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Total Cost:</span>
                      <span className="font-semibold">${estimatedCost.totalCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Federal Credit (30%):</span>
                      <span className="font-semibold text-green-600">-${estimatedCost.federalCredit}</span>
                    </div>
                    <div className="border-t border-orange-200 pt-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Your Cost:</span>
                        <span className="font-bold text-lg">${estimatedCost.finalCost}</span>
                      </div>
                    </div>
                    <div className="text-center text-sm text-slate-600">
                      ~${estimatedCost.monthlySavings}/month savings
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Why Choose SUNSYNC?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Free consultation & design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>30% federal tax credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>25-year warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>0% down financing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Professional installation</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl border border-orange-300 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <span>409-797-6294</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>sales@sunsynchardware.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>Mon-Fri: 8AM-6PM EST</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

