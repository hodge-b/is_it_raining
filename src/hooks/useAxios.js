import {useState, useEffect} from 'react';
import Axios from 'axios';

export const useAxios = (url) =>{

    const [data, setData] = useState(null);

    useEffect(() => {
        Axios.get(url)
            .then(res => setData(res.data.data[0]))
            .catch(console.log);
    },[url])

    return [data];
}
