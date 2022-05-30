import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DangNhapService } from '../dang-nhap.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

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
    this.dangNhapService.DangKy(this.tenDangNhap,this.matKhau) ;
  }

}
