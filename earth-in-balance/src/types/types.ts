export type TipoUsuario = {
    nome:string;
    idade:number;
    telefone:string;
    cpf:string
};

export type TipoHabito = {
    descricao:string;
    qtdDia:number;
    usuario:{
        id:number
    }
};