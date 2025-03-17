import React from "react";
import { Session } from "next-auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import AvatarButton from "@/components/AvatarButton";
import PlanBadge from "@/components/PlanBadge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CreateBoardButton from "@/components/CreateBoardButton";

const Navbar = ({ session }: { session: Session }) => {
  return (
    <div className="navbar-wrapper">
      <div className="flex items-center gap-5">
        <h2 className="text-xl font-medium">Tasksyncer</h2>
        <CreateBoardButton />
      </div>

      <div className="flex items-center gap-3">
        <PlanBadge />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-3">
              <AvatarButton
                path={session?.user?.image as string}
                name={session?.user?.name as string}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-transparent!">
              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
                className="w-full"
              >
                <Button type={"submit"} className="w-full">
                  Logout
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Navbar;
