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
}
