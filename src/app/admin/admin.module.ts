import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
})
export class AdminModule { }