import {Component, Input} from '@angular/core';
import {Column} from '../../shared/model';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent {

  @Input() columns: Column[];
  @Input() rowData: Object;
  @Input() index: number;

  getDataFor(columnName: string) {
    return this.rowData[columnName];
  }
}
