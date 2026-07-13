import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItem } from '../../../core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:5181/api/item';

  constructor(private http: HttpClient) {}

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.apiUrl);
  }

  getItemById(id: number): Observable<IItem> {
    return this.http.get<IItem>(`${this.apiUrl}/${id}`);
  }

  createItem(item: IItem): Observable<IItem> {
    return this.http.post<IItem>(this.apiUrl, item);
  }

  updateItem(id: number, item: IItem): Observable<IItem> {
    return this.http.put<IItem>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
