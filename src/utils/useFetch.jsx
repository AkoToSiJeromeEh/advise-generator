import {useEffect , useState} from 'react'
import axios from 'axios'
function useFetch(url) {

     const [data  , setData] = useState(null);
     const [send , setSend] = useState(false);
     const [error , setError] = useState(null);

      useEffect (() => {
        setSend(true);
        axios.get(url).then ((response) => {
            setData(response.data)
        }).catch((error) => {

            setError(error);

        }).finally(() =>{
          setSend(false);
        })
      },[url])

      const requotes = () => {
        setSend(true);
        axios.get(url).then ((response) => {
            setData(response.data)
        }).catch((error) => {

            setError(error);

        }).finally(() =>{
          setSend(false);
        });
    };

  return{data, send, error , requotes}
}

export default useFetch