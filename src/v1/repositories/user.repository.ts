import { db } from "../..";
import { usersTable } from "../db/schema";
import { RegisterUser } from "../utils/schemas";

export const userRepository = {
  async createUser(user: RegisterUser) {
    await db.insert(usersTable).values(user);
  },
  async getAllUsernames() {
    await db
      .select({
        username: usersTable.username,
      })
      .from(usersTable);
  },
  async getUserName() {
    await db
      .select({
        username: usersTable.username,
      })
      .from(usersTable);
  },
};
