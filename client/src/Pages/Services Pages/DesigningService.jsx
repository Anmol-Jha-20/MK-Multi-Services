import React, { useRef } from "react";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import HeroBannerImage from "../../assets/HeroImages/HeroBannerImage.png";

const DesigningServices = () => {
  const services = [
    {
      id: 1,
      name: "Wooden Commercial Interior Designer Services",
      description:
        "Wooden Commercial Interior Designer Services specialize in designing and crafting elegant wooden interiors for offices, retail spaces, and other commercial environments. These services focus on functionality, aesthetics, and brand identity using custom wooden elements like furniture, paneling, and fixtures.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444633978/GO/SM/VF/107162981/wooden-commercial-interior-designer-services-500x500.jpg",
    },
    {
      id: 2,
      name: "Flat Interior Designer Services",
      description:
        "Flat Interior Designer Services offer customized design solutions to enhance the functionality and aesthetics of residential flats. These services include space planning, furniture layout, color coordination, and decor selection. The goal is to create stylish, comfortable, and efficient living spaces that reflect the homeowner's lifestyle.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444630199/NG/PP/KC/107162981/interior-designer-services-500x500.jpg",
    },
    {
      id: 3,
      name: "Lab Designing Services",
      description:
        "Lab Designing Services provide specialized planning and design solutions for laboratories in educational, medical, and industrial settings. These services focus on safety, functionality, workflow efficiency, and compliance with industry standards. The result is a well-organized, high-performance lab environment tailored to specific needs.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444627825/AQ/BB/NT/107162981/lab-designing-services-500x500.jpg",
    },
    {
      id: 4,
      name: "Office Interior Design Services",
      description:
        "Office Interior Design Services offer tailored design solutions to create functional, modern, and visually appealing workspaces. These services include space planning, furniture selection, lighting design, and branding elements. The goal is to enhance productivity, comfort, and professional aesthetics in the workplace.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444729265/DA/ST/MA/107162981/office-interior-design-services-500x500.jpeg",
    },
    {
      id: 5,
      name: "Modern Wooden Kitchens Interior Services",
      description:
        "Modern Wooden Kitchens Interior Services specialize in designing and installing stylish, functional kitchen spaces using high-quality wooden finishes. These services combine modern layouts with durable materials to create warm, elegant, and efficient cooking areas. Custom cabinetry and smart storage solutions enhance both beauty and usability.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443672057/TD/WU/VH/107162981/modern-wooden-kitchens-interior-services-500x500.jpg",
    },
    {
      id: 6,
      name: "PVC Kitchen Interior Designing Services",
      description:
        "PVC Kitchen Interior Designing Services offer durable, water-resistant, and low-maintenance kitchen designs using high-quality PVC materials. These services provide customized layouts, modular units, and stylish finishes to create functional and modern cooking spaces. Ideal for long-lasting and budget-friendly kitchen solutions.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443671176/NB/KD/PR/107162981/traditional-pvc-kitchens-interior-services-500x500.jpg",
    },
    {
      id: 7,
      name: "Living Room Interior Designing Service",
      description:
        "Living Room Interior Designing Service offers personalized design solutions to create comfortable, stylish, and functional living spaces. These services include furniture selection, color schemes, lighting design, and layout optimization, ensuring a cozy and aesthetically pleasing environment tailored to your lifestyle.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444631360/HS/DL/OO/107162981/living-room-interior-services-500x500.jpg",
    },
    {
      id: 8,
      name: "Wardrobe Designing Service",
      description:
        "Wardrobe Designing Service provides customized wardrobe solutions to maximize storage space while enhancing the aesthetic of your room. These services include designing built-in or standalone wardrobes with smart organization features, using high-quality materials for a functional and stylish storage solution.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444630964/EU/ZH/EK/107162981/bedroom-wardrobes-interiors-design-services-500x500.jpg",
    },
    {
      id: 9,
      name: "Wooden L Shape Kitchen Interior Designing Services",
      description:
        "Wooden L-Shape Kitchen Interior Designing Services specialize in creating efficient, stylish kitchen layouts with an L-shaped configuration using high-quality wood finishes. These services focus on maximizing counter space, optimizing storage, and ensuring a seamless flow, combining functionality with elegant wooden designs.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443667392/QQ/AT/MM/107162981/wooden-l-shape-kitchen-interior-designing-services-500x500.jpg",
    },
    {
      id: 10,
      name: "3D Wallpaper Designing Services",
      description:
        "3D Wallpaper Designing Services offer innovative and visually striking wallpaper solutions that add depth and texture to any room. These services provide custom designs with a variety of patterns, colors, and effects, transforming walls into dynamic focal points and enhancing the overall ambiance of your space.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443666962/SC/FB/HI/107162981/3d-wallpaper-designing-services-500x500.jpg",
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
        <div className="absolute w-full h-full bg-black opacity-35"></div>

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
                Our Designing Service
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Providing you the best range of Wooden Commercial Interior
              Designer Services, Flat Interior Designer Services, Lab Designing
              Services, Office Interior Design Services, Modern Wooden Kitchens
              Interior Services and PVC Kitchen Interior Designing Services with
              effective & timely delivery.
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

export default DesigningServices;
