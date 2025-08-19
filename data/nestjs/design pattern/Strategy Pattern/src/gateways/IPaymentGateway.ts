import { IPaymentMethod } from "../methods/IPaymentMethod"; 

export interface IPaymentGateway {
  setMethod(method: IPaymentMethod): void;
  process(amount: number): void;
}
