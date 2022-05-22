import "./product.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material"

export default function Products() {
  return (
    <div className="products">
      <div className="productTitleContainer">
        <h1 className="productTitle">Produto</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Criar</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
            <span className="productName">Apple Airpods</span>
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
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Nome do Produto</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="sim">Sim</option>
              <option value="no">Não</option>
            </select>
            <label>Ativo</label>
            <select name="active" id="active">
              <option value="sim">sim</option>
              <option value="no">Não</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
                <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
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
