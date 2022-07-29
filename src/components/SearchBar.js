import React, {useEffect, useState} from 'react';
import { StyledSearchBar } from './styled/SearchBar.styled';

export default function SearchBar({onclick}){

    const [data, setData] = useState('');

    const updateData = (event) => {
        setData(event.target.value);
    }
    
    console.log(data);
    return(
        <StyledSearchBar className="search">
            <div className="search-container">
                <input type="text" name='location' value={data} onChange={updateData} placeholder='location'/>
                <i className='ri-search-line' onClick={onclick}></i>
            </div>
        </StyledSearchBar>
    )
}