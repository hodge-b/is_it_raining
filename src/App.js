import React,{useEffect, useState} from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './style/styles.css';

import {API_KEY} from './utility/api';



export default function App(){
    const [url, setUrl] = useState(`https://api.weatherbit.io/v2.0/current?city=oakville,ontario&key=${API_KEY}`);
    const [realTimeWeather, setRealTimeWeather] = useState([]);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        axios.get(url)
            .then(res => setRealTimeWeather(res.data.data[0]))
            .catch(() => {
                console.log();
                setIsError(true);
            })
    },[url])

    const onSearch = (city, state) => {
        setIsError(false);
        setUrl(`https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=${API_KEY}`);
    }

    const handleEnterPress = (e, city, state) => {
        if(e.key === 'Enter'){
            onSearch(city, state);
        }
    }


    return(
        <main>
            <Header />
            <SearchBar onclick={onSearch} onEnterPress={handleEnterPress} />
            <Card error= {isError} realTimeWeather={realTimeWeather}  />
        </main>
    )
}