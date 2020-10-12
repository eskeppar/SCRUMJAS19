import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Product {
  Id: number;
  BrandId: number;
  Product: string;
  Price: number;
  PercentOff: number;
  Description: string;
  IsFeatured: number;
  Stars: number;
  TaxId: number;
}
export interface Ecliterature {
  id: number;
  Url: string;
}

export interface IEcliteratureService {
  getEcliteratures(): void;
  getProducts(): void;
}

@Injectable({
  providedIn: 'root',
})
export class EcliteratureService implements IEcliteratureService {
  ecliteratures = new Subject<Ecliterature[]>();
  ecliterature$ = this.ecliteratures.asObservable();

  products = new Subject<Product[]>();
  products$ = this.products.asObservable();

  constructor(private http: HttpClient) {}

  getEcliteratures(): void {
    this.http
      .get('https://eckurslitteratur.herokuapp.com/api/productimages')
      .subscribe((ecliteratures: Ecliterature[]) => {
        this.ecliteratures.next(ecliteratures);
      });
  }

  getProducts(): void {
    this.http.get('http://localhost:4000/api/products').subscribe((products: Product[]) => {
      this.products.next(products);
    });
  }
}

