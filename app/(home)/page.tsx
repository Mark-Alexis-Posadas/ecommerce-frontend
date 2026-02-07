import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import FeaturedProducts from "./_components/FeaturedProducts";
import CategoriesSection from "./_components/CategoriesSection";
import ValueProps from "./_components/ValueProps";
import PromoBanner from "./_components/PromoBanner";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <ValueProps />
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default Home;
