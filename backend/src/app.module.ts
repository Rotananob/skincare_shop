import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductsModule } from './modules/products/products.module';
// import { OrdersModule } from './modules/orders/orders.module';
// import { UsersModule } from './modules/users/users.module';
// import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({ ... }), // TODO: configure database
    // ProductsModule,
    // OrdersModule,
    // UsersModule,
    // AuthModule,
  ],
})
export class AppModule {}
