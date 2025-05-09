
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Brain, ChevronDown, Code, Server, Database, Globe, Cpu, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from '@/components/LazyImage';
import HexagonNetwork from '@/components/HexagonNetwork';
import { getOptimizedImageUrl, generateSrcSet, getResponsiveSizes, fallbackImages } from '@/utils/imageOptimization';
import FloatingElement from '@/components/FloatingElement';

// Typing animation component
const TypingAnimation = ({ texts, typingSpeed = 150, deletingSpeed = 75, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text from the array
      const fullText = texts[currentTextIndex];

      // If deleting
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        // If typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // Transition logic
      if (!isDeleting && currentText === fullText) {
        // Finished typing, pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-gradient bg-gradient-to-r from-cyberpink to-cyberpurple">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const typingTexts = [
    "AI Development",
    "Machine Learning",
    "Data Science",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics"
  ];

  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      text: "Advanced AI Models"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Secure Implementation"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "High Performance"
    },
    {
      icon: <Code className="h-5 w-5" />,
      text: "Custom Development"
    },
    {
      icon: <Server className="h-5 w-5" />,
      text: "Scalable Infrastructure"
    },
    {
      icon: <Database className="h-5 w-5" />,
      text: "Data Management"
    }
  ];

  const techIcons = [
    { icon: <Brain className="h-6 w-6" />, color: "text-cyberpink", bgColor: "bg-cyberpink/10" },
    { icon: <Zap className="h-6 w-6" />, color: "text-cyberpurple", bgColor: "bg-cyberpurple/10" },
    { icon: <Code className="h-6 w-6" />, color: "text-cyberorange", bgColor: "bg-cyberorange/10" },
    { icon: <Server className="h-6 w-6" />, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { icon: <Database className="h-6 w-6" />, color: "text-green-500", bgColor: "bg-green-500/10" },
    { icon: <Globe className="h-6 w-6" />, color: "text-indigo-500", bgColor: "bg-indigo-500/10" },
    { icon: <Cpu className="h-6 w-6" />, color: "text-red-500", bgColor: "bg-red-500/10" },
    { icon: <Lock className="h-6 w-6" />, color: "text-yellow-500", bgColor: "bg-yellow-500/10" }
  ];

  return (
    <section className="bg-gradient-to-r from-cyberorange/5 to-cyberpurple/5 pt-16 pb-20 lg:pt-28 lg:pb-32 overflow-hidden relative">
      {/* Background decorative elements with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberpink/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpurple/10 blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-cyberorange/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Floating decorative elements */}
            <FloatingElement
              delay={0.5}
              className="absolute -top-10 -left-10 w-20 h-20 opacity-20 hidden lg:block"
              animationType="float"
              duration={6}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF1493" d="M40.8,-62.2C52.9,-56.3,62.2,-44.3,68.1,-30.8C74,-17.3,76.5,-2.3,73.6,11.5C70.7,25.2,62.4,37.8,51.6,47.4C40.8,57,27.5,63.7,13.5,67.2C-0.5,70.7,-15.2,71,-28.2,66.2C-41.2,61.3,-52.5,51.3,-60.2,39C-67.9,26.7,-72,12.1,-71.6,-2.3C-71.2,-16.7,-66.3,-30.9,-57.4,-41.4C-48.5,-51.9,-35.6,-58.7,-22.8,-63.5C-10,-68.3,2.7,-71.1,16.1,-69.7C29.5,-68.3,43.6,-62.7,40.8,-62.2Z" transform="translate(100 100)" />
              </svg>
            </FloatingElement>

            <FloatingElement
              delay={1.2}
              className="absolute -bottom-16 -right-8 w-16 h-16 opacity-20 hidden lg:block"
              animationType="rotate"
              duration={8}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9932CC" d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.2C85.2,-24.5,83.5,-7.4,79.9,8.5C76.3,24.4,70.8,39.2,61.2,51.5C51.5,63.8,37.7,73.7,22.2,78.3C6.7,82.9,-10.5,82.3,-25.7,76.9C-40.9,71.5,-54.1,61.3,-64.1,48.4C-74.1,35.5,-80.9,19.8,-82.1,3.5C-83.3,-12.8,-78.9,-29.8,-69.4,-43.2C-59.9,-56.6,-45.3,-66.5,-30.5,-73.1C-15.7,-79.7,-0.8,-83.1,13.4,-81.2C27.6,-79.3,55.2,-72.1,47.7,-73.2Z" transform="translate(100 100)" />
              </svg>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              className="relative"
            >
              <h1 className="heading-xl mb-6 relative">
                Advanced <TypingAnimation texts={typingTexts} /> Solutions
              </h1>
            </FloatingElement>
          </div>

          <FloatingElement
            animationType="slide-up"
            delay={0.2}
            className="relative"
          >
            <p className="text-lg mb-6 text-gray-700 max-w-lg">
              Cyberdetox specializes in cutting-edge AI development, creating intelligent solutions that transform how businesses operate while ensuring digital wellness and security.
            </p>
          </FloatingElement>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {features.map((feature, index) => (
              <FloatingElement
                key={index}
                delay={index * 0.1}
                animationType="fade"
                hoverEffect={true}
              >
                <div
                  className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-800 transition-all duration-300"
                >
                  <span className="mr-2 text-cyberpink">{feature.icon}</span>
                  {feature.text}
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <FloatingElement
              animationType="slide-up"
              delay={0.4}
              hoverEffect={true}
            >
              <Link
                to="/product"
                className="button-primary"
              >
                Our AI Solutions <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.5}
              hoverEffect={true}
            >
              <Link
                to="/contact"
                className="button-secondary"
              >
                Start Your AI Project
              </Link>
            </FloatingElement>
          </div>

          {/* Tech stack icons */}
          <div className="mt-8 mb-4">
            <FloatingElement
              animationType="slide-up"
              delay={0.6}
            >
              <h3 className="text-sm font-semibold text-gray-500 mb-3">POWERED BY CUTTING-EDGE TECHNOLOGY</h3>
            </FloatingElement>

            <div className="flex flex-wrap gap-3">
              {techIcons.map((tech, index) => (
                <FloatingElement
                  key={index}
                  delay={0.7 + index * 0.1}
                  animationType="fade"
                  hoverEffect={true}
                >
                  <div className={`w-10 h-10 rounded-full ${tech.bgColor} flex items-center justify-center ${tech.color}`}>
                    {tech.icon}
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>

          {/* Animated Hexagon Network */}
          <div className="mt-8 lg:mt-12 relative h-[150px] w-full max-w-md">
            <HexagonNetwork width={400} height={150} nodeCount={15} className="opacity-70" />
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <FloatingElement
            className="relative z-10"
            animationType="float"
            duration={6}
          >
            <div className="bg-gradient-to-br from-cyberpink/10 to-cyberpurple/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 relative z-10 shadow-lg transform transition-all duration-500 hover:shadow-xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-xl">
                <LazyImage
                  src={getOptimizedImageUrl("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1200, 85)}
                  alt="AI development and machine learning"
                  className="w-full h-full transition-transform duration-700 hover:scale-110"
                  objectFit="object-cover"
                  aspectRatio="aspect-[4/3]"
                  srcSet={generateSrcSet("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
                  sizes={getResponsiveSizes()}
                  fallbackSrc="/placeholder-image.svg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyberdark/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl">AI Development Platform</h3>
                    <p className="opacity-90">Custom machine learning solutions for your business</p>
                  </div>
                </div>
              </div>

              {/* Small preview images */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <LazyImage
                    src={getOptimizedImageUrl("https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 400, 85)}
                    alt="AI analytics dashboard"
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder-image.svg"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <LazyImage
                    src={getOptimizedImageUrl("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 400, 85)}
                    alt="Machine learning models"
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder-image.svg"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <LazyImage
                    src={getOptimizedImageUrl("https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 400, 85)}
                    alt="Data visualization"
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder-image.svg"
                  />
                </div>
              </div>

              {/* Animated decorative elements */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-cyberpink-light/20 blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-cyberpurple/30 blur-3xl animate-pulse-slow animation-delay-1000"></div>

              {/* Floating tech icons */}
              <FloatingElement
                delay={0.7}
                className="absolute -top-6 -right-6 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20"
                animationType="bounce-vertical"
                duration={4}
              >
                <Brain className="h-6 w-6 text-cyberpink" />
              </FloatingElement>

              <FloatingElement
                delay={1.5}
                className="absolute -bottom-4 -left-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20"
                animationType="bounce-vertical"
                duration={5}
              >
                <Zap className="h-5 w-5 text-cyberpurple" />
              </FloatingElement>

              <FloatingElement
                delay={1.0}
                className="absolute -bottom-6 -right-6 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20"
                animationType="bounce-vertical"
                duration={4.5}
              >
                <Code className="h-5 w-5 text-cyberorange" />
              </FloatingElement>
            </div>
          </FloatingElement>

          {/* Additional decorative elements */}
          <div className="absolute top-1/3 right-0 w-full h-full -z-10">
            <svg className="w-full h-full opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF1493" d="M39.9,-65.7C54.3,-60.9,70.2,-54.3,79.7,-42.3C89.2,-30.3,92.3,-12.9,88.2,2.4C84.1,17.6,72.8,30.8,61.4,42.4C50,54,38.5,64,25.3,70.5C12.1,77,-2.8,80,-17.1,77.4C-31.4,74.8,-45.1,66.6,-56.4,55.6C-67.7,44.6,-76.7,30.8,-80.3,15.5C-83.9,0.2,-82.1,-16.6,-75.7,-31.2C-69.3,-45.8,-58.3,-58.2,-45,-64.8C-31.7,-71.4,-16.3,-72.2,-1.5,-69.8C13.3,-67.4,25.5,-70.5,39.9,-65.7Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <FloatingElement
        animationType="bounce-vertical"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ChevronDown className="h-5 w-5" />
      </FloatingElement>
    </section>
  );
};

export default Hero;
