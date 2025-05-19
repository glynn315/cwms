import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logs } from '../models/logs.model';

@Injectable({
  providedIn: 'root'
})
export class LogsServicesService {

  private ApiURL = 'https://localhost:7121/api/Logs';

  constructor(private http: HttpClient) { }

  getAll():Observable<Logs[]>{
    return this.http.get<Logs[]>(this.ApiURL);
  }

  create(log: Logs):Observable<Logs>{
    return this.http.post<Logs>(this.ApiURL, log);
  }

  delete(ID:string): Observable<void>{
    return this.http.delete<void>(`${this.ApiURL}/${ID}`);
  }

  update(log: Logs): Observable<Logs>{
    return this.http.put<Logs>(`${this.ApiURL}/${log.id}`, log);
  }

  updateTimeOut(id: string){
    return this.http.patch(`${this.ApiURL}/${id}/timeout`, {});
  }

}
