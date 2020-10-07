import { Component, OnInit } from '@angular/core';
import { Ecliterature, EcliteratureService } from '../../services/ecliterature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ecliteratures: Ecliterature[] = [];

  constructor(private service: EcliteratureService) { }

  ngOnInit(): void {
    this.service.ecliterature$.subscribe(ecliteratures => {
      this.ecliteratures = ecliteratures;

      console.log(ecliteratures);
    });
    this.service.getEcliteratures();

    console.log(this.ecliteratures);
  }
}


