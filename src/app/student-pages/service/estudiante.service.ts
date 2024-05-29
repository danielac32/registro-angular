import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'
import {Perfil,
        Representante,
        Academico,
        CrearEstudiante,
        EstudianteResponse } from '../interface/estudiante.interface'
import {ResponsePerfil} from '../interface/response.interface'

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
 private baseUrl = environment.apiUrl;//'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  create(estudiante:CrearEstudiante):Observable<EstudianteResponse>{
        return this.httpClient.post<EstudianteResponse>(`${ this.baseUrl }/estudiante/`, {
          ...estudiante
        });
  }

  findOne(id: string,perfil:string,academico:string,representante:string):Observable<any>{
    return this.httpClient.get<any>(`${ this.baseUrl }/estudiante/${ id }?p=${perfil}&a=${academico}&r=${representante}`)
  }
  findById(id: string):Observable<ResponsePerfil>{
    return this.httpClient.get<ResponsePerfil>(`${ this.baseUrl }/estudiante/${ id }/cedula`)
  }


}
