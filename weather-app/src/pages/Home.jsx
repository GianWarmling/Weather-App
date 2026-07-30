import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useWeather";

function Home() {
    const {weatherData, isLoading, error, searchWeather} = useWeather()
    return ( 
        <div>
            <h1>Weather App</h1>
            <SearchBar onSearch={searchWeather} isLoading={isLoading} />
            {isLoading && <Loading />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && <WeatherCard weatherData={weatherData} />}
        </div>
     );
}

export default Home;