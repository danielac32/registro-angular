export interface CreateNota {
  valor: number;
}

export interface CreateAsignatura {
  name: string;
  notas: CreateNota[];
}

export interface CreateCurso {
  num: number;
  id_academico: number;
  asignaturas: CreateAsignatura[];
}


