import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {matSortAnimations, Sort} from '@angular/material/sort';
import { DangNhapService } from './../dang-nhap.service';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})

export class TrangChuComponent implements OnInit {

  public filter = "";
  soTrang = 0;
  page = 0;
  dsSp : PeriodicElement[] = [];
  sortName : Sort = {active:'name',direction:'asc'} ;
  sortPrice : Sort = {active:'price',direction:'asc'} ;
  dataSource1 = filterTest(this.filter);
  itemPage = paginationPage(this.dataSource1, this.soTrang);
  displayedColumns: string[] = ['id', 'name', 'price', 'mieuTa'];
  sortedData= filterTest(this.filter);

  @ViewChild(MatPaginator) paginator : MatPaginator =  new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);;
  constructor(private dangNhapService : DangNhapService) { }

  ngAfterViewInit() {

  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
  }

  ngOnInit(): void {
    console.log("sdgs");
    console.log(this.dangNhapService.tenDangNhap);
  }

  filterTest(value: any){
    this.dataSource1 = ELEMENT_DATA.filter(data => data.name.includes(value));
    this.soTrang = 0;
    this.itemPage = paginationPage(this.dataSource1, this.soTrang);
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
    this.soTrang = 0;
    this.itemPage = paginationPage(this.dataSource1, this.soTrang);
  }

  TrangSau() {
    this.soTrang*12*2 < this.dataSource1.length ? this.soTrang ++ : this.soTrang ;
    this.itemPage = this.soTrang * 12 < this.dataSource1.length ? paginationPage(this.dataSource1, this.soTrang) : this.itemPage;
  }

  TrangTruoc() {
    this.soTrang*12*2 > this.dataSource1.length ? this.soTrang -- : this.soTrang ;
    this.itemPage = this.soTrang * 12 < this.dataSource1.length ? paginationPage(this.dataSource1, this.soTrang) : this.itemPage;
  }

  ThemSp(id:any){
    const index = this.dataSource1.map( (i: { id: any; }) => i.id).indexOf(id);
    this.dsSp.push(this.dataSource1[index]);
    console.log(this.dsSp);
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function filterTest(filter:string){
  let result = ELEMENT_DATA.filter(data => data.name.includes(filter));
  return result;
}

function paginationPage(dataSource : PeriodicElement[], soTrang: number){
  let result : PeriodicElement[]=[];
  let items = 0;
  let itemOfPage = soTrang  * 12;
  for(itemOfPage; itemOfPage < dataSource.length && items < 12 ; itemOfPage++){
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
  {id: 1, name: 'Hydrogen', price: 1.0079, mieuTa: 'ABC',color:"null"},
  {id: 2, name: 'Helium', price: 4.0026, mieuTa: 'ABC',color:"null"},
  {id: 3, name: 'Lithium', price: 6.941, mieuTa: 'ABC',color:"null"},
  {id: 4, name: 'Beryllium', price: 9.0122, mieuTa: 'BABCe',color:"null"},
  {id: 5, name: 'Boron', price: 12.811, mieuTa: 'BABC',color:"null"},
  {id: 6, name: 'Carbon', price: 12.0127, mieuTa: 'ABCC',color:"null"},
  {id: 7, name: 'Nitrogen', price: 14.0067, mieuTa: 'ABCN',color:"null"},
  {id: 8, name: 'Oxygen', price: 15.9994, mieuTa: 'OABC',color:"null"},
  {id: 9, name: 'Fluorine', price: 18.9984, mieuTa: 'ABCF',color:"null"},
  {id: 12, name: 'Neon', price: 20.1797, mieuTa: 'NABCe',color:"null"},
  {id: 11, name: 'Sodium', price: 22.9897, mieuTa: 'NaABC',color:"null"},
  {id: 12, name: 'Magnesium', price: 24.305, mieuTa: 'MABCg',color:"null"},
  {id: 13, name: 'Aluminum', price: 26.9815, mieuTa: 'ABCAl',color:"null"},
  {id: 14, name: 'Silicon', price: 28.0855, mieuTa: 'SABCi',color:"null"},
  {id: 15, name: 'Phosphorus', price: 30.9738, mieuTa: 'ABCP',color:"null"},
  {id: 16, name: 'Sulfur', price: 32.065, mieuTa: 'SABC',color:"null"},
  {id: 17, name: 'Chlorine', price: 35.453, mieuTa: 'CABCl',color:"null"},
  {id: 18, name: 'Argon', price: 39.948, mieuTa: 'AABC',color:"null"},
  {id: 19, name: 'Potassium', price: 39.0983, mieuTa: 'ABCK',color:"null"},
  {id: 20, name: 'Calcium', price: 40.078, mieuTa: 'CABC',color:"null"},
];
