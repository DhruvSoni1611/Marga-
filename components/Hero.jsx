"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X, Play, AlertCircle, Loader2 } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const [videoState, setVideoState] = useState("loading");
  const [isFrameVisible, setIsFrameVisible] = useState(false);
  const [defaultVideoLoaded, setDefaultVideoLoaded] = useState(false);
  const [youtubeLoaded, setYoutubeLoaded] = useState(false);

  const YOUTUBE_VIDEO_ID = "LcF6ut-1M94";

  useEffect(() => {
    const frameElement = frameRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        frameElement?.classList.add("scrolled");
      } else {
        frameElement?.classList.remove("scrolled");
      }
    };

    // Trigger frame animation on mount
    const timer = setTimeout(() => {
      setIsFrameVisible(true);
    }, 300);

    // Try to load default video immediately
    const videoTimer = setTimeout(() => {
      if (videoState === "loading") {
        setVideoState("default");
      }
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(videoTimer);
    };
  }, []);

  // Handle default video loading
  const handleDefaultVideoLoad = () => {
    setDefaultVideoLoaded(true);
    if (videoState === "loading") {
      setVideoState("default");
    }
  };

  const handleDefaultVideoError = () => {
    setVideoState("error");
  };

  // Handle YouTube player
  const handleWatchDemo = (e) => {
    e.preventDefault();
    setVideoState("youtube");
    setYoutubeLoaded(false);
  };

  const handleYoutubeLoad = () => {
    setYoutubeLoaded(true);
  };

  const closeYouTubePlayer = () => {
    setVideoState(defaultVideoLoaded ? "default" : "error");
    setYoutubeLoaded(false);
  };

  const renderVideoContent = () => {
    switch (videoState) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-muted-foreground">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="text-lg font-medium">Loading video...</p>
            <p className="text-sm opacity-75 mt-2">
              Please wait while we prepare your experience
            </p>
          </div>
        );

      case "default":
        return (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={handleDefaultVideoLoad}
            onError={handleDefaultVideoError}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
          </video>
        );

      case "youtube":
        return (
          <div className="relative w-full h-full">
            {/* Loading overlay for YouTube */}
            {!youtubeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10">
                <Loader2 className="w-8 h-8 animate-spin mb-2 text-white" />
                <p className="text-white text-sm">Loading Your Demo...</p>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={closeYouTubePlayer}
              className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close YouTube player"
            >
              <X size={20} />
            </button>

            {/* YouTube iframe */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&controls=1`}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleYoutubeLoad}
            />
          </div>
        );

      case "error":
        return (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-muted-foreground">
            <AlertCircle className="w-12 h-12 mb-4 text-red-500" />
            <p className="text-lg font-medium text-red-600 mb-2">
              Video Not Available
            </p>
            <p className="text-sm text-center max-w-md opacity-75">
              We're having trouble loading the video. Please check your
              connection or try again later.
            </p>
            <Button
              onClick={() => {
                setVideoState("loading");
                setTimeout(() => setVideoState("default"), 1000);
              }}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full pt-20 md:pt-34 pb-10 relative">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl glitch-effect">
            <span className="glitch-text" data-text="To Ease Your Journey &">
              To Ease Your Journey &
            </span>
            <br />
            <span className="glitch-text" data-text="Achieve Milestones">
              Achieve Milestones
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your journey with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        {/* Unified Video Frame */}
        <div className="hero-frame-wrapper mt-15 md:mt-22">
          <div
            ref={frameRef}
            className={`hero-frame transition-all duration-1000 ease-out transform ${
              isFrameVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="video-container">{renderVideoContent()}</div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={handleWatchDemo}
            disabled={videoState === "loading"}
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
