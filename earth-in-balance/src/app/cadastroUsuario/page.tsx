export default function CadastroUsuario(){
    return(
        <div>
            <form>
                <h2>Por um mundo mais sustentável</h2>
                <h3>Faça seu cadastro</h3>
                <div>
                    <label id="idNome"></label>
                    <input type="text" name="nome" id="idNome" placeholder="Nome do usuário" required />
                </div>
                <div>
                    <label id="idIdade"></label>
                    <input type="number" name="idade" id="idIdade" placeholder="idade" required min={0}/>
                </div>
                <div>
                    <label id="idTelefone"></label>
                    <input type="text" name="telefone" id="idTelefone" placeholder="Telefone" />
                </div>
                <div>
                    <label id="idCpf" ></label>
                    <input type="text" name="cpf" id="idCpf" placeholder="Cpf" required/>
                </div>
                <div>
                    <button type="submit">Cadastre-se</button>
                </div>
            </form>
        </div>
    )
}