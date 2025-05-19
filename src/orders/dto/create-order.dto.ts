export class CreateOrderDto {
  product_id: string;
  quantity: number;
  shipping_address: string;
  payment_method: string;
  notes?: string;
}