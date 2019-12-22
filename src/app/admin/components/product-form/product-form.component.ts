import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/shared/services/category.service';
import { ProductService } from 'app/shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Products } from 'app/shared/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product:Products={
    $key:null,
    title:null,
    price:null,
    category:null,
    imageUrl:null
  };
  id:string
  constructor(categoryService:CategoryService,
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) this.productService.get(this.id).take(1).subscribe((p:Products) => this.product = p); 
   }

  ngOnInit() {
  }

  save(product){
    if(product.valid){
      if(this.id) this.productService.update(this.id,product.value)
      else this.productService.create(product.value);
      this.router.navigate(['/admin/products']);
    }else{
      alert('Please enter all details!')
    }
  }

  delete(){
    if(confirm('Are you sure you want to delete this product')){
        this.productService.delete(this.id)
        this.router.navigate(['/admin/products']);
    }
  }

}
