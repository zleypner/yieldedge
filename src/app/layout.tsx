import type { Metadata } from "next";
import "./globals.css";
import FaviconSwitcher from "@/components/FaviconSwitcher";
import HashScrollFix from "@/components/HashScrollFix";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yieldge | Technology Solutions & Offshore Development",
    template: "%s | Yieldge"
  },
  description: "Leading provider of technology solutions with 15+ years of expertise. Delivering software development, security services, technology consulting and offshore teams across the Americas.",
  keywords: [
    "offshore development",
    "technology solutions",
    "software engineering",
    "security services",
    "staff augmentation",
    "cloud solutions",
    "technology consulting",
    "QA automation",
    "mobile app development",
    "web development",
    "analytics and insights",
    "tailored software development",
    "nearshore development",
    "digital transformation"
  ],
  authors: [{ name: "Yieldge" }],
  creator: "Yieldge",
  publisher: "Yieldge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Icons are handled dynamically via script in head
  icons: {
    apple: '/brand/favicon-light.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Yieldge',
    title: "Yieldge | Technology Solutions & Offshore Development",
    description: "Leading provider of technology solutions with 15+ years of expertise. Delivering software development, security services, technology consulting and offshore teams across the Americas.",
    images: [
      {
        url: '/assets/featured.jpg',
        width: 1200,
        height: 630,
        alt: 'Yieldge - Technology that Performs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yieldge | Technology Solutions & Offshore Development",
    description: "Leading provider of technology solutions with 15+ years of expertise. Delivering software development, security services, technology consulting and offshore teams across the Americas.",
    images: ['/assets/featured.jpg'],
    creator: '@yieldge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yieldge",
    "url": siteUrl,
    "logo": `${siteUrl}/brand/logo-main.png`,
      "description": "Technology partner specialized in web services, cloud infrastructure, and offshore development with 15+ years of expertise.",
    "sameAs": [
      "https://twitter.com/yieldge",
      "https://www.linkedin.com/company/yieldge",
      "https://github.com/yieldge"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@yieldge.com",
      "availableLanguage": ["Spanish", "English"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yieldge",
    "url": siteUrl,
    "description": "Transform businesses with modern websites, AI automation, and scalable systems that deliver measurable results.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technology Solutions & Offshore Development",
    "provider": {
      "@type": "Organization",
      "name": "Yieldge"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Solutions & Offshore Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "QA and Test Automation",
            "description": "Comprehensive quality assurance and automated testing services to ensure your software meets the highest standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Services",
            "description": "Advanced cybersecurity solutions and threat protection to safeguard your digital assets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technology Consulting",
            "description": "Strategic technology guidance to drive digital transformation and business growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile & Web Apps",
            "description": "Custom mobile and web application development for exceptional user experiences"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Staff Augmentation",
            "description": "Access top technical talent to scale your team quickly and efficiently"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics and Insights",
            "description": "Data-driven insights and analytics solutions to power informed business decisions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Scalable cloud infrastructure and migration services for modern businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Offshore Development",
            "description": "Nearshore software development teams delivering quality and value"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tailored Software",
            "description": "Custom software solutions designed specifically for your unique business needs"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateFavicon() {
                  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const favicon = isDarkMode ? '/brand/favicon-dark.png' : '/brand/favicon-light.png';
                  
                  // Remove all existing favicon links
                  document.querySelectorAll("link[rel*='icon']").forEach(link => link.remove());
                  
                  // Add new favicon
                  const link = document.createElement('link');
                  link.rel = 'icon';
                  link.type = 'image/png';
                  link.href = favicon;
                  document.head.appendChild(link);
                  
                  // Add shortcut icon for compatibility
                  const shortcut = document.createElement('link');
                  shortcut.rel = 'shortcut icon';
                  shortcut.type = 'image/png';
                  shortcut.href = favicon;
                  document.head.appendChild(shortcut);
                }
                
                // Set immediately
                updateFavicon();
                
                // Listen for changes
                if (window.matchMedia) {
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <FaviconSwitcher />
        <HashScrollFix />
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
