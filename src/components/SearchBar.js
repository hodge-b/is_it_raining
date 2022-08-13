import React, {useEffect, useState} from 'react';
import { StyledSearchBar } from './styled/SearchBar.styled';

export default function SearchBar({onclick}){

    const [data, setData] = useState('')
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const updateData = (event) => {
        setData(event.target.value);
    }

    useEffect(() => {
        setCity(data.substring(0, data.indexOf(',')));
        setState(data.substring(data.trim().indexOf(',') + 1));
    }, [updateData]);
    
    //console.log(data);
    return(
        <StyledSearchBar className="search">
            <div className="search-container">
                <input type="text" name='location' value={data} onChange={updateData} placeholder='oakville, ontario'/>
                <i className='ri-search-line' onClick={event => onclick(city, state)}></i>
            </div>
        </StyledSearchBar>
    )
}