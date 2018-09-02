export class ScheduleData {
  title: string;
  columns: Column[];
  rows: Object[];
}

export class Column {
  name: string;
  title: string;
  width: number;
}
