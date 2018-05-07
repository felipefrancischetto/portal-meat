export interface Funcionario {
  id: string;
  name: string;
  username: string;
  password: string;
  tipo: string;
  historico: string[];
}

export interface Alimento {
  id: string;
  nome: string;
  tipo: string;
}

export interface Cardapio {
  id: string;
  name: string;
  alimentos: Alimento[];
}

export interface Almoco {
  cardapios_associados: CardapioAssociado[];
  funcionarios: Funcionario[];
  alteracoes: Alteracao[];
}

export interface Alteracao {
  id: string;
  funcionario: Funcionario;
  opcao: string;
}

export interface CardapioAssociado {
  diaSemana: string;
  cardapio: Cardapio[];
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  tipo: string;
}
