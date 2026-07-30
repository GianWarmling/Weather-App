import { useState } from "react";

function SearchBar({ onSearch, isLoading }) {
    const [city, setCity] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(city)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Digite o nome de uma cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>{isLoading ? "Buscando..." : "Buscar"}</button>
        </form>
    );
}

export default SearchBar;