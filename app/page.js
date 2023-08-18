import About from "@/components/about/About";
import Brands from "@/components/brands/Brands";
import Hero from "@/components/hero/Hero";
import Locations from "@/components/locations/Locations";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <About />
      <Locations />
    </div>
  );
};
export default Home;
