import React from 'react'
import axios from "axios"

export default function DeletaRegistro(rota, id) {
    axios.delete(`https://api-adminpanel.herokuapp.com/${rota}/${id}`)
      .then(resposta => {
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      })
}
