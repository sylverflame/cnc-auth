import { eq } from "drizzle-orm";
import { db } from "../..";
import { users } from "../db/schema";
import { RegisterUserData } from "../utils/schemas";

export const userRepository = {
  createUser(user: RegisterUserData) {
    // IMP: Always returning from these functions so that the querying can be awaited at the service layer
    return db.insert(users).values(user);
  },
  getAllUsers() {
    return db.select().from(users);
  },
  getAllUsernames() {
    return db
      .select({
        username: users.username,
      })
      .from(users);
  },
  getUser(username: string) {
    return db
      .select({
        username: users.username,
        password: users.password,
      })
      .from(users)
      .where(eq(users.username, username));
  },
};
