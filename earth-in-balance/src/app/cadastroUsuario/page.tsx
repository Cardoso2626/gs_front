"use client";

import { TipoUsuario } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CadastroUsuario() {
    const navigate = useRouter();

    const [usuario, setUsuario] = useState<TipoUsuario>({
        nome: "",
        idade: 0,
        telefone: "",
        cpf: ""
    });

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso");
                setUsuario({
                    nome: "",
                    idade: 0,
                    telefone: "",
                    cpf: ""
                });
                navigate.push("/");
            }
        } catch (error) {
            console.log("Erro ao cadastrar o usuário: ", error);
        }
    };

    const handleContinueWithoutLogin = () => {
        navigate.push("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[hsl(103,39%,59%)] px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-black p-8 rounded-md shadow-md w-full max-w-md space-y-6 md:space-y-8 sm:px-6"
            >
                <h2 className="text-2xl font-semibold text-center text-white">
                    Por um mundo mais sustentável!
                </h2>
                <h3 className="text-lg font-medium text-center text-gray-300">
                    Faça seu cadastro!
                </h3>
                <div>
                    <label htmlFor="idNome" className="block text-sm font-medium text-gray-300">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="nome"
                        id="idNome"
                        placeholder="Nome do usuário"
                        value={usuario.nome}
                        onChange={(evento) => handleChange(evento)}
                        required
                        className="w-full p-2 mt-1 border rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="idIdade" className="block text-sm font-medium text-gray-300">
                        Idade
                    </label>
                    <input
                        type="number"
                        name="idade"
                        id="idIdade"
                        placeholder="Idade"
                        value={usuario.idade}
                        onChange={(evento) => handleChange(evento)}
                        required
                        min={0}
                        className="w-full p-2 mt-1 border rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="idTelefone" className="block text-sm font-medium text-gray-300">
                        Telefone
                    </label>
                    <input
                        type="text"
                        name="telefone"
                        id="idTelefone"
                        placeholder="Telefone"
                        value={usuario.telefone}
                        onChange={(evento) => handleChange(evento)}
                        required
                        className="w-full p-2 mt-1 border rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="idCpf" className="block text-sm font-medium text-gray-300">
                        CPF
                    </label>
                    <input
                        type="text"
                        name="cpf"
                        id="idCpf"
                        placeholder="CPF"
                        value={usuario.cpf}
                        onChange={(evento) => handleChange(evento)}
                        required
                        className="w-full p-2 mt-1 border rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-green-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-black bg-[#f2f3f2] rounded hover:bg-green-300 focus:outline-none focus:ring focus:ring-green-500"
                    >
                        Cadastre-se
                    </button>
                </div>
                <div className="mt-4">
                    <button
                        type="button"
                        onClick={handleContinueWithoutLogin}
                        className="w-full px-4 py-2 text-white border border-gray-500 rounded hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-500"
                    >
                        Continuar sem cadastro
                    </button>
                </div>
            </form>
        </div>
    );
}
