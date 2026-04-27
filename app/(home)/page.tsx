import { Box } from "@chakra-ui/react";
import HeroSection from "./_components/HeroSection";
import FeaturedProducts from "./_components/FeaturedProducts";
import CategoriesSection from "./_components/CategoriesSection";
import ValueProps from "./_components/ValueProps";
import PromoBanner from "./_components/PromoBanner";

const Home: React.FC = () => {
  return (
    <Box minH="100vh" bg="white">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <ValueProps />
      <PromoBanner />
    </Box>
  );
};

export default Home;
