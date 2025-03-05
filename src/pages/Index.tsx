
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#222222]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#D3E4FD] font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight"
      >
        Welcome to the future.
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <Button asChild>
          <Link to="/dashboard" className="make it wider\n">Go to Dashboard</Link>
        </Button>
      </motion.div>
    </div>;
};

export default Index;
