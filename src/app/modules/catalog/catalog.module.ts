import { ProductDetailsComponent } from './../../components/product-details/product-details.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { SearchPipe } from './../../pipes/search.pipe';
import { SortByPipe } from './../../pipes/sort-by.pipe';
import { CountKeyLessThanPipe } from './../../pipes/count-key-less-than.pipe';
import { AddToCartDirective } from './../../directives/add-to-cart.directive';
import { PriceHilightDirective } from './../../directives/price-hilight.directive';
import { ProductComponent } from './../../components/product/product.component';
import { CatalogComponent } from './../../components/catalog/catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
    PriceHilightDirective,
    AddToCartDirective,
    CountKeyLessThanPipe,
    SortByPipe,
    SearchPipe,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    AppCommonModule
  ]
})
export class CatalogModule { }