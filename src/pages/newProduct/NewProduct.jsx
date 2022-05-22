import "./newProduct.css"

function teste(dados) {
// usar await
  dados.preventDefault()
}

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={teste}>
        <div className="addProductItem">
          <label>Imagem</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nome</label>
          <input type="text" placeholder="Apple Airpods" name="nome" id="nomeID"/>
        </div>
        <div className="addProductItem">
          <label>Estoque</label>
          <input type="text" placeholder="123" />
        </div>
         <div className="addProductItem">
          <label>Preço</label>
          <input type="text" placeholder="R$ 400,00" />
        </div>
        <div className="addProductItem">
          <label>Marca</label>
          <input type="text" placeholder="Apple" />
        </div>
        <button className="addProductButton" type="submit">Create</button>
      </form>
    </div>
  )
}
