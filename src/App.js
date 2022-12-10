import { useState } from 'react';
import './App.css';
import globe from './asset/globe.gif'

function App() {

    const api = "89c903faf4550d25b406884553667849"
    const [data, setData] = useState([{}]);
    const [city, setCity] = useState([]);
    console.log(data.main)


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
        <div className="App flex justify-center items-center w-[100%] h-[900px] ">

            <div className="absolute flex justify-center items-center flex-col w-[60%] h-[750px] rounded-[25px] bg-[#A3B6B2] ">
                <input
                    className=" w-[80%] h-[5.5rem] m-0 mt-[5%] z-10 bg-[#D9D9D9] 
                    // placeholder **
                    placeholder:text-center placeholder:text-[2.25rem] placeholder:text-[#363636]
                    // text **
                   text-[2.25rem] text-[#363636]
                    "
                    placeholder="LET'S FIND YOUR PLACE"
                    onChange={event => setCity(event.target.value)}
                    value={city}
                    onKeyPress={getWeather}
                    id='1'
                />
                <div className="Shadow relative right-[1.2%] top-[-18%] w-[80%] h-[5.5rem] m-0 mt-[5%] z-0 bg-[#818181]" />


                <div className='Display-Content w-[100%] h-[70%] mt-[-10%]  text-[#3f3f3f] flex justify-center items-start z-0'>

                    {typeof data.main === 'undefined' ? (

                        // incase : when user not input (HOME PAGE)
                        <div className='flex flex-col justify-start items-center w-[100%] h-[100%] overflow-hidden '>
                            <div className='flex justify-center items-start mt-[-%] w-[100%] h-[100%]'>
                                <img src={globe} alt="globe" className='w-[900px] z-0 absolute' />

                                {data.cod === '404' && (
                                    <p className='text-[white] text-center text-[1.563rem] z-10 relative bg-[rgb(63,63,63,0.6)]'>
                                        Not found. Your place isn't in our data.
                                    </p>
                                )}

                            </div>
                        </div>
                    ) : (
                        <div className='w-[90%] h-[100%] flex flex-row z-0'>

                            <div className='TempCard w-[45%] h-[100%] flex justify-end'>
                                <div className='w-[39%] h-[68%] bg-[#D9D9D9] z-10 absolute'></div>
                                <div className='w-[95%] h-[95%] bg-[#818181] z-0 relative mt-[5%] mr-[5%]'/>
                            </div>

                            <div className='FeelLikeCard w-[45%] h-[100%] ml-[2%]'>
                                <div className='w-[39%] h-[68%] bg-[#D9D9D9] z-10 absolute ml-[1%]'></div>
                                <div className='w-[95%] h-[95%] bg-[#818181] z-0 relative mt-[5%] mr-[5%]'/>
                            </div>

                                <img src={globe} alt='globe' className='w-[18%] z-0 absolute right-[-3%] bottom-[1%]'/>




                            {/* <div className='cityName flex flex-col items-center justify-center w-[50%] h-[100%]   '>
                                <a className='text-[60px] w-[80%] h-[25%] text-center bg-blue-200 rounded-md hover:bg-white ' href='#1'>
                                    {data.name}
                                </a>
                                </div>

                                <div className='cityTemp w-[100%] h-[100%] flex items-center'>

                                <div className='flex flex-col text-center w-[50%] h-[30%]   '>
                                    <p className='sys'>{data.sys.country}</p>
                                    <p className='text-[60px]'>{Math.round(data.main.temp - 273.15)}°C</p>
                                    <p className=''>{data.weather[0].main}</p>
                                </div>

                                <div className='cityDetail flex flex-col item-center justify-center text-center w-[50%] h-[100%] text-[25px]  '>

                                    <div className='mb-[10%] w-[90%] bg-blue-200 rounded-md hover:bg-white '>
                                        <p className=''>FEELS LIKE</p>
                                        <p className='text-[20px] '>{Math.round(data.main.feels_like - 273.15)}°C</p>
                                    </div>

                                    <div className=' w-[90%]  bg-blue-200 rounded-md hover:bg-white'>
                                        <p className=''>SKY</p>
                                        <p className='text-[20px]'>{data.weather[0].description}</p>
                                    </div>

                                </div>

                            </div> */}

                        </div>
                    )}


                </div>

            </div>
        </div >
    );
}

export default App;

