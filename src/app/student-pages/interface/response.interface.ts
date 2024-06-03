//import {Perfil,Representante,Academico} from './estudiante.interface'

export interface perfil {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  perfil: {
    alergia: boolean;
    cedula: string;
    createdAt: string;
    direccion: string;
    email: string;
    id: number;
    isActive: boolean;
    medicina: boolean;
    name: string;
    telefono: string;
  };
}

export interface ResponsePerfil{
	response:perfil;
}



export interface academico {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  recordAcademico: {
    createdAt: string;
    curso: number;
    fechaEscolarDesde: string;
    fechaEscolarHasta: string;
    id: number;
    id_estudiante: number;
    materiasAplazadas: {
      // Propiedades de cada materia aplazada
      // Define las propiedades aquí según la estructura de cada elemento del array
    }[];
    materiasAprobadas: {
      // Propiedades de cada materia aprobada
      // Define las propiedades aquí según la estructura de cada elemento del array
    }[];
    plantelOrigen: string;
    pruebaVocacional: boolean;
    repitiente: boolean;
    tipoEstudiante: string;
  }[];
}

import {Academico} from './estudiante.interface'

export interface ResponseCreateRecord{
createdAcademico:Academico;
}
export interface ResponseAcademico{
	response:academico;
}

export interface ResponseDeleteAcademico{
  recordDtelete:Academico;
}


export interface representante {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  representante: {
    cedulaM: string;
    cedulaP: string;
    createdAt: string;
    emailM: string;
    emailP: string;
    id: number;
    madre: string;
    nombreRepresentante: string;
    numEmergencia: string;
    padre: string;
    parentesco: string;
    profesionM: string;
    profesionP: string;
    telefonoM: string;
    telefonoP: string;
    viveConEstuanteM: boolean;
    viveConEstuanteP: boolean;
  };
}

export interface ResponseRepresent{
	response:representante;
}


export interface ResponsePR {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  perfil: {
    alergia: boolean;
    cedula: string;
    createdAt: string;
    direccion: string;
    email: string;
    id: number;
    isActive: boolean;
    medicina: boolean;
    name: string;
    telefono: string;
  };
  recordAcademico: {
    createdAt: string;
    curso: number;
    fechaEscolarDesde: string;
    fechaEscolarHasta: string;
    id: number;
    id_estudiante: number;
    materiasAplazadas: Array<{ /* Propiedades de materiasAplazadas */ }>;
    materiasAprobadas: Array<{ /* Propiedades de materiasAprobadas */ }>;
    plantelOrigen: string;
    pruebaVocacional: boolean;
    repitiente: boolean;
    tipoEstudiante: string;
  }[];
}


export interface ResponsePerfilRecord{
	response:ResponsePR;
}


export interface ResponsePRP {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  perfil: {
    alergia: boolean;
    cedula: string;
    createdAt: string;
    direccion: string;
    email: string;
    id: number;
    isActive: boolean;
    medicina: boolean;
    name: string;
    telefono: string;
  };
  representante: {
    cedulaM: string;
    cedulaP: string;
    createdAt: string;
    emailM: string;
    emailP: string;
    id: number;
    madre: string;
    nombreRepresentante: string;
    numEmergencia: string;
    padre: string;
    parentesco: string;
    profesionM: string;
    profesionP: string;
    telefonoM: string;
    telefonoP: string;
    viveConEstuanteM: boolean;
    viveConEstuanteP: boolean;
  };
}

export interface ResponsePerfilRepresent{
	response:ResponsePRP;
}


export interface ResponseRR {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  recordAcademico: Array<{
    createdAt: string;
    curso: number;
    fechaEscolarDesde: string;
    fechaEscolarHasta: string;
    id: number;
    id_estudiante: number;
    materiasAplazadas: Array<any>; // Define la interfaz para este tipo de datos si es necesario
    materiasAprobadas: Array<any>; // Define la interfaz para este tipo de datos si es necesario
    plantelOrigen: string;
    pruebaVocacional: boolean;
    repitiente: boolean;
    tipoEstudiante: string;
  }>;
  representante: {
    cedulaM: string;
    cedulaP: string;
    createdAt: string;
    emailM: string;
    emailP: string;
    id: number;
    madre: string;
    nombreRepresentante: string;
    numEmergencia: string;
    padre: string;
    parentesco: string;
    profesionM: string;
    profesionP: string;
    telefonoM: string;
    telefonoP: string;
    viveConEstuanteM: boolean;
    viveConEstuanteP: boolean;
  };
}

export interface ResponseRecordRepresentante{
	response:ResponseRR;
}


export interface Response_All {
  createdAt: string;
  id: number;
  id_perfil: number;
  id_representante: number;
  perfil: {
    alergia: boolean;
    cedula: string;
    createdAt: string;
    direccion: string;
    email: string;
    id: number;
    isActive: boolean;
    medicina: boolean;
    name: string;
    telefono: string;
    recordAcademico: Array<{
      createdAt: string;
      curso: number;
      fechaEscolarDesde: string;
      fechaEscolarHasta: string;
      id: number;
      id_estudiante: number;
      materiasAplazadas: Array<any>; // Define la interfaz para este tipo de datos si es necesario
      materiasAprobadas: Array<any>; // Define la interfaz para este tipo de datos si es necesario
      plantelOrigen: string;
      pruebaVocacional: boolean;
      repitiente: boolean;
      tipoEstudiante: string;
    }>;
    representante: {
      cedulaM: string;
      cedulaP: string;
      createdAt: string;
      emailM: string;
      emailP: string;
      id: number;
      madre: string;
      nombreRepresentante: string;
      numEmergencia: string;
      padre: string;
      parentesco: string;
      profesionM: string;
      profesionP: string;
      telefonoM: string;
      telefonoP: string;
      viveConEstuanteM: boolean;
      viveConEstuanteP: boolean;
    };
  };
}

export interface ResponseAll{
	response:Response_All;
}
