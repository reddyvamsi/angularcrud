import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-catagory',
  templateUrl: './view-all-products-by-catagory.component.html',
  styleUrls: ['./view-all-products-by-catagory.component.css']
})
export class ViewAllProductsByCatagoryComponent implements OnInit {
 
    catagory=""
  constructor(private activate:ActivatedRoute){

  }

  ngOnInit():void{
   this.activate.queryParams.subscribe(data=>{
      this.catagory=data['catagory']
    console.log(this.activate);
   })
  }

}
