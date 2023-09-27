import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { product } from '../products';
@Component({
  selector: 'app-view-all-products-by-catagory',
  templateUrl: './view-all-products-by-catagory.component.html',
  styleUrls: ['./view-all-products-by-catagory.component.css']
})
export class ViewAllProductsByCatagoryComponent implements OnInit {
 
    catagory:any;
    product:any=[] ;
  constructor(private activate:ActivatedRoute,
     private produservice:ProductserviceService){
  }

  ngOnInit():void{
   this.activate.params.subscribe(data=>{
      this.catagory=data['id']
      console.log(this.catagory);
    console.log(this.activate);
    
 // get products by catagory
    this.produservice.Searchcategoryproducts(this.catagory).subscribe(catagorydata=>{
         this.product=catagorydata;
      console.log(this.product+''+"catagory data");
   }) 
})
}
}
