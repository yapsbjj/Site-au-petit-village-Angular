import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
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
        this.sortByPrice('asc');
      });
  }



  sortByPrice(order: string): void {
    if (order === 'asc') {
      this.sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.sortedProducts.sort((a, b) => b.price - a.price);
    }
  }
}
