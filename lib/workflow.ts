import { Client as WorkflowClient } from "@upstash/workflow";

import config from "@/lib/config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.uptash.qutashUrl,
  token: config.env.uptash.qutashToken,
});
