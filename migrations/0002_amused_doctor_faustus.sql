ALTER TABLE "task_collaborators" DROP CONSTRAINT "task_collaborators_collaborator_board_collaborators_id_fk";
--> statement-breakpoint
ALTER TABLE "task_collaborators" ALTER COLUMN "collaborator" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "task_collaborators" ADD CONSTRAINT "task_collaborators_collaborator_board_collaborators_collaborator_fk" FOREIGN KEY ("collaborator") REFERENCES "public"."board_collaborators"("collaborator") ON DELETE no action ON UPDATE no action;