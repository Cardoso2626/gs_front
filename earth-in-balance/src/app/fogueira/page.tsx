"use client";

import { TipoHabito } from "@/types/types"
import React, { useEffect, useState } from "react"

export default function Fogueira(){

    const [habito, setHabito] = useState<TipoHabito>({
        descricao:"",
        qtdDia:0,
        usuario:{
            id:0
        }
    });

    const[habitos, setHabitos] = useState<TipoHabito[]>([])

    const chamadaApi = async() =>{
        try {
            const response = await fetch("http://localhost:8080/habitos");
            const data = await response.json();
            setHabitos(data);
        } catch (error) {
            console.error("Falha na listagem: ", error);
        }
    }

    useEffect(() =>{
        chamadaApi();
    }, []);

    const handleChange = (evento:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evento.target;

        setHabito((habito) =>{
            if(name === "id_usuario"){
                return{
                    ...habito,
                    usuario:{
                        ...habito.usuario,
                        id: Number(value),
                    },
                };
            
            }else{
                return{
                    ...habito,
                    [name]:value,
                };
            }
        });

    }

    const handleSubmit = async(evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/habitos",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(habito)
            })

            if(response.ok){
                alert("Hábito colocado na fogueira")
                setHabito({
                    descricao:"",
                    qtdDia:0,
                    usuario:{
                        id:0
                    }
                })
            }
        } catch (error) {
            console.error("Erro ao colocar hábito na fogueira: ", error)
            
        }
    }



    return(
        <div>
            <div>
                <h2>BEM VINDO A FOGUEIRA</h2>
                <p>Aqui você pode nos falar um mau hábito que você quer deixar para trás e coloca-lo em nossa fogueira</p>
                <form onSubmit={handleSubmit}>
                    <h2>Coloque aqui seus hábitos ruins que você quer colocar na fogueira</h2>
                    <div>
                        <label id="idDesc">Insira o seu mau hábito</label>
                        <input type="text" placeholder="Mau hábito" id="idDesc" name="descricao" value={habito.descricao} onChange={(evento) => handleChange(evento)} required/>
                    </div>
                    <div>
                        <label id="idQtd">Insira a quantidade de dias na semana que você acha que isso ocorre</label>
                        <input type="number" placeholder="Dias" id="idDesc" name="qtdDia" value={habito.qtdDia} onChange={(evento) => handleChange(evento)} required/>
                    </div>
                    <div>
                        <label id="idUser">Insira o identificador do seu cadastro</label>
                        <input type="number" placeholder="Id do usuário" id="idUser" name="id_usuario" value={habito.usuario.id} onChange={(evento) => handleChange(evento)} required/>
                    </div>
                    <div>
                        <button type="submit">Colocar mau hábito na fogueira</button>
                    </div>
                </form>
            </div>
        
            <h2>Seus maus hábitos e de outras pessoas</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Mau habito</th>
                            <th>Quantidade de dias por semana</th>
                        </tr>
                    </thead>
                    <tbody>
                        {habitos.map((h, indice) =>(
                            <tr key={indice}>
                                <td>{h.descricao}</td>
                                <td>{h.qtdDia}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}>Total de mau hábitos {habitos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>


        </div>
    )
}