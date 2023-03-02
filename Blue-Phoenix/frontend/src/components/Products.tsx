const Products = () => {
  return (
    <>
    <p className="ml-14 mt-8 font-bold text-lg">Products</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-2 mx-14 gap-y-8">
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
        <div className="wrap">
          <img src={require("../assets/yelan.jpg")} />
        </div>
      </div>
    </>
  );
};

export default Products;
