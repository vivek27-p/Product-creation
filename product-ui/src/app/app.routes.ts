import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AllProducts } from './all-products/all-products';
import { ProductDetails } from './product-details/product-details';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'all-products', component: AllProducts },
  { path: 'product-details', component: ProductDetails }
];