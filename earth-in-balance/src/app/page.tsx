import Image from "next/image";
import energia from "@/img/img_home.png";
import casa from "@/img/casinha da esquerda.png";
import meio from "@/img/foto_meio.png";
import direita from "@/img/foto_direita.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans leading-relaxed">
      <section className="bg-green-800 text-black py-12 px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <div className="sm:w-1/2 text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4">Por um mundo mais sustentável!</h1>
            <p className="text-lg mb-6">
              Eficiência energética é a chave para transformar a maneira como utilizamos os recursos do planeta, 
              reduzindo desperdícios, economizando energia e promovendo um futuro mais sustentável em todos os setores. 
              Seja nas residências, com a adoção de eletrodomésticos eficientes e iluminação LED, nas indústrias, otimizando 
              processos produtivos e reaproveitando energia, ou nos espaços comerciais e públicos, com sistemas inteligentes 
              e automatizados, o objetivo é o mesmo: fazer mais com menos.
            </p>
            <button className="bg-black text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition">
              <Link href="/fogueira">Busque a mudança!</Link>
            </button>
          </div>
          <div className="sm:w-1/2 mt-6 sm:mt-0">
            <Image
              src={energia}
              alt="Imagem sobre energia renovável"
              width={400}
              height={300}
              className="rounded-lg object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 sm:px-12 flex flex-col sm:flex-row justify-center sm:justify-between space-y-8 sm:space-y-0 sm:space-x-8">
        <div className="text-center sm:w-1/3 bg-gray-500 p-6 rounded-lg">
          <Image
            src={casa}
            alt="Eficiência energética"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-2">Eficiência Energética</h3>
          <p>
          eficiência energética é o uso inteligente e otimizado da energia para realizar as mesmas atividades ou alcançar os mesmos 
          resultados, consumindo menos recursos. Em termos simples, trata-se de fazer mais com menos energia, seja em casas, indústrias, veículos ou outros setores.
          Essa abordagem desempenha um papel essencial na redução da demanda energética global e na diminuição da dependência de combustíveis fósseis, principais 
          responsáveis pela emissão de gases de efeito estufa.  
          </p>
        </div>

        <div className="text-center sm:w-1/3 bg-gray-500 p-6 rounded-lg">
          <Image
            src={meio}
            alt="Energia renovável"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-2">Energia Renovável</h3>
          <p>
          Energia renovável refere-se a fontes de energia obtidas de recursos naturais que são naturalmente reabastecidos e praticamente inesgotáveis, como a luz solar, 
          o vento, a água em movimento, a biomassa e o calor proveniente do interior da Terra. Diferentemente dos combustíveis fósseis, que são finitos e causam grandes 
          impactos ambientais, as fontes renováveis oferecem uma alternativa mais limpa e sustentável para atender às necessidades energéticas da sociedade.
          </p>
        </div>

        <div className="text-center sm:w-1/3 bg-gray-500 p-6 rounded-lg">
          <Image
            src={direita}
            alt="Desperdício de energia"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-2">Desperdício de Energia</h3>
          <p>
            O desperdício de energia ocorre quando utilizamos mais energia do que o necessário para realizar uma determinada tarefa, seja em casa, no trabalho, em 
            indústrias ou em sistemas de transporte. Isso não só eleva os custos de energia, mas também aumenta o impacto ambiental, principalmente quando a energia 
            desperdiçada é proveniente de fontes não renováveis, como os combustíveis fósseis.
          </p>
        </div>
      </section>
    </main>
  );
}
