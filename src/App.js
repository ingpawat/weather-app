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
        <div className="App flex justify-center items-center ">
            <div className="inputWrap flex justify-start items-center flex-col w-[60%] h-[800px] mt-[2%] rounded-[25px] bg-gradient-to-r from-cyan-300 to-blue-400 z-0  ">

                <input
                    className=" w-[900px] h-[55px] m-0 mt-[10%] border-[3px] border-[#005c9d] z-10 rounded-[20px]
                    hover:border-[5px] hover:border-[#555555]
                    "
                    placeholder='City Here!'
                    onChange={event => setCity(event.target.value)}
                    value={city}
                    onKeyPress={getWeather}
                    id='1'
                />
                <div className='findCityContainer w-[100%] h-[60%]  text-[#3f3f3f] flex justify-center items-center z-10'>
                    {typeof data.main === 'undefined' ? (
                        <div className='w-[70%] h-[60%] flex flex-col'>

                            <h1 className='text-[#3f3f3f] text-center text-[60px] hover:underline hover:underline-offset-8 '>
                                Find yours city !
                            </h1>

                            <div className='mt-10'>
                                {data.cod === '404' ? (<p className='text-[#3f3f3f] text-center text-[30px] '>
                                    Not found. The city isn't in or data. 😓
                                </p>) : (<p></p>)}
                            </div>

                        </div>
                    ) : (
                        <div className='contentBox w-[90%] h-[90%] flex flex-row z-10 rounded-[25px]'>

                            <div className='flex flex-col items-center justify-center w-[50%] h-[100%]   '>
                                <a className='text-[60px] w-[80%] h-[25%] text-center bg-blue-200 rounded-md hover:bg-white ' href='#1'>
                                    {data.name}
                                </a>
                            </div>

                            <div className=' w-[100%] h-[100%] flex items-center'>

                                <div className='flex flex-col text-center w-[50%] h-[30%]   '>
                                    <p className=''>{data.sys.country}</p>
                                    <p className='text-[60px]'>{Math.round(data.main.temp - 273.15)}°C</p>
                                    <p className=''>{data.weather[0].main}</p>
                                </div>

                                <div className='flex flex-col item-center justify-center text-center w-[50%] h-[100%] text-[25px]  '>

                                    <div className='mb-[10%] w-[90%] bg-blue-200 rounded-md hover:bg-white '>
                                        <p className=''>FEELS LIKE</p>
                                        <p className='text-[20px] '>{Math.round(data.main.feels_like - 273.15)}°C</p>
                                    </div>

                                    <div className=' w-[90%]  bg-blue-200 rounded-md hover:bg-white'>
                                        <p className=''>SKY</p>
                                        <p className='text-[20px]'>{data.weather[0].description}</p>
                                    </div>
                                    
                                  
                                </div>

                            </div>

                        </div>
                    )}


                </div>

            </div>
        </div>
    );
}

export default App;

