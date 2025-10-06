// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   Building,
//   Hotel,
//   Heart,
//   GraduationCap,
//   Wrench,
//   Clock,
//   Shield,
//   Award,
//   Users,
// } from "lucide-react";
// import CompoundWallImage from "../../assets/HeroImages/CompoundWall.png";

// function ConstructionService() {
//   const heroRef = useRef(null);

//   const services = [
//     {
//       icon: Hotel,
//       title: "",
//       description:
//         "We are a leading provider of premium House Construction Services specializing in steel material structures. Our modular-built, commercial-type constructions are delivered offline, ensuring hands-on, personalized project execution and high-quality results tailored to client needs.",
//       image:
//         "https://5.imimg.com/data5/ANDROID/Default/2024/8/443620881/OH/GR/QA/107162981/product-jpeg-500x500.jpg",
//       features: [
//         "Steel Structure",
//         "Modular Build",
//         "Commercial Use",
//         "Offline Service",
//       ],
//       emoji: "🏨",
//     },
//     {
//       icon: Heart,
//       title: "Compound Wall Construction Services",
//       description:
//         "We are the leading organization offering our esteemed clients high-quality Compound Wall Construction Services. Specializing in 5-feet-high brick boundary walls made with durable cement material, our services are tailored for long-lasting perimeter protection in both residential and commercial settings.",
//       image: CompoundWallImage,
//       features: [
//         "Brick Walling",
//         "Reinforced Structure",
//         "Property Security",
//         "Weatherproof Finish",
//       ],
//       emoji: "🏥",
//     },
//     {
//       icon: GraduationCap,
//       title: "Clinic Construction Services",
//       description:
//         "We are a trusted organization engaged in offering premium Clinic Construction Services tailored to meet the functional and regulatory needs of modern healthcare facilities. Our solutions focus on efficient layouts, hygienic design, and structural safety to support smooth medical operations and patient care.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/444643740/IM/MJ/KE/107162981/clinic-construction-services-500x500.jpg",
//       features: [
//         "Clinical Design",
//         "Infection Control",
//         "Standards-Compliant",
//         "Flow Optimization",
//       ],
//       emoji: "🏫",
//     },
//     {
//       icon: Building,
//       title: "Civil Construction Contractor Service",
//       description:
//         "We are a leading provider of Civil Construction Contractor Services, delivering end-to-end solutions for a wide range of infrastructure and building projects. With a strong focus on quality, safety, and timely execution, we cater to both residential and commercial construction requirements.",
//       image:
//         "https://5.imimg.com/data5/ANDROID/Default/2024/8/443624496/JZ/TV/WB/107162981/product-jpeg-500x500.jpg",
//       features: [
//         "Turnkey Execution",
//         "Project Versatility",
//         "Premium Build",
//         "Quality & Safety",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Villa Construction Service",
//       description:
//         "We specialize in offering premium Villa Construction Services, designed to bring your luxury living vision to life. With a focus on architectural elegance, structural integrity, and personalized design, we deliver high-end villas that reflect superior craftsmanship and modern living standards.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/444644495/GJ/AM/NY/107162981/residential-building-construction-services-500x500.jpg",
//       features: [
//         "Luxury Villas",
//         "Premium Finishes",
//         "Modern Elegance",
//         "Full-Service Build",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "College Construction Services",
//       description:
//         "We offer specialized College Construction Services designed to meet the unique requirements of educational institutions. From academic blocks to administrative buildings, our services ensure functional layouts, structural durability, and compliance with educational infrastructure standards.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/443680712/KD/BN/NV/107162981/college-construction-services-500x500.jpg",
//       features: [
//         "Academic Infrastructure",
//         "Ventilated Classrooms",
//         "Robust Construction",
//         "Code-Compliant",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Resort Construction Services",
//       description:
//         "We provide specialized Resort Construction Services, delivering aesthetically appealing, functional, and durable resort spaces that blend luxury with nature. Our team focuses on creating relaxing environments tailored to hospitality standards.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/444645197/WH/TO/JU/107162981/resort-construction-services-500x500.jpg",
//       features: [
//         "Luxury design",
//         "Eco-friendly structures",
//         "High-end finishes",
//         "Custom architecture",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Showroom Construction Services",
//       description:
//         "We offer professional Showroom Construction Services focused on creating visually appealing, spacious, and brand-oriented spaces that enhance customer experience and product display efficiency.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/443675745/KY/JZ/LX/107162981/showroom-construction-services-500x500.jpg",
//       features: [
//         "Modern aesthetics",
//         "Spacious layouts",
//         "Premium interiors",
//         "Brand-focused design",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Warehouse Construction Services",
//       description:
//         "Warehouse Construction Services involve the planning, design, and building of storage facilities tailored to logistics, manufacturing, or distribution needs. These services ensure efficient space utilization, structural integrity, and compliance with industrial standards, often including customization for racking systems, loading docks, and climate control.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/443675367/LA/GY/XD/107162981/warehouse-construction-services-500x500.jpg",
//       features: [
//         "Custom Design",
//         "Structural Durability",
//         "Space Optimization",
//         "Fast Turnaround",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Industrial Construction Service",
//       description:
//         "Industrial Construction Services focus on the design, development, and construction of facilities used for manufacturing, processing, or heavy industry. These projects require specialized knowledge of industrial systems, safety standards, and often include infrastructure for machinery, utilities, and large-scale operations.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/444646757/EB/VV/UR/107162981/prefab-ceramic-industrial-construction-services-500x500.jpg",
//       features: [
//         "Heavy-Duty Structures",
//         "Process Integration",
//         "Safety Compliance",
//         "Custom Engineering",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Residential Building Construction Services",
//       description:
//         "Residential Building Construction Services involve the planning, design, and construction of homes, apartments, and other housing structures. These services cover all phases from foundation to finishing, ensuring comfort, safety, and aesthetic appeal while adhering to local building codes.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/444687978/YA/KO/BG/107162981/residential-building-construction-services-500x500.jpg",
//       features: [
//         "Personalized Design",
//         "Quality Finishing",
//         "Code Compliance",
//         "Energy Efficiency",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "Commercial Construction Services",
//       description:
//         "We offer specialized College Construction Services designed to meet the unique requirements of educational institutions. From academic blocks to administrative buildings, our services ensure functional layouts, structural durability, and compliance with educational infrastructure standards.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/443680712/KD/BN/NV/107162981/college-construction-services-500x500.jpg",
//       features: [
//         "Academic Infrastructure",
//         "Ventilated Classrooms",
//         "Robust Construction",
//         "Code-Compliant",
//       ],
//       emoji: "🏢",
//     },
//     {
//       icon: Building,
//       title: "College Construction Services",
//       description:
//         "We offer specialized College Construction Services designed to meet the unique requirements of educational institutions. From academic blocks to administrative buildings, our services ensure functional layouts, structural durability, and compliance with educational infrastructure standards.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/8/443680712/KD/BN/NV/107162981/college-construction-services-500x500.jpg",
//       features: [
//         "Academic Infrastructure",
//         "Ventilated Classrooms",
//         "Robust Construction",
//         "Code-Compliant",
//       ],
//       emoji: "🏢",
//     },

//   ];

//   const keyFeatures = [
//     {
//       icon: CheckCircle,
//       title: "Turnkey Project Execution",
//       description: "From blueprint to final handover",
//     },
//     {
//       icon: Award,
//       title: "Custom Architectural Designs",
//       description: "Designed as per project use and client needs",
//     },
//     {
//       icon: Shield,
//       title: "Premium Material Quality",
//       description: "Use of durable and sustainable building materials",
//     },
//     {
//       icon: Users,
//       title: "Regulatory Compliance",
//       description: "Adherence to safety, health, and local building standards",
//     },
//     {
//       icon: Clock,
//       title: "On-Time Delivery",
//       description: "Strict project timelines and budget control",
//     },
//     {
//       icon: Wrench,
//       title: "Modern Techniques",
//       description: "Use of latest tools, equipment, and construction practices",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">

//       <section className="py-16 lg:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Our <span className="text-yellow-600">Construction Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive construction solutions tailored to meet diverse
//               industry requirements
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//               >
//                 {/* Service Image */}
//                 <div className="relative h-80 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>
//                   {/* <div>
//                     <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
//                       <CheckCircle className="w-5 h-5 text-yellow-600 mr-2" />
//                       Key Inclusions:
//                     </h4>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div> */}

//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
//                       <CheckCircle className="w-5 h-5 text-yellow-600 mr-2" />
//                       Key Inclusions:
//                     </h4>

//                     {/* Responsive grid for features */}
//                     <ul className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-y-3 gap-x-6">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* <button
//                     className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold px-6 py-3 cursor-pointer rounded shadow-md hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg transition-all duration-300"
//                     onClick={() => (window.location.href = "/contact")}
//                   >
//                     Contact Us
//                   </button> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ConstructionService;

//-----------------------------------------------------------------------------------------------------

import React, { useRef } from "react";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import HeroBannerImage from "../../assets/HeroImages/HeroBannerImage.png";
import CompoundWallImage from "../../assets/HeroImages/CompoundWall.png";

const ConstructionServices = () => {
  const services = [
    {
      id: 1,
      name: "House Construction Services",
      description:
        "We are a leading provider of premium House Construction Services specializing in steel material structures. Our modular-built, commercial-type constructions are delivered offline, ensuring hands-on, personalized project execution and high-quality results tailored to client needs.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443620881/OH/GR/QA/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 2,
      name: "Compound Wall Construction Services",
      description:
        "We are a leading organization offering high-quality Compound Wall Construction Services. Specializing in 5-feet-high brick boundary walls made with durable cement, our services provide long-lasting perimeter protection for residential and commercial settings.",
      image: CompoundWallImage,
    },
    {
      id: 3,
      name: "Clinic Construction Services",
      description:
        "We are a trusted organization engaged in offering premium Clinic Construction Services tailored to meet the functional and regulatory needs of modern healthcare facilities. Our solutions focus on efficient layouts, hygienic design, and structural safety to support smooth medical operations and patient care.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444643740/IM/MJ/KE/107162981/clinic-construction-services-500x500.jpg",
    },
    {
      id: 4,
      name: "Civil Construction Contractor Service",
      description:
        "We are a leading provider of Civil Construction Contractor Services, delivering end-to-end solutions for a wide range of infrastructure and building projects. With a strong focus on quality, safety, and timely execution, we cater to both residential and commercial construction requirements.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/8/443624496/JZ/TV/WB/107162981/product-jpeg-500x500.jpg",
    },
    {
      id: 5,
      name: "Villa Construction Service",
      description:
        "We specialize in offering premium Villa Construction Services, designed to bring your luxury living vision to life. With a focus on architectural elegance, structural integrity, and personalized design, we deliver high-end villas that reflect superior craftsmanship and modern living standards.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444644495/GJ/AM/NY/107162981/residential-building-construction-services-500x500.jpg",
    },
    {
      id: 6,
      name: "College Construction Services",
      description:
        "We offer specialized College Construction Services designed to meet the unique requirements of educational institutions. From academic blocks to administrative buildings, our services ensure functional layouts, structural durability, and compliance with educational infrastructure standards.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443680712/KD/BN/NV/107162981/college-construction-services-500x500.jpg",
    },
    {
      id: 7,
      name: "Resort Construction Services",
      description:
        "We provide specialized Resort Construction Services, delivering aesthetically appealing, functional, and durable resort spaces that blend luxury with nature. Our team focuses on creating relaxing environments tailored to hospitality standards.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444645197/WH/TO/JU/107162981/resort-construction-services-500x500.jpg",
    },
    {
      id: 8,
      name: "Showroom Construction Services",
      description:
        "We offer professional Showroom Construction Services focused on creating visually appealing, spacious, and brand-oriented spaces that enhance customer experience and product display efficiency.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443675745/KY/JZ/LX/107162981/showroom-construction-services-500x500.jpg",
    },
    {
      id: 9,
      name: "Warehouse Construction Services",
      description:
        "Warehouse Construction Services include the planning, design, and construction of storage facilities tailored to logistics, manufacturing, or distribution needs, ensuring efficient space use, structural integrity, and compliance with industry standards.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443675367/LA/GY/XD/107162981/warehouse-construction-services-500x500.jpg",
    },
    {
      id: 10,
      name: "Industrial Construction Service",
      description:
        "Industrial Construction Services involve the design and construction of facilities for manufacturing, processing, or heavy industry, requiring expertise in industrial systems, safety standards, and infrastructure for machinery and utilities.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444646757/EB/VV/UR/107162981/prefab-ceramic-industrial-construction-services-500x500.jpg",
    },
    {
      id: 11,
      name: "Residential Building Construction Services",
      description:
        "Residential Building Construction Services include the planning, design, and construction of homes and apartments, covering all phases from foundation to finish while ensuring safety, comfort, and code compliance.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444687978/YA/KO/BG/107162981/residential-building-construction-services-500x500.jpg",
    },
    {
      id: 12,
      name: "Commercial Construction Services",
      description:
        "Commercial Construction Services involve the planning, design, and construction of properties like offices, retail stores, warehouses, and medical facilities, including site prep, structural work, and code compliance.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444688208/PB/XU/FE/107162981/commercial-construction-services-500x500.jpg",
    },
    {
      id: 13,
      name: "Office Construction Services",
      description:
        "Office Construction Services cover the design, planning, and construction of office spaces tailored to business needs, including site evaluation, interior build-outs, and code compliance.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444688355/XD/PF/NK/107162981/office-construction-services-500x500.jpeg",
    },
    {
      id: 14,
      name: "Temple Construction Services",
      description:
        "Temple Construction Services focus on the planning, design, and building of temples, emphasizing architectural accuracy, spiritual significance, and alignment with religious traditions.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/443674716/JH/HG/CQ/107162981/temple-construction-services-500x500.jpg",
    },
    {
      id: 15,
      name: "Mall Construction Services",
      description:
        "Mall Construction Services encompass the development of shopping malls, from planning and design to final construction and fit-outs. Services include site analysis, architectural and structural design, zoning compliance, utility installations, interior and exterior finishes, and tenant customization.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/444688960/DN/WM/HO/107162981/mall-construction-services-500x500.jpg",
    },
    // {
    //   id: 16,
    //   name: "Construction Management Services",
    //   description:
    //     "Construction Management Services involve overseeing and coordinating all aspects of a construction project from start to finish. These services include project planning, budgeting, scheduling, contractor selection, quality control, risk management, and ensuring compliance with safety and building codes.",
    //   image:
    //     "https://5.imimg.com/data5/ANDROID/Default/2024/8/443618422/PI/SN/AL/107162981/product-jpeg-500x500.jpg",
    // },
    // {
    //   id: 17,
    //   name: "Flat Construction Services",
    //   description:
    //     "Flat Construction Services cover the design and building of residential flats or apartments, including land assessment, utility installations, interior finishing, and code compliance.",
    //   image:
    //     "https://5.imimg.com/data5/WHATSAPP/Default/2024/8/443060960/UX/GJ/ED/107162981/residential-flat-construction-services-500x500.jpeg",
    // },
    // {
    //   id: 18,
    //   name: "Toll Plaza Construction Services",
    //   description:
    //     "Toll Plaza Construction Services involve the design, development, and installation of toll collection systems along highways and expressways. These services include civil works, booth construction, electrical systems, and integration of automated tolling technology to ensure smooth traffic flow and efficient revenue collection.",
    //   image:
    //     "https://5.imimg.com/data5/SELLER/Default/2024/8/443658789/PE/RC/UP/107162981/toll-plaza-construction-services-500x500.jpg",
    // },
    // {
    //   id: 19,
    //   name: "Commercial Building Construction Services",
    //   description:
    //     "Commercial Building Construction Services focus on the planning, design, and construction of commercial properties such as offices, retail stores, and warehouses. These services ensure durable, functional, and code-compliant buildings tailored to business operations and growth.",
    //   image:
    //     "https://5.imimg.com/data5/ANDROID/Default/2024/8/443611549/BH/WO/NZ/107162981/product-jpeg-500x500.jpg",
    // },
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
                Our Construction Services
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Delivering excellence in construction with cutting-edge technology
              and skilled professionals. Your vision, our expertise.
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

export default ConstructionServices;
