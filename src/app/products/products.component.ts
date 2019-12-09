import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Products } from "../models/Product";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  categories$;
  category: string;
  constructor(private route: ActivatedRoute, productService: ProductService) {
    productService
      .getAll()
      .switchMap((p: Products[]) => {
        this.products = p;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get("category");
        //filter products by category
        this.filteredProducts = this.category
          ? this.products.filter(p => {
              return p.category === this.category;
            })
          : this.products;
      });
  }
}
