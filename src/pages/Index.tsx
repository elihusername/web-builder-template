
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const { toast } = useToast();

  const { refetch, isFetching } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const response = await fetch('https://api.example.com/hello');
      return response.text();
    },
    enabled: false, // Don't fetch automatically
  });

  const handleClick = async () => {
    try {
      const result = await refetch();
      if (result.data) {
        toast({
          title: "API Response",
          description: result.data,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#222222]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight"
      >
        Welcome to the future.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Button 
          onClick={handleClick} 
          disabled={isFetching}
          className="text-lg"
        >
          Get Hello World
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
