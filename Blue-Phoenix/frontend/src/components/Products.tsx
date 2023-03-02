const Products = () => {
  return (
    <>
      <p className="mt-8 font-bold text-lg ml-auto mr-auto text-center">Premium Products</p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-2 mx-14 gap-y-8">
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
