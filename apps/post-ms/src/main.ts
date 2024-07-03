/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

import { AppModule } from "./app/app.module";

const MSoption: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: "127.0.0.1",
    port: 8124,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, MSoption);
  await app.listen();

  Logger.log(`🚀 Post micro-service is running`);
}

bootstrap();
