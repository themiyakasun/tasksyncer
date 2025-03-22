CREATE TABLE "board_collaborators" (
	"id" uuid PRIMARY KEY NOT NULL,
	"board_id" uuid NOT NULL,
	"collaborator" varchar(255) NOT NULL,
	"status" varchar(50) DEFAULT 'not_accepted',
	CONSTRAINT "board_collaborators_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "board_collaborators" ADD CONSTRAINT "board_collaborators_board_id_boards_id_fk" FOREIGN KEY ("board_id") REFERENCES "public"."boards"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "boards" DROP COLUMN "collaborators";