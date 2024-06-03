

export interface Nota {
  id: number;
  valor: number;
  asignaturaId: number;
}

export interface NotaUpdate {
  valor: number;
  asignaturaId: number;
}

export interface Asignatura {
  id: number;
  name: string;
  profesor?: string;
  cursoId: number;
  notas: Nota[];
}


export interface Curso {
  id: number;
  num: number;
  asignaturas: Asignatura[];
}


export interface ResponseCurso{
  curso:Curso;
}
export interface ResponseAsignaturas{
  materias:Asignatura[];
}