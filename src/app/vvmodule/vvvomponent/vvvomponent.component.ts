import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VVActivity, VvserviceService } from '../vvservice.service';

@Component({
  selector: 'app-vvvomponent',
  templateUrl: './vvvomponent.component.html',
  styleUrls: ['./vvvomponent.component.css']
})
export class VvvomponentComponent implements OnInit {

  currentActivity$: Observable<VVActivity> | undefined;

  constructor(private vvService: VvserviceService) { }

  ngOnInit() {
    this.reloadActivity();
    setInterval(() => {
      this.reloadActivity();
    }, 10000);
  }

  reloadActivity() {
    this.currentActivity$ = this.vvService.getAnActivity();
  }
}


