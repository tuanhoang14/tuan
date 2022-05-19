import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {matSortAnimations, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})

export class TrangChuComponent implements OnInit {

  public filter = "";
  soTrang = 1;
  sortName : Sort = {active:'name',direction:'asc'} ;
  sortPrice : Sort = {active:'price',direction:'asc'} ;

  color = "";
  dataSource1 = filterTest(this.filter);
  console = console;
  page = 0;
  displayedColumns: string[] = ['id', 'name', 'price', 'mieuTa'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  sortedData= filterTest(this.filter);
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
    filterTest(this.filter);
  }

  filterTest1(value: any){
    this.dataSource1 = ELEMENT_DATA.filter(data => data.name.includes(value));
  }

  sortData(sort: Sort) {
    const data = this.dataSource1.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource1 = data;
      return;
    }

    this.dataSource1 = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'price':
          return compare(a.price, b.price, isAsc);
        case 'mieuTa':
          return compare(a.mieuTa, b.mieuTa, isAsc);
        default:
          return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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

function paginationPage(dataSource : PeriodicElement[], sotrang: number){
  let result : PeriodicElement[]=[];
  let items = 0;
  let itemOfPage = sotrang  * 10;
  for(itemOfPage; itemOfPage <= dataSource.length || items < 10 ; itemOfPage++){
    items++;
    result.push(dataSource[itemOfPage]);
  }
  return result;
}


export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
  mieuTa: string;
  color: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', price: 1.0079, mieuTa: 'H',color:"null"},
  {id: 2, name: 'Helium', price: 4.0026, mieuTa: 'He',color:"null"},
  {id: 3, name: 'Lithium', price: 6.941, mieuTa: 'Li',color:"null"},
  {id: 4, name: 'Beryllium', price: 9.0122, mieuTa: 'Be',color:"null"},
  {id: 5, name: 'Boron', price: 10.811, mieuTa: 'B',color:"null"},
  {id: 6, name: 'Carbon', price: 12.0107, mieuTa: 'C',color:"null"},
  {id: 7, name: 'Nitrogen', price: 14.0067, mieuTa: 'N',color:"null"},
  {id: 8, name: 'Oxygen', price: 15.9994, mieuTa: 'O',color:"null"},
  {id: 9, name: 'Fluorine', price: 18.9984, mieuTa: 'F',color:"null"},
  {id: 10, name: 'Neon', price: 20.1797, mieuTa: 'Ne',color:"null"},
  {id: 11, name: 'Sodium', price: 22.9897, mieuTa: 'Na',color:"null"},
  {id: 12, name: 'Magnesium', price: 24.305, mieuTa: 'Mg',color:"null"},
  {id: 13, name: 'Aluminum', price: 26.9815, mieuTa: 'Al',color:"null"},
  {id: 14, name: 'Silicon', price: 28.0855, mieuTa: 'Si',color:"null"},
  {id: 15, name: 'Phosphorus', price: 30.9738, mieuTa: 'P',color:"null"},
  {id: 16, name: 'Sulfur', price: 32.065, mieuTa: 'S',color:"null"},
  {id: 17, name: 'Chlorine', price: 35.453, mieuTa: 'Cl',color:"null"},
  {id: 18, name: 'Argon', price: 39.948, mieuTa: 'Ar',color:"null"},
  {id: 19, name: 'Potassium', price: 39.0983, mieuTa: 'K',color:"null"},
  {id: 20, name: 'Calcium', price: 40.078, mieuTa: 'Ca',color:"null"},
];
