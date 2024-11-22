import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.png";
import Menu from "@/components/Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="bg-black border-b border-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Ícone da empresa"
            width={60}
            height={60}
            priority
            className="h-auto w-auto"
          />
          <span className="ml-2 text-lg font-bold text-white hover:text-green-300 transition-colors">
            Earth in Balance
          </span>
        </Link>
        <nav className="w-full md:w-auto mt-2 md:mt-0">
          <Menu />
        </nav>
      </div>
    </header>
  );
}
