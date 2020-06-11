import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {


  data=new FormGroup({
    name: new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('', Validators.email),

  });
  

  
  clickdata(){
    
    console.log(this.data.value);
      
      }
 

  


  ngOnInit(
    
  ): void {
  }

}
