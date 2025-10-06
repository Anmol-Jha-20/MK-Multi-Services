import React, { useRef } from "react";
import HeroBannerImage from "../assets/HeroImages/HeroBannerImage.png";
import { motion } from "framer-motion";

function Gallery() {
  const heroRef = useRef(null);
  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443620881/OH/GR/QA/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443624496/JZ/TV/WB/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443620951/QK/BQ/KX/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443622172/XC/IA/SO/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444544282/DN/KQ/YT/107162981/road-nali-maintenance-manpower-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444590444/EO/ZQ/IR/107162981/paver-block-flooring-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443621537/IG/MP/SK/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443622768/GZ/CQ/DP/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/ANDROID/Default/2024/8/443622535/NZ/HW/DV/107162981/product-jpeg-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/443677806/ZH/AF/GP/107162981/profacil-smooth-exterior-painting-service-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444633978/GO/SM/VF/107162981/wooden-commercial-interior-designer-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/443680236/MM/NE/OF/107162981/lab-designing-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/443672057/TD/WU/VH/107162981/modern-wooden-kitchens-interior-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444631855/IG/TV/YJ/107162981/traditional-pvc-kitchens-interior-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444644495/GJ/AM/NY/107162981/residential-building-construction-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/443680712/KD/BN/NV/107162981/college-construction-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/443676948/II/AV/CK/107162981/wallpaper-installation-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444578760/BH/FL/BY/107162981/textured-wallpaper-installation-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/443666962/SC/FB/HI/107162981/3d-wallpaper-designing-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444630513/AG/FD/HT/107162981/3d-wallpaper-designing-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444630517/FS/KZ/QX/107162981/3d-wallpaper-designing-services-500x500.jpg"
            }
            alt="gallery Image"
          />
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2024/8/444628876/AA/CS/GO/107162981/wooden-l-shape-kitchen-interior-designing-services-500x500.jpg"
            }
            alt="gallery Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
