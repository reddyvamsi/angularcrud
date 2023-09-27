import { Component, OnInit} from '@angular/core';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-viewallproducts',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.css']
})
export class ViewallproductsComponent implements OnInit {
   product:any
   constructor(private products:ProductserviceService){}
  ngOnInit(): void {
    this.products.getallproducts().subscribe(data=>{
      this.product=data;
      console.log(this.product);
     })
  }
   
}
