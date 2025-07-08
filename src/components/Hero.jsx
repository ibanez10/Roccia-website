import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroAndIntroducing() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen md:h-[90vh]">
        <img
          src="/Background Home.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-semibold text-white leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Roccia is where <br />
            your space{" "}
            <span className="text-red-700 italic underline underline-offset-4">
              begins
            </span>
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 px-5 py-2 flex items-center gap-4 border border-white rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition"
          >
            <span className="text-base font-medium">Shop Now</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-red-700 text-red-700 bg-white hover:bg-red-700 hover:text-white transition">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* INTRODUCING SECTION */}
      <section className="flex flex-col items-center py-10 bg-white font-serif">
        <div className="flex items-center mb-10">
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
          <p className="text-lg text-gray-700 m-0">Introducing</p>
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-screen-xl w-full">
          <div className="flex-shrink-0 -translate-x-[28%] rounded-lg overflow-hidden w-[350px] h-[350px] bg-gray-200 -translate-y-24">
            <img src="/chair.jpg" alt="chair" className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow text-center max-w-xl relative">
            <h1 className="text-5xl leading-tight font-normal text-gray-800 mb-5">
              <span className="text-red-700 underline decoration-red-700 decoration-2 underline-offset-2">Beautifully</span>{" "}
              crafted concrete pieces for every space.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Roccia offers premium concrete furniture, thoughtfully designed to bring
              strength, beauty, and balance into any space — indoors or out.
            </p>
            <button className="bg-transparent border border-amber-600 text-amber-600 px-6 py-3 rounded-full text-base cursor-pointer transition flex items-center justify-center gap-2 mx-auto hover:bg-amber-600 hover:text-white">
              Our Story <span className="text-xl">→</span>
            </button>
          </div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-[350px] h-[300px] translate-x-40 translate-y-10">
            <img src="/table.jpg" alt="table" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section className="py-16 bg-white text-center">
        <div className="mb-12">
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-px bg-black" />
            <h2 className="text-xl text-gray-800">Collections</h2>
            <div className="w-12 h-px bg-black" />
          </div>
          <h3 className="text-2xl md:text-3xl font-medium mt-4">
            Our best <span className="text-red-600 underline underline-offset-4">selling</span> products
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            { name: "Cross Leg", image: "/Cross Leg.png" },
            { name: "Diamond Edge", image: "/Diamond Edge.png" },
            { name: "Pebble", image: "/Pebble.png" },
            { name: "Baloo", image: "/Baloo.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover brightness-50 hover:brightness-100 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
