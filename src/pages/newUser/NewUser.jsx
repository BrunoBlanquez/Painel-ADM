import "./newUser.css"
import { useForm } from "react-hook-form";

export default function NewUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuário</h1>
      {/* <form className="newUserForm" onSubmit = { handleSubmit(onSubmit) }> */}
      <form className="newUserForm" onSubmit = { handleSubmit(onSubmit) }>
        <div className="newUserItem">
          <label>Usuário</label>
          <input type="text" placeholder="johnny" { ...register ('usuario', { required: true, pattern: /^[A-Za-z]+$/i }) }/>
        </div>
        <div className="newUserItem">
          <label>Nome Completo</label>
          <input type="text" placeholder="John Smith" { ...register ('nomeCompleto', { required: true, pattern: /^[A-Za-z\s]+$/ }) }/>
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
          <input type="text" placeholder="(11)99999-9999" { ...register('telefone', { maxLength: 11 }) }/>
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="São Paulo, SP - Brasil" { ...register('endereco', { maxLength: 100 }) }/>
        </div>
        {/* <div className="newUserItem">
          <label>Gênero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="masculino" value="masculino" />
            <label htmlFor="masculino">Masculino</label>
            <input type="radio" name="gender" id="feminino" value="feminino" />
            <label htmlFor="feminino">Feminino</label>
            <input type="radio" name="gender" id="neutro" value="neutro" />
            <label htmlFor="neutro">Neutro</label>
            <input type="radio" name="gender" id="não desejo informar" value="não desejo informar" />
            <label htmlFor="não desejo informar">Não desejo informar</label>
            Mudar essa forma de seleção para ser mais inclusivo
          </div>
        </div> */}
         <div className="newUserItem">
          <button className="newUserButton" type="submit">Criar</button>
         </div>
      </form>
    </div>
  )
}
