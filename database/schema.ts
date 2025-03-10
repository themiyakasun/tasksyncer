import {
  uuid,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  phoneNumber: text("phone_number").notNull().unique(),
  password: text("password").notNull(),
  avatar: text("avatar_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
