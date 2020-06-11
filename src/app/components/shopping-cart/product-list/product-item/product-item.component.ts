import { Component, OnInit, Input } from '@angular/core';
import {Products} from 'src/app/models/products';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() ProductItem:Products;

  constructor(private MessengerService:MessengerService) { 
    
  }
AddToCart(){
  
  this.MessengerService.sendMsg(this.ProductItem)
}
  ngOnInit() {
   
  }
  

}
