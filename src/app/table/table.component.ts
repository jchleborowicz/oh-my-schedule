import {Component, Input, OnInit} from '@angular/core';
import {ScheduleData} from '../shared/model';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() scheduleData: ScheduleData;

  ngOnInit() {
  }

}
