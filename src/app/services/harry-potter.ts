import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotter {
  private readonly baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(
      `${this.baseUrl}/characters/house/${house.toLowerCase()}`
    );
  }

  getCharacterById(id: string): Observable<Character | null> {
    return this.http.get<Character | Character[]>(`${this.baseUrl}/character/${id}`).pipe(
      map((response) => {
        if (Array.isArray(response)) {
          return response.length > 0 ? response[0] : null;
        }
        return response;
      }),
      catchError(() =>
        this.getAllCharacters().pipe(
          map((characters) => characters.find((c) => c.id === id) ?? null)
        )
      )
    );
  }
}
