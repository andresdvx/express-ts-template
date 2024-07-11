import { PrismaService } from "../../common/prisma/prisma.service";
import { User } from "@prisma/client";

export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(data: User): Promise<User> {
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
