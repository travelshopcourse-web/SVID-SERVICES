"use client";

import { useState, useEffect } from "react";
import { siteData } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitTime, setSubmitTime] = useState(0);
  const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    setSubmitTime(Date.now());
    generateMathChallenge();
  }, []);

  const generateMathChallenge = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathChallenge({ num1, num2, answer: num1 + num2 });
    setUserAnswer("");
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (value && !/^[\d\s\+\-\(\)]+$/.test(value)) return 'Please enter a valid phone number';
        if (value && value.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits';
        return '';
      case 'company':
        if (value && value.trim().length < 3) return 'Company name must be at least 3 characters';
        return '';
      case 'service':
        if (!value) return 'Please select a service';
        return '';
      case 'message':
        if (!value.trim()) return 'Project details are required';
        if (value.trim().length < 10) return 'Please provide at least 10 characters';
        if (value.trim().length > 1000) return 'Message must not exceed 1000 characters';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

    const timeSpent = Date.now() - submitTime;
    if (timeSpent < 3000) {
      setErrors({ submit: 'Please take your time filling out the form' });
      return;
    }
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (parseInt(userAnswer) !== mathChallenge.answer) {
      setErrors({ captcha: 'Incorrect answer. Please try again.' });
      generateMathChallenge();
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    
    const mailtoLink = `mailto:${siteData.contact.email}?subject=New Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setErrors({});
      setTouched({});
      setShowSuccess(false);
      generateMathChallenge();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const services = [
    "Structural Design",
    "Architectural Design",
    "MEP Design",
    "Steel Detailing",
    "BIM Services",
    "3D Rendering",
    "Project Consultation",
    "Other"
  ];

  return (
    <div className="pt-16">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white text-sm font-medium">💬 We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Get In Touch</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Ready to start your project? Let's discuss how we can help</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-600">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 font-medium">Message sent successfully! We'll be in touch soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white"
                        placeholder="John Doe"
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white"
                        placeholder="john@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white"
                        placeholder="Your Company"
                      />
                      {errors.company && touched.company && (
                        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Interest <span className="text-orange-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && touched.service && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Details <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                    <div className="flex justify-between items-center mt-1.5">
                      {errors.message && touched.message ? (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.message}
                        </p>
                      ) : (
                        <span></span>
                      )}
                      <span className="text-xs text-slate-500">{formData.message.length}/1000</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="captcha" className="block text-sm font-semibold text-slate-700 mb-2">
                      Security Check: What is {mathChallenge.num1} + {mathChallenge.num2}? <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="captcha"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        if (errors.captcha) {
                          setErrors({ ...errors, captcha: '' });
                        }
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none transition-all text-slate-900 placeholder-slate-400"
                      placeholder="Enter the answer"
                    />
                    {errors.captcha && (
                      <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{errors.captcha}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3.5 rounded-lg text-base font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-20 space-y-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">📍 Visit Our Office</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">{siteData.contact.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-100 transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900">Call Us</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <a href={`tel:${siteData.contact.phones.india}`} className="flex items-center justify-between text-slate-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-orange-50">
                      <span className="font-medium">India</span>
                      <span>{siteData.contact.phones.india}</span>
                    </a>
                    <a href={`tel:${siteData.contact.phones.qatar}`} className="flex items-center justify-between text-slate-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-orange-50">
                      <span className="font-medium">Qatar</span>
                      <span>{siteData.contact.phones.qatar}</span>
                    </a>
                    <a href={`tel:${siteData.contact.phones.saudi}`} className="flex items-center justify-between text-slate-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-orange-50">
                      <span className="font-medium">Saudi</span>
                      <span>{siteData.contact.phones.saudi}</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {siteData.contact.emails.map((email, idx) => (
                      <a key={idx} href={`mailto:${email}`} className="block text-slate-600 hover:text-blue-600 transition-colors p-2 rounded hover:bg-blue-50">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${siteData.contact.whatsapp}?text=Hi, I'd like to inquire about your services`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Main button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/50 group-active:scale-95">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-xl">
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
            </div>
          </div>
        </div>
      </a>

      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-orange-400 font-semibold text-xs md:text-sm">Find Us Here</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Visit Our Office</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">Experience our workspace and discuss your project in person</p>
          </div>

          {/* Map container with 3D effect */}
          <div className="max-w-6xl mx-auto">
            <div className="relative group perspective-1000">
              {/* Main map with 3D transform */}
              <div className="relative transform-gpu transition-transform duration-700 group-hover:scale-[1.02]">
                {/* Glow effect */}
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Map frame */}
                <div className="relative h-[450px] md:h-[550px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-white/10 shadow-2xl backdrop-blur">
                  {/* Corner accents - hidden on mobile, visible on md+ */}
                  <div className="hidden md:block absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-orange-500 rounded-tl-2xl"></div>
                  <div className="hidden md:block absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-r-4 border-orange-500 rounded-tr-2xl"></div>
                  <div className="hidden md:block absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 border-b-4 border-l-4 border-orange-500 rounded-bl-2xl"></div>
                  <div className="hidden md:block absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-orange-500 rounded-br-2xl"></div>

                  {/* Map iframe */}
                  <iframe
                    src={siteData.contact.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full saturate-110 contrast-110"
                  ></iframe>

                  {/* Address overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-sm p-4 md:p-6 lg:p-8">
                    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6 text-center md:text-left md:flex-row md:justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-2 md:mb-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <span className="text-orange-400 text-xs font-semibold">We're Here</span>
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">SVID Services</h3>
                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{siteData.contact.address}</p>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteData.contact.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <svg className="relative w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span className="relative">Get Directions</span>
                        <svg className="relative w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
