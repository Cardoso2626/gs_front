import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.png";

export default function Cabecalho() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Ícone da empresa" width={60} height={60} />
        </Link>
        

        <nav>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li>
              <Link href="/" className="hover:text-teal-500 transition-colors">
                Cadastro
              </Link>
            </li>
            <li>
              <Link href="/gastos" className="hover:text-teal-500 transition-colors">
                Controle
              </Link>
            </li>
            <li>
              <Link href="/fogueira" className="hover:text-teal-500 transition-colors">
                Fogueira
              </Link>
            </li>
            <li>
              <Link href="/planos" className="hover:text-teal-500 transition-colors">
                Planos
              </Link>
            </li>
            <li>
              <Link href="/integrantes" className="hover:text-teal-500 transition-colors">
                Integrantes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
