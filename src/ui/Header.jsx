import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast Pizza</Link>

      <SearchOrder />

      <p>Hi</p>
    </header>
  );
}

export default Header;
