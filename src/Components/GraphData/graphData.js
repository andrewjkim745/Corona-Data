import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function GraphData() {

    const [ data, setData ] = useState('')

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all', {
          })
          .then(function (response) {
            console.log(response);
            setData(response)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
          });  
    }, [])
    return (
        <>
        <h1>{JSON.stringify(data)}</h1>
        <h1></h1>
        </>
    )
}