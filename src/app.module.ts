import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/exception_filter/http-exception.filter';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CustomerModule } from './module/customer/customer.module';
import { DivisionModule } from './module/division/division.module';
import { ProjectModule } from './module/project/project.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [UserModule, CustomerModule, DivisionModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
