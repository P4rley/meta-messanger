/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "instagram.fkno6-1.fna.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "scontent.fkno3-1.fna.fbcdn.net",
    ],
  },
};
