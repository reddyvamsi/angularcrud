import { Component} from '@angular/core';
import { catagory } from 'src/app/products/catagory';
import { ProductserviceService } from 'src/app/products/productservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  catagortList:any;
  constructor(public catagoty:ProductserviceService){}

  ngOnInit():void{
    this.catagoty.getcatagories().subscribe(data=>{
       this.catagortList=data;
    })
  }

}
