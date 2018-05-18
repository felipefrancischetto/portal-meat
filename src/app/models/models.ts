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
  _id: string;
  cardapio_agendado: Agenda;
  alteracoes: Alteracao[];
  cancelamentos: Cancelamento[];
  data: Date;
}

export interface Alteracao {
  _id: string;
  usuario: Usuario;
  opcao: string;
}

export interface Cancelamento {
  _id: string;
  usuario: Usuario;
  motivo: string;
}

export interface Agenda {
  _id: number;
  diaDaSemana: string;
  cardapio: Cardapio;
}

export interface Usuario {
  _id: string;
  nome: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  tipo: string;
  estado: string;
}
