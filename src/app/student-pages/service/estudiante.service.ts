import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'
import {Perfil,
  Representante,
  Academico,
  CrearEstudiante } from '../interface/estudiante.interface'


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
 private baseUrl = environment.apiUrl;//'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  create(estudiante:Academico):Observable<any>{
    return this.httpClient.post<any>(`${ this.baseUrl }/estudiante/`, {
          ...estudiante
        });
  }

}
