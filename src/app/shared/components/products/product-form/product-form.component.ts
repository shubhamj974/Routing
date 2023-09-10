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
  public productId!: string;
  public productObj!: Iproduct;
  public canEdit: number = 0;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['productID'];
    this.productObj = this._productService.getSingleProduct(this.productId);

    this.canEdit = this._route.snapshot.queryParams['canEdit'];
  }

  onUpdateProduct(Pname: HTMLInputElement, Pstatus: HTMLSelectElement) {
    let productData: Iproduct = {
      pName: Pname.value,
      pStatus: Pstatus.value as productStatus,
      id: this.productId,
      canReturn: this.productObj.canReturn,
    };
    this._productService.updateProduct(productData);
  }
}
