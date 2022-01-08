import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VVActivity, VVService } from '../vv.service';

@Component({
  selector: 'app-vv',
  templateUrl: './vv.component.html',
  styleUrls: ['./vv.component.css']
})
export class VVComponent implements OnInit {

  currentActivity$: Observable<VVActivity> | undefined;

  constructor(private vvService: VVService) { }

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


