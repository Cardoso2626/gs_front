import { TipoUsuario } from "@/types/types";
import React, { useState } from "react"

export default function CadastroUsuario(){

    const [usuario, setUsuario] = useState<TipoUsuario>({
        nome:"",
        idade:0,
        telefone:"",
        cpf:""
    });

    const handleChange = (evento:React.ChangeEvent<HTMLInputElement>) =>{

    }

    return(
        <div>
            <form>
                <h2>Por um mundo mais sustentável!</h2>
                <h3>Faça seu cadastro</h3>
                <div>
                    <label id="idNome"></label>
                    <input type="text" name="nome" id="idNome" placeholder="Nome do usuário" value={usuario.nome} onChange={(evento)=>handleChange(evento)} required />
                </div>
                <div>
                    <label id="idIdade"></label>
                    <input type="number" name="idade" id="idIdade" placeholder="Idade" value={usuario.idade} onChange={(evento)=>handleChange(evento)} required min={0}/>
                </div>
                <div>
                    <label id="idTelefone"></label>
                    <input type="text" name="telefone" id="idTelefone" placeholder="Telefone" value={usuario.telefone} onChange={(evento)=>handleChange(evento)} required/>
                </div>
                <div>
                    <label id="idCpf" ></label>
                    <input type="text" name="cpf" id="idCpf" placeholder="Cpf" value={usuario.cpf} onChange={(evento)=>handleChange(evento)} required/>
                </div>
                <div>
                    <button type="submit">Cadastre-se</button>
                </div>
            </form>
        </div>
    )
}