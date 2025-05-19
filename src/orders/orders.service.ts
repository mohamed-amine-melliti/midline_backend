import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class OrdersService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    this.supabase = createClient(
      this.configService.get<string>('SUPABASE_URL'),
      this.configService.get<string>('SUPABASE_KEY')
    );
  }

  async getAllOrders() {
    const { data, error } = await this.supabase
      .from('orders')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  async getOrderById(id: string) {
    const { data, error } = await this.supabase
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  async createOrder(orderData: any) {
    const { data, error } = await this.supabase
      .from('orders')
      .insert(orderData)
      .select();
    
    if (error) throw error;
    return data;
  }

  async updateOrderStatus(id: string, status: string) {
    const { data, error } = await this.supabase
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data;
  }
}