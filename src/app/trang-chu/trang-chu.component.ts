import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';




@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})

export class TrangChuComponent implements OnInit {

  public filter = "";
  color = "";
  dataSource1 = filterTest(this.filter);
  console = console;
  page = 0;
  displayedColumns: string[] = ['position', 'name', 'price', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator : MatPaginator =  new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
  }

  ngOnInit(): void {
    ELEMENT_DATA.forEach(element => {
      element.color = getRandomColor();
    });
    filterTest(this.filter)
  }
  filterTest1(value: any){
    this.dataSource1 = ELEMENT_DATA.filter(data => data.name.includes(value));
  }

}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function filterTest(filter:string){
  let result = ELEMENT_DATA.filter(data => data.name.includes(filter));
  return result;
}



export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  symbol: string;
  color: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', price: 1.0079, symbol: 'H',color:"null"},
  {position: 2, name: 'Helium', price: 4.0026, symbol: 'He',color:"null"},
  {position: 3, name: 'Lithium', price: 6.941, symbol: 'Li',color:"null"},
  {position: 4, name: 'Beryllium', price: 9.0122, symbol: 'Be',color:"null"},
  {position: 5, name: 'Boron', price: 10.811, symbol: 'B',color:"null"},
  {position: 6, name: 'Carbon', price: 12.0107, symbol: 'C',color:"null"},
  {position: 7, name: 'Nitrogen', price: 14.0067, symbol: 'N',color:"null"},
  {position: 8, name: 'Oxygen', price: 15.9994, symbol: 'O',color:"null"},
  {position: 9, name: 'Fluorine', price: 18.9984, symbol: 'F',color:"null"},
  {position: 10, name: 'Neon', price: 20.1797, symbol: 'Ne',color:"null"},
  {position: 11, name: 'Sodium', price: 22.9897, symbol: 'Na',color:"null"},
  {position: 12, name: 'Magnesium', price: 24.305, symbol: 'Mg',color:"null"},
  {position: 13, name: 'Aluminum', price: 26.9815, symbol: 'Al',color:"null"},
  {position: 14, name: 'Silicon', price: 28.0855, symbol: 'Si',color:"null"},
  {position: 15, name: 'Phosphorus', price: 30.9738, symbol: 'P',color:"null"},
  {position: 16, name: 'Sulfur', price: 32.065, symbol: 'S',color:"null"},
  {position: 17, name: 'Chlorine', price: 35.453, symbol: 'Cl',color:"null"},
  {position: 18, name: 'Argon', price: 39.948, symbol: 'Ar',color:"null"},
  {position: 19, name: 'Potassium', price: 39.0983, symbol: 'K',color:"null"},
  {position: 20, name: 'Calcium', price: 40.078, symbol: 'Ca',color:"null"},
];
