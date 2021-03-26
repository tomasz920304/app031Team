import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  url: string = `${environment.applicationUrl}/team`;

  constructor(private http: HttpClient) {}

  get(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url);
  }

  post(model: Team): Observable<Team[]> {
    return this.http.post<Team[]>(this.url, model);
  }

  put(model: Team): Observable<Team[]> {
    return this.http.put<Team[]>(`${this.url}/${model.teamId}`, model);
  }

  delete(id): Observable<Team[]> {
    return this.http.delete<Team[]>(`${this.url}/${id}`);
  }
}
