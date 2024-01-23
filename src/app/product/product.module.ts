import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: 'products', component: ProductComponent,
    children:[
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent},  // : を変数の前につけると、動的なURLとして使用することができる。例えば、productIdに３が入ると、products/3 というURL として使う事ができる。もしコロンがなければ、products/productId というURLと解釈される  
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
