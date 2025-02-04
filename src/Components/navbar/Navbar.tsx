import { Link } from "react-router-dom";
import "./navbar.scss";

import { ToastContainer } from "react-toastify";
interface NavbarProps {
  background: string;
}
const Navbar = ({ background }: NavbarProps) => {
  return (
    <>
      <ToastContainer />
      <nav className="navcontainer" style={{ backgroundColor: background }}>
        <div className="left">
          <Link to="/" className="home_link">
            Le Joyau Précieux
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
