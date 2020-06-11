import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import {Observable } from 'rxjs';
import{HttpClient} from'@angular/common/http';


@Injectable({
  providedIn: 'root'
  
})
export class ProductService {
 

  constructor(private http:HttpClient) {}

   getProduct():Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost/angular/get');
     
   }
   

  }
