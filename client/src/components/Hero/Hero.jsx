import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CompoundWallImage from "../../assets/HeroImages/CompoundWall.png";
import MkHeroImage from "../../assets/HeroImages/MkHeroImage1.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Only after destruction",
      subtitle: "There is construction!",
      description:
        "Established as a Proprietor firm in 2018, M K Multi Services is a trusted service provider specializing in construction, designing, and related services.",
      image: CompoundWallImage,
      alt: "Construction workers discussing project plans",
    },
    {
      id: 2,
      title: "Committed to Superior",
      subtitle: "quality and results!",
      description:
        "Established as a Proprietor firm in 2018, M K Multi Services is a trusted service provider specializing in construction, designing, and related services.",
      image: MkHeroImage,
      alt: "Construction site with worker reviewing blueprints",
    },
    {
      id: 3,
      title: "Building your visions",
      subtitle: "Creating reality!",
      description:
        "Established as a Proprietor firm in 2018, M K Multi Services is a trusted service provider specializing in construction, designing, and related services.",
      image:
        "https://img.freepik.com/free-photo/construction-workers-yellow-vests-vests-raise-their-hands-air_505751-3797.jpg?t=st=1755672487~exp=1755676087~hmac=22b214139075aa26706f6ba0b7de0938777c177509dbd198ea7412094d31d2f4&w=1060",
      alt: "Industrial construction site with worker",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover md:object-fill xl:object-fill lg:object-fill"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div
        className="relative z-10 flex items-center h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Small heading */}
            <div className="mb-6 overflow-hidden">
              <p
                className={`text-white/90 text-sm md:text-base font-medium tracking-wide transform transition-all duration-700 delay-200 ${
                  currentSlide >= 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Making Your Vision
              </p>
            </div>

            {/* Main heading */}
            <div className="mb-8 overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <div
                  className={`transform transition-all duration-700 delay-300 ${
                    currentSlide >= 0
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  {slides[currentSlide].title}
                </div>
                <div
                  className={`transform transition-all duration-700 delay-400 ${
                    currentSlide >= 0
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <span className="text-yellow-400">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-10 overflow-hidden">
              <p
                className={`text-white/90 pt-4 text-lg md:text-xl font-roboto max-w-2xl leading-relaxed transform transition-all duration-700 delay-500 ${
                  currentSlide >= 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="overflow-hidden">
              <button
                className={`bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group ${
                  currentSlide >= 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
                onClick={() => {
                  navigate("/about-us");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Explore More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div
          className={`absolute left-4 top-1/2 md:top-1/2 xl:top-1/2 lg:top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import CompoundWallImage from "../../assets/HeroImages/CompoundWall.png";
// import MkHeroImage from "../../assets/HeroImages/MkHeroImage1.png";

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [direction, setDirection] = useState(0);
//   const navigate = useNavigate();

//   const slides = [
//     {
//       id: 1,
//       title: "Only after destruction",
//       subtitle: "There is construction!",
//       description:
//         "Established as a Proprietor firm in 2018, M K Multi Services is a trusted service provider specializing in construction, designing, and related services.",
//       image: CompoundWallImage,
//       alt: "Construction workers discussing project plans",
//     },
//     {
//       id: 2,
//       title: "Committed to Superior",
//       subtitle: "quality and results!",
//       description:
//         "Established as a Proprietor firm in 2018, M K Multi Services is a trusted service provider specializing in construction, designing, and related services.",
//       image: MkHeroImage,
//       alt: "Construction site with worker reviewing blueprints",
//     },
//     {
//       id: 3,
//       title: "Building your visions",
//       subtitle: "Creating reality!",
//       description:
//         "Established as a Proprietor firm in 2018, M K Multi Services is a trusted service provider specializing in construction, designing, and related services.",
//       image: "HeroImage2.jpeg",
//       alt: "Industrial construction site with worker",
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setDirection(1);
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isHovered, slides.length]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setDirection(index > currentSlide ? 1 : -1);
//     setCurrentSlide(index);
//   };

//   // Animation variants for images
//   const imageVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 1.2,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 0,
//       scale: 0.8,
//     }),
//   };

//   // Animation variants for text
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: custom * 0.15,
//         duration: 0.8,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     }),
//     exit: {
//       opacity: 0,
//       y: -30,
//       transition: { duration: 0.4 },
//     },
//   };

//   // Button animation
//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: 0.7,
//         duration: 0.5,
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 10px 30px rgba(255, 193, 7, 0.4)",
//       transition: { duration: 0.3 },
//     },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black/50">
//       {/* Animated Background Images */}
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentSlide}
//           custom={direction}
//           variants={imageVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.5 },
//             scale: { duration: 0.8 },
//           }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slides[currentSlide].image}
//             alt={slides[currentSlide].alt}
//             className="w-full h-full object-cover md:object-fill xl:object-fill lg:object-fill"
//             loading="lazy"
//           />
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Animated Content Overlay */}
//       <div
//         className="relative z-10 flex items-center h-full"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl">
//             <AnimatePresence mode="wait">
//               <motion.div key={`content-${currentSlide}`}>
//                 {/* Small heading with animation */}
//                 <motion.div
//                   custom={0}
//                   variants={textVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="mb-6"
//                 >
//                   <p className="text-white/90 text-sm md:text-base font-medium tracking-wide">
//                     Making Your Vision
//                   </p>
//                 </motion.div>

//                 {/* Main heading with staggered animation */}
//                 <div className="mb-8">
//                   <motion.h1
//                     custom={1}
//                     variants={textVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
//                   >
//                     {slides[currentSlide].title}
//                   </motion.h1>
//                   <motion.div
//                     custom={2}
//                     variants={textVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                   >
//                     <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400">
//                       {slides[currentSlide].subtitle}
//                     </span>
//                   </motion.div>
//                 </div>

//                 {/* Description with animation */}
//                 <motion.div
//                   custom={3}
//                   variants={textVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="mb-10"
//                 >
//                   <p className="text-white/90 pt-10 md:pt-4 xl:pt-4 lg:pt-4 text-lg md:text-xl font-roboto max-w-2xl leading-relaxed">
//                     {slides[currentSlide].description}
//                   </p>
//                 </motion.div>

//                 {/* Animated CTA Button */}
//                 <motion.button
//                   variants={buttonVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   whileTap="tap"
//                   className="bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2 group"
//                   onClick={() => {
//                     navigate("/about-us");
//                     window.scrollTo({ top: 0, behavior: "smooth" });
//                   }}
//                 >
//                   Explore More
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </motion.div>
//                 </motion.button>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Animated Navigation Arrows */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{
//             opacity: isHovered ? 1 : 0,
//             x: isHovered ? 0 : -20,
//           }}
//           transition={{ duration: 0.3 }}
//           className="absolute left-0 md:left-4 xl:left-4 lg:left-4 top-1/2 transform -translate-y-1/2"
//         >
//           <motion.button
//             onClick={prevSlide}
//             whileHover={{
//               scale: 1.1,
//               backgroundColor: "rgba(255,255,255,0.3)",
//             }}
//             whileTap={{ scale: 0.9 }}
//             className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-300"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{
//             opacity: isHovered ? 1 : 0,
//             x: isHovered ? 0 : 20,
//           }}
//           transition={{ duration: 0.3 }}
//           className="absolute right-0 md:right-4 xl:right-4 lg:right-4 top-1/2 transform -translate-y-1/2"
//         >
//           <motion.button
//             onClick={nextSlide}
//             whileHover={{
//               scale: 1.1,
//               backgroundColor: "rgba(255,255,255,0.3)",
//             }}
//             whileTap={{ scale: 0.9 }}
//             className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-300"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Animated Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToSlide(index)}
//               animate={{
//                 scale: index === currentSlide ? 1.25 : 1,
//                 backgroundColor:
//                   index === currentSlide
//                     ? "rgb(250, 204, 21)"
//                     : "rgba(255, 255, 255, 0.5)",
//               }}
//               whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
//               transition={{ duration: 0.3 }}
//               className="w-3 h-3 rounded-full"
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;
