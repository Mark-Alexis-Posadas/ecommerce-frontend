import { Box } from "@chakra-ui/react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "./_components/HeroSection";
import FeaturedProducts from "./_components/FeaturedProducts";
import CategoriesSection from "./_components/CategoriesSection";
import ValueProps from "./_components/ValueProps";
import PromoBanner from "./_components/PromoBanner";
import Footer from "@/components/layout/Footer";

const Home: React.FC = () => {
  return (
    <Box minH="100vh" bg="white">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <ValueProps />
      <PromoBanner />
      <Footer />
    </Box>
  );
};

export default Home;
