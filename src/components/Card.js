import React, {useState} from 'react';
import {StyledCard} from './styled/Card.styled';

export default function Card({weather}){

    const [date] = useState(Date().split(' '));


    return(
        <StyledCard>
            {weather ? 
            <>
                <div className="card-container">
                    <h3 className='card-city'>{weather.city_name}</h3>
                    <h2 className='card-temp'>{weather.temp >= -1 ? Math.round(weather.temp) : `-${Math.round(weather.temp)}`}°C</h2>
                    <p><i className='card-icon ri-sun-line'></i></p>
                    <p className='card-description'>Clear Sky</p>
                    <p className='card-time'>{`${formatDate(date)} ${formatTime(date)}`}</p>
                    <div className="card-sub-container">
                        <p className='card-wind'>Wind {weather.wind_spd && weather.wind_spd.toFixed(2)} m/s</p>
                        <p className='card-pressure'>Pressure {weather.pres} mb</p>
                        <p className='card-humidity'>Humidity {weather.rh}%</p>
                        <p className='card-cloudiness'>Cloudiness {weather.clouds}%</p>
                    </div>
                </div>
            </>
            :
            <>
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

    }
}

const formatTime = (date) => {
    const hour = date[4].split(':');
    return hour[0] >= 12 ? `${hour[0]-12}:${hour[1]} PM` : `${hour[0]}:${hour[1]} AM`;
}