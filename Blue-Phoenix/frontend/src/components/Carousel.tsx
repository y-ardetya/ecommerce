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
    padding: "60px",
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              className="w-[1900px] h-[530px]  cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              className="w-[1900px] h-[530px]  cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              className="w-[1900px] h-[530px]  cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-[1900px] h-[530px]  cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              className="w-[1900px] h-[530px]  cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
        <div className="flex">
          <a className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"
              className="w-[1900px] h-[530px] cursor-pointer object-cover"
              alt="a"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
