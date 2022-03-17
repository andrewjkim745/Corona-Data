import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function graphData() {

    const [ data, setData ] = useState('')

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all', {
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
          });  
    }, [])
    return (
        <>

        </>
    )
}