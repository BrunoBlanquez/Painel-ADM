import React, {useState, useEffect} from 'react'
import "./product.css"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import axios from "axios"

export default function Products() {
  const id = useParams()
  const urlapi = `https://api-adminpanel.herokuapp.com/products/${id.productsId}`
  const [data, setData] = useState({})
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    axios.get(urlapi)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const onSubmit = async valor => {
     for(let key in valor) {
        if(valor[key] === "") {
           valor[key] = data[key]
        }
      }
    const res = await axios.put(urlapi, valor)
    window.location.reload()
  };

  return (
    <div className="products">
      <div className="productTitleContainer">
        <h1 className="productTitle">{data.nome}</h1>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={data.imagem} alt="" className="productInfoImg" />
            <span className="productName">{data.nome}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">1231</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Ativo:</span>
              <span className="productInfoValue">Sim</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In stock:</span>
              <span className="productInfoValue">Não</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit = { handleSubmit(onSubmit)}>
          <div className="productFormLeft">
            <label htmlFor="">Nome do Produto</label>
            <input type="text" placeholder={data.nome} { ...register ('nome') }/>
            <label>Marca</label>
            <input type="text" placeholder={data.marca} { ...register ('marca') } />
            <label>Preço</label>
            <input type="text" placeholder={data.preco} { ...register ('preco') } />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
                <img src={data.imagem} alt="" className="productUploadImg" />
                <label htmlFor="file">
                    <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
