import { Iproduct } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productId!: string;
  public productObj!: Iproduct;
  constructor(
    private _route: ActivatedRoute,
    private _productServices: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['productID'];
    this.productObj = this._productServices.getSingleProduct(this.productId);

    this._route.params.subscribe((param: Params) => {
      this.productId = param['productID'];
      this.productObj = this._productServices.getSingleProduct(this.productId);
    });
  }
}
