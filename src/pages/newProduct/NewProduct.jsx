import "./newProduct.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import PostaAPI from "../../Func/EnviaTransacAPI";

export default function NewProduct() {
  const { register, handleSubmit } = useForm();
  const [sucesso, setSucesso] = useState(false)

  const estilo = {
    resp: {
      display: sucesso ? "none" : "block"
    },
    resposta: {
      display: sucesso ? "block" : "none",
      textAlign: "center"
    }
  }

    const onSubmit = async data =>  {
    PostaAPI(data, 'products')
    console.log(data)
    setSucesso(true)
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle" style={ estilo.resp }>New Product</h1>
      <form className="addProductForm" style={ estilo.resp } onSubmit={handleSubmit(onSubmit)}>
        <div className="addProductItem">
          <label htmlFor="text">Foto</label>
          <input type="text" id="text" { ...register('imagem', { maxLength: 1000 }) } placeholder="https://images..."/>
        </div>
        <div className="addProductItem">
          <label>Nome</label>
          <input type="text" placeholder="Apple Airpods" name="nome" id="nomeID" { ...register ('nome', { required: true, pattern: /^[A-Za-z\s]+$/ }) }/>
        </div>
        <div className="addProductItem">
          <label>Estoque</label>
          <input type="text" placeholder="123" { ...register('estoque', { required: true, maxLength: 50 }) }/>
        </div>
         <div className="addProductItem">
          <label>Preço</label>
          <input type="text" placeholder="400.00" { ...register('preco', { required: true, maxLength: 50 }) }/>
        </div>
        <div className="addProductItem">
          <label>Marca</label>
          <input type="text" placeholder="Apple" { ...register('marca', { required: true, maxLength: 50 }) }/>
        </div>
        <button className="addProductButton" type="submit">Create</button>
      </form>
      <div style={{justifyContent: "center", marginTop: "5rem"}}>
        <h1 style={estilo.resposta}>Produto criado com sucesso</h1>
      </div>
    </div>
  )
}
