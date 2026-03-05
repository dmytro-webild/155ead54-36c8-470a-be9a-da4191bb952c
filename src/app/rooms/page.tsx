"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function RoomsPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Rooms", id: "/rooms" },
    { name: "Amenities", id: "/amenities" },
    { name: "Dining", id: "/dining" },
    { name: "Contact", id: "/contact" },
  ];

  const roomProducts = [
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: "$250/night",
      imageSrc: "http://img.b2bpic.net/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg",
      imageAlt: "Deluxe Room"
    },
    {
      id: "ocean-view",
      name: "Ocean View Suite",
      price: "$450/night",
      imageSrc: "http://img.b2bpic.net/free-photo/rear-view-female-lying-bed-looking-beach-through-glass-windows_181624-57823.jpg",
      imageAlt: "Ocean View Suite"
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      price: "$850/night",
      imageSrc: "http://img.b2bpic.net/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg",
      imageAlt: "Presidential Suite"
    }
  ];

  const roomFeatures = [
    {
      id: 1,
      title: "Premium Bedding & Linens",
      description: "Experience ultimate comfort with Egyptian cotton sheets, down pillows, and premium mattresses designed for a perfect night's rest",
      imageSrc: "http://img.b2bpic.net/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg",
      imageAlt: "Premium Bedding"
    },
    {
      id: 2,
      title: "Spa-Inspired Bathrooms",
      description: "Luxurious en-suite bathrooms with rainfall showers, marble countertops, premium toiletries, and heated towel racks",
      imageSrc: "http://img.b2bpic.net/free-photo/grey-painted-fancy-restaurant-with-empty-dinner-table_140725-8730.jpg",
      imageAlt: "Luxury Bathroom"
    },
    {
      id: 3,
      title: "Modern Amenities & Technology",
      description: "High-speed WiFi, smart TV systems, climate control, and premium entertainment options in every room",
      imageSrc: "http://img.b2bpic.net/free-photo/served-table-restaurant_93675-129092.jpg",
      imageAlt: "Modern Tech"
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

      <div id="rooms-showcase" data-section="rooms-showcase">
        <ProductCardOne
          products={roomProducts}
          title="Our Luxurious Rooms"
          description="Choose from our selection of beautifully appointed accommodations, each designed for maximum comfort and elegance"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="room-features" data-section="room-features">
        <FeatureCardSeven
          features={roomFeatures}
          title="Room Amenities & Features"
          description="Discover the premium amenities and thoughtful details in every room"
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