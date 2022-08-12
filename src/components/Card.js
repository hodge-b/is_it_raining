import React, {useState} from 'react';
import {StyledCard} from './styled/Card.styled';
import {img_icon} from '../utility/img_icon';


export default function Card({realTimeWeather, error}){

    const [date] = useState(Date().split(' '));

    

    return(
        <StyledCard>
            {realTimeWeather && realTimeWeather.weather && !error ? 
            <>
                <div className="card-container">
                    <div className="card-main-content">
                        <h3 className='card-city'>{realTimeWeather.city_name}</h3>
                        <h2 className='card-temp'>{realTimeWeather.temp >= -1 ? Math.round(realTimeWeather.temp) : `-${Math.round(realTimeWeather.temp)}`}°C</h2>
                        <img src={img_icon[realTimeWeather.weather.icon]} alt='' />
                        <p className='card-description'>{realTimeWeather.weather.description}</p>
                        <p className='card-time'>{`${formatDate(date)} ${formatTime(date)}`}</p>
                    </div>
                    <div className="card-sub-content">
                        <p className='card-wind'>Wind {realTimeWeather.wind_spd && realTimeWeather.wind_spd.toFixed(2)} m/s</p>
                        <p className='card-pressure'>Pressure {realTimeWeather.pres} mb</p>
                        <p className='card-humidity'>Humidity {realTimeWeather.rh}%</p>
                        <p className='card-cloudiness'>Cloudiness {realTimeWeather.clouds}%</p>
                    </div>
                </div>
            </>
            :
            <>
                <div className="card-container">
                    <p className='card-error'>{`something went wrong, try again.`}</p>
                </div>
            </>
            }
            
        </StyledCard>
    )
}

const formatDate = (date) =>{
    switch(date[0]){
        case 'Sun':
            return 'Sunday';
        case 'Mon':
            return 'Monday';
        case 'Tue':
            return 'Tuesday';
        case 'Wed':
            return 'Wednesday';
        case 'Thu':
            return 'Thursday';
        case 'Fri':
            return 'Friday';
        case 'Sat':
            return 'Saturday';
        default:
            return null;

    }
}

const formatTime = (date) => {
    const hour = date[4].split(':');
    return hour[0] >= 12 ? `${hour[0]-12}:${hour[1]} PM` : `${hour[0]}:${hour[1]} AM`;
}