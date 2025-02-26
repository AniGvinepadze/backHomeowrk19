import {
  BadGatewayException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class TimeMiddleWare implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    const time = new Date();
    const hour = time.getHours();
    if (hour >= 10 && hour < 18) {
      next();
    } else {
      throw new BadGatewayException('nonono');
    }
  }
}
