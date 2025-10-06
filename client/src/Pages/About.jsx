import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialSection from "../components/testimonial/Testimonial.jsx";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RccWallImage from "../assets/HeroImages/CompoundWall.png";
import RccFencingImage from "../assets/HeroImages/MkHeroImage1.png";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("why-choose-us");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const reasons = [
    "Competitive and Transparent Pricing",
    "End-to-End Construction & Design Solutions",
    "Reliable Manpower & Skilled Workforce",
    "Timely Project Execution",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="bg-gray-50">
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={RccWallImage}
          alt="Construction Background"
          className="absolute w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black opacity-15"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-gray-50 px-4"
        >
          <p className="uppercase tracking-widest text-sm md:text-base font-semibold mb-2">
            Your Trusted Construction Partner
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            {/* High quality construction <br className="hidden md:block" />
            solutions for industries! */}
            Building Trust. Designing Excellence.
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
            Trusted since 2018, M K Multi Services delivers reliable,
            high-quality construction and designing services — crafted with
            precision and completed on time.
          </p>
        </motion.div>
      </section>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Images */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Top Left Image - Construction Workers */}
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={
                      "https://5.imimg.com/data5/ANDROID/Default/2024/8/443624496/JZ/TV/WB/107162981/product-jpeg-500x500.jpg"
                    }
                    alt="Construction workers at construction site"
                    className="w-full h-64 object-cover"
                  />
                  {/* Yellow Badge */}
                  {/* <div className="absolute top-4 left-4 bg-yellow-400 text-white px-4 py-2 rounded-md shadow-md">
                    <div className="text-lg font-bold">15+ YEARS OF</div>
                    <div className="text-lg font-bold">EXPERIENCES</div>
                  </div> */}
                </motion.div>

                {/* Bottom Right Image - Construction Worker with Mask */}
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg md:mt-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={
                      "https://5.imimg.com/data5/ANDROID/Default/2024/8/443624505/YA/SL/ZR/107162981/product-jpeg-500x500.jpg"
                    }
                    alt="Construction worker wearing safety mask and helmet"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                  M K Multi Services!
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                  Construction & Design Experts Since 2018
                </h2>
              </motion.div>

              {/* Quote Box */}
              <motion.div
                className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-700 italic">
                  Established in 2018, M K Multi Services is a trusted provider
                  of professional construction and designing services. With a
                  commitment to quality, precision, and client satisfaction, we
                  deliver reliable solutions for residential, commercial, and
                  industrial projects. Backed by industry expertise, we aim to
                  turn every vision into a durable and functional reality.
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                At M K Multi Services, we prioritize quality workmanship and use
                only trusted materials to ensure strength, longevity, and
                aesthetic appeal in every project. Whether it's structural
                construction or custom design, our solutions are tailored to
                meet diverse project needs — always delivered with
                professionalism and attention to detail.
              </motion.p>

              {/* Bottom Section */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* More About Us Button */}
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/contact-us");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact Us
                </motion.button>

                {/* Signature */}
                {/* <motion.div
                  className="text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div
                    className="text-2xl md:text-3xl font-cursive text-gray-800"
                    style={{ fontFamily: "cursive" }}
                  >
                    Firoj Alam
                  </div>
                </motion.div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section
        id="why-choose-us"
        className="min-h-screen flex items-center bg-[#092553] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              variants={imageVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/8/444644495/GJ/AM/NY/107162981/residential-building-construction-services-500x500.jpg"
                  alt="about image"
                  className="w-full h-[500px] md:h-[600px] lg:h-[600px] xl:h-[600px]"
                />

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full shadow-lg opacity-80"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="space-y-4">
                {/* <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
                    High Performance!
                  </span>
                </motion.div> */}

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  The reasons why you should{" "}
                  <span className="bg-white bg-clip-text text-transparent">
                    choose our company!
                  </span>
                </h2>

                <p className="text-white font-roboto text-lg leading-relaxed max-w-2xl">
                  Established in 2018, M K Multi Services has quickly built a
                  reputation for delivering reliable and professional solutions
                  across construction, designing, manpower supply, printing, and
                  installation services. Our team of skilled professionals,
                  commitment to quality, and focus on timely execution ensure
                  that every project is handled with precision and care. We
                  prioritize client satisfaction, efficiency, and attention to
                  detail in everything we do.
                </p>
              </motion.div>

              {/* Reasons List */}
              <motion.div variants={itemVariants} className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 text-white font-bold" />
                    </motion.div>
                    <span className="text-white text-lg font-medium group-hover:text-yellow-300 transition-colors duration-300">
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl flex items-center space-x-3 group transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/contact-us");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-10 blur-xl"></div>
          </div>
        </div>

        <style>{`
              .gradient-text {
                background: linear-gradient(135deg, #3b82f6, #1e40af);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
            `}</style>
      </section>
      <TestimonialSection />

      {/* Scroll to top button (positioned absolutely) */}
      {/* <motion.button
        className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button> */}
    </section>
  );
};

export default AboutPage;
