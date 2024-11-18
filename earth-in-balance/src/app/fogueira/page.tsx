"use client";

import { TipoHabito } from "@/types/types";
import React, { useEffect, useState } from "react";
import fogueira from "@/img/fogueira.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Fogueira() {

  const navigate = useRouter();

  const [habito, setHabito] = useState<TipoHabito>({
    descricao: "",
    qtdDia: 0,
    usuario: {
      id: 0,
    },
  });

  const [habitos, setHabitos] = useState<TipoHabito[]>([]);

  const chamadaApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/habitos");
      const data = await response.json();
      setHabitos(data);
    } catch (error) {
      console.error("Falha na listagem: ", error);
    }
  };

  useEffect(() => {
    chamadaApi();
  }, []);

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;

    setHabito((habito) => {
      if (name === "id_usuario") {
        return {
          ...habito,
          usuario: {
            ...habito.usuario,
            id: Number(value),
          },
        };
      } else {
        return {
          ...habito,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/habitos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(habito),
      });

      if (response.ok) {
        alert("Hábito colocado na fogueira");
        setHabito({
          descricao: "",
          qtdDia: 0,
          usuario: {
            id: 0,
          },
        });
        navigate.push("/");
      }
    } catch (error) {
      console.error("Erro ao colocar hábito na fogueira: ", error);
    }
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl text-black font-bold mb-4">BEM VINDO A FOGUEIRA</h2>
      <p className="text-lg text-black mb-6">
        Aqui você pode nos contar os maus hábitos que quer deixar para trás e colocá-los na fogueira.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6"
      >
        <h3 className="text-2xl text-black font-semibold mb-4">Coloque seu hábito ruim</h3>

        <div className="mb-4">
          <label
            htmlFor="idDesc"
            className="block text-lg text-black font-medium mb-2"
          >
            Qual é o seu mau hábito?
          </label>
          <input
            type="text"
            placeholder="Exemplo: Fumar"
            id="idDesc"
            name="descricao"
            value={habito.descricao}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-600 rounded-md text-green-900"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="idQtd"
            className="block text-lg text-black font-medium mb-2"
          >
            Quantos dias por semana você faz isso?
          </label>
          <input
            type="number"
            placeholder="Exemplo: 3"
            id="idQtd"
            name="qtdDia"
            value={habito.qtdDia}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-600 rounded-md text-green-900"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="idUser"
            className="block text-lg text-black font-medium mb-2"
          >
            Qual é o seu ID de usuário?
          </label>
          <input
            type="number"
            placeholder="Exemplo: 1"
            id="idUser"
            name="id_usuario"
            value={habito.usuario.id}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-600 rounded-md text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-900 transition"
        >
          Queimar esse mau hábito!
        </button>
      </form>

      <h3 className="text-2xl text-black font-semibold my-6">Seus maus hábitos</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto mx-auto">
          <thead>
            <tr className="text-center">
              <th className="p-4 border-b text-lg text-black">Mau Hábito</th>
              <th className="p-4 border-b text-lg text-black">Quantidade de dias por semana</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {habitos.map((h, indice) => (
              <tr key={indice}>
                <td className="p-4 border-b text-black">{h.descricao}</td>
                <td className="p-4 border-b text-black">{h.qtdDia}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={2}
                className="p-4 text-center font-semibold text-green-900"
              >
                Total de maus hábitos: {habitos.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-8 flex justify-center">
        <Image
          src={fogueira}
          alt="Imagem da fogueira"
          width={600}
          height={600}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
