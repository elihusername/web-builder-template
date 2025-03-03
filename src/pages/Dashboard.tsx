
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#222222]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#FDE1D3] font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight"
      >
        Dashboard
      </motion.h1>
    </div>
  );
};

export default Dashboard;
