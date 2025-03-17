import React from "react";

import { auth } from "@/auth";
import { getUsersPriceId } from "@/lib/actions/auth";
import { prices } from "@/constants/";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PlanBadge = async () => {
  const session = await auth();
  const email = session?.user?.email;

  let priceId: string | null = null;

  if (email) {
    priceId = await getUsersPriceId(email as string);
  }

  let planName = "Buy a plan";

  const plan = prices.find((plan) => plan.priceId === priceId);

  if (plan) {
    planName = plan.packageName;
  }

  return <Badge className={cn("py-2 px-4")}>{planName}</Badge>;
};
export default PlanBadge;
