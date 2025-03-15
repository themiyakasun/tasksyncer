const config = {
  env: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndPoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL!,
    uptash: {
      redisUrl: process.env.UPTASH_REDIS_URL!,
      redisToken: process.env.UPTASH_REDIS_TOKEN!,
      qutashUrl: process.env.QUTASH_URL!,
      qutashToken: process.env.QUTASH_TOKEN!,
    },
  },
};

export default config;
