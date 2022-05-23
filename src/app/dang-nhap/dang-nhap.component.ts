import { ActivatedRoute, Routes } from '@angular/router';
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
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }
  dangNhap(){
    console.log("hi");
    this.dangNhapService.DangNhap(this.tenDangNhap,this.matKhau) ? window.location.href = './TrangBanHang': alert("Ten dang nhap hoac mat khau sai");
  }
}

