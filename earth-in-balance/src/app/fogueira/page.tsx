"use client"

import { TipoHabito } from "@/types/types"
import { useState } from "react"

export default function fogueira(){

    const [habito, setHabito] = useState<TipoHabito>({
        descricao:"",
        qtdDia:0,
        usuario:{
            id:0
        }
    })
    return(
        <div>
            <h2>BEM VINDO A FOGUEIRA</h2>
            <p>Aqui você pode nos falar um mau hábito que você quer deixar para trás e coloca-lo em nossa fogueira</p>
            <form>
                <h2>Coloque aqui seus hábitos ruins que você quer colocar na fogueira</h2>
                <div>
                    <label id="idDesc">Insira o seu mau hábito</label>
                    <input type="text" placeholder="Mau hábito" id="idDesc" name="descricao" value={habito.descricao} required/>
                </div>
                <div>
                    <label id="idQtd">Insira a quantidade de dias na semana que você acha que isso ocorre</label>
                    <input type="number" placeholder="Dias" id="idDesc" name="qtdDia" value={habito.qtdDia} required/>
                </div>
                <div>
                    <label id="idUser">Insira o identificador do seu cadastro</label>
                    <input type="text" placeholder="Id do usuário" id="idUser" name="id_usuario" value={habito.usuario.id} required/>
                </div>
                <div>
                    <button type="submit">Colocar mau hábito na fogueira</button>
                </div>
            </form>
        </div>
    )
}