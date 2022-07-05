import axios from "axios"

export default function DeletaRegistro(rota, id) {
    axios.delete(`https://api-adminpanel.herokuapp.com/${rota}/${id}`)
      .then(resposta => {
        window.location.reload()
        return resposta
      })
      .catch(error => {
        console.log(error)
      })
}
