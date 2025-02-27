
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222222]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight"
      >
        Welcome to the future.
      </motion.h1>
    </div>
  );
};

export default Index;
