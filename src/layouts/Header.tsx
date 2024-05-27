import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
        <div>
            <h1>Logo here.</h1>
        </div>

        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/chart"}>Chart</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header