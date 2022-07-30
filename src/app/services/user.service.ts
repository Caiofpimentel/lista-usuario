import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/5ea567dc-4f97-480e-9aa4-3400a37bf440';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //C.R.U.D - CREATE, READ, UPDATE, DELETE

  constructor(private httpClient: HttpClient) { }
  //Retorna a lista de usuário READ

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Adiciona novo usuário ao banco CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  // Deleta o usuário do banco DELETE
  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)     
  }

  //Edita o usuário UPDATE
  updateUser(id: string, user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //Lista usuário único
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }

}
