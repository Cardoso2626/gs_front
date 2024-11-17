"use client"

import { TipoUsuario } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react"

export default function CadastroUsuario(){


    const navigate = useRouter();

    const [usuario, setUsuario] = useState<TipoUsuario>({
        nome:"",
        idade:0,
        telefone:"",
        cpf:""
    });

    const handleChange = (evento:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = evento.target;
        setUsuario({...usuario,[name]:value})

    }

    const handleSubmit = async(evento:React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(usuario)
            })

            if(response.ok){
                alert("Usuário cadastrado com sucesso")
                setUsuario({
                    nome:"",
                    idade:0,
                    telefone:"",
                    cpf:""
                })
                navigate.push("/")
            }
        } catch (error) {
            console.log("Erro ao cadastrar o usuário: ",error)
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
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