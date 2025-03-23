ALTER TABLE "tasks" ADD COLUMN "start_at" timestamp with time zone DEFAULT now();--> statement-breakpoint
ALTER TABLE "tasks" ADD COLUMN "end_at" timestamp with time zone DEFAULT now();