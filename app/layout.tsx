import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingCursor from "@/components/floating-cursor";
import type { Metadata } from 'next'; // Import Metadata type

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XIAROO - AI-Powered Software Development Company | Web & Mobile Apps",
  description: "Leading Gen Z software development company specializing in AI-powered web applications, mobile apps, and scalable digital solutions. Serving USA, UK, Pakistan & Australia.",
  keywords: "AI software development, custom web applications, mobile app development, software company, Gen Z developers, scalable software solutions, artificial intelligence integration, USA, UK, Pakistan, Australia",
  authors: [{ name: "XIAROO Team" }],
  creator: "XIAROO",
  publisher: "XIAROO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xiaroo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-us',
      'en-GB': '/en-gb', 
      'en-PK': '/en-pk',
      'en-AU': '/en-au',
    },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xiaroo.com',
    siteName: 'XIAROO',
    title: 'XIAROO - AI-Powered Software Development Company',
    description: 'Leading Gen Z software development company specializing in AI-powered web applications, mobile apps, and scalable digital solutions.',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'XIAROO - AI-Powered Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XIAROO - AI-Powered Software Development Company',
    description: 'Leading Gen Z software development company specializing in AI-powered web applications, mobile apps, and scalable digital solutions.',
    images: ['/image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Software Development Company',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "XIAROO",
    "url": "https://xiaroo.com",
    "logo": "https://xiaroo.com/LOGO PNG-01.png",
    "description": "Leading Gen Z software development company specializing in AI-powered web applications, mobile apps, and scalable digital solutions.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "XIAROO Team"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "California"
      },
      {
        "@type": "PostalAddress", 
        "addressCountry": "GB",
        "addressRegion": "London"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "PK", 
        "addressRegion": "Karachi"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "Sydney"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-XIAROO",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/xiaroo",
      "https://twitter.com/xiaroo",
      "https://github.com/xiaroo"
    ],
    "serviceArea": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country", 
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "XIAROO",
    "url": "https://xiaroo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://xiaroo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.className} bg-brand-dark mx-auto max-w-[1440px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <FloatingCursor />
      </body>
    </html>
  );
}

