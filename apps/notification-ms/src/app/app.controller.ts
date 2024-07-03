import { type IPost } from "@common/types";
import { Controller, Logger } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: "get_notification" })
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({ cmd: "post_notification" })
  handlePostNotification(data: Pick<IPost, "author">) {
    Logger.log(`Некий ${data.author} опубликовал пост, А НУ БЕГОМ СМОТРЕТЬ`);
  }
}
