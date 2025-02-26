import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HalfMidlleWare } from './middlewares/half.middleware';
import { deleteMidlleware } from './middlewares/delete.middleware';
import { TimeMiddleWare } from './middlewares/time.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TimeMiddleWare)
      .forRoutes({ path: 'users', method: RequestMethod.ALL });

    consumer
      .apply(HalfMidlleWare)
      .forRoutes({ path: 'users', method: RequestMethod.ALL });

    consumer
      .apply(deleteMidlleware)
      .forRoutes({ path: 'users', method: RequestMethod.DELETE });
  }
}
