import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import  { useState} from "react";
import {db} from "../../firebase.config";
import {collection,addDoc} from "firebase/firestore"
import "./productquery.scss";

import useSingleProduct from "../../store/useSingleProduct";
function ProductQuery() {
  const [userName,setUserName] = useState<string>("");
  const [userEmail,setUserEmail] = useState<string>("");
  const [userMessage,setUserMessage] = useState<string>("");
  const [jewellerName,setJewellerName] = useState<string>("")

  const { productName } = useSingleProduct();
  const handleForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try{
      await addDoc(collection(db,"querys"),{
        name:userName,
        email:userEmail,
        productName:jewellerName,
        message:userMessage
      })
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div className="productquerycontainer">
        <Navbar background={"#160e0b"} />

        <form action="/submit-query" method="POST">
          <div className="querycontainer">
            <h2 className="heading">Product Inquiry</h2>
            <div className="inputcontainer">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                onChange={(e) => setUserName(e.target.name)}
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                onChange={(e) => setUserEmail(e.target.name)}
              />

              <input
                type="text"
                id="product"
                name="product"
                defaultValue={productName}
                readOnly={true}
                onChange={(e) => setJewellerName(e.target.name)}
              />

              <textarea
                placeholder="Please enter your message"
                className="message"
                draggable={false}
                onChange={(e) => setUserMessage(e.target.name)}
              />

              <button type="submit" onClick={ handleForm}>Submit Inquiry</button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default ProductQuery;
