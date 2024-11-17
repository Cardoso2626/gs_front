import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.png";
import Menu from "@/components/Menu/Menu"

export default function Cabecalho() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Ícone da empresa" width={60} height={60} />
        </Link>
        <Menu/>
        
      </div>
    </header>
  );
}
