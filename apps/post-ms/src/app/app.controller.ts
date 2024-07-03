import { type IPost } from "@common/types";
import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject("NOTIFICATION_SERVICE") private readonly notificationMS: ClientProxy,
  ) {}

  @MessagePattern({ cmd: "get_post" })
  async getPost(data: IPost) {
    this.notificationMS.emit({ cmd: "post_notification" }, { author: data.author });

    return {
      message: "Hello from post-ms",
      post: data,
    };
  }
}
