import axios from "axios"

export default async function PostaAPI(data, rota) {
    const postTransac = await axios.post(`https://api-adminpanel.herokuapp.com/${rota}`, data) 
}
