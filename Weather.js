import React ,{useState} from 'react'

const api ={
    key:"eb56f11b148bac6be0a7623a04907c61",
    base:"https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
    const [search,setSearch]=useState("");
    const [weather,setWeather] = useState({});

    const searchPressed=()=>{
         fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
         .then(res=>res.json())
         .then((data)=>{setWeather(data)})
    }
  return (
    <div className='Weather'>
        <header className='App-header'>
             <h1>Weather App</h1>
             <div>
                <input type="text" placeholder='Search here' onChange={(e)=>setSearch(e.target.value)}></input>
                <br></br>
                <button onClick={searchPressed}>Search</button>
             </div>
             {(typeof weather.main !== "undefined")?(
                <div>
                    <p>{weather.name}</p>
                    <p>Temp:<i class="fa-solid fa-fan fa-spin" style={{color:"orange"}}></i>{weather.main.temp}℃</p>
                    <p>cloud/Rain:{weather.weather[0].main}</p>
                    <p>Description:({weather.weather[0].description})</p>
                </div>
             ):("Not found")}
        </header>
      
    </div>
  )
}

export default Weather
