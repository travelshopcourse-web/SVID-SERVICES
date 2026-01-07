"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteData } from "@/lib/data";

type GalleryTab = "all" | "3d" | "bim" | "shp" | "structural_design";

export default function ProjectsPage() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<GalleryTab>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [projectCount, setProjectCount] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);

  const toggleModule = (moduleName: string) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName);
  };

  const getAllImages = () => {
    return [
      ...siteData.projectGallery["3d"],
      ...siteData.projectGallery.bim,
      ...siteData.projectGallery.shp,
      ...siteData.projectGallery.structural_design
    ];
  };

  const getFilteredImages = () => {
    if (activeTab === "all") return getAllImages();
    return siteData.projectGallery[activeTab];
  };

  const filteredImages = getFilteredImages();

  // Animated counter effect
  useEffect(() => {
    const totalProjects = siteData.projectModules.reduce((sum, module) => sum + module.projects.length, 0);
    const totalImages = getAllImages().length;
    const totalCategories = siteData.projectModules.length;

    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };

    animateCounter(totalProjects, setProjectCount);
    animateCounter(totalImages, setImageCount);
    animateCounter(totalCategories, setCategoriesCount);
  }, []);

  const getModuleIcon = (moduleName: string) => {
    switch(moduleName) {
      case "STRUCTURAL DESIGN":
        return (
          <svg className="w-7 h-7 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "FABRICATION DRAWING":
        return (
          <svg className="w-7 h-7 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "3D":
        return (
          <svg className="w-7 h-7 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "BIM WORKS":
        return (
          <svg className="w-7 h-7 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      default:
        return (
          <svg className="w-7 h-7 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="pt-16">
      {/* Compact Hero Section */}
      <section className="relative py-16 md:py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white leading-tight">
            Our Project
            <span className="block text-white/95">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transforming visions into reality with cutting-edge architectural and structural excellence
          </p>

          {/* Compact Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-white/90 text-xs md:text-sm font-medium mt-1">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-white/90 text-xs md:text-sm font-medium mt-1">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-white/90 text-xs md:text-sm font-medium mt-1">Gallery</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Projects Table - Module View with Enhanced Design */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                Project Categories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Explore Our <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Discover our comprehensive range of architectural and structural design services
            </p>
          </div>

          <div className="space-y-6">
            {siteData.projectModules.map((module, index) => (
              <div
                key={module.name}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 overflow-hidden transition-all duration-500 transform hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Module Header - Enhanced */}
                <button
                  onClick={() => toggleModule(module.name)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-white transition-all duration-300 group-hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white shadow-lg transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 group-hover:animate-pulse">
                        {getModuleIcon(module.name)}
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md group-hover:animate-bounce">
                        ✓
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                        {module.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                          </svg>
                          {module.projects.length} project{module.projects.length !== 1 ? 's' : ''}
                        </span>
                        <span className="text-xs text-orange-600 font-semibold">Click to explore →</span>
                      </div>
                    </div>
                  </div>
                  <div className={`transform transition-all duration-500 ${
                    expandedModule === module.name ? 'rotate-180 text-orange-600' : 'text-slate-400 group-hover:text-orange-600'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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

      {/* Enhanced Project Gallery Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djRoLTR2LTRoNHptMC0zMFYwSC0ydjRoNHptLTMwIDMwdjRIMHYtNGg2em0wLTMwVjBIMHY0aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
                Visual Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Project <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Witness the transformation from concept to completion through our stunning project visualizations
            </p>
          </div>

          {/* Enhanced Filter Tabs with Icons - Mobile Optimized with Horizontal Scroll */}
          <div className="mb-12">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:gap-3 justify-start md:justify-center min-w-max md:min-w-0 px-4 md:px-0">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`group px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === "all"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/40"
                      : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span>All</span>
                    {activeTab === "all" && <span className="ml-1 text-xs bg-white/30 px-2 py-0.5 rounded-full">{filteredImages.length}</span>}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("3d")}
                  className={`group px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === "3d"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/40"
                      : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <span>3D Design</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("bim")}
                  className={`group px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === "bim"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/40"
                      : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>BIM Works</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("shp")}
                  className={`group px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === "shp"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/40"
                      : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Shop</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("structural_design")}
                  className={`group px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === "structural_design"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/40"
                      : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                    </svg>
                    <span>Structural</span>
                  </span>
                </button>
              </div>
            </div>
            {/* Scroll Indicator */}
            <div className="text-center mt-3 md:hidden">
              <p className="text-xs text-white/60">← Scroll for more →</p>
            </div>
          </div>

          {/* Enhanced Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={`${image.category}-${image.id}`}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 cursor-pointer transform hover:-translate-y-3 hover:scale-105"
                onClick={() => setSelectedImage({ src: image.src, title: image.title })}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">{image.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg">
                          {image.category}
                        </span>
                      </div>
                      <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Click to view full image
                      </p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={900}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/60 px-6 py-2 rounded-full">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

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
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 overflow-hidden border border-orange-400/50"
            >
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Start Your Project</span>
            </a>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}?text=I'm interested in your services`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 inline-flex items-center justify-center gap-3 overflow-hidden border border-green-400/50"
            >
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
