import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { product } from '../products';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  productId:any;
   proddata:any=[];

  constructor(private activate:ActivatedRoute,
    private productserve:ProductserviceService){

  }
  ngOnInit():void{
   this.activate.params.subscribe(data=>{
    this.productId=data['id'];
    console.log(this.productId+""+"products id getting");

    //gettin view product data
    this.productserve.viewprodcut(this.productId).subscribe(proid=>{
            this.proddata=proid; // getting the existuing data of the product
            console.log(proid);
    })
   })
  }

}
