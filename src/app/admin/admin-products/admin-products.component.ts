import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/Product';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products:Products[];
  query:string;
  subscription:Subscription;
  tableResource:DataTableResource<Products>
  items:Products[] = [];
  itemCount:number


  constructor(private productService:ProductService) { 
   this.subscription =  this.productService.getAll().subscribe(p => 
    {
      this.products = p;
      this.initTable(p);
     
    });
  }

  private initTable(products:Products[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset:0})
    .then(items => this.items = items)

    this.tableResource.count()
    .then(count => this.itemCount = count)
  }


  reloadItems(params){
    if(!this.tableResource) return
    this.tableResource.query(params)
    .then(items => this.items = items)
  }

  ngOnInit() {
  }

  filter(query){
    let filteredProducts = (query) ? this.products.filter(p => 
      { return p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())})
      : this.products

      this.initTable(filteredProducts);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
