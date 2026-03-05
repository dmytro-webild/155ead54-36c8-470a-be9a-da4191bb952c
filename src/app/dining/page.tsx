"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function DiningPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Rooms", id: "/rooms" },
    { name: "Amenities", id: "/amenities" },
    { name: "Dining", id: "/dining" },
    { name: "Contact", id: "/contact" },
  ];

  const diningExperiences = [
    {
      id: "1",
      category: ["Dining", "Culinary"],
      title: "Gourmet Restaurant Experience",
      excerpt: "Discover our signature dishes crafted by renowned chefs using the finest ingredients from around the world",
      imageSrc: "http://img.b2bpic.net/free-photo/front-view-cook-preparing-meal-designing-meal-inside-plate-fry-meat-food-meal_140725-26012.jpg",
      imageAlt: "Gourmet dining experience",
      authorName: "Chef Marcus Laurent",
      authorAvatar: "http://img.b2bpic.net/free-photo/portrait-business-woman-office_1398-6.jpg",
      date: "January 15, 2025"
    },
    {
      id: "2",
      category: ["Social", "Entertainment"],
      title: "Rooftop Bar & Sunset Views",
      excerpt: "Enjoy handcrafted cocktails and panoramic city views at our exclusive rooftop bar, perfect for evening relaxation",
      imageSrc: "http://img.b2bpic.net/free-photo/waiter-holding-tray-with-glasses-white-wine-it-serving-them-guests-balcony_181624-57937.jpg",
      imageAlt: "Rooftop bar venue",
      authorName: "Events Team",
      authorAvatar: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
      date: "January 10, 2025"
    },
    {
      id: "3",
      category: ["Lifestyle", "Hospitality"],
      title: "Room Service Excellence",
      excerpt: "24/7 in-room dining service offering an extensive menu of international and local cuisine delivered to your doorstep",
      imageSrc: "http://img.b2bpic.net/free-photo/handsome-waiter-restaurant-is-serving-young-lady-meal_8353-10594.jpg",
      imageAlt: "Room service delivery",
      authorName: "Hospitality Director",
      authorAvatar: "http://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg",
      date: "January 5, 2025"
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

      <div id="dining-intro" data-section="dining-intro">
        <TextAbout
          tag="Culinary Excellence"
          title="Exceptional Dining & Experiences"
          useInvertedBackground={false}
          buttons={[
            { text: "Reserve a Table", href: "/contact" }
          ]}
        />
      </div>

      <div id="dining" data-section="dining">
        <BlogCardTwo
          blogs={diningExperiences}
          title="Dining & Experiences"
          description="Explore our culinary offerings and unique experiences available to all our valued guests"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          carouselMode="buttons"
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