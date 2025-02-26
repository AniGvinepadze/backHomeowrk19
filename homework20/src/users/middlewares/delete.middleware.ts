import { BadGatewayException, NestMiddleware } from '@nestjs/common';

export class deleteMidlleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    const header = req.headers['delete'];
    if (!header) {
      throw new BadGatewayException('header is required');
    }else{
        next()
    }
    
  }
}
