import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  HardHat,
  Truck,
  PaintBucket,
  Calculator,
  Forklift,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Construction Service",
      description:
        "Service Provider of a wide range of services which include House Construction Services, Compound Wall Construction Services, Clinic Construction Services, Civil Construction Contractor Service, Villa Construction Service and College Construction Services.",
      icon: Building2,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443620881/OH/GR/QA/107162981/product-jpeg-500x500.jpg",
      link: "/construction-service",
    },
    {
      id: 2,
      title: "Manpower Service",
      description:
        "Providing you the best range of Skilled Labour Contractor Services, Civil Work Labour Contractor Services, Building Labour Contractor Services, Civil Construction Labour Services, Industrial Labour Contract Services and Road Sewage Maintenance Manpower Service with effective & timely delivery.",
      icon: HardHat,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443622172/XC/IA/SO/107162981/product-jpeg-500x500.jpg",
      link: "/manpower-service",
    },
    {
      id: 3,
      title: "Flooring Services",
      description:
        "Our service range includes a wide range of Interlocking Block Flooring Services, Ceramic Tiles Flooring Services, Paver Block Flooring Services, Cement Tile Flooring Services, Marble Laying Services and Stone Flooring Service.",
      icon: Truck,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443673787/RS/UL/TQ/107162981/paver-block-flooring-services-500x500.jpg",
      link: "/flooring-services",
    },
    {
      id: 4,
      title: "Building Contractors",
      description:
        "Offering you a complete choice of services which include Building Scaffolding Contractor Service and Building Shuttering Contractor Service.",
      icon: PaintBucket,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443622535/NZ/HW/DV/107162981/product-jpeg-500x500.jpg",
      link: "/building-contractors",
    },
    {
      id: 5,
      title: "Painting Services",
      description:
        "Prominent & Leading Service Provider from Lucknow, we offer Wooden Painting Services, Interior Wall Paint Services, Exterior Wall Painting Services, Profacil Smooth Exterior Painting Service, Acrylic Wall Painting Services and Building Painting Contractor Services.",
      icon: Calculator,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444638726/SZ/SQ/XD/107162981/interior-wall-paint-services-500x500.jpeg",
      link: "/painting-services",
    },
    {
      id: 6,
      title: "Designing Service",
      description:
        "Providing you the best range of Wooden Commercial Interior Designer Services, Flat Interior Designer Services, Lab Designing Services, Office Interior Design Services, Modern Wooden Kitchens Interior Services and PVC Kitchen Interior Designing Services with effective & timely delivery.",
      icon: Forklift,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444633975/LH/SU/ID/107162981/wooden-commercial-interior-designer-services-500x500.jpg",
      link: "/designing-service",
    },
    {
      id: 7,
      title: "Installation Service",
      description:
        "Our service range includes a wide range of Floor Tiles Installation Services, Textured Wallpaper Installation Services and Printed Wallpaper Installation Services.",
      icon: Forklift,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443620228/OJ/KD/GR/107162981/product-jpeg-500x500.jpg",
      link: "/installation-service",
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const navigate = useNavigate();

  return (
    <section
      className="py-16 lg:py-24 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-blue-600 font-medium text-sm sm:text-base uppercase tracking-wider mb-3"
            variants={headerVariants}
          >
            SERVICES WE PROVIDE!
          </motion.p>
          <motion.h2
            id="services-heading"
            className="text-3xl sm:text-4xl uppercase lg:text-4xl font-bold text-gray-900 mb-6"
            variants={headerVariants}
          >
            Construction & Design Services and Beyond
          </motion.h2>
          <motion.p
            className="text-gray-600 font-roboto text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Established in 2018, M K Multi Services is a trusted proprietor firm
            offering a wide range of professional services including
            construction, designing, manpower supply, printing, and
            installation. Backed by a skilled team and a commitment to quality,
            we deliver reliable solutions with timely execution and attention to
            detail at every stage.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-full mb-6 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {/* <IconComponent
                    className={`w-8 h-8 ${service.iconColor}`}
                    aria-hidden="true"
                  /> */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <motion.button
                    className="inline-flex items-center text-blue-600 cursor-pointer font-medium text-sm lg:text-base hover:text-blue-700 transition-colors duration-300 group/link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Read more about ${service.title}`}
                    onClick={() => {
                      navigate(`${service.link}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Read More
                    <motion.svg
                      className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
              </motion.article>
            );
          })}
        </motion.div>

        {/* Scroll to Top Button */}
        {/* <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button> */}
      </div>
    </section>
  );
};

export default ServicesSection;
