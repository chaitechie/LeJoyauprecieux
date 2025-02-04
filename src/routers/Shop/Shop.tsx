import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import "./shop.scss";
import useDataStore from "../../store/useData";
import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import Loader from "../../Components/Spinner/Loader";
import "react-medium-image-zoom/dist/styles.css";
import ShopList from "../../Components/shop/ShopList";

const Shop = () => {
  const { products, setProducts, loading, error } = useDataStore();

  useEffect(() => {
    setProducts();
  }, [setProducts]);

  const productItem = products.map((item: DocumentData) => {
    return <ShopList id={item.id} key={item.id} listing={item.data} />;
  });

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <Navbar background={"#160e0b"} />
      <div className="shopcontainer">
        <h1>Shop</h1>
        <div className="shop">
          <div className="right">
            {loading !== false ? (
              <Loader />
            ) : products && products.length > 0 ? (
              <>
                <div className="container">{productItem}</div>
                <br />
                <br />
              </>
            ) : (
              <p>There are no products</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
