import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SerachBox({updateInfo}){
let[city,setcity]=useState("");

const API_URL="https://api.openweathermap.org/data/2.5/weather"
const API_Key="18b15f5107ed1548362ee623a78b9845";

let getweatherInfo= async()=>{
let response=await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
let JsonResponse=await response.json();
// console.log(JsonResponse);
let result={
    city:city,
    temp:JsonResponse.main.temp,
    temp_Min:JsonResponse.main.temp_min,
    temp_Max:JsonResponse.main.temp_max,
    humidity:JsonResponse.main.humidity,
    weather:JsonResponse.weather[0].description,

}
console.log(result)
return result;
}

let handlechange=(eve)=>{
setcity(eve.target.value);
}

let handlesubmit=async(eve)=>{
    eve.preventDefault();
    console.log(city);
    setcity("");
   let newinfo= await getweatherInfo();
   updateInfo(newinfo);
}

    return(
        <div className='SearchBox'>
            <form action="" onSubmit={handlesubmit}>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handlechange} />
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
      
          </form>
        </div>
    )
}