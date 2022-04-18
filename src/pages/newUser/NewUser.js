import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Usuário</label>
          <input type="text" placeholder="johnny" />
        </div>
        <div className="newUserItem">
          <label>Nome Completo</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>E-mail</label>
          <input type="email" placeholder="john.smith@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="+55 (11)99999-999" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="São Paulo, SP - Brasil" />
        </div>
        <div className="newUserItem">
          <label>Gênero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="masculino" value="masculino" />
            <label htmlFor="masculino">Masculino</label>
            <input type="radio" name="gender" id="feminino" value="feminino" />
            <label htmlFor="feminino">Feminino</label>
            <input type="radio" name="gender" id="neutro" value="neutro" />
            <label htmlFor="neutro">Neutro</label>
            {/* <input type="radio" name="gender" id="não desejo informar" value="não desejo informar" />
            <label htmlFor="não desejo informar">Não desejo informar</label> */}
            {/* Mudar essa forma de seleção para ser mais inclusivo */}
          </div>
        </div>
        <div className="newUserItem">
          <label>Ativo</label>
          <select className="newUserSelect" name="ativo" id="active">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
      </form>
        <button className="newUserButton">Criar</button>
    </div>
  )
}
