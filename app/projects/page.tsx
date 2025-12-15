"use client";

import { useState } from "react";
import { siteData } from "@/lib/data";

export default function ProjectsPage() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (moduleName: string) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-slate-800 to-slate-900">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Excellence in architectural and structural design
          </p>
        </div>
      </section>

      {/* Projects Table - Module View */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">
              Project Modules
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Tap to expand each module
            </p>
          </div>

          <div className="space-y-4">
            {siteData.projectModules.map((module, index) => (
              <div
                key={module.name}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
              >
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(module.name)}
                  className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md">
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="text-base md:text-lg font-bold text-slate-900">
                        {module.name}
                      </h3>
                      <p className="text-xs text-slate-600">
                        {module.projects.length} project{module.projects.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    expandedModule === module.name ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expandable Table Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedModule === module.name ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 py-3 md:p-4 bg-slate-50/50 border-t border-slate-100">
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-slate-200">
                            <th className="text-center py-2 px-2 font-bold text-slate-700 bg-slate-100" style={{width: '50px'}}>SL</th>
                            <th className="text-left py-2 px-3 font-bold text-slate-700 bg-slate-100">PROJECT</th>
                            <th className="text-left py-2 px-3 font-bold text-slate-700 bg-slate-100" style={{width: '110px'}}>LOCATION</th>
                            <th className="text-left py-2 px-3 font-bold text-slate-700 bg-slate-100">SCOPE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {module.projects.map((project) => (
                            <tr
                              key={project.slNo}
                              className="border-b border-slate-100 hover:bg-white transition-colors"
                            >
                              <td className="py-2 px-2 text-center">
                                <span className="inline-flex items-center justify-center bg-blue-600 text-white w-7 h-7 rounded font-bold text-xs">
                                  {project.slNo}
                                </span>
                              </td>
                              <td className="py-2 px-3">
                                <div className="font-medium text-slate-900 text-sm">
                                  {project.projectDescription}
                                </div>
                              </td>
                              <td className="py-2 px-3">
                                <div className="flex items-center gap-1 text-slate-700 text-xs">
                                  <svg className="w-3 h-3 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  </svg>
                                  <span>{project.location}</span>
                                </div>
                              </td>
                              <td className="py-2 px-3 text-slate-700 text-xs">
                                {project.scope}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-2.5">
                      {module.projects.map((project) => (
                        <div
                          key={project.slNo}
                          className="bg-white rounded-lg p-3 shadow-sm border border-slate-100"
                        >
                          <div className="flex gap-2.5">
                            <span className="inline-flex items-center justify-center bg-blue-600 text-white w-7 h-7 rounded font-bold text-xs flex-shrink-0">
                              {project.slNo}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-slate-900 text-sm mb-1.5 break-words">
                                {project.projectDescription}
                              </h4>
                              <div className="flex items-start gap-1 text-slate-600 text-xs mb-1.5">
                                <svg className="w-3 h-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <span className="font-medium">{project.location}</span>
                              </div>
                              <div>
                                <span className="text-xs font-semibold text-slate-500">Scope:</span>
                                <p className="text-slate-700 text-xs leading-relaxed mt-0.5 break-words">
                                  {project.scope}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring your architectural and structural vision to life
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}?text=I'm interested in your services`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transform hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
