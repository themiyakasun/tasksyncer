import React from "react";
import Image from "next/image";

import DetailsBar from "@/components/DetailsBar";
import { auth } from "@/auth";
import BoardList from "@/components/BoardList";

const Page = async () => {
  const session = await auth();
  const id = session?.user?.id as string;

  return (
    <div className="flex  relative">
      <DetailsBar>{id && <BoardList id={id}></BoardList>}</DetailsBar>
    </div>
  );
};
export default Page;
