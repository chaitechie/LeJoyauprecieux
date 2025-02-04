import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import about from "../../assets/images/about.jpg";
import "./about.scss";
function About() {
  return (
    <>
      <Navbar background={"#160e0b"} />
      <div className="aboutcontainer">
        <h2>About Us</h2>
        <div className="aboutwrapper">
          <img src={about} alt="aboutImage" />
          <div className="text">
            <h3>
              Discover Exquisite Jewelry in Hyderabad: A Treasure Trove of
              Elegance
            </h3>
            <p>
              Welcome to our jeweler e-commerce website, nestled in the heart of
              Hyderabad. Our collection reflects the city’s rich heritage of
              jewelry craftsmanship, blending traditional designs with
              contemporary elegance.{" "}
            </p>
            <h3>Craftsmanship and Quality</h3>
            <p>
              Each piece in our collection is crafted by skilled artisans with a
              dedication to quality and attention to detail. From intricately
              designed necklaces adorned with precious gemstones to delicate
              earrings that sparkle with sophistication, our jewelry is crafted
              to perfection.
            </p>
            <h3>Online Convenience</h3>
            <p>
              Explore our curated collection conveniently through our
              user-friendly e-commerce platform. Browse detailed product
              descriptions and high-resolution images to find the perfect piece
              that suits your style and occasion. Enjoy a seamless shopping
              experience with our secure payment gateway.
            </p>
            <h3>Customer Satisfaction</h3>
            <p>
              We are committed to providing exceptional customer service online
              and at our physical showroom in Hyderabad. Our knowledgeable team
              is here to assist you in finding the ideal piece that complements
              your personal style and celebrates your special moments.
            </p>
            <h3>Visit Us</h3>
            <p>
              While our e-commerce platform brings our collection to your
              fingertips, we also invite you to visit our showroom in Hyderabad
              to experience the beauty of our jewelry firsthand. Located at
              Hyderabad, our store offers you the chance to explore our
              craftsmanship and discover pieces that resonate with you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
