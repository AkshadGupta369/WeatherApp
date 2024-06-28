import { alignProperty } from "@mui/material/styles/cssUtils";
import SerachBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){

    const [weatherInfo,setweatherInfo]=useState({
 city:"Delhi",
humidity:19,
temp:35.62,
temp_Max:36.05,
temp_Min:35.62,
weather:"haze",

    })

    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h3>Weather App by Akshad</h3>
            <SerachBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}