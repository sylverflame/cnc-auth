import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  uid: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  country: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
