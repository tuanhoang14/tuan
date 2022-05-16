import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})

export class TrangChuComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator : MatPaginator =  new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', price: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', price: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', price: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', price: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', price: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', price: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', price: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', price: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', price: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', price: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', price: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', price: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', price: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', price: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', price: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', price: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', price: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', price: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', price: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', price: 40.078, symbol: 'Ca'},
];
