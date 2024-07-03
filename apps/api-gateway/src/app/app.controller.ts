import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject("NOTIFICATION_SERVICE") private readonly notificationMS: ClientProxy,
    @Inject("POST_SERVICE") private readonly postMS: ClientProxy,
  ) {}

  @Get("notification")
  getNotificationService() {
    return this.notificationMS.send({ cmd: "get_notification" }, {});
  }

  @Get("post")
  getPostService() {
    return this.postMS.send({ cmd: "get_post" }, {});
  }
}
