import { siteData } from "@/lib/data";

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.name,
    "description": siteData.description,
    "url": "https://svid.co.in",
    "logo": siteData.logo,
    "image": siteData.logo,
    "sameAs": [
      siteData.social.facebook,
      siteData.social.linkedin,
      siteData.social.instagram,
      siteData.social.youtube
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteData.contact.address,
      "addressLocality": "Kottarakkara",
      "addressRegion": "Kerala",
      "postalCode": "691506",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteData.contact.phones.india,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      {
        "@type": "ContactPoint", 
        "telephone": siteData.contact.phones.qatar,
        "contactType": "customer service",
        "areaServed": "QA",
        "availableLanguage": ["en", "ar"]
      },
      {
        "@type": "ContactPoint",
        "telephone": siteData.contact.phones.saudi,
        "contactType": "customer service", 
        "areaServed": "SA",
        "availableLanguage": ["en", "ar"]
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "SVID Services Team"
    },
    "foundingDate": "2008",
    "numberOfEmployees": "50+",
    "industry": "Architecture and Engineering Services",
    "services": siteData.services.map(service => service.title),
    "areaServed": ["India", "Qatar", "Saudi Arabia"],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": siteData.certification.name
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Architectural and Structural Design Services",
    "provider": {
      "@type": "Organization",
      "name": siteData.name
    },
    "description": "Complete architectural and structural design solutions including BIM services, 3D rendering, steel detailing, and MEP services",
    "serviceType": "Professional Services",
    "category": "Architecture and Engineering",
    "areaServed": ["India", "Qatar", "Saudi Arabia"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Services Catalog",
      "itemListElement": siteData.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  );
}