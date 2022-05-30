import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DangNhapService {
  trangThaiDangNhap : number = 0;
  tenDangNhap:string = '';

  public TaiKhoan1 = ELEMENT_DATA;


  constructor(
    private router: Router
  ) { }

  DangKy(tenDangNhap:string,matKhau:string){
    let data =  {id: 1, name: tenDangNhap ,matKhau: matKhau};
    this.TaiKhoan1.push(data);
    alert('Đăng ký thành công');
    this.router.navigate(['/TrangBanHang'])
  }

  DangNhap(tenDangNhap:string,matKhau:string){
    console.log(this.TaiKhoan1);
    for (let i = 0; i < this.TaiKhoan1.length ; i++) {
      let a = this.TaiKhoan1[i].name;
      let b = this.TaiKhoan1[i].matKhau;
      if( tenDangNhap == this.TaiKhoan1[i].name && matKhau == this.TaiKhoan1[i].matKhau){
        this.tenDangNhap = tenDangNhap;
        this.trangThaiDangNhap = 1;
        return true;
      }
    }

    return false;
  }

  saveData() {
    sessionStorage.setItem('trangThaiDangNhap', '1');
    sessionStorage.setItem('tenDangNhap', '');
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
  {id: 2, name: 'Helium', matKhau:"123"},
];
