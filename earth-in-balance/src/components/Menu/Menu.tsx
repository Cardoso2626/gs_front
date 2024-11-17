import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link href="/cadastroUsuario">Cadastre-se</Link></li>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/gastos">Gerenciamento de gastos</Link></li>
                <li><Link href="/fogueira">Fogueira</Link></li>
                <li><Link href="/planos">Planos</Link></li>
            </ul>
        </nav>
    )
}