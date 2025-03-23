ALTER TABLE "task_collaborators" DROP CONSTRAINT "task_collaborators_collaborator_board_collaborators_collaborator_fk";
--> statement-breakpoint
ALTER TABLE "task_collaborators" ALTER COLUMN "collaborator" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "task_collaborators" ADD CONSTRAINT "task_collaborators_collaborator_board_collaborators_id_fk" FOREIGN KEY ("collaborator") REFERENCES "public"."board_collaborators"("id") ON DELETE no action ON UPDATE no action;