import { useState } from "react"
import PostaAPI from "../../Func/EnviaTransacAPI"
import GetDadosAPI from "../../Func/GetDadosAPI"
import "./vendas.css"


export default function Estatísticas() {
  const [user, setUser] = useState("")
  const [item, setItem] = useState("")
  const [status, setStatus] = useState("")
  const dadosUsers = GetDadosAPI('users')
  const dadosProdutos = GetDadosAPI('products')
  const dadosAPI = {"comprador": user._id, "produto": item._id, "status": status}
  const [sucesso, setSucesso] = useState(false)
 
  return (
    <div className="vendas">
      <h1 className="vendasTitulo">Simulação de vendas</h1>
      <div className={`${sucesso ? "inativo" : "vendasDivEscolha"}`}>
        <section className="vendasSec">
          
          <h2 className="vendasH2">Escolha o usuário que vai efetuar a compra</h2>
            {dadosUsers.map((dadosUsers, index) => (
              <div key={index} className="vendasEscolhaUser ">
                <img src={dadosUsers.avatar} alt="" className="vendasImg"/>
                <h3 value={dadosUsers.nome_completo} className="vendasOptionsativo" onClick={() => setUser(dadosUsers)}>{dadosUsers.nome_completo}</h3>
              </div>
            ))}
        </section>
        <section className="vendasSec">
          <h2 className="vendasH2">Escolha o produto que será adquirido</h2>
            {dadosProdutos.map((dadosProdutos, index) => (
              <div key={index} className="vendasEscolhaUser">
                <img src={dadosProdutos.imagem} alt="" className="vendasImg"/>
                <h3 value={dadosProdutos.nome} className="vendasOptions" onClick={() => setItem(dadosProdutos)}>{dadosProdutos.nome}</h3>
              </div>
            ))}
        </section>
        <section className="vendasEscolhasSelect" onChange={(e) => setStatus(e.target.value)}>
          <label htmlFor="" className="labelSelect">Selecione o status da transação</label>
          <select className="optionStatus">
            <option value="" className="optionStatus"></option>
            <option value="Aprovada" className="optionStatus">Aprovada</option>
            <option value="Pendente" className="optionStatus">Pendente</option>
            <option value="Reprovada" className="optionStatus">Reprovada</option>
          </select>
        </section>
      </div>
        <section className={`${sucesso ? "inativo" : "resultadosEscolhas"}`}>
            <h1 className="tituloEscolhas">Escolhas feitas</h1>
          <div className="escolhasItens">
            <h2 className="tituloEscolhas">Usuário</h2>
            <img src={user.avatar} alt="" className="vendasImg"/>
            <h3>{user.nome_completo}</h3>
          </div>
          <div className="escolhasItens">
            <h2 className="tituloEscolhas">Produto</h2>
            <img src={item.imagem} alt="" className="vendasImg" />
            <h3>{item.nome}</h3>
          </div>
          <div className="escolhasItens">
            <h2 className="tituloEscolhas">Status da Transação</h2>
            <h3>{status}</h3>
          </div>
          <button className="btnVendas" onClick={ () => PostaAPI(dadosAPI, 'transactions') & setSucesso(true) }>Enviar</button>
        </section>
        <div>
          <h1 className={`${sucesso ? "ativo" : "inativo"}`} >TRANSAÇÃO ENVIADA! Verifique a homepage</h1>
        </div>
    </div>
  )
}