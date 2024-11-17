import Logo from "@/img/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Rodape() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-black text-white py-5">
      <div className="flex flex-wrap justify-center mx-auto p-5">
        <div className="flex items-center space-x-4">
          <h3 className="mb-0">Earth in Balance © {currentYear}–{currentYear}</h3>
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Earth in Balance Logo" width={60} height={60} />
          </Link>
        </div>
      </div>
    </footer>
  );
}