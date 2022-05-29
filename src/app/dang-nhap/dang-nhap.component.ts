import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DangNhapService } from './../dang-nhap.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  public tenDangNhap:string = "";
  public matKhau:string = "";

  constructor(
    private dangNhapService : DangNhapService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  dangNhap(){
    this.dangNhapService.DangNhap(this.tenDangNhap,this.matKhau) ? this.router.navigate(['/TrangBanHang']): alert("Ten dang nhap hoac mat khau sai");
    this.dangNhapService.saveData();
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

