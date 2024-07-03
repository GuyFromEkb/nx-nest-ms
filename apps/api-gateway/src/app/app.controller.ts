import { type IPost } from "@common/types";
import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

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

  @Post("post")
  handlePostService(@Body() data: IPost) {
    return this.postMS.send({ cmd: "get_post" }, data);
  }
}
