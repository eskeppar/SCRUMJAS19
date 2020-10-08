import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Ecliterature {
  id: number;
  Url: string;
}

export interface IEcliteratureService {
  getEcliteratures(): void;
}

@Injectable({
  providedIn: 'root',
})
export class EcliteratureService implements IEcliteratureService {
  ecliteratures = new Subject<Ecliterature[]>();
  ecliterature$ = this.ecliteratures.asObservable();

  constructor(private http: HttpClient) {}

  getEcliteratures(): void {
    this.http
      .get('https://eckurslitteratur.herokuapp.com/api/productimages')
      .subscribe((ecliteratures: Ecliterature[]) => {
        this.ecliteratures.next(ecliteratures);
      });
  }
}
