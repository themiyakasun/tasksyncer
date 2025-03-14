import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import redis from "@/database/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;
