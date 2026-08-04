function About() {
    return (
        <div className="page">
            <h1>Sobre o projeto</h1>
            <p>
                Este é um projeto de portfólio construído com React, Vite e a API
                pública do OpenWeatherMap. O objetivo é consultar a previsão do tempo
                de qualquer cidade em tempo real.
            </p>
            <p>
                Tecnicamente, o projeto demonstra consumo de API externa, Custom
                Hooks, componentização, tratamento de erros e roteamento com React
                Router.
            </p>
        </div>
    );
}

export default About;