const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export async function fetchWeatherByCity(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`

    const response = await fetch(url)

    if(!response.ok) {
        if(!response.status === 404) {
            throw new Error("Cidade não encontrada! Verifique o nome digitado..")
        }
        throw new Error("Não foi possivel buscar os dados do clima. Tente novamente..")
    }
    const data = await response.json()
    return data
}