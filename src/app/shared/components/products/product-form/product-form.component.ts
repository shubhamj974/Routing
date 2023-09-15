import { UtilityService } from './../../../services/utility.service';
import { Iproduct, productStatus } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productId!: string;
  public productObj!: Iproduct;
  public canEdit: number = 1;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['productID'];
    this.productObj = this._productService.getSingleProduct(this.productId);

    this._route.queryParams.subscribe((queryParam: Params) => {
      if (queryParam.hasOwnProperty('canEdit')) {
        this.canEdit = +queryParam['canEdit'];
        return;
      }
    });
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

  onAddProduct(pname: HTMLInputElement, pstatus: HTMLSelectElement) {
    let obj: Iproduct = {
      pName: pname.value as string,
      pStatus: pstatus.value as productStatus,
      id: this._utilityService.uuid(),
      canReturn: Math.random() >= 5 ? 1 : 0,
    };
    this._productService.addProduct(obj);
  }
}
