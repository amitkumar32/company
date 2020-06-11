import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
data:Cart[]=[];



  constructor() { }

  getCart():Cart[]{
   return this.data
  }
}
