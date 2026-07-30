import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to="/">
                🌤️ Weather App
            </Link>
            <div>
                <Link to ="/">Início</Link>
                <Link to ="/sobre">Sobre</Link>
            </div>
        </nav>
    );
}

export default Navbar;