import React,{useEffect, useState, useReducer} from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './style/styles.css';

import {API_KEY} from './utility/api';

const reducer = (state, action) => {
    switch(action.type){
        case 'newURL':
            return {...state, url: action.payload}
        case 'newRealTimeWeather':
            return {...state, realTimeWeather: action.payload}
        default:
            throw new Error();

    }
}

export default function App(){
    const [state, dispatch] = useReducer(reducer, {
        url: `https://api.weatherbit.io/v2.0/current?city=oakville,ontario&key=${API_KEY}`,
        realTimeWeather: [],
    })

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(state.url)
            .then(res => dispatch({type: 'newRealTimeWeather', payload: res.data.data[0]}))
            .catch(() => {
                setIsError(true);
                console.log('error');
            })
    },[state.url])

    const onSearch = (city, state) => {
        setIsError(false);
        dispatch( {type: 'newURL', payload: `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=${API_KEY}`});
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
            <Card error= {isError} realTimeWeather={state.realTimeWeather}  />
        </main>
    )
}