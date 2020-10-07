import { Ecliterature, IEcliteratureService } from './ecliterature.service';
import { Subject } from 'rxjs';

export class EcliteratureServiceMock implements IEcliteratureService {
  ecliteratures = new Subject<Ecliterature[]>();
  ecliterature$ = this.ecliteratures.asObservable();

  constructor() {}

  getEcliteratures(): void {
    this.ecliteratures.next([
      {id: 1, Url: 'Eloquent JavaScript'},
      {id: 2, Url: 'Understanding row script'},
      {id: 3, Url: 'My favorite language'}]);
  }

}


