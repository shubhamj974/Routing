import { ProductService } from '../../services/product.service';
import { Iproduct } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productsInfo!: Array<Iproduct>;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.productsInfo = this._productService.AllProducts();
  }
}
