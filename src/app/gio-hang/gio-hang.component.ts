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
  removeSp(spId:any){
    console.log(spId);
    const index = this.dsSanPham.map( (i: { id: any; }) => i.id).indexOf(spId);
    this.dsSanPham.splice(spId);
    console.log('fdf');
  }
}

