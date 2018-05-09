export interface Alimento {
  _id: string;
  nome: string;
  tipo: string;
}

export interface Cardapio {
  _id?: string;
  nome: string;
  alimentos: Alimento[];
}

export interface Almoco {
  cardapios_associados: CardapioAssociado[];
  alteracoes: Alteracao[];
  cancelamentos: Cancelamento[];
  data: Date;
}

export interface Alteracao {
  id: string;
  usuario: Usuario;
  opcao: string;
}

export interface Cancelamento {
  id: string;
  usuario: Usuario;
  motivo: string;
}

export interface CardapioAssociado {
  diaSemana: string;
  cardapio: Cardapio;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  tipo: string;
  estado: string;
}
