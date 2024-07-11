import { PrismaService } from "../../common/prisma/prisma.service";
import { User } from "@prisma/client";

export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async create(data: User): Promise<User> {
    return await this.prisma.user.create({
      data: data,
    });
  }

  async signIn(data: User): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email: data.email,
        name: data.name,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }
}
