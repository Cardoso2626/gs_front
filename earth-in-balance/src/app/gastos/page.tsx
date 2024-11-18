"use client";

import { useState } from 'react';

export default function Gastos() {
    const [watts, setWatts] = useState(0);
    const [hours, setHours] = useState(0);

    const calcularEnergia = () => {
        const consumoDiario = (watts * hours) / 1000;
        const consumoMensal = consumoDiario * 30;
        const consumoAnual = consumoMensal * 12;

        return { consumoDiario, consumoMensal, consumoAnual };
    };

    const { consumoDiario, consumoMensal, consumoAnual } = calcularEnergia();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
            <div className="bg-black p-8 rounded-lg shadow-xl w-full max-w-xl space-y-6">
                <h2 className="text-3xl font-semibold text-center text-white">Gerencie aqui seus gastos de energia</h2>

                <form className="space-y-6">
                    <div className="mb-4">
                        <label className="block text-lg font-medium text-white">Dispositivo típico:</label>
                        <select className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="">Selecione</option>
                            <option value="ar_condicionado">Ar condicionado</option>
                            <option value="geladeira">Geladeira</option>
                            <option value="televisao">Televisão</option>
                            <option value="microondas">Microondas</option>
                            <option value="maquina_lavar">Máquina de lavar</option>
                            <option value="computador">Computador</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-white">Consumo de energia (watts):</label>
                        <input
                            type="number"
                            placeholder="watts (W)"
                            value={watts}
                            onChange={(e) => setWatts(parseInt(e.target.value, 10))}
                            className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-white">Horas de uso por dia:</label>
                        <input
                            type="number"
                            placeholder="h / dia"
                            value={hours}
                            onChange={(e) => setHours(parseFloat(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4 text-white">
                        <label className="block text-lg font-medium">Energia consumida por dia:</label>
                        <p className="text-lg">{consumoDiario.toFixed(2)} kWh / dia</p>
                    </div>

                    <div className="mb-4 text-white">
                        <label className="block text-lg font-medium">Energia consumida por mês:</label>
                        <p className="text-lg">{consumoMensal.toFixed(2)} kWh / mês</p>
                    </div>

                    <div className="text-white">
                        <label className="block text-lg font-medium">Energia consumida por ano:</label>
                        <p className="text-lg">{consumoAnual.toFixed(2)} kWh / ano</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
