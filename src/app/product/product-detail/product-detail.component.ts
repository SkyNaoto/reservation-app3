import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product:any;
  constructor(private route: ActivatedRoute){ }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')!] // + params の +は、数値型に変更するという意味　products[] の配列に入れる値なので数値である必要があるため
    }) 
  }
}
