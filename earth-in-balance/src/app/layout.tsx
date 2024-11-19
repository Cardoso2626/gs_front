import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Earth in Balance",
    description: "Earth in Balance é uma plataforma focada na promoção do bem-estar e sustentabilidade. Aqui, você encontra informações, dicas e soluções para melhorar sua qualidade de vida, com foco no equilíbrio entre a saúde do planeta e do ser humano.",
  };
  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
