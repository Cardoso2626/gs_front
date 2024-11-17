import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li>
              <Link href="/cadastroUsuario" className="hover:text-teal-500 transition-colors">
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
    )
}