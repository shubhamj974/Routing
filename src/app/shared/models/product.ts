export interface Iproduct {
  pName: string;
  id: number;
  pStatus: productStatus;
}

export enum productStatus {
  InProgress = 'In-Progress',
  Dispatched = 'Dispatched',
  Delivered = 'Delivered',
}
