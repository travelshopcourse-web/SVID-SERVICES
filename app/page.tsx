"use client";

import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showPortfolioBadge, setShowPortfolioBadge] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // Trigger animations after loader completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 2400); // Slightly after loader finishes (2200ms)

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === siteData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Client card scaling based on position
  useEffect(() => {
    const updateCardScales = () => {
      const cards = document.querySelectorAll('.client-card');
      const viewportWidth = window.innerWidth;
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const viewportCenter = viewportWidth / 2;
        
        // Calculate distance from viewport center (0 to 1)
        const distanceFromCenter = Math.abs(cardCenter - viewportCenter) / viewportCenter;
        
        // Scale based on position: 1.1 at center, 0.7 at edges (more dramatic)
        let scale = 1.1 - (distanceFromCenter * 0.4);
        scale = Math.max(0.7, Math.min(1.1, scale));
        
        // Translate Y based on scale
        const translateY = scale > 1.0 ? -12 : 0;
        
        // Apply transform
        (card as HTMLElement).style.transform = `scale(${scale}) translateY(${translateY}px)`;
        (card as HTMLElement).style.opacity = scale < 0.85 ? '0.5' : '1';
      });
    };

    // Update on animation frame for smooth updates
    let animationId: number;
    const animate = () => {
      updateCardScales();
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === siteData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? siteData.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_section/MAKKAHENTERTAINMENTMALLKSA.jpg"
            alt="Makkah Entertainment Mall"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Gradient overlays for better text visibility and aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/50 to-slate-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse z-[1]" />
        <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] bg-orange-600/15 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: '1s' }} />

        {/* ISO Certification Badge */}
        <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-[2] group px-2">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 via-orange-500/40 to-amber-500/40 rounded-full blur-md md:blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-7 md:py-3 rounded-full border border-white/40 md:border-2 text-white text-[10px] sm:text-xs md:text-sm font-bold opacity-0 animate-fade-in animate-float shadow-lg md:shadow-xl hover:shadow-2xl hover:border-amber-300/60 hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <span className="bg-gradient-to-r from-amber-100 via-white to-amber-100 bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap">
              {siteData.certification.name}
            </span>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="max-w-5xl mx-auto">
            <div className={`mb-8 inline-block transition-opacity duration-1000 ${isContentLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isContentLoaded ? '0.2s' : '0s' }}>
              <Image
                src={siteData.logo}
                alt={siteData.name}
                width={140}
                height={140}
                className="mx-auto drop-shadow-2xl animate-scale-pulse"
                priority
              />
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl transition-opacity duration-1000 ${isContentLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isContentLoaded ? '0.4s' : '0s' }}>
              {siteData.tagline}
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-opacity duration-1000 ${isContentLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isContentLoaded ? '0.6s' : '0s' }}>
              {siteData.description}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-opacity duration-1000 ${isContentLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isContentLoaded ? '0.8s' : '0s' }}>
              <Link
                href="/services"
                className={`group relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-700 ease-out shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-1 overflow-hidden border-2 border-orange-400/50 backdrop-blur-sm ${isContentLoaded ? 'animate-smooth-scale' : ''}`}
                style={{ animationDelay: isContentLoaded ? '0.9s' : '0s', animationFillMode: 'forwards', backgroundSize: '200% 100%' }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-orange-400 blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out -z-10"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:gap-4 transition-all duration-500 ease-out">
                  <svg className="w-6 h-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="tracking-wide">Our Services</span>
                  <svg className="w-5 h-5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className={`group relative bg-white/95 backdrop-blur-sm text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-700 ease-out shadow-2xl hover:shadow-white/30 hover:scale-105 hover:-translate-y-1 border-2 border-white overflow-hidden ${isContentLoaded ? 'animate-smooth-scale' : ''}`}
                style={{ animationDelay: isContentLoaded ? '1s' : '0s', animationFillMode: 'forwards' }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px'
                }}></div>
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out"></div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-orange-300 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 ease-out -z-10"></div>
                <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-500 ease-out flex items-center gap-3 group-hover:gap-4">
                  <svg className="w-6 h-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="tracking-wide">Contact Us</span>
                  <svg className="w-5 h-5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Scroll Indicator */}
            <div className={`mt-12 transition-opacity duration-700 ${isContentLoaded ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ transitionDelay: isContentLoaded ? '0.9s' : '0s' }}>
              <svg
                className="w-6 h-6 text-white mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="opacity-0 animate-slide-up group cursor-default" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110">150+</div>
              <p className="text-slate-600 font-medium transition-colors duration-300 group-hover:text-orange-600">Projects Completed</p>
            </div>
            <div className="opacity-0 animate-slide-up group cursor-default" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110">5+</div>
              <p className="text-slate-600 font-medium transition-colors duration-300 group-hover:text-orange-600">Years Experience</p>
            </div>
            <div className="opacity-0 animate-slide-up group cursor-default" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110">35+</div>
              <p className="text-slate-600 font-medium transition-colors duration-300 group-hover:text-orange-600">Happy Clients</p>
            </div>
            <div className="opacity-0 animate-slide-up group cursor-default" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110">8</div>
              <p className="text-slate-600 font-medium transition-colors duration-300 group-hover:text-orange-600">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side - Mobile: Top, Desktop: Left */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-slate-500/20 rounded-3xl blur-2xl"></div>
                <Image
                  src={siteData.about.image}
                  alt="About SVID Services"
                  width={600}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content Side - Mobile: Bottom, Desktop: Right */}
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                {siteData.about.title}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p className="text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  <strong className="text-slate-900">SVID Services</strong> is a leading structural and
                  architectural design firm based in Kerala, India, with regional
                  presence in Qatar and Saudi Arabia. We specialize in delivering
                  precise, innovative, and sustainable design solutions across
                  sectors.
                </p>
                <p className="opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  Our commitment to excellence is reflected in our wide array of
                  services, integrating advanced tools like BIM and 3D rendering to
                  help clients visualize, plan, and build effectively.
                </p>

                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 opacity-0 animate-slide-up hover:shadow-2xl hover:-translate-y-1 transition-all duration-500" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">Vision</h3>
                    <p className="text-slate-600 text-sm">
                      To be a global leader in architectural and structural design
                      innovation.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-slate-700 opacity-0 animate-slide-up hover:shadow-2xl hover:-translate-y-1 transition-all duration-500" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">Mission</h3>
                    <p className="text-slate-600 text-sm">
                      To empower construction with detailed, cost-effective, and future-ready design support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <Link
                  href="/about"
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 text-center hover:scale-105 overflow-hidden border border-orange-400/50"
                >
                  {/* Subtle grid */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn More
                  </span>
                </Link>
                <button
                  onClick={() => setShowPdfModal(true)}
                  className="group relative border border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-center hover:scale-105 overflow-hidden"
                >
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-orange-50 to-transparent"></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Portfolio
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Excellence in Every Project
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Experience world-class architectural and structural design services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-orange-200 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 md:mb-3 text-lg md:text-xl">ISO Certified</h3>
              <p className="text-slate-600 text-sm md:text-base">Quality assured processes and international standards compliance</p>
            </div>

            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-orange-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 md:mb-3 text-lg md:text-xl">On-Time Delivery</h3>
              <p className="text-slate-600 text-sm md:text-base">Committed to punctual project completion without compromising quality</p>
            </div>

            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-orange-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 md:mb-3 text-lg md:text-xl">Expert Team</h3>
              <p className="text-slate-600 text-sm md:text-base">Highly skilled architects, engineers and CAD professionals</p>
            </div>

            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-orange-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 md:mb-3 text-lg md:text-xl">Global Reach</h3>
              <p className="text-slate-600 text-sm md:text-base">Serving clients worldwide with successful projects across multiple continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Explore our diverse portfolio of successfully completed projects
            </p>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative group">
            {/* Left Arrow Button */}
            <button
              onClick={() => {
                const container = document.getElementById('projects-scroll');
                if (container) {
                  container.scrollBy({ left: -320, behavior: 'smooth' });
                }
              }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 border-2 border-slate-200 hover:border-orange-500 group/arrow"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-700 group-hover/arrow:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => {
                const container = document.getElementById('projects-scroll');
                if (container) {
                  container.scrollBy({ left: 320, behavior: 'smooth' });
                }
              }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 border-2 border-slate-200 hover:border-orange-500 group/arrow"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-700 group-hover/arrow:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Scrollable container */}
            <div id="projects-scroll" className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-4 md:gap-6 px-4 md:px-16">
                {[
                  { name: 'Al Qasswa, KSA', image: 'ALQASSWAKSA.jpg' },
                  { name: 'Carrefour Hypermarket, Qatar', image: 'CARREFOURHYPERMARKETQATAR.jpg' },
                  { name: 'City Center Mall, Qatar', image: 'CITYCENTERMALLQATAR.jpg' },
                  { name: 'Glass Bridge, India', image: 'GLASSBRIDGEINDIA.jpg' },
                  { name: 'Huzoom Villas, Qatar', image: 'HUZOOMVILLASQATAR.jpg' },
                  { name: 'Lusail City, Qatar', image: 'LUSAILCITYQATAR.jpg' },
                  { name: 'Magrabi Dust Extraction System', image: 'MAGRABIDUSTEXTRACTIONSYSTEMRASALKHAIMA.jpg' },
                  { name: 'Makkah Entertainment Mall, KSA', image: 'MAKKAHENTERTAINMENTMALLKSA.jpg' },
                  { name: 'Obhur Entertainment Complex, KSA', image: 'OBHURENTERTAINMENTCOMPLEXKSA.jpg' },
                  { name: 'One Step Deck Trailer, Oman', image: 'ONESTEPDECKTRAILEROMAN.jpg' },
                  { name: 'PWC Exhibition Booth, Qatar', image: 'PWCEXHIBITIONBOOTHQATAR.jpg' },
                  { name: 'Temple Building, Oman', image: 'TEMPLEBUILDINGOMAN.jpg' },
                  { name: 'Umm Shaif Metering Skid, UAE', image: 'UMMSHAIFMETERINGSKIDUAE.jpg' },
                  { name: 'Zakum Metering Skid Package, UAE', image: 'ZAKUMMETERINGSKIDPACKAGEDASISLANDUAE.jpg' }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="flex-none w-72 md:w-96 group/item relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <Image
                        src={`/hero_section/${project.image}`}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                        sizes="(max-width: 768px) 288px, 384px"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover/item:opacity-90 transition-opacity duration-300"></div>
                      
                      {/* Project name */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <h3 className="text-white font-bold text-base md:text-lg leading-tight drop-shadow-lg">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Comprehensive Design Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From concept to completion, we deliver excellence in every aspect of design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg text-lg">
                    {String(service.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/services"
              className="group relative inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 overflow-hidden border border-orange-400/50"
            >
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">View All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-slate-100 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg animate-fade-in-up border border-orange-200">
              ✨ Our Clients
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6 animate-fade-in-up delay-150">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl animate-fade-in-up delay-300">
              Proud to serve leading construction and development companies worldwide
            </p>
          </div>

          {/* Infinite Horizontal Scrolling Carousel */}
          <div className="relative">
            <div className="overflow-hidden py-8">
              <div className="flex animate-scroll-smooth hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
                {/* First set of logos */}
                {siteData.clients.map((client) => (
                  <div
                    key={`first-${client.id}`}
                    className="client-card group relative flex-shrink-0 mx-4 w-64 h-40 flex items-center justify-center bg-white rounded-3xl border-2 border-orange-400 shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:!scale-110 hover:!-translate-y-3 hover:border-orange-500 hover:shadow-orange-500/40"
                  >
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={180}
                        height={140}
                        className="object-contain w-full h-full transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                        unoptimized
                        priority
                      />
                    </div>
                    
                    {/* Animated gradient background - visible by default */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/20 via-orange-400/25 to-amber-500/20 rounded-3xl group-hover:from-orange-500/30 group-hover:via-orange-400/40 group-hover:to-amber-500/30 transition-all duration-500 -z-10 blur-xl" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {siteData.clients.map((client) => (
                  <div
                    key={`second-${client.id}`}
                    className="client-card group relative flex-shrink-0 mx-4 w-64 h-40 flex items-center justify-center bg-white rounded-3xl border-2 border-orange-400 shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:!scale-110 hover:!-translate-y-3 hover:border-orange-500 hover:shadow-orange-500/40"
                  >
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={180}
                        height={140}
                        className="object-contain w-full h-full transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                        unoptimized
                        priority
                      />
                    </div>
                    
                    {/* Animated gradient background - visible by default */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/20 via-orange-400/25 to-amber-500/20 rounded-3xl group-hover:from-orange-500/30 group-hover:via-orange-400/40 group-hover:to-amber-500/30 transition-all duration-500 -z-10 blur-xl" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-in delay-700">
            <p className="text-slate-500 text-sm md:text-base italic">Serving 35+ clients across 8 countries including India, Qatar, and Saudi Arabia</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Commented out */}
      {/* <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] bg-slate-700/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-orange-500/20 backdrop-blur-sm text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Trusted by construction companies and developers serving the globe
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {siteData.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover ring-4 ring-orange-500/30 flex-shrink-0"
                        />
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="font-bold text-white text-xl mb-2">
                            {testimonial.name}
                          </h4>
                          <p className="text-slate-300 text-sm mb-3">
                            {testimonial.position}, {testimonial.company}
                          </p>
                          <div className="flex items-center gap-1 justify-center md:justify-start">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-orange-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-200 text-lg leading-relaxed italic text-center md:text-left mb-4">
                        "{testimonial.content}"
                      </p>
                      <p className="text-slate-400 text-sm text-center md:text-left">
                        📍 {testimonial.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all duration-300 z-10 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all duration-300 z-10 group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {siteData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-8 bg-orange-500' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team for a consultation. We're here to help bring your vision to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/contact"
              className="group relative bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-slate-300 overflow-hidden"
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-orange-700 transition-colors duration-300">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us Today
              </span>
            </Link>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}?text=I'm interested in your services`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-3 border border-green-400/50 overflow-hidden"
            >
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Portfolio Button - Always Visible */}
      <button
        onClick={() => {
          setShowPdfModal(true);
          setShowPortfolioBadge(false);
        }}
        className="fixed bottom-8 right-8 z-40 group"
        aria-label="View Portfolio"
      >
        <div className="relative">
          {/* Pulsing Ring Effect */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          {/* Badge - "View Portfolio" label */}
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
              View Portfolio
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          </div>
          
          {/* "New" Badge */}
          {showPortfolioBadge && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce shadow-lg">
              NEW
            </div>
          )}
        </div>
      </button>

      {/* PDF Viewer Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold">Portfolio</h3>
              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a
                  href="/portfolio.pdf"
                  download="SVID-Services-Portfolio.pdf"
                  className="group flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label="Download Portfolio"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-semibold text-sm">Download</span>
                </a>
                
                {/* Close Button */}
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="w-full h-[calc(100%-64px)]">
              <iframe
                src="/portfolio.pdf"
                className="w-full h-full"
                title="Portfolio PDF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
