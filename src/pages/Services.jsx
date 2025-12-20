import React from "react";
import { service } from "../data/services_data";
import { Globe, Smartphone, Brain, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PurpleBubbles from "../components/PurpleBubbles";

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Brain: Brain,
  Code: Code,
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <PurpleBubbles />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font -bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
          >
            My Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            I offer a range of high-quality digital services to help bring your
            innovative ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <button className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/btn">
                  Learn More,About me
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
