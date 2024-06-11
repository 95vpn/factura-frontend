import axios from 'axios';
import React, { useState } from 'react';

const useFetch = (urlBase) => {

  const [apiData, setApiData] = useState();

  const getApi = (url) => {
    axios.get(url)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err))
  }

  const postApi = (data) => {
    axios.post(`${urlBase}`, data)
      .then(res => {
        setApiData([...apiData, res.data])
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteApi = (id) => {
    axios.delete(`${urlBase}/${id}`)
      .then(() => {
        setApiData(apiData.filter(element => element.id !== id))
        console.log('borrado con exito')
      })
      .catch(err => console.log(err))
  }
  return [apiData, getApi, postApi, deleteApi]
}

export default useFetch;