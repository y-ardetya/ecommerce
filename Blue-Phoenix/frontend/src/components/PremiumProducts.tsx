const Products = () => {
  return (
    <>
      <p className="mt-8 font-bold text-lg ml-auto mr-auto text-center">
        Premium Products
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-2 mx-14 gap-y-8">
        <div className="wrap relative">
          <img src="https://cdn.shopify.com/s/files/1/0369/8321/0116/products/indomiegoreng_522x.png?v=1659339255" />
        </div>
        <div className="wrap">
          <img src="https://blue-phoenix.ro/wp-content/uploads/2021/10/20210920_2329023-1-scaled.jpg"/>
        </div>
        <div className="wrap">
          <img src="https://blue-phoenix.ro/wp-content/uploads/2021/10/PhotoRoom-20211026_161422_8.png" />
        </div>
        <div className="wrap">
          <img
            src="https://blue-phoenix.ro/wp-content/uploads/2021/10/PhotoRoom-20211006_205758.png"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
