import { Component, Input } from '@angular/core';
import { tableData } from 'src/app/data/tabledb';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columnDefinition!: string[];
  data = tableData;
}
