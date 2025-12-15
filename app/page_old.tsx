import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/data";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <div className="max-w-4xl mx-auto">
            <Image
              src={siteData.logo}
              alt={siteData.name}
              width={120}
              height={120}
              className="mx-auto mb-6 h-24 w-auto"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m+OLy5LqpBp3DubpF3lCGOzLa5EsSlWJLFONJKEQJGnbKbS+vdSSqUAZbuzn8m32HaH9bcfaBH/9k="
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {siteData.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              {siteData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2">
              <Image
                src={siteData.certification.image}
                alt={siteData.certification.name}
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <span className="text-amber-500 font-semibold text-sm">
                {siteData.certification.name}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
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
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {siteData.about.title}
              </h2>
              <div className="text-slate-600 space-y-3 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>SVID Services</strong> is a leading structural and
                  architectural design firm based in Kerala, India, with regional
                  presence in Qatar and Saudi Arabia. We specialize in delivering
                  precise, innovative, and sustainable design solutions across
                  sectors — from architectural concepts to full structural and MEP
                  support.
                </p>
                <p>
                  Our commitment to excellence is reflected in our wide array of
                  services, integrating advanced tools like BIM and 3D rendering to
                  help clients visualize, plan, and build effectively. With a team
                  of experienced engineers, architects, and CAD professionals, we
                  bring unmatched expertise to every stage of your project.
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-900 mb-2">
                    <strong>Vision:</strong>
                  </p>
                  <p className="mb-4">
                    To be a global leader in architectural and structural design
                    innovation.
                  </p>
                  <p className="font-semibold text-slate-900 mb-2">
                    <strong>Mission:</strong>
                  </p>
                  <p>
                    To empower construction and engineering companies with
                    detailed, cost-effective, and future-ready design support.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/about"
                  className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Learn More
                </Link>
                <a
                  href={siteData.about.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white transition-colors"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src={siteData.about.image}
                alt="About SVID Services"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m+OLy5LqpBp3DubpF3lCGOzLa5EsSlWJLFONJKEQJGnbKbS+vdSSqUAZbuzn8m32HaH9bcfaBH/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Why Choose SVID Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Experience excellence in architectural and structural design
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">ISO Certified</h3>
              <p className="text-slate-600 text-xs">Quality Assured</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">On-Time Delivery</h3>
              <p className="text-slate-600 text-xs">Always Punctual</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Expert Team</h3>
              <p className="text-slate-600 text-xs">Skilled Professionals</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Global Reach</h3>
              <p className="text-slate-600 text-xs">3 Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-12 md:py-16 bg-slate-50 pattern-dots relative overflow-hidden">
        <ServicesSidebar />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive design and engineering solutions for modern
              construction projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-amber-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    {String(service.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-3 text-sm line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white pattern-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted by construction companies and developers across India, Qatar, and Saudi Arabia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-50 rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-700 mb-3 italic text-sm">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                      <p className="text-slate-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="pt-8">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">500+</div>
                <p className="text-slate-300">Projects Completed</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pt-8">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">3</div>
                <p className="text-slate-300">Countries Served</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pt-8">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">15+</div>
                <p className="text-slate-300">Years Experience</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div className="pt-8">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">50+</div>
                <p className="text-slate-300">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for a consultation. We're here to
            help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us Today
            </Link>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
