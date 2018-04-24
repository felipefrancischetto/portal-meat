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
  name: string;
  tipo: string;
}

export interface Cardapio {
  id: string;
  name: string;
  alimentos: Alimento[];
}
