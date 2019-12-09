import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent{
  @Input('category') category;
  categories$;
 
  constructor(categoryService:CategoryService) {
    this.categories$ = categoryService.getCategories();
   }

}
