
import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.png"
export default function Cabecalho() {
  return (
    <header className="border-b-4 border-teal-500">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        <Link href="/">
          <Image src={Logo} alt="Ícone da empresa" width={200} height={200} />
        </Link>

        
        <ul className="flex space-x-8 text-blue-600">
          <li>
            <Link href="/">Inicial</Link>
          </li>
          <li>
            <Link href="/integrantes">Integrantes</Link>
          </li>
          <li>
            <Link href="/planos">Planos</Link>
          </li>
          <li>
            <Link href="/cadastroUsuario">Cadastro</Link>
          </li>
          <li>
            <Link href="/fogueira">Fogueira</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}


