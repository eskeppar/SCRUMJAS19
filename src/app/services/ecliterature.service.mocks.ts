import { Ecliterature, IEcliteratureService, Product } from './ecliterature.service';
import { Subject } from 'rxjs';

export class EcliteratureServiceMock implements IEcliteratureService {
  ecliteratures = new Subject<Ecliterature[]>();
  ecliterature$ = this.ecliteratures.asObservable();

  products = new Subject<Product[]>();
  products$ = this.products.asObservable();

  constructor() {}
  getElements(): void {
    throw new Error('Method not implemented.');
  }

  getEcliteratures(): void {
    this.ecliteratures.next([
      {id: 1, Url: 'Eloquent JavaScript'},
      {id: 2, Url: 'Understanding row script'},
      {id: 3, Url: 'My favorite language'}]);
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  getProducts(): void {
    this.products.next([
      // tslint:disable-next-line:max-line-length
      {Id: 1, BrandId: 1, Product: 'Building', Price: 1600.67, PercentOff: 0.00, Description: 'sum dolor', IsFeatured: 0, Stars: 4.00, TaxId: 4},
      // tslint:disable-next-line:max-line-length
      {Id: 2, BrandId: 1, Product: 'Best Angular', Price: 1550.00, PercentOff: 0.00, Description: 'sum dolor', IsFeatured: 0, Stars: 4.00, TaxId: 4},
      // tslint:disable-next-line:max-line-length
      {Id: 3, BrandId: 1, Product: 'Pro Angular', Price: 1400.89, PercentOff: 0.00, Description: 'sum dolor', IsFeatured: 0, Stars: 4.00, TaxId: 4},
    ]);
  }

}


