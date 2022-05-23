import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit {
  @Input () dsSanPham: any;
  constructor() { }

  ngOnInit(): void {
  }
  removeSp(spId:any){
    const index = this.dsSanPham.map( (i: { id: any; }) => i.id).indexOf("yutu");
  }
}

