import { useState } from "react";

const App = () => {
    const [city, setCity] = useState();
    const [data, setData] = useState();
    const APIkey = '2eab2e128fa712ffc3bbf4f9c53e275d'

    const getWeather = (nameCity) => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${APIkey}`)
       .then((response) => {return response.json()})
       .then((data) => {setData(data)
        console.log(data);
       }) 
       .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Погода</h1>
            <input type="text" onChange={(event) => setCity(event.target.value)} />
            <button onClick={() => getWeather(city)}>Поиск</button>
            {
                data &&
                (
                    <div>
                        <h2>{data.name}</h2>
                        <h2>{(data.main.temp - 273.15).toFixed(0)}°</h2>
                        <h2>{data.sys.country}</h2>
                        <h2>{data.weather[0]?.description}</h2>
                        <h2>{data.weather[0]?.main}</h2>
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`} alt="WeatherIcon" />
                    </div>
                )
            }
        </div>
    );
}

export default App;