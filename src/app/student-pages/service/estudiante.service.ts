import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'
import {Perfil,
        Representante,
        Academico,
        CrearEstudiante,
        EstudianteResponse } from '../interface/estudiante.interface'
import {ResponseAcademico,ResponseDeleteAcademico,ResponsePerfil,ResponseCreateRecord} from '../interface/response.interface'

import {CreateCurso} from '../interface/asignatura.interface'
import{NotaUpdate,ResponseCurso,ResponseAsignaturas} from '../interface/curso.interface'

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
 private baseUrl = environment.apiUrl;//'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  create(estudiante:CrearEstudiante):Observable<EstudianteResponse>{

    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
        return this.httpClient.post<EstudianteResponse>(`${ this.baseUrl }/estudiante/`, {
          ...estudiante
        },{ headers });
      }
      return new Observable<EstudianteResponse>();
  }

  
  updateValor(id: string,nota:NotaUpdate): Observable<any>{
     const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
         return this.httpClient.patch<any>(`${this.baseUrl}/estudiante/nota-valor/${id}`, {...nota},{ headers });
      }
      return new Observable<any>();
  
  }

  getAsignaturas(curso:number,id_academico:number): Observable<ResponseAsignaturas> {

      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<ResponseAsignaturas>(`${ this.baseUrl }/estudiante/asignatura/${ curso }?id_academico=${id_academico}`,{ headers })

      }
      return new Observable<ResponseAsignaturas>();
  }
  
  createCurso(curso: CreateCurso): Observable<any> {
      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.post<any>(`${ this.baseUrl }/estudiante/crear-curso`, {
          ...curso
        },{ headers });

      }
      return new Observable<any>();

        
  }

  getRecord(id: string):Observable<ResponseAcademico>{

      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<ResponseAcademico>(`${ this.baseUrl }/estudiante/getRecord/${ id }`,{ headers })
      }
      return new Observable<ResponseAcademico>();
    
  }


  findOne(id: string,perfil:string,academico:string,representante:string):Observable<any>{

    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<any>(`${ this.baseUrl }/estudiante/${ id }?p=${perfil}&a=${academico}&r=${representante}`,{ headers })
      }
      return new Observable<any>();

  }
  findById(id: string):Observable<ResponsePerfil>{
      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<ResponsePerfil>(`${ this.baseUrl }/estudiante/${ id }/cedula`,{ headers })
      }
      return new Observable<ResponsePerfil>();

    
  }

  createRecord(record: Academico): Observable<ResponseCreateRecord> {
      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });

        return this.httpClient.post<ResponseCreateRecord>(`${ this.baseUrl }/estudiante/academico`, {
          ...record
        },{ headers });
      }
    
    return new Observable<ResponseCreateRecord>();
  }

  deleteRecord(id_record:number,id_estudiante:number):Observable<ResponseDeleteAcademico>{
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.delete<ResponseDeleteAcademico>(`${ this.baseUrl }/estudiante/record/${ id_record }?ide=${id_estudiante}`,{ headers });
      }
      return new Observable<ResponseDeleteAcademico>();
  }
}
