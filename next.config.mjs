import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})({
  images: {
    domains: ["abs.twimg.com", "avatars.githubusercontent.com"],
  },
});

export default nextConfig;
