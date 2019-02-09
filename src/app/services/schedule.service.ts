import {Injectable} from '@angular/core';
import {ScheduleData} from '../shared/model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  public scheduleData = new Subject<ScheduleData>();

  constructor(private http: HttpClient) {
    http.get('http://localhost:4200/assets/data.json')
      .subscribe(
        (data: ScheduleData) => this.scheduleData.next(data),
        (error) => console.log(error)
      );
  }

}
