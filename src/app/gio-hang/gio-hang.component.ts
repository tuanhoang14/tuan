import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit {
  @Input () dsSanPham: any;
  public items: any[] = [
    { field: 'European Union', code: 'EU', header: true },
    { field: 'Germany', code: 'DE' },
    { field: 'Bulgaria', code: 'BG', selected: true },
    { field: 'France', code: 'FR', disabled: true },
    { field: 'North America', code: 'NA', header: true },
    { field: 'Canada', code: 'CA' },
    { field: 'United States', code: 'US' },
    { field: 'Mexico', code: 'MX' }
];
  constructor() { }

  ngOnInit(): void {

  }
  removeSp(spId:any){
    const index = this.dsSanPham.map( (i: { id: any; }) => i.id).indexOf(spId);
  }
}

