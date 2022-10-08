import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const api = "89c903faf4550d25b406884553667849"
    const [data, setData] = useState([{}]);
    const [city, setCity] = useState([]);



    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`).then(
                response => response.json()
            ).then(
                data => {
                    setData(data)
                    setCity("")
                }
            )
        }
    };

    return (
        <div className="App flex justify-center items-center">
            <div className="inputWrap flex justify-center items-center w-[60%] h-[800px] mt-[2%] border-[4px] border-black ">
                <input
                    placeholder='City Here!'
                    className=" w-[900px] h-[55px] m-0 mt-[] border-[1px] border-black"
                    onChange={event => setCity(event.target.value)}
                    value={city}
                    onKeyPress={getWeather}
                />


                {typeof data.main === 'undefined' ? (
                    <div>
                        <p>Try to type yours city ! </p>
                    </div>
                ) : (
                    <div>
                        <p>{data.name}</p>
                        <p>{(data.main.temp)-273.15}°C</p>
                        <p>{data.weather[0].main}</p>
                    </div>
                )}

                {data.cod === '404' ? (<p>not found.</p>) : (<p></p>)}

            </div>
        </div>
    );
}

export default App;

