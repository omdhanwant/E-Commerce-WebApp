import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Products } from "../models/Product";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/take";
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  categories$;
  category: string;
  cart$:Observable<ShoppingCart>

  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private shoppingCartService:ShoppingCartService) {
   
  }

  async ngOnInit(){
  this.populateProducts();
  this.cart$ = await this.shoppingCartService.getCart();                 
  }

  private populateProducts(){
    this.productService
    .getAll()
    .take(1)
    .switchMap((p: Products[]) => {
      this.products = p;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get("category");
      //filter products by category
      this.applyFilter();
    });
  }
 
 
  private applyFilter() {
  this.filteredProducts = this.category
  ? this.products.filter(p => {
      return p.category === this.category;
    })
  : this.products;
  }
}
