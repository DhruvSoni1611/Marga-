// import HeroSection from "@/components/Hero";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { faqs } from "@/data/faqs";
// import { features } from "@/data/features";
// import { howItWorks } from "@/data/howItWorks";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <div className="grid-background"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Features Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features to Ease Your Journey
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="border-2 hover:border-primary transition-colors duration-300"
//               >
//                 <CardContent className="pt-6 text-center flex flex-col items-center">
//                   <div className="flex flex-col items-center justify-center">
//                     {feature.icon}
//                     <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                     <p className="text-muted-foreground">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">50+</h3>
//               <p className="text-muted-foreground">Industries Covered</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">1000+</h3>
//               <p className="text-muted-foreground">Practice Questions</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">95%</h3>
//               <p className="text-muted-foreground">Accuracy Rate</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">24/7</h3>
//               <p className="text-muted-foreground">AI Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four simple steps to accelerate your career growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">Find All Queries (FAQs)</h2>
//             <p className="text-muted-foreground">
//               Find answers to common questions about our platform
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="text-left">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent>{faq.answer}</AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-4xl md:text-5xl">
//               Let&apos;s dive right-In and Accelarate!
//             </h2>
//             <p className="mx-auto max-w-[600px] text-secondary-foreground/80 md:text-xl">
//               Join the race and find your Ace, with all the AI-powered features.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-5 animate-bounce"
//               >
//                 Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import HeroSection from "@/components/Hero";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { faqs } from "@/data/faqs";
// import { features } from "@/data/features";
// import { howItWorks } from "@/data/howItWorks";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if screen is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Navigation functions for carousel
//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % features.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
//   };

//   // Handle touch events for mobile swipe
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   return (
//     <>
//       <div className="grid-background"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Features Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features to Ease Your Journey
//           </h2>

//           {/* Mobile Carousel */}
//           {isMobile ? (
//             <div className="relative max-w-sm mx-auto">
//               {/* Carousel Container */}
//               <div
//                 className="overflow-hidden"
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//               >
//                 <div
//                   className="flex transition-transform duration-300 ease-in-out"
//                   style={{
//                     transform: `translateX(-${currentIndex * 100}%)`,
//                   }}
//                 >
//                   {features.map((feature, index) => (
//                     <div key={index} className="w-full flex-shrink-0 px-2">
//                       <Card className="border-2 hover:border-primary transition-colors duration-300 h-full">
//                         <CardContent className="pt-6 text-center flex flex-col items-center">
//                           <div className="flex flex-col items-center justify-center">
//                             {feature.icon}
//                             <h3 className="text-xl font-bold mb-2">
//                               {feature.title}
//                             </h3>
//                             <p className="text-muted-foreground">
//                               {feature.description}
//                             </p>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-4 h-4 text-gray-600" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight className="w-4 h-4 text-gray-600" />
//               </button>

//               {/* Dots Indicator */}
//               <div className="flex justify-center mt-6 space-x-2">
//                 {features.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-colors ${
//                       index === currentIndex
//                         ? "bg-primary"
//                         : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           ) : (
//             /* Desktop/Tablet Grid */
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//               {features.map((feature, index) => (
//                 <Card
//                   key={index}
//                   className="border-2 hover:border-primary transition-colors duration-300"
//                 >
//                   <CardContent className="pt-6 text-center flex flex-col items-center">
//                     <div className="flex flex-col items-center justify-center">
//                       {feature.icon}
//                       <h3 className="text-xl font-bold mb-2">
//                         {feature.title}
//                       </h3>
//                       <p className="text-muted-foreground">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">50+</h3>
//               <p className="text-muted-foreground">Industries Covered</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">1000+</h3>
//               <p className="text-muted-foreground">Practice Questions</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">95%</h3>
//               <p className="text-muted-foreground">Accuracy Rate</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">24/7</h3>
//               <p className="text-muted-foreground">AI Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four simple steps to accelerate your career growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">Find All Queries (FAQs)</h2>
//             <p className="text-muted-foreground">
//               Find answers to common questions about our platform
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="text-left">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent>{faq.answer}</AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-4xl md:text-5xl">
//               Let&apos;s dive right-In and Accelarate!
//             </h2>
//             <p className="mx-auto max-w-[600px] text-secondary-foreground/80 md:text-xl">
//               Join the race and find your Ace, with all the AI-powered features.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-5 animate-bounce"
//               >
//                 Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Custom hook for counter animation
const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;

    setHasStarted(true);
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart, hasStarted]);

  return count;
};

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.5,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return [elementRef, isIntersecting];
};

// StatCounter component
const StatCounter = ({ value, suffix, label, shouldAnimate, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldAnimate || hasStarted) return;

    const timer = setTimeout(() => {
      setHasStarted(true);
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / 2000, 1);

        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easeOutQuart * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [value, shouldAnimate, hasStarted, delay]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <h3 className="text-4xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

// Stats data
const statsData = [
  { value: 50, suffix: "+", label: "Industries Covered" },
  { value: 1000, suffix: "+", label: "Practice Questions" },
  { value: 95, suffix: "%", label: "Accuracy Rate" },
  { value: 24, suffix: "/7", label: "AI Support" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Intersection observer for stats section
  const [statsRef, shouldAnimate] = useIntersectionObserver();

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Navigation functions for carousel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Handle touch events for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features to Ease Your Journey
          </h2>

          {/* Mobile Carousel */}
          {isMobile ? (
            <div className="relative max-w-sm mx-auto">
              {/* Carousel Container */}
              <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {features.map((feature, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Card className="border-2 hover:border-primary transition-colors duration-300 h-full">
                        <CardContent className="pt-6 text-center flex flex-col items-center">
                          <div className="flex flex-col items-center justify-center">
                            {feature.icon}
                            <h3 className="text-xl font-bold mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop/Tablet Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="w-full py-12 md:py-24 bg-muted/50" ref={statsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <StatCounter
              value={50}
              suffix="+"
              label="Industries Covered"
              shouldAnimate={shouldAnimate}
              delay={0}
            />
            <StatCounter
              value={1000}
              suffix="+"
              label="Practice Questions"
              shouldAnimate={shouldAnimate}
              delay={200}
            />
            <StatCounter
              value={95}
              suffix="%"
              label="Accuracy Rate"
              shouldAnimate={shouldAnimate}
              delay={400}
            />
            <StatCounter
              value={24}
              suffix="/7"
              label="AI Support"
              shouldAnimate={shouldAnimate}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Find All Queries (FAQs)</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-4xl md:text-5xl">
              Let&apos;s dive right-In and Accelarate!
            </h2>
            <p className="mx-auto max-w-[600px] text-secondary-foreground/80 md:text-xl">
              Join the race and find your Ace, with all the AI-powered features.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
