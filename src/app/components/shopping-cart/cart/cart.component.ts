import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { MessengerService } from 'src/app/services/messenger.service';
import { Products } from 'src/app/models/products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Cart=[];
  cartTotal = 0
  constructor(private CartService: CartService, private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getmsg().subscribe((product: Products) => {
      this.addproductcart(product)
    })


    this.Cart = this.CartService.getCart()


  }
  addproductcart(product: Products) {

    let productexist = false

    for (let i in this.Cart) {
      if (this.Cart[i].id === product.id) {
        this.Cart[i].qty++;
        productexist = true;
        break;

      }
    }
      if (!productexist) {
        this.Cart.push({
          qty:1,

          price: product.price,
          name: product.name,
          id: product.id,
        })
      }
       this.cartTotal = 0
      this.Cart.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
    }
  }
