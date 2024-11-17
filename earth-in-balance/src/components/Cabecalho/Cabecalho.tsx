import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.png";
import Menu from "@/components/Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="bg-black border-b border-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Ícone da empresa" width={60} height={60} />
          <span className="ml-2 text-lg font-bold text-white  hover:text-green-900 transition-colors">Earth in Balance</span>
        </Link>
        <Menu />
      </div>
    </header>
  );
}
