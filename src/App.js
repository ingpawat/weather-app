import { useState } from 'react';
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
            <div className="inputWrap flex justify-start items-center flex-col w-[60%] h-[800px] mt-[2%] border-[4px] border-black  ">

                <input
                    placeholder='City Here!'
                    className=" w-[900px] h-[55px] m-0 mt-[10%] border-[1px] border-black"
                    onChange={event => setCity(event.target.value)}
                    value={city}
                    onKeyPress={getWeather}
                />
                <div className='w-[100%] h-[60%] border-[1px] border-black flex justify-center items-center'>
                    {typeof data.main === 'undefined' ? (
                        <div className='w-[70%] h-[60%] border-[1px] border-black'>
                            <h1 className='text-center text-xl '>Try to find yours city ! </h1>
                        </div>
                    ) : (
                        <div className='w-[90%] h-[90%] flex flex-row  border-[3px] border-blue-700 '>

                            <div className='w-[50%] border-[3px] h-[100%] border-red-700'>
                                <p>{data.name}</p>
                            </div>    

                            <div className='w-[50%] h-[100%] border-[3px]  border-green-700'>
                                <p>{Math.round(data.main.temp- 273.15)}°C</p>
                                <p>{data.weather[0].main}</p>
                            </div>

                        </div>
                    )}

                    {data.cod === '404' ? (<p>not found.</p>) : (<p></p>)}
                </div>

            </div>
        </div>
    );
}

export default App;

