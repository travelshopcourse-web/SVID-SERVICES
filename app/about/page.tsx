import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/data";

export const metadata = {
  title: `About Us | ${siteData.name}`,
  description: "Learn about SVID Services - A leading structural and architectural design firm",
};

export default function AboutPage() {
  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "SVID Services was established in Kerala, India, with a vision to provide quality design solutions.",
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management.",
    },
    {
      year: "2018",
      title: "Regional Expansion",
      description: "Expanded operations to Qatar and Saudi Arabia, serving international markets.",
    },
    {
      year: "2023",
      title: "Leading Firm",
      description: "Recognized as a leading design firm with 100+ successful projects serving the globe.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-4">
        <div className="absolute inset-0">
          <Image
            src={siteData.about.image}
            alt="About SVID Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-3 mb-6 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-500/30">
            <Image
              src={siteData.certification.image}
              alt={siteData.certification.name}
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-amber-400 font-semibold">
              {siteData.certification.name}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About Us</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
            Designing the Future, Structuring Excellence
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span>3 Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span>100+ Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Expert Team" },
              { number: "3", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content - Simplified */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-lg leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong className="text-slate-900">SVID Services</strong> is a leading structural and architectural design firm with presence across India, Qatar, and Saudi Arabia.
                </p>
                <p>
                  We specialize in delivering innovative design solutions using advanced tools like BIM and 3D rendering.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Our experienced team of engineers, architects, and CAD professionals brings expertise to every project stage.
                </p>
                <p>
                  From architectural concepts to structural and MEP support, we deliver excellence in construction design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Redesigned */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be a global leader in architectural and structural design innovation, setting benchmarks for quality and sustainability.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To empower clients with detailed, cost-effective, and future-ready design solutions, delivering excellence at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Road Path Design */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From a small team to a leading design firm serving the globe
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Mobile Timeline - Zigzag Animated Design */}
            <div className="md:hidden relative px-2">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center gap-2 mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                    style={{ 
                      animation: 'fade-in 0.8s ease-out forwards',
                      animationDelay: `${index * 0.3}s`,
                      opacity: 0
                    }}
                  >
                    {/* Content Card */}
                    <div className="flex-1 min-w-0">
                      <div className={`relative bg-gradient-to-br from-white to-slate-50 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 ${isLeft ? 'border-orange-500' : 'border-slate-800'}`}>
                        {/* Glowing Effect */}
                        <div className={`absolute inset-0 rounded-2xl opacity-20 blur-xl ${isLeft ? 'bg-orange-500' : 'bg-slate-800'}`}></div>
                        
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white font-bold text-xs mb-2 relative z-10 ${isLeft ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-slate-700 to-slate-900'}`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z"/>
                          </svg>
                          {item.year}
                        </div>
                        
                        {/* Title with Icon */}
                        <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isLeft ? 'bg-orange-500' : 'bg-slate-800'} animate-pulse`}></span>
                          <span className="line-clamp-2">{item.title}</span>
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.description}</p>
                        
                        {/* Decorative Corner */}
                        <div className={`absolute ${isLeft ? 'top-0 left-0' : 'top-0 right-0'} w-12 h-12 ${isLeft ? 'bg-orange-500' : 'bg-slate-800'} opacity-10 ${isLeft ? 'rounded-tl-2xl rounded-br-full' : 'rounded-tr-2xl rounded-bl-full'}`}></div>
                      </div>
                    </div>
                    
                    {/* Center Year Circle with Pulse */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-2xl relative z-10 ${isLeft ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-slate-700 to-slate-900'}`}>
                        {item.year}
                        {/* Animated Ring */}
                        <div className={`absolute inset-0 rounded-full ${isLeft ? 'bg-orange-400' : 'bg-slate-600'} animate-ping opacity-30`} style={{ animationDelay: `${index * 3}s` }}></div>
                        
                        {/* Rotating Border */}
                        <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '8s', animationDelay: `${index * 1}s` }}>
                          <circle cx="32" cy="32" r="30" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 5" opacity="0.5"/>
                        </svg>
                      </div>
                      
                      {/* Connector Line */}
                      {index < timeline.length - 1 && (
                        <div className="absolute left-1/2 top-16 transform -translate-x-1/2 flex flex-col items-center">
                          <svg width="4" height="64" className={isLeft ? 'text-orange-400' : 'text-slate-400'}>
                            <line x1="2" y1="0" x2="2" y2="64" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8">
                              <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
                            </line>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Timeline - Clean Modern Design */}
            <div className="hidden md:block relative py-8">
              {/* Center Timeline Bar */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-slate-700 to-orange-500 transform -translate-x-1/2">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-slate-600 to-orange-400 animate-pulse opacity-50"></div>
              </div>

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                      style={{ 
                        animation: 'fade-in 0.8s ease-out forwards',
                        animationDelay: `${index * 0.2}s`,
                        opacity: 0
                      }}
                    >
                      {/* Content Card */}
                      <div className="flex-1">
                        <div className={`relative bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${isLeft ? 'border-orange-500 ml-auto' : 'border-slate-800'} max-w-sm group hover:-translate-y-1`}>
                          {/* Year Badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-bold text-xs mb-2 ${isLeft ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-slate-700 to-slate-900'}`}>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z"/>
                            </svg>
                            {item.year}
                          </div>
                          
                          {/* Title */}
                          <h3 className={`text-lg font-bold text-slate-900 mb-2 group-hover:${isLeft ? 'text-orange-600' : 'text-slate-700'} transition-colors`}>
                            {item.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                          
                          {/* Arrow Pointer to Center */}
                          <div className={`absolute top-6 ${isLeft ? '-right-3' : '-left-3'} w-6 h-6`}>
                            <div className={`w-3 h-3 ${isLeft ? 'bg-orange-500' : 'bg-slate-800'} rotate-45 shadow-md`}></div>
                          </div>
                          
                          {/* Decorative Gradient */}
                          <div className={`absolute ${isLeft ? 'top-0 left-0' : 'top-0 right-0'} w-16 h-16 ${isLeft ? 'bg-orange-500' : 'bg-slate-800'} opacity-5 ${isLeft ? 'rounded-tl-xl rounded-br-full' : 'rounded-tr-xl rounded-bl-full'}`}></div>
                        </div>
                      </div>
                      
                      {/* Center Year Circle */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white ${isLeft ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-slate-700 to-slate-900'} hover:scale-110 transition-transform duration-300`}>
                          {item.year}
                          
                          {/* Pulse Ring */}
                          <div className={`absolute inset-0 rounded-full ${isLeft ? 'bg-orange-400' : 'bg-slate-600'} animate-ping opacity-25`} style={{ animationDelay: `${index * 3}s` }}></div>
                          
                          {/* Glow Effect */}
                          <div className={`absolute -inset-1 ${isLeft ? 'bg-orange-500' : 'bg-slate-700'} rounded-full blur-lg opacity-30`}></div>
                        </div>
                      </div>
                      
                      {/* Empty Space for Opposite Side */}
                      <div className="flex-1"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert design solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block border border-amber-400/50 overflow-hidden"
            >
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </span>
            </Link>
            <Link
              href="/projects"
              className="group relative bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block border border-slate-300 hover:border-amber-500 overflow-hidden"
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 justify-center">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Projects
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
