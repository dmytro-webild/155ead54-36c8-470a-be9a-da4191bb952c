"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TextAbout from '@/components/sections/about/TextAbout';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function AmenitiesPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Rooms", id: "/rooms" },
    { name: "Amenities", id: "/amenities" },
    { name: "Dining", id: "/dining" },
    { name: "Contact", id: "/contact" },
  ];

  const amenities = [
    {
      id: 1,
      title: "World-Class Spa",
      description: "Indulge in rejuvenating treatments and therapies in our state-of-the-art spa facility, featuring signature massages and wellness programs",
      imageSrc: "http://img.b2bpic.net/free-photo/spa-concept-with-woman_23-2147816902.jpg",
      imageAlt: "Luxe Haven Spa"
    },
    {
      id: 2,
      title: "24/7 Fitness Center",
      description: "Stay active during your stay with our fully equipped gym, personal training services, and yoga classes available daily",
      imageSrc: "http://img.b2bpic.net/free-photo/side-view-senior-couple-gym_23-2148503022.jpg",
      imageAlt: "Modern Fitness Center"
    },
    {
      id: 3,
      title: "Fine Dining Restaurant",
      description: "Experience culinary excellence at our award-winning restaurant featuring international cuisine and an extensive wine selection",
      imageSrc: "http://img.b2bpic.net/free-photo/grey-painted-fancy-restaurant-with-empty-dinner-table_140725-8730.jpg?_wi=2",
      imageAlt: "Fine Dining Restaurant"
    },
    {
      id: 4,
      title: "Business Facilities",
      description: "Professional meeting spaces and high-speed internet connectivity for seamless business operations and events",
      imageSrc: "http://img.b2bpic.net/free-photo/served-table-restaurant_93675-129092.jpg?_wi=2",
      imageAlt: "Conference Hall"
    }
  ];

  const footerColumns = [
    {
      title: "Hotel",
      items: [
        { label: "About Us", href: "#" },
        { label: "Rooms & Suites", href: "/rooms" },
        { label: "Amenities", href: "/amenities" },
        { label: "Dining", href: "/dining" }
      ]
    },
    {
      title: "Services",
      items: [
        { label: "Spa & Wellness", href: "#" },
        { label: "Concierge", href: "#" },
        { label: "Events", href: "#" },
        { label: "Group Bookings", href: "#" }
      ]
    },
    {
      title: "Guest Info",
      items: [
        { label: "Check-In Guide", href: "#" },
        { label: "Policies", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Connect",
      items: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://linkedin.com" }
      ]
    }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
          brandName="Luxe Haven"
          bottomLeftText="Luxury Hospitality"
          bottomRightText="hello@luxehaven.com"
        />
      </div>

      <div id="amenities-intro" data-section="amenities-intro">
        <TextAbout
          tag="World-Class Facilities"
          title="Premium Amenities Designed for Your Comfort"
          useInvertedBackground={false}
          buttons={[
            { text: "Book Your Stay", href: "/contact" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSeven
          features={amenities}
          title="Premium Amenities & Services"
          description="Discover the comprehensive facilities and services designed to enhance every moment of your stay"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Luxe Haven"
          columns={footerColumns}
          copyrightText="© 2025 Luxe Haven Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}