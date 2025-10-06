import React, { useRef } from "react";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import HeroBannerImage from "../../assets/HeroImages/HeroBannerImage.png";
import CompoundWallImage from "../../assets/HeroImages/CompoundWall.png";

const ManpowerConstructionServices = () => {
  const services = [
    {
      id: 1,
      name: "Building Labour Contractor Services",
      description:
        "Building Labour Contractor Services provide skilled and unskilled labor for construction projects, including masonry, carpentry, plumbing, electrical work, and finishing. These services ensure timely workforce availability, quality workmanship, and efficient execution under proper supervision.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443618851/DH/IN/FM/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 2,
      name: "Skilled Labour Contractor Services",
      description:
        "Skilled Labour Contractor Services supply trained workers for specialized tasks such as electrical work, plumbing, welding, painting, and tiling. These services ensure quality workmanship, safety compliance, and efficient project delivery through a professional workforce.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443622172/XC/IA/SO/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 3,
      name: "Civil Work Labour Contractor Services",
      description:
        "Civil Work Labour Contractor Services supply skilled and semi-skilled labor for tasks like excavation, concreting, brickwork, and reinforcement, ensuring high-quality and timely execution of diverse construction projects.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443619645/RW/HF/LW/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 4,
      name: "Civil Construction Labour Services",
      description:
        "Civil Construction Labour Services offer a workforce specialized in civil construction activities, including site preparation, foundation work, masonry, concreting, and structural repairs. These services ensure projects are carried out efficiently, safely, and in compliance with engineering and quality standards.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443619852/WD/AO/IE/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 5,
      name: "Industrial Labour Contract Services",
      description:
        "Industrial Labour Contract Services provide skilled and semi-skilled manpower for projects including fabrication, machinery installation, maintenance, welding, and assembly line support. These services ensure a reliable workforce to meet the demands of industrial operations while maintaining safety, efficiency, and productivity.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443619187/AT/IT/BW/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 6,
      name: "Unskilled Labour Supply Services",
      description:
        "Unskilled Labour Supply Services provide manpower for general tasks that require no specialized training, such as cleaning, material handling, loading/unloading, and site assistance. These services ensure smooth daily operations across construction, industrial, and commercial sites with dependable, flexible workforce support.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444641905/LR/QJ/RA/107162981/unskilled-labour-supply-services-500x500.jpg",
    },
    {
      id: 7,
      name: "Event Management Manpower Contractor Service",
      description:
        "Event Management Manpower Contractor Service provides trained staff for events, including ushers, security, housekeeping, and support crew. These services ensure smooth event operations with reliable and efficient manpower.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443690361/XF/FJ/WM/107162981/event-management-manpower-contractor-service-500x500.jpg",
    },
    {
      id: 8,
      name: "Road Sewage Maintenance Manpower Service",
      description:
        "Road Sewage Maintenance Manpower Service supplies skilled workers for cleaning, repairing, and maintaining road sewage systems to ensure proper drainage and prevent blockages or flooding.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444544282/DN/KQ/YT/107162981/road-nali-maintenance-manpower-500x500.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* SEO Optimization */}
      {/* <Helmet>
        <title>
          Construction Services | Professional Building & Renovation Solutions
        </title>
        <meta
          name="description"
          content="Comprehensive construction services including residential, commercial construction, renovation, roofing, electrical, plumbing, and more. Expert builders delivering quality projects."
        />
        <meta
          name="keywords"
          content="construction services, residential construction, commercial building, renovation, remodeling, roofing, electrical, plumbing, HVAC"
        />
        <meta
          property="og:title"
          content="Construction Services | Professional Building Solutions"
        />
        <meta
          property="og:description"
          content="Expert construction services for all your building needs. Quality craftsmanship and timely delivery guaranteed."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />
      </Helmet> */}

      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={HeroBannerImage}
          alt="Construction Background"
          className="absolute w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black opacity-30"></div>

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

      {/* Main Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#1C398E] via-[#F0B100] to-orange-500 bg-clip-text text-transparent">
                Our Manpower Service
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Providing you the best range of Building Labour Contractor
              Services, Skilled Labour Contractor Services, Civil Work Labour
              Contractor Services, Civil Construction Labour Services,
              Industrial Labour Contract Services and Unskilled Labour Supply
              Services with effective & timely delivery.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(28, 57, 142, 0.15)",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-[#1C398E]/10 to-[#F0B100]/10">
                  <motion.img
                    src={service.image}
                    alt={`${service.name} - Professional construction service`}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C398E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Service Number Badge */}
                  {/* <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#F0B100] to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.id}
                  </motion.div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h2
                    className="text-xl sm:text-2xl font-bold mb-3 text-[#1C398E] group-hover:text-[#F0B100] transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {service.name}
                  </motion.h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    className="inline-flex items-center text-[#1C398E] cursor-pointer font-semibold group/btn"
                    onClick={() => (window.location.href = "tel:+918707870153")}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Contact Us</span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Decorative Bottom Border */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#1C398E] via-[#F0B100] to-orange-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ originX: 0 }}
                />
              </motion.article>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          {/* <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-r from-[#1C398E] via-[#1C398E] to-[#F0B100] rounded-3xl p-8 sm:p-12 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with our expert team today and let's bring your
                construction vision to life with quality and professionalism.
              </p>
              <motion.button
                className="bg-white text-[#1C398E] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </motion.div>
          </motion.div> */}
        </div>
      </section>

      {/* Floating Elements for Visual Interest */}
      <motion.div
        className="fixed top-20 right-10 w-32 h-32 bg-[#F0B100]/10 rounded-full blur-3xl pointer-events-none hidden lg:block"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-40 h-40 bg-[#1C398E]/10 rounded-full blur-3xl pointer-events-none hidden lg:block"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ManpowerConstructionServices;
