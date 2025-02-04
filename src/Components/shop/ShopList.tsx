import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import "./shoplist.scss";
import { Link } from "react-router-dom";
import useDataStore from "../../store/useData";
import useProductStore from "../../store/useProduct";
interface props {
  listing: DocumentData;
  id: string;
}

function ShopList({ listing, id }: props) {
  const { setProductTitle,
     productTitle,
      setCategory, 
      category } = useDataStore();
  const { setSingleProduct, 
    setRecommendProduct } = useProductStore();

  useEffect(() => {
    setSingleProduct(productTitle);
    setRecommendProduct(category);
  }, [setSingleProduct, productTitle, setRecommendProduct, category]);
  const onHandle = () => {
    setProductTitle(listing.title);
    setCategory(listing.category);
  };
  return (
    <div className="container">
      <div className="shopItem" key={id}>
        <img src={listing.image} alt="product image" />
        <p>{listing.title}</p>
        <div className="info">
          <h4>
            <strong>₹</strong> {listing.price}
          </h4>
          <Link to={`/product/${id}`} className="link" onClick={onHandle}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopList;
