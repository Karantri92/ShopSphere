import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check whether user is logged in
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

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

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
        ) : (
          <Button
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;