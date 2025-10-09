import React, { useRef } from "react";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import HeroBannerImage from "../../assets/HeroImages/HeroBannerImage.png";
import PaintingSectionImage from "../../assets/ServiceHeroSection2/PaintingSectionImage.png";

const PaintingServices = () => {
  const services = [
    {
      id: 1,
      name: "Wooden Painting Services",
      description:
        "Wooden Painting Services specialize in painting and polishing wooden surfaces such as doors, windows, furniture, and panels. These services enhance the appearance, durability, and protection of wood using quality paints, stains, or varnishes.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444634788/FF/MI/QE/107162981/wooden-painting-services-500x500.jpg",
    },
    {
      id: 2,
      name: "Interior Wall Paint Services",
      description:
        "Interior wall paint services offer professional painting for residential and commercial spaces, enhancing the aesthetic appeal of rooms. These services typically include surface preparation (cleaning, sanding, patching holes), priming, and applying high-quality paint finishes.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444638726/SZ/SQ/XD/107162981/interior-wall-paint-services-500x500.jpeg",
    },
    {
      id: 3,
      name: "Exterior Wall Painting Services",
      description:
        "Exterior Wall Painting Services provide professional painting solutions for the outer surfaces of buildings, enhancing appearance and protecting walls from weather damage. These services use durable, weather-resistant paints and skilled techniques.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444639204/UU/ZG/LA/107162981/wall-painting-services-500x500.jpg",
    },
    {
      id: 4,
      name: "Profacil Smooth Exterior Painting Service",
      description:
        "Profacil Smooth Exterior Painting Service offers a high-quality, smooth finish for exterior walls using premium Profacil paints. This service ensures weather resistance, durability, and an elegant look that enhances the building's curb appeal.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444636534/YA/MN/KI/107162981/profacil-smooth-exterior-painting-service-500x500.jpg",
    },
    {
      id: 5,
      name: "Acrylic Wall Painting Services",
      description:
        "Acrylic wall painting services involve the application of high-quality acrylic paints to walls, creating vibrant, durable, and long-lasting finishes. Acrylic paint is known for its quick drying time, excellent coverage, and resistance to fading, making it ideal for both residential and commercial spaces. ",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443666248/PG/AT/YF/107162981/glossy-acrylic-wall-painting-services-500x500.jpg",
    },
    {
      id: 6,
      name: "Building Painting Contractor Services",
      description:
        "Building Painting Contractor Services provide comprehensive painting solutions for residential, commercial, and industrial buildings. These services cover both interior and exterior painting, using quality materials and skilled labor to ensure a clean, durable, and professional finish.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443678715/NC/TN/US/107162981/building-painting-contractor-services-500x500.jpg",
    },
    {
      id: 7,
      name: "Textured Wall Painting Services",
      description:
        "Textured Wall Painting Services offer decorative wall finishes using special techniques and materials to create patterns and textures. These services add depth, character, and a unique visual appeal to interior and exterior walls. Ideal for enhancing modern and stylish spaces.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443679613/WL/CW/ZI/107162981/textured-wall-painting-services-500x500.jpg",
    },
    {
      id: 8,
      name: "Residential Building Painting Service",
      description:
        "Residential Building Painting Service provides interior and exterior painting solutions tailored for homes and apartments. Using high-quality paints and skilled painters, the service ensures a clean, durable, and visually appealing finish. It enhances the beauty and protection of residential spaces.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444637952/HK/WT/NS/107162981/residential-building-painting-service-500x500.jpg",
    },
    {
      id: 9,
      name: "Commercial Painting Service",
      description:
        "Commercial Painting Service offers professional interior and exterior painting for offices, shops, malls, and other commercial spaces. These services focus on durability, clean finishes, and brand-aligned aesthetics. Timely execution ensures minimal disruption to business operations.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443678321/KJ/RI/FQ/107162981/commercial-painting-service-500x500.jpg",
    },
    {
      id: 10,
      name: "Home Paint Services",
      description:
        "Home Paint Services provide complete interior and exterior painting solutions for houses, using high-quality paints and expert techniques. These services enhance the look, feel, and protection of your home. Custom color options and smooth finishes ensure a fresh and personalized touch.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443621833/VM/PL/UN/107162981/product-jpeg-500x500.jpg",
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
          src={PaintingSectionImage}
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
                Our Painting Services
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Prominent & Leading Service Provider from Lucknow, we offer Wooden
              Painting Services, Interior Wall Paint Services, Exterior Wall
              Painting Services, Profacil Smooth Exterior Painting Service,
              Acrylic Wall Painting Services and Building Painting Contractor
              Services.
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

export default PaintingServices;
