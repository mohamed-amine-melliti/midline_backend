import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { SupabaseService } from './supabase/supabase.service';
import { DataController } from './data/data.controller';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    OrdersModule,
    ProductsModule,
  ],
  controllers: [AppController, DataController,ClientsController,OrdersController, ProductsController],
  providers: [AppService, SupabaseService,ClientsService,OrdersService, ProductsService],
})
export class AppModule {}