module.exports = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.PAGES_BASE_PATH || "",
  },
  allowedDevOrigins: [
    "10.221.190.134",
    "192.168.6.1",
    "steering-contributors-boost-surrey.trycloudflare.com",
  ],
};
