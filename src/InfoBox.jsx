import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){

const INIT_URL="https://images.unsplash.com/photo-1648721946588-2ab29943bf5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90fGVufDB8fDB8fHww";
const COLD_URL="https://images.unsplash.com/photo-1519937010618-f8c8b7e135b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
const RAINY_URL="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

    return(
        <div>
        
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAINY_URL: info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80?<ThunderstormIcon/>: info.temp>15?<WbSunnyIcon/>:<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature :{info.temp}&deg;C</p>
         <p>Humidity :{info.humidity}&deg;C</p>
         <p>Temp_Max :{info.temp_Max}&deg;C</p>
         <p>Temp_Min :{info.temp_Min}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}