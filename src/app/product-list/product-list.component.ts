import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.services';

@Component({
  
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 pageTitle:string="Product list";
 imageWidth:number=30;
 imageHeight:number=25;
 showImage:boolean=false;
 availableUrl="https://image.flaticon.com/icons/svg/33/33281.svg";
 nonavailableUrl='https://image.flaticon.com/icons/svg/97/97113.svg';

 _listFilter:string;
 errorMsg:string;
 get listFilter():string{
   return this._listFilter;
 }

 set listFilter(list:string){
  this._listFilter=list; 
  this.filteredProducts = this.listFilter? this.performFilter(this.listFilter):this.products;
 }
 filteredProducts:IProduct[];


 products: IProduct[];
 
 toggleImage():void{
   this.showImage = !this.showImage;
 }




 performFilter(filterBy:string):IProduct[]{
  filterBy=filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1)
 }
 constructor(private productService:ProductService) { 
   
 }

 ratingClickEvent(event:string):void{
 
 this.pageTitle = event;
}

  ngOnInit() {
   this.productService.getProducts().subscribe(
                                            products=>{
                                                            this.products=products;
                                                            this.filteredProducts=this.products;
                                                         },   
      error=>this.errorMsg=<any>error);
   
  }
 }
 


