CREATE TABLE "payments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"amount" integer NOT NULL,
	"status" varchar(50),
	"stripe_payment_id" varchar(255) NOT NULL,
	"price_id" varchar(255) NOT NULL,
	"user_email" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "payments_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"phone_number" text NOT NULL,
	"password" text NOT NULL,
	"avatar_url" text NOT NULL,
	"customer_id" varchar(255),
	"price_id" varchar(255),
	"status" varchar(50),
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_phone_number_unique" UNIQUE("phone_number")
);
--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_email_users_email_fk" FOREIGN KEY ("user_email") REFERENCES "public"."users"("email") ON DELETE no action ON UPDATE no action;