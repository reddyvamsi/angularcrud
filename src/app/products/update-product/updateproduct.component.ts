import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  
    productid=0;
   constructor(private activate:ActivatedRoute){}

   ngOnInit():void{
    this.activate.params.subscribe(data=>{
      this.productid=data['id']
    })
   }
}
