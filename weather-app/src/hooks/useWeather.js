import { useState } from "react";
import { fetchWeatherByCity } from "../services/weatherService";

export function useWeather() {
    const [weatherData, setWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function searchWeather(city) {
        if(!city.trim()) {
            setError("Digite o nome de uma cidade.")
            return
        }
        setIsLoading(true)
        setError(null)

        try {
            const data = await fetchWeatherByCity(city)
            setWeatherData(data)
        } catch(err) {
            setError(err.message)
            setWeatherData(null)
        } finally {
            setIsLoading(false)
        }
    }
    return {weatherData, isLoading, error, searchWeather}
}