import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }

  async connect() {
    await this.$connect();
  }

  async desconect() {
    await this.$disconnect();
  }
}
