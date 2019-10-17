import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
 
  pageTitle:string='Product-Details';

  products:IProduct;
  constructor(private route_readFromUrl:ActivatedRoute, private route_navigate:Router) { 
    
  }

  ngOnInit() {
    let id = +this.route_readFromUrl.snapshot.paramMap.get('id');
    this.products= 
      {
        "productId":2,
        "productName":"mno",
        "productCode":"e-400",
        "available":false,
        "price":300,
        "starRating":3.1, 
        "imageUrl":"https://image.flaticon.com/icons/svg/126/126483.svg"
    }
  }
  backBtn():void{
    this.route_navigate.navigate(['/product']);
  }
  

}
