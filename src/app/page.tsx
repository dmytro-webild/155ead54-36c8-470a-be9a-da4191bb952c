"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Rooms", id: "/rooms" },
    { name: "Amenities", id: "/amenities" },
    { name: "Dining", id: "/dining" },
    { name: "Contact", id: "/contact" },
  ];

  const heroSlides = [
    {
      imageSrc: "http://img.b2bpic.net/free-photo/reception-front-desk-registrations_482257-76211.jpg",      imageAlt: "Luxe Haven Hotel Lobby"
    },
    {
      imageSrc: "http://img.b2bpic.net/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg?_wi=1",      imageAlt: "Luxe Haven Bedroom Suite"
    },
    {
      imageSrc: "http://img.b2bpic.net/free-photo/luxury-poolside-experience-where-guests-bask-opulence-cabanas_1268-31113.jpg",      imageAlt: "Luxe Haven Swimming Pool"
    }
  ];

  const roomProducts = [
    {
      id: "deluxe",      name: "Deluxe Room",      price: "$250/night",      imageSrc: "http://img.b2bpic.net/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg?_wi=2",      imageAlt: "Deluxe Room"
    },
    {
      id: "ocean-view",      name: "Ocean View Suite",      price: "$450/night",      imageSrc: "http://img.b2bpic.net/free-photo/rear-view-female-lying-bed-looking-beach-through-glass-windows_181624-57823.jpg?_wi=1",      imageAlt: "Ocean View Suite"
    },
    {
      id: "presidential",      name: "Presidential Suite",      price: "$850/night",      imageSrc: "http://img.b2bpic.net/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg?_wi=3",      imageAlt: "Presidential Suite"
    }
  ];

  const testimonials = [
    {
      id: "1",      name: "Sarah Anderson",      handle: "@sarahtravel",      testimonial: "Luxe Haven exceeded every expectation. The service was impeccable, the rooms were stunning, and the food was absolutely delicious. I'm already booking my next stay!",      rating: 5,
      imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-woman-office_1398-6.jpg",      imageAlt: "Sarah Anderson"
    },
    {
      id: "2",      name: "James Mitchell",      handle: "@jamesmit",      testimonial: "The perfect destination for a business trip. Great facilities, helpful staff, and an excellent location. Highly recommend to anyone visiting the city.",      rating: 5,
      imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",      imageAlt: "James Mitchell"
    },
    {
      id: "3",      name: "Elena Rodriguez",      handle: "@elenav",      testimonial: "We celebrated our anniversary here and it was magical. The spa treatments, romantic dinner, and attentive service made it unforgettable. Thank you!",      rating: 5,
      imageSrc: "http://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg",      imageAlt: "Elena Rodriguez"
    },
    {
      id: "4",      name: "David Chen",      handle: "@davidtrip",      testimonial: "Outstanding hospitality. Every detail was thoughtfully planned, from the welcome amenities to the personalized recommendations. Coming back soon!",      rating: 5,
      imageSrc: "http://img.b2bpic.net/free-photo/cheerful-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-office-employer-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-6842.jpg",      imageAlt: "David Chen"
    },
    {
      id: "5",      name: "Maria Garcia",      handle: "@maria_travels",      testimonial: "The best hotel experience of my travels. Modern, elegant, and absolutely worth every penny. The concierge service is phenomenal!",      rating: 5,
      imageSrc: "http://img.b2bpic.net/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-girl-wtih-trendy-hat-smiling-white-b_1258-112983.jpg",      imageAlt: "Maria Garcia"
    },
    {
      id: "6",      name: "Robert Thompson",      handle: "@robertexp",      testimonial: "Luxe Haven is luxury redefined. From the moment I arrived until departure, I felt valued and well-cared for. Five stars all the way!",      rating: 5,
      imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-posing-with-crossed-arms_176420-1149.jpg",      imageAlt: "Robert Thompson"
    }
  ];

  const footerColumns = [
    {
      title: "Hotel",      items: [
        { label: "About Us", href: "#" },
        { label: "Rooms & Suites", href: "/rooms" },
        { label: "Amenities", href: "/amenities" },
        { label: "Dining", href: "/dining" }
      ]
    },
    {
      title: "Services",      items: [
        { label: "Spa & Wellness", href: "#" },
        { label: "Concierge", href: "#" },
        { label: "Events", href: "#" },
        { label: "Group Bookings", href: "#" }
      ]
    },
    {
      title: "Guest Info",      items: [
        { label: "Check-In Guide", href: "#" },
        { label: "Policies", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Connect",      items: [
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="LUXE HAVEN"
          description="Book your luxury stay now"
          buttons={[
            { text: "Book Your Stay", href: "/contact" },
            { text: "Explore Rooms", href: "/rooms" }
          ]}
          slides={heroSlides}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Our Hotel"
          title="Where Elegance Meets Exceptional Service"
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "/amenities" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          testimonials={testimonials}
          showRating={true}
          title="Guest Testimonials"
          description="Hear from our satisfied guests about their remarkable experiences at Luxe Haven"
          textboxLayout="default"
          animationType="scale-rotate"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to make your reservation? Get in touch with our team today and let us create an unforgettable experience for you."
          animationType="entrance-slide"
          buttons={[
            { text: "Reserve Now", href: "/contact" },
            { text: "Contact Us", href: "/contact" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
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
