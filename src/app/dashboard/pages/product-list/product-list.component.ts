import { Component, computed, inject } from '@angular/core';
import { ProductsService } from '../../../services/products.service'
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CommonModule, TitleComponent, RouterModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})




export default class ProductListComponent {
  public productService = inject( ProductsService );

  constructor() {
    //this.productsService.products();
  }

}
