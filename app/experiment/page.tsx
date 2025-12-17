"use client";

import { useState, useEffect, useRef } from 'react';

export default function ExperimentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      title: "PARK MANSION",
      subtitle: "Minami Azabu",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80",
    },
    {
      id: 2,
      title: "JADE TOWER",
      subtitle: "SHIROKANE Residence", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80",
    },
    {
      id: 3,
      title: "SEVENS VILLA",
      subtitle: "Karuizawa Resort",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80",
    },
    {
      id: 4,
      title: "HIKAWA GARDENS",
      subtitle: "ONE AVENUE",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80",
    },
    {
      id: 5,
      title: "CENTURY FOREST", 
      subtitle: "PROUD Rokakoen",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&q=80",
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 300);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }, 300);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Auto-advance slides
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentSlide]);

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(nextSlide, 5000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Top Navigation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '3rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          color: '#2d3748'
        }}>
          ASM
        </div>
        <div style={{
          display: 'flex',
          gap: '3rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: '#4a5568',
            cursor: 'pointer'
          }}>
            All
          </div>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: '#4a5568',
            cursor: 'pointer'
          }}>
            About
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden'
        }}>
          <img
            src={currentSlideData.image}
            alt={currentSlideData.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.7) contrast(1.1)',
              transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isTransitioning ? 0.8 : 1
            }}
          />
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, rgba(248,249,250,0.4), rgba(248,249,250,0.1), rgba(248,249,250,0.3))',
            backdropFilter: 'blur(0.5px)'
          }} />
        </div>

        {/* Central Text */}
        <div style={{
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
          opacity: isTransitioning ? 0 : 1,
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: '#1a202c',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(255,255,255,0.3)'
          }}>
            {currentSlideData.title}
          </h1>
          <h2 style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 300,
            letterSpacing: '0.2em',
            color: '#4a5568',
            textShadow: '0 1px 5px rgba(255,255,255,0.5)'
          }}>
            {currentSlideData.subtitle}
          </h2>
        </div>
      </div>

      {/* Left Navigation */}
      <div style={{
        position: 'absolute',
        left: '4rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 30
      }}>
        <button
          onClick={() => { prevSlide(); resetAutoplay(); }}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: '#4a5568',
            cursor: 'pointer',
            padding: '1rem',
            transition: 'all 0.3s ease',
            opacity: 0.7
          }}
          onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseOut={(e) => { e.currentTarget.style.opacity = '0.7'; }}
        >
          PREV
        </button>
      </div>

      {/* Right Navigation */}
      <div style={{
        position: 'absolute',
        right: '4rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 30
      }}>
        <button
          onClick={() => { nextSlide(); resetAutoplay(); }}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: '#4a5568',
            cursor: 'pointer',
            padding: '1rem',
            transition: 'all 0.3s ease',
            opacity: 0.7
          }}
          onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseOut={(e) => { e.currentTarget.style.opacity = '0.7'; }}
        >
          NEXT
        </button>
      </div>

      {/* Bottom Counter */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        right: '4rem',
        zIndex: 30,
        fontSize: '0.875rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        color: '#4a5568',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <span>{String(currentSlide + 1).padStart(2, '0')}</span>
        <div style={{
          width: '2rem',
          height: '1px',
          backgroundColor: '#cbd5e0'
        }} />
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
