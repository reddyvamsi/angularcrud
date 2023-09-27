import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  
    productid:any;
    prodDetails:any;
  updatedform: any;
   constructor(private activate:ActivatedRoute,
    private prodserve:ProductserviceService){}

   ngOnInit():void{
    this.activate.params.subscribe(data=>{
      this.productid=data['id']
    })
    this.prodserve.viewprodcut(this.productid).subscribe(proddata=>{
      console.log(proddata+""+"getting proudt name");
           this.prodDetails=proddata;
          
    });
   }
   UpdateProduct(updatedform:any){
  
    let updateproduct:any={
      productId:updatedform.value.producId,
      catagoryId:updatedform.value.productCatagoryid,
      productname:updatedform.value.productName,
      description:updatedform.value.productDescription,
      rating:updatedform.value.productRating,
      prise:updatedform.value.productPrice,
      productImg:'',
      isavaliable:updatedform.value.productIsavaliable,
      color:updatedform.value.productColor,
      review:updatedform.value.productReviews
    }
    console.log(updatedform.value+"update ptoduct");

    this.prodserve.updateproduct(this.productid,updateproduct).subscribe(updatedate=>{
        console.log(updatedate+"updated date"+"");
    })

   }

  
}
