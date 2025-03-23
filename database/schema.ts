import {
  uuid,
  integer,
  pgTable,
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

export const boards = pgTable("boards", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  owner: uuid("owner_id")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const boardCollaborators = pgTable("board_collaborators", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  boardId: uuid("board_id")
    .notNull()
    .references(() => boards.id),
  collaborator: varchar("collaborator", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).default("not_accepted"),
});

export const tasks = pgTable("tasks", {
  id: uuid("id").notNull().defaultRandom().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  boardId: uuid("board_id")
    .notNull()
    .references(() => boards.id),
  description: text("description"),
  priority: varchar("priority", { length: 50 }).notNull(),
  startAt: timestamp("start_at", { withTimezone: true }).defaultNow(),
  endAt: timestamp("end_at", { withTimezone: true }).defaultNow(),
  timelineColor: varchar("timeline_color", { length: 50 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const tasksCollaborators = pgTable("task_collaborators", {
  taskId: uuid("task_id")
    .notNull()
    .references(() => tasks.id),
  collaborator: uuid("collaborator")
    .notNull()
    .references(() => boardCollaborators.id),
});

export const labs = pgTable("labs", {
  id: uuid("id").notNull(),
});
