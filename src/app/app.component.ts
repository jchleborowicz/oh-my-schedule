import {Component, OnInit} from '@angular/core';
import {ScheduleService} from './services/schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data;

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.scheduleService.scheduleData.subscribe(
      (data) => this.data = data
    );
  }

}
