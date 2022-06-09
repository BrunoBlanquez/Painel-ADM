import "./newUser.css"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function NewUser() {
  const { register, handleSubmit } = useForm();
  const [sucesso, setSucesso] = useState(false)

  const estilo = {
    resp: {
      display: sucesso ? "none" : "flex"
    },
    resposta: {
      display: sucesso ? "block" : "none",
      textAlign: "center"
    }
  }

  const onSubmit = async data =>  {
    const requisicao = await axios.post(`https://api-adminpanel.herokuapp.com/users`, data)
    setSucesso(true)
  };
  
  return (
    <div className="newUser">
      <h1 className="newUserTitle" style={ estilo.resp }>Novo Usuário</h1>
      <form className="newUserForm"  style={ estilo.resp } onSubmit = { handleSubmit(onSubmit)}>
        <div className="newUserItem">
          <label>Usuário</label>
          <input type="text" placeholder="johnny" { ...register ('usuario', { required: true, pattern: /^[A-Za-z]/i }) }/>
        </div>
        <div className="newUserItem">
          <label>Nome Completo</label>
          <input type="text" placeholder="John Smith" { ...register ('nome_completo', { required: true, pattern: /^[A-Za-z\s]+$/ }) }/>
        </div>
        <div className="newUserItem">
          <label>E-mail</label>
          <input type="email" placeholder="john.smith@gmail.com" { ...register('email', { required: true, maxLength: 100 }) }/>
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="password" { ...register('senha', { required: true, maxLength: 50 }) }/>
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="(11)99999-9999" { ...register('telefone', { maxLength: 14 }) }/>
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="São Paulo, SP - Brasil" { ...register('endereco', { maxLength: 100 }) }/>
        </div>
        <div className="newUserItem">
          <label>Nascimento</label>
          <input type="text" placeholder="15/10/1991" { ...register('nascimento', { maxLength: 10 }) }/>
        </div>
        <div className="newUserItem">
          <label htmlFor="text">Foto</label>
          <input type="text" id="text" { ...register('avatar', { maxLength: 100 }) } placeholder="https://images..."/>
        </div>
         <div className="newUserItem">
          <button className="newUserButton" type="submit">Criar</button>
         </div>
      </form>
      <div style={{justifyContent: "center", marginTop: "5rem"}}>
        <h1 style={estilo.resposta}>Usuário criado com sucesso</h1>
      </div>
    </div>
  )
}
