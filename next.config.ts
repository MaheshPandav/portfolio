/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "i.ibb.co", "res.cloudinary.com"], // ✅ add your image host
  },
};

module.exports = nextConfig;
