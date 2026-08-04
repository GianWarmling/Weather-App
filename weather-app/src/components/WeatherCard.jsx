function WeatherCard({ weatherData }) {
    if (!weatherData) return null

    const { name, main, weather, wind } = weatherData
    const icon = weather[0].icon
    const description = weather[0].description

    return (
        <div className="card">
            <h2>{name}</h2>
            <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
            />
            <p className="temperature">{Math.round(main.temp)}°C</p>
            <p className="description">{description}</p>

            <div className="details">
                <div>
                    <span>Sensação térmica</span>
                    <strong>{Math.round(main.feels_like)}°C</strong>
                </div>
                <div>
                    <span>Umidade</span>
                    <strong>{main.humidity}%</strong>
                </div>
                <div>
                    <span>Vento</span>
                    <strong>{wind.speed} m/s</strong>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;