import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul className="flex space-x-6 text-sm font-medium text-white">
                 <li>
                    <Link href="/" className="font-bold hover:text-green-300 transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/cadastroUsuario" className="font-bold hover:text-green-300 transition-colors">
                        Cadastro
                    </Link>
                </li>
                <li>
                    <Link href="/gastos" className="font-bold hover:text-green-300 transition-colors">
                        Controle
                    </Link>
                </li>
                <li>
                    <Link href="/fogueira" className="font-bold hover:text-green-300 transition-colors">
                        Fogueira
                    </Link>
                </li>
                <li>
                    <Link href="/planos" className="font-bold hover:text-green-300 transition-colors">
                        Planos
                    </Link>
                </li>
                <li>
                    <Link href="/integrantes" className="font-bold hover:text-green-300 transition-colors">
                        Integrantes
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
