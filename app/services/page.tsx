import Image from "next/image";
import { siteData } from "@/lib/data";

export const metadata = {
  title: `Services | ${siteData.name}`,
  description: "Comprehensive design and engineering solutions for modern construction projects",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-16 bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 mt-4">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 via-transparent to-slate-900/20 animate-pulse"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-700 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div 
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-orange-300 font-semibold text-sm border border-white/20"
            style={{ animation: 'fade-in 0.8s ease-out forwards' }}
          >
            ✨ Comprehensive Solutions
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ animation: 'fade-in 0.8s ease-out 0.2s forwards', opacity: 0 }}
          >
            Our Services
          </h1>
          <p 
            className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
            style={{ animation: 'fade-in 0.8s ease-out 0.4s forwards', opacity: 0 }}
          >
            Comprehensive design and engineering solutions tailored to meet the
            diverse needs of modern construction projects
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Card Stack */}
          <div className="md:hidden space-y-8">
            {siteData.services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{ 
                  animation: 'fade-in 0.8s ease-out forwards',
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-slate-700 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative bg-white rounded-3xl overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/${siteData.contact.whatsapp}?text=I'm interested in ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-orange-400 overflow-hidden"
                    >
                      {/* Blueprint grid */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
                        backgroundSize: '12px 12px'
                      }}></div>
                      {/* Rivets */}
                      <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/40"></div>
                      <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-white/40"></div>
                      <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-white/40"></div>
                      <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-white/40"></div>
                      <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="relative z-10">Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Alternating Layout */}
          <div className="hidden md:block space-y-16">
            {siteData.services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ 
                    animation: 'fade-in 0.8s ease-out forwards',
                    animationDelay: `${index * 0.3}s`,
                    opacity: 0
                  }}
                >
                  {/* Image Section */}
                  <div className="flex-1 relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-orange-500 to-orange-600' : 'from-slate-700 to-slate-900'} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-orange-500/20' : 'from-slate-700/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Number Badge */}
                      <div className={`absolute ${isEven ? 'top-6 right-6' : 'top-6 left-6'} w-16 h-16 bg-gradient-to-br ${isEven ? 'from-orange-500 to-orange-600' : 'from-slate-700 to-slate-900'} rounded-2xl flex items-center justify-center shadow-xl border-4 border-white`}>
                        <span className="text-white font-bold text-2xl">{String(index + 1).padStart(2, "0")}</span>
                        <div className="absolute inset-0 rounded-2xl bg-white animate-ping opacity-20"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isEven ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-700'}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z"/>
                      </svg>
                      Service {String(index + 1).padStart(2, "0")}
                    </div>
                    
                    <h3 className={`text-4xl font-bold text-slate-900 mb-4 group-hover:${isEven ? 'text-orange-600' : 'text-slate-700'} transition-colors`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Decorative Line */}
                    <div className={`w-20 h-1 bg-gradient-to-r ${isEven ? 'from-orange-500 to-orange-600' : 'from-slate-700 to-slate-900'} rounded-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-orange-300 font-semibold text-sm mb-6 border border-white/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get In Touch
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We offer tailored services to meet your specific project
              requirements. Contact us to discuss your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border border-orange-400/50 overflow-hidden"
              >
                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="relative z-10">Email Us</span>
              </a>
              
              <a
                href={`https://wa.me/${siteData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                  backgroundSize: '12px 12px'
                }}></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/40"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white/40"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white/40"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/40"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="relative z-10">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-600 rounded-full blur-3xl opacity-10"></div>
      </section>
    </div>

      {/* Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${siteData.contact.whatsapp}?text=I'm interested in your services`}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 border-2 border-green-400/50"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        {/* Icon */}
        <svg className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
          Get a Quote
        </span>
      </a>
    </>
  );
}
