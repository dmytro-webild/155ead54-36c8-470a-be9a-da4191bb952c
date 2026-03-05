"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ContactText from '@/components/sections/contact/ContactText';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Rooms", id: "/rooms" },
    { name: "Amenities", id: "/amenities" },
    { name: "Dining", id: "/dining" },
    { name: "Contact", id: "/contact" },
  ];

  const packages = [
    {
      id: "summer",
      title: "Summer Escape",
      price: "$1,200",
      period: "3 nights",
      imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-summer-hat-woman-beach_169016-63321.jpg",
      imageAlt: "Summer escape package",
      button: { text: "Book Now", href: "#" },
      features: [
        "Oceanfront room upgrade",
        "Daily breakfast included",
        "Spa credit $100",
        "Airport transfers"
      ]
    },
    {
      id: "wedding",
      title: "Wedding Celebration",
      price: "$3,500",
      period: "package",
      imageSrc: "http://img.b2bpic.net/free-photo/couple-newlyweds-hugging-luxury-hall-castle_8353-12333.jpg",
      imageAlt: "Wedding package",
      button: { text: "Inquire", href: "#" },
      features: [
        "Ceremony venue access",
        "Reception hall included",
        "Catering service",
        "Honeymoon suite",
        "Complimentary champagne"
      ]
    },
    {
      id: "corporate",
      title: "Business Retreat",
      price: "$2,800",
      period: "2 days",
      imageSrc: "http://img.b2bpic.net/free-photo/front-view-friends-having-lunch_23-2150598341.jpg",
      imageAlt: "Corporate retreat",
      button: { text: "Plan Event", href: "#" },
      features: [
        "Conference rooms",
        "AV equipment",
        "Team meals",
        "Executive lounge"
      ]
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

      <div id="contact-cta" data-section="contact-cta">
        <ContactText
          text="Ready to make your reservation? Get in touch with our team today and let us create an unforgettable experience for you."
          animationType="entrance-slide"
          buttons={[
            { text: "Reserve Now", href: "#" },
            { text: "Contact Us", href: "#" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="packages" data-section="packages">
        <PricingCardNine
          plans={packages}
          title="Special Packages & Offers"
          description="Explore our curated packages designed for every occasion and budget"
          textboxLayout="default"
          animationType="slide-up"
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