const config = {
  env: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndPoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL!,
  },
};

export default config;
