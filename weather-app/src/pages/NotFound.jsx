import {Link} from "react-router-dom"

function NotFound() {
    return ( 
        <div className="page">
            <h1>404</h1>
            <p>Página não encontrada.</p>
            <Link to="/">Voltar para o início</Link>
        </div>
     );
}

export default NotFound;