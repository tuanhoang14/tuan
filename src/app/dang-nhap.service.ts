import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DangNhapService {
  trangThaiDangNhap : number = 0;
  tenDangNhap:string = '';


  constructor() { }

  DangNhap(tenDangNhap:string,matKhau:string){
    if( tenDangNhap == "123" && matKhau == "123"){
      this.tenDangNhap = 'Tuan';
      this.trangThaiDangNhap = 1;
      return true;
    }
    return false;
  }

  saveData() {
    sessionStorage.setItem('trangThaiDangNhap', '1');
    sessionStorage.setItem('tenDangNhap', 'Pakistan');
  }
  getData() {
    return sessionStorage.getItem('tenDangNhap');
  }
  removeData() {
    sessionStorage.removeItem('tenDangNhap');
  }
}
export interface TaiKhoan {
  name: string;
  id: number;
  matKhau: string;
}

const ELEMENT_DATA: TaiKhoan[] = [
  {id: 1, name: 'Hydrogen',matKhau: "null"},
  {id: 2, name: 'Helium', matKhau:"null"},
  {id: 3, name: 'Lithium', matKhau:"null"},
  {id: 4, name: 'Beryllium', matKhau:"null"},
  {id: 5, name: 'Boron', matKhau:"null"},
  {id: 6, name: 'Carbon', matKhau:"null"},
  {id: 7, name: 'Nitrogen', matKhau:"null"},
  {id: 8, name: 'Oxygen', matKhau:"null"},
  {id: 9, name: 'Fluorine', matKhau:"null"},
  {id: 12, name: 'Neon', matKhau:"null"},
  {id: 11, name: 'Sodium', matKhau:"null"},
  {id: 12, name: 'Magnesium', matKhau:"null"},
  {id: 13, name: 'Aluminum', matKhau:"null"},
  {id: 14, name: 'Silicon', matKhau:"null"},
  {id: 15, name: 'Phosphorus', matKhau:"null"},
  {id: 16, name: 'Sulfur', matKhau:"null"},
];
