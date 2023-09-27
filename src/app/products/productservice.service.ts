import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from './products';
import { Observable } from 'rxjs/internal/Observable';
import { catagory } from './catagory';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private httpclient:HttpClient) { }

  //cerate produt method
  createproduct(productBody:Observable<any>){
    const producturl='http://localhost:3000/products';
    return this.httpclient.post<product>(producturl,productBody)       //return obervable
  }
//viewproduct method
viewprodcut(productId:Observable<product>){
  const producturl='http://localhost:3000/products?productId='+productId;
  return this.httpclient.get<product>(producturl)
}
//update product method
updateproduct(productId:Observable<any>, productbody:Observable<product>){
  const producturl='http://localhost:3000/products/'+productId;
  return this.httpclient.post<product>(producturl,productbody)
}

// delete method
DeleteProduct(productId:Observable<product>){
  const producturl='http://localhost:3000/products?procuctsId='+productId;
  return this.httpclient.delete<product>(producturl);
}

//searchprodcut
Searchcategoryproducts(catagoryId:Observable<any>){
  const producturl="http://localhost:3000/products?catagoryId=" + catagoryId;
  return this.httpclient.get<product>(producturl)
}
//getallproducts
getallproducts():Observable<product>{
     const productUrl="http://localhost:3000/products"
     return this.httpclient.get<product>(productUrl)
}

//getcatagory
getcatagories():Observable<catagory>{
  const catagoryUrl="http://localhost:3000/category"
  return this.httpclient.get<catagory>(catagoryUrl);
}


}
