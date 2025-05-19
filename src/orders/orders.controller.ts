import { Controller, Get, Post, Put, Body, Param, UseGuards, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(@Body() orderData: any, @Req() req) {
    // Add user information from JWT token
    const orderWithUser = {
      ...orderData,
      user_id: req.user.sub,
      created_by: req.user.email || req.user.sub,
    };
    return this.ordersService.createOrder(orderWithUser);
  }

  @Put(':id/status')
  @UseGuards(JwtAuthGuard)
  async updateOrderStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.ordersService.updateOrderStatus(id, status);
  }
}