import Navbar from "../../Components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./home.scss";
import ShopList from "../../Components/shop/ShopList";
import useDataStore from "../../store/useData";
import { DocumentData } from "firebase/firestore";
import about from "../../assets/images/about.jpg";
import Footer from "../../Components/footer/Footer";
import { TestimonialsCarousel } from "../../Components/testimonals/Testimonal";

const testimonal = [
  {
    text: "I recently bought a stunning gold necklace from this site, and I couldn’t be happier with my purchase. The craftsmanship is exceptional, and it arrived even more beautiful than I expected. The customer service team was incredibly helpful and attentive throughout the process. I will definitely be returning for more!",
    author: "Aarav Patel",
  },
  {
    text: "I was a bit hesitant to purchase jewelry online, but this site exceeded all my expectations. The selection of designs was impressive, and the detailed product descriptions helped me make an informed choice. My silver earrings arrived promptly and were even more elegant in person. The quality and attention to detail are remarkable. Highly recommend!",
    author: "Priya Sharma",
  },
  {
    text: "This jewelry website is a gem! I bought a custom-made ring for my wife’s birthday, and she was absolutely thrilled with it. The entire process was smooth, and the end product was perfect. The attention to detail and the level of customer care were exceptional. It’s a great place to find beautiful, high-quality jewelry.",
    author: "Rohan Gupta",
  },
];

const Home = () => {
  const { products, setProducts } = useDataStore();
  useEffect(() => {
    setProducts();
  }, [setProducts]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const productItems: DocumentData = products.slice(0, 6);
  const productItem = productItems.map((item: DocumentData) => {
    return <ShopList id={item.id} key={item.id} listing={item.data} />;
  });
  return (
    <>
      <div className="hero_section">
        <Navbar background={"transparent"} />
        <div className="hero_container">
          <div className="text">
            <h1>
              Best Jewellery <br /> Collection
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
          </div>
          <Link to="/shop" className="shop_link">
            Shop Now
          </Link>
        </div>
      </div>
      {/* Product List */}
      <div className="productContainer">
        <h1>Our Products</h1>
        <div className="productwrapper">{productItem}</div>
        <Link to="/shop" className="linkShop">
          View All Product
        </Link>
      </div>
      {/* about us  */}
      <div className="aboutus">
        <img src={about} alt="about image" className="aboutimage" />
        <div className="about">
          <h2>About us </h2>
          <p>
            Explore our Indian jewellery e-commerce website, showcasing
            exquisite handcrafted pieces that blend tradition with modern
            elegance. From stunning gold and silver designs to vibrant
            gemstones, our collection offers something for every occasion. Enjoy
            a seamless shopping experience with secure payments, fast shipping,
            and exceptional customer service. Discover timeless beauty today!
          </p>
        </div>
      </div>

      <div className="offers">
        <div className="firstimage">
          <h2>Upto 15% Off</h2>
          <button>Shop Now</button>
        </div>
        <div className="twoimages">
          <div className="secondimage">
            <div className="text">
              <h2>Upto 15% Off</h2>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="thirdimage">
            <div className="text">
              <h2>Upto 15% Off</h2>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="testimoninals">
        <h3>Testimonials</h3>
        <TestimonialsCarousel testimonials={testimonal} />
      </div>

      <Footer />
    </>
  );
};

export default Home;
