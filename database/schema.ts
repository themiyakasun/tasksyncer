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
  customerId: varchar("customer_id", { length: 255 }),
  priceId: varchar("price_id", { length: 255 }),
  status: varchar("status", { length: 50 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const payments = pgTable("payments", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  amount: integer("amount").notNull(),
  status: varchar("status", { length: 50 }),
  stripe_payment_id: varchar("stripe_payment_id", { length: 255 }).notNull(),
  price_id: varchar("price_id", { length: 255 }).notNull(),
  user_email: text("user_email")
    .notNull()
    .references(() => users.email),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
