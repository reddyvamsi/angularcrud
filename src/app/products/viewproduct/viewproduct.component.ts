import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  productid=0;

  constructor(private activate:ActivatedRoute){

  }
  ngOnInit():void{
   this.activate.params.subscribe(data=>{
    this.productid=data['id'];
   })
  }

}
