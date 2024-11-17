import Link from "next/link";
import Menu from "../Menu/Menu";
import Logo from "@/img/logo.png"
import Image from "next/image";

export default function Cabecalho(){
    return(
        <header>
            <Link href="/">
                <Image src={Logo} alt="Logo da Earth in Balance"/>
            </Link>
            <Menu/>
        </header>
    )
}