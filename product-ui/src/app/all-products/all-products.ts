import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {

}
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.html',
  styleUrls: ['./all-products.css'],
})
export class AllProducts implements OnInit {
  products: Product[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.error = null;

    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Unable to load products.';
        console.error(err);
        this.isLoading = false;
      },
    });
  }
}