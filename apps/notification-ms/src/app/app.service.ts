import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: "Hello FROM NOTIFICATION MICROSERVICE 1" };
  }
}
