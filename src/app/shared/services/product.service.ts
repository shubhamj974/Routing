import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Iproduct, productStatus } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productsArr: Array<Iproduct> = [
    {
      pName: 'Samsung S21',
      id: 1,
      pStatus: productStatus.Delivered,
    },
    {
      pName: 'Samsung M21',
      id: 2,
      pStatus: productStatus.Dispatched,
    },
    {
      pName: 'Iphone 15',
      id: 3,
      pStatus: productStatus.InProgress,
    },
    {
      pName: 'OnePlus 5G',
      id: 4,
      pStatus: productStatus.Dispatched,
    },
    {
      pName: 'Redmi note 7 pro',
      id: 5,
      pStatus: productStatus.InProgress,
    },
  ];
  constructor(private _router: Router) {}

  AllProducts(): Array<Iproduct> {
    return this.productsArr;
  }

  getSingleProduct(id: number) {
    return this.productsArr.find((ele) => ele.id === id)!;
  }

  updateProduct(productObj: Iproduct) {
    this.productsArr.forEach((ele) => {
      if (ele.id === productObj.id) {
        ele.pName = productObj.pName;
        ele.pStatus = productObj.pStatus;
      }
      this._router.navigate(['products']);
      return;
    });
  }
}
