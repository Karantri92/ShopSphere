import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import "../styles/Navbar.css";


function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>🛒 ShopSphere</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>

        <Link to="/login">Login</Link>
        <Button
          variant="outlined"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
</Button>
      </div>

    </nav>
  );
}

export default Navbar;