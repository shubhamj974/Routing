import { Iproduct, productStatus } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productId!: number;
  public productObj!: Iproduct;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productID'];
    this.productObj = this._productService.getSingleProduct(this.productId);
  }

  onUpdateProduct(Pname: HTMLInputElement, Pstatus: HTMLSelectElement) {
    let productData: Iproduct = {
      pName: Pname.value,
      pStatus: Pstatus.value as productStatus,
      id: this.productId,
    };

    this._productService.updateProduct(productData);
  }
}
