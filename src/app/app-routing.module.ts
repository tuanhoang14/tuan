import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [
  {path: 'TrangBanHang', component: TrangChuComponent},
  {path: 'DangNhap', component: DangNhapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
