import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  products: any[] = [];
  sortedProducts: any[] = [];
  sortBy: string = 'price';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.sortedProducts = [...this.products];
      });
  }
}
