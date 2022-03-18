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
    }, [])
    return (
        <div class='container p-7'>
        <p class='text-break'>{JSON.stringify(data)}</p>
        </div>
    )
}