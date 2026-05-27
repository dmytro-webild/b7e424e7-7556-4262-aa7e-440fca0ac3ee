"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Flag, ShieldCheck, Sparkles, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Community",          id: "#community"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="KSI RACING"
      bottomLeftText="Ultimate Performance"
      bottomRightText="info@ksiracing.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "animated-grid"}}
      imagePosition="right"
      title="Unleash Your Ride's True Potential"
      description="Expert car modification and tuning for ultimate performance. Experience the thrill of precision engineering with KSI RACING."
      buttons={[
        {
          text: "Explore Services",          href: "#services"},
        {
          text: "Contact Us",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/airplane-mechanic_1098-12557.jpg",          alt: "Customer Avatar 1"},
        {
          src: "http://img.b2bpic.net/free-photo/satisfied-customer-shaking-hands-with-mechanic_1170-1275.jpg",          alt: "Customer Avatar 2"},
        {
          src: "http://img.b2bpic.net/free-photo/model-wearing-motorcycle-helmet-portrait_23-2151585591.jpg",          alt: "Customer Avatar 3"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-mechanic-workshop_329181-11863.jpg",          alt: "Customer Avatar 4"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-tourist-buying-car_1303-14538.jpg",          alt: "Customer Avatar 5"},
      ]}
      avatarText="Trusted by thousands of enthusiasts"
      imageSrc="http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3934.jpg"
      imageAlt="High-performance sports car with custom tuning"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      tag="Performance Unleashed"
      tagIcon={Sparkles}
      marqueeItems={[
        {
          type: "text-icon",          text: "Expert Tuning",          icon: Wrench,
        },
        {
          type: "text-icon",          text: "Quality Parts",          icon: ShieldCheck,
        },
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/close-up-metallic-car-wheel_23-2151113193.jpg",          alt: "Close-up of a high-performance sports car wheel"},
        {
          type: "text-icon",          text: "Race Proven",          icon: Flag,
        },
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/natural-daylight-repair-tools-lying-down-engine-automobile-hood_146671-16158.jpg",          alt: "Detailed view of an engine bay with advanced tuning components"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="Driven by Passion, Engineered for Performance"
      description="At KSI RACING, we combine a deep love for cars with unparalleled technical expertise to deliver bespoke tuning and modifications. Our commitment to excellence ensures every vehicle achieves its maximum potential."
      bulletPoints={[
        {
          title: "Expert Team",          description: "Our certified technicians bring years of experience and a passion for automotive perfection to every project."},
        {
          title: "Cutting-Edge Technology",          description: "We utilize the latest diagnostic tools and tuning software to ensure precision and optimal performance gains."},
        {
          title: "Customer Satisfaction",          description: "Your vision is our mission. We work closely with clients to exceed expectations and deliver exhilarating results."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-toolbox-machines_1170-1504.jpg"
      imageAlt="Clean and modern car tuning workshop with tools"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Stock Performance",          "Limited Handling",          "Generic Aesthetics",          "Standard Braking"],
      }}
      positiveCard={{
        items: [
          "Unleashed Power",          "Superior Handling",          "Custom Aesthetics",          "Enhanced Braking"],
      }}
      title="Our Precision Tuning & Modification Services"
      description="From engine remapping to aesthetic enhancements, we offer a comprehensive range of services tailored to elevate your driving experience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p-exhaust",          name: "Performance Exhaust System",          price: "THB 35,000",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-servicing-car_1170-1336.jpg",          imageAlt: "High-performance exhaust system"},
        {
          id: "p-turbo",          name: "Advanced Turbocharger Kit",          price: "THB 75,000",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599437.jpg",          imageAlt: "Advanced car turbocharger"},
        {
          id: "p-brakes",          name: "Big Brake Kit Upgrade",          price: "THB 60,000",          imageSrc: "http://img.b2bpic.net/free-photo/red-pads-pedal-wheel-car_114579-4035.jpg",          imageAlt: "Performance big brake kit"},
        {
          id: "p-suspension",          name: "Adjustable Coilover Suspension",          price: "THB 45,000",          imageSrc: "http://img.b2bpic.net/free-photo/modern-automobile-mechanic-composition_23-2147881485.jpg",          imageAlt: "Adjustable coilover suspension"},
        {
          id: "p-wheels",          name: "Lightweight Alloy Wheels",          price: "THB 50,000",          imageSrc: "http://img.b2bpic.net/free-photo/look-from-white-car-white-house_8353-1201.jpg",          imageAlt: "Set of lightweight alloy wheels"},
        {
          id: "p-bodykit",          name: "Aerodynamic Body Kit",          price: "THB 90,000",          imageSrc: "http://img.b2bpic.net/free-photo/f1-racing-24-hours-le-mans-render-3d-illustration_654080-353.jpg",          imageAlt: "Aggressive aerodynamic body kit"},
      ]}
      title="Performance Parts You Can Trust"
      description="Browse our selection of premium aftermarket parts, hand-picked for quality and performance. Upgrade your vehicle with the best components on the market."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t-1",          name: "Sarun J.",          role: "Enthusiast",          company: "Bangkok",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-parking-roadside_23-2148321888.jpg"},
        {
          id: "t-2",          name: "Pimchanok K.",          role: "Driver",          company: "Chiang Mai",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stunning-young-woman-waring-dress-posing-front-her-car-outdoors-ownership-driver_158595-6788.jpg"},
        {
          id: "t-3",          name: "Weerachai S.",          role: "Collector",          company: "Pattaya",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-mechanic-using-laptop_1170-1325.jpg"},
        {
          id: "t-4",          name: "Nattaporn L.",          role: "Racer",          company: "Phuket",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434339.jpg"},
        {
          id: "t-5",          name: "Supakit M.",          role: "Daily Driver",          company: "Ayutthaya",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434369.jpg"},
        {
          id: "t-6",          name: "Montri C.",          role: "Track Day Enthusiast",          company: "Nonthaburi",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-choosing-car-car-salon_1303-28478.jpg"},
      ]}
      kpiItems={[
        {
          value: "5.0",          label: "Average Rating"},
        {
          value: "10+",          label: "Years Experience"},
        {
          value: "500+",          label: "Projects Completed"},
      ]}
      title="What Our Thrilled Clients Say"
      description="Don't just take our word for it. Our clients consistently rate us 5-stars for our dedication, expertise, and the exhilarating results we deliver."
    />
  </div>

  <div id="community" data-section="community">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Thai Car Club",        "Racing Crew BKK",        "Speed Addicts Thailand",        "Custom Car Forum",        "Gearheads Nation",        "Performance Garage",        "Tuned Car Society"]}
      title="Trusted by Car Enthusiasts & Clubs"
      description="Our reputation is built on exceptional service and stunning results, earning the loyalty of countless car lovers and respected automotive communities."
      buttons={[
        {
          text: "Follow us on Facebook",          href: "https://facebook.com/KSIRACING"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to transform your ride? Get in touch with KSI RACING today for a consultation or quote. Your ultimate driving experience awaits."
      buttons={[
        {
          text: "Call Us Now",          href: "tel:+6612345678"},
        {
          text: "Email Us",          href: "mailto:info@ksiracing.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/large-modern-architecture-hall_181624-239.jpg"
      imageAlt="Dynamic racing background with car modifications"
      logoText="KSI RACING"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Engine Tuning",              href: "#services"},
            {
              label: "Performance Parts",              href: "#products"},
            {
              label: "Custom Fabrication",              href: "#services"},
            {
              label: "Suspension Upgrades",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Reviews",              href: "#reviews"},
            {
              label: "Our Team",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 KSI RACING. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
