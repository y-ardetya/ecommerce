import Carousel from "../components/Carousel";
import Products from "../components/PremiumProducts";
import ShowCase from "../components/ShowCase";

const Home = () => {
  return (
    <>
      <div className="">
        <Carousel />
        <Products />
        <ShowCase />
      </div>
    </>
  );
};

export default Home;
