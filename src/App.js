import React,{useEffect, useState} from 'react';
import {useAxios} from './hooks/useAxios';
import {API_KEY} from './utility/api';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './style/styles.css';



export default function App(){
    const BASE_URL = `https://api.weatherbit.io/v2.0/current?city=oakville,Ontario&key=${API_KEY}`;
    const [data]     = useAxios(BASE_URL);
    const [weather, setWeather] = useState([]);


    useEffect(() => {
        setWeather(data);
    },[data]);

    const onSearch = (e) => {

    }


    return(
        <main>
            <Header />
            <SearchBar onclick={onSearch} />
            <Card weather={weather}  />
        </main>
    )
}