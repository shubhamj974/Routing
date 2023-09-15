import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct, productStatus } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productsInfo!: Array<Iproduct>;
  public selectedId!: string;
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.productsInfo = this._productService.AllProducts();
    let defautProd = this.productsInfo[0].id;
    this.selectedId = defautProd;
    this._router.navigate([`products/${this.selectedId}`]);
  }
}
