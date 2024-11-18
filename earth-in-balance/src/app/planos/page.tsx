"use client";

import { useState } from "react";

export default function Planos() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const planDetails = {
    Free: [
      "Acesso limitado a conteúdo básico",
      "Sem suporte técnico",
      "Ideal para iniciantes",
    ],
    "Eco Essencial": [
      "Acesso a conteúdos intermediários",
      "Suporte técnico por email",
      "Novos conteúdos semanais",
    ],
    "Energia Equilibrada": [
      "Acesso total a todos os conteúdos",
      "Suporte técnico prioritário",
      "Sessões personalizadas",
    ],
  };

  const handleClick = (plan: string) => {
    setSelectedPlan(selectedPlan === plan ? null : plan);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-black text-center">
        Escolha o plano que combina com você
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
        {Object.keys(planDetails).map((plan) => (
          <div
            key={plan}
            className={`p-6 rounded-lg shadow-lg text-center flex flex-col justify-between cursor-pointer transition-all
              ${
                selectedPlan === plan
                  ? "bg-green-400 text-white scale-105"
                  : "bg-neutral-900 text-white hover:bg-green-300 hover:scale-105"
              }`}
            onClick={() => handleClick(plan)}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
            <p className="text-xl mb-6">
              {plan === "Free"
                ? "$0 / 1 mês"
                : plan === "Eco Essencial"
                ? "$15 / 2 semanas"
                : "$30 / 1 mês"}
            </p>
            <p className="text-sm mb-4">
              {plan === "Free"
                ? "Para indivíduos que estão começando a conhecer a Energia Renovável."
                : plan === "Eco Essencial"
                ? "Para indivíduos que buscam ampliar seu conhecimento."
                : "Para quem busca o equilíbrio perfeito."}
            </p>
            {selectedPlan === plan && (
              <ul className="text-left mt-4 text-sm">
                {planDetails[plan as keyof typeof planDetails].map(
                  (detail, index) => (
                    <li key={index} className="mb-1">
                      • {detail}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-8 p-4 bg-green-300 rounded-lg shadow-md w-full max-w-2xl text-center">
          <p className="text-lg text-green-900">
            Você selecionou o plano <strong>{selectedPlan}</strong>. Aproveite
            todos os benefícios para transformar seu aprendizado em energia
            renovável!
          </p>
        </div>
      )}
    </div>
  );
}
