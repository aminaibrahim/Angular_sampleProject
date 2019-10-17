import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list.component';
import { convertToSpaces } from 'src/shared/convert-to-spaces.pipe';
import { ProductsDetailsComponent } from '../products-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
  
    ProductListComponent,
    convertToSpaces,
 
    ProductsDetailsComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'product', component:ProductListComponent},
      { path:'product/:id',canActivate:[ProductDetailGuard] ,component:ProductsDetailsComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
