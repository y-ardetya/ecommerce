import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };
  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src={require("../assets/yelan.jpg")}
              className="w-[1400px] h-[530px] rounded-xl cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src={require("../assets/surtur.jpg")}
              className="w-[1400px] h-[530px] rounded-xl cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src={require("../assets/yelan.jpg")}
              className="w-[1400px] h-[530px] rounded-xl cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src={require("../assets/surtur.jpg")}
              className="w-[1400px] h-[530px] rounded-xl cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src={require("../assets/yelan.jpg")}
              className="w-[1400px] h-[530px] rounded-xl cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src={require("../assets/surtur.jpg")}
              className="w-[1400px] h-[530px] rounded-xl cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
