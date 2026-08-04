import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="navbar-title" to="/">
                🌤️ Weather App
            </Link>
            <div className="navbar-links">
                <Link to ="/">Início</Link>
                <Link to ="/sobre">Sobre</Link>
            </div>
        </nav>
    );
}

export default Navbar;