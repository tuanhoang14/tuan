import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DangNhapService {
  trangThaiDangNhap : number = 0;
  tenDangNhap:string = '';

  TaiKhoan1 = ELEMENT_DATA;


  constructor() { }

  DangKy(tenDangNhap:string,matKhau:string){
    let data =  {id: 1, name: tenDangNhap ,matKhau: matKhau};
    this.TaiKhoan1.push(data);
  }

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
  {id: 1, name: '123',matKhau: "123"},
  {id: 2, name: 'Helium', matKhau:"null"},
];
