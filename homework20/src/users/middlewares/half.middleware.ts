import { BadGatewayException, BadRequestException, NestMiddleware } from "@nestjs/common";


export class HalfMidlleWare implements NestMiddleware{
    use(req: any, res: any, next: (error?: Error | any) => void) {
     const random = Math.random() * 100
     if(random < 50){
        next()
     } else{
        throw new BadRequestException("nonnono")
     }
    }
}