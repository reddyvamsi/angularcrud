import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
  


          constructor(private prodservice:ProductserviceService){

          }
  addNewproduct(form:any) {
     console.log(form.value)
     let newproduct:any={
      id:7,
      catagoryId: form.value.product_catagoryid,
      productname:form.value.product_name,
      description:form.value.product_description,
      rating:form.value.product_rating,
      prise:form.value.product_price,
      productImg:'',
      isavaliable:form.value.product_isavaliable,
      color:form.value.product_color,
      reviews:form.value.product_reviews
    }
    console.log(newproduct);

this.prodservice.createproduct(newproduct).subscribe(data=>{
  console.log(data);    
})  
  }

}

 



