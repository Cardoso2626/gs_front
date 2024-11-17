export default function Rodape(){
    return (
        <footer className="bg-black text-white text-center py-5">
            <div className="flex flex-wrap justify-around mx-auto p-5">
                <div className="flex-1 min-w-[300px] m-2">
                    <h3 className="mb-2">Contato</h3>
                    <p>Email: heitor.ortega16@gmail.com</p>
                    <p>Telefone: (11) 94743-1188</p>
                </div>
                <div className="flex-1 min-w-[300px] m-2">
                    <h3 className="mb-2">Endereço</h3>
                    <p>Av. Paulista, 1106</p>
                    <p>Bela Vista, São Paulo</p>
                    <p>CEP: 01311-000</p>
                </div>
            </div>
        </footer>
    );
};