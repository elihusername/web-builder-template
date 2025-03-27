import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-blue-100 font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          Welcome to your fresh new project
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Start prompting to get started
        </p>
      </motion.div>
    </div>
  );
};

export default Home;