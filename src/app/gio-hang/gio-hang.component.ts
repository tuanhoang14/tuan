import { Component, Input, OnInit, Output } from '@angular/core';

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
  removeSp(index:any){
    console.log(index);
    this.dsSanPham.splice(index,1);
  }
}

