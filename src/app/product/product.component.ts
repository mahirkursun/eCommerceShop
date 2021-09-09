import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


//declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[] = [];
  

  //products : Product[] = [
  //  {id:1, name : "Laptop", price : 1200, categoryId:2, description: "Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1548611716-ad782502c9d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"},
  //  {id:2, name : "Mouse", price : 25, categoryId:1, description: "A4  Tech",imageUrl:"https://pbs.twimg.com/media/EGAH73eXoAEHiuw.jpg"},
  //  {id:3, name : "Keyboard", price : 250, categoryId:1, description: "Logitech",imageUrl:"https://im0-tub-tr.yandex.net/i?id=a9274f942ad1c3beaa5657b19c97aeb7&n=13&exp=1"},
  //  {id:4, name : "Headphone", price : 300, categoryId:4, description: "SoundCore",imageUrl:"https://cutewallpaper.org/21/beats-hd-wallpaper/Black-and-gray-wireless-headphones-photography-headphones-.jpg"},
  //  {id:5, name : "Phone", price : 1500, categoryId:3, description: "Iphone",imageUrl:"https://cutewallpaper.org/21/iphone-wallpaper-black/CorteX-iPhone-X-grafiksyndikat.jpg"},
  //  {id:6, name : "TV", price : 1000, categoryId:1, description: "LG",imageUrl:"https://www.desktopbackground.org/download/1280x900/2014/12/15/871534_monitor-samsung-black-black-screen-display-wall-hd-wallpapers_2048x1152_h.jpg"}
  //
  //]

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data
      });
    })

    
  }

  addToCart(product: any) {
    //alertify.success(product.name + " added")
    this.alertifyService.success(product.name + ' added');
  }
}
