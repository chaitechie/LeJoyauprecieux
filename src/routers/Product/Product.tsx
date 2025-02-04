import { useEffect } from "react";
import useProductStore from "../../store/useProduct";
import Navbar from "../../Components/navbar/Navbar";
import { DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./product.scss";
import Footer from "../../Components/footer/Footer";
import useDataStore from "../../store/useData";
import useSingleProduct from "../../store/useSingleProduct";
const Product = () => {
  const { productTitle } = useDataStore();

  const { setSingleProduct, error, singleProduct, recommendProduct } =
    useProductStore();
  const { setProductName } = useSingleProduct();
  useEffect(() => {
    setSingleProduct(productTitle);
  }, [productTitle, setSingleProduct]);

  const featuresList = singleProduct?.data.keyFeatures.map((item: string) => {
    return <p key={item}>{item}</p>;
  });

  const productList = recommendProduct?.map((item: DocumentData) => {
    return (
      <div className="productContainer" key={item?.data.title}>
        <img src={item?.data.image} alt="" />
        <p>{item?.data.title}</p>
        <div className="recommendInfo">
          <h4> ₹{item?.data.price}</h4>
          <Link to={`/product/${item?.data.title}`} className="link">
            View More
          </Link>
        </div>
      </div>
    );
  });

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <Navbar background={"#160e0b"} />
      <div className="container">
        <Link to="/" className="back">
          &#x25c2; Back
        </Link>
        <div className="wrapper" key={singleProduct.data.title}>
          <img src={singleProduct?.data.image} alt="" />
          <div className="textInfo">
            <h1>{singleProduct?.data.title}</h1>
            <div className="buyerSection">
              <p>
                <strong>₹</strong>
                {singleProduct?.data.price}
              </p>
              <Link to={`/query/${singleProduct?.data.title}`}>
                <button
                  onClick={() => setProductName(`${singleProduct?.data.title}`)}
                >
                  Get Quote
                </button>
              </Link>
            </div>
            <p>
              <strong>Description:</strong>
              {singleProduct?.data.description}
            </p>
            <p>
              <strong>Category:</strong>
              {singleProduct?.data.category}
            </p>
            <p>
              <strong>Care Instruction:</strong>
              {singleProduct?.data.careInstructions}
            </p>
            <div className="specification">
              <h4>Key Features</h4>
              {featuresList}
            </div>
          </div>
        </div>
        <div className="recommendContainer">
          <h3>Recommend Products </h3>
          <div className="productWrapper">{productList}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
