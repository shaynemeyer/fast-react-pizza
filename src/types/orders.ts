import { cartItem } from './cart';

export interface orderItem {
  id: string;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: Array<cartItem>;
  position: string;
  orderPrice: number;
  priorityPrice: number;
}
