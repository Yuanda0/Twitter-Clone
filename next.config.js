/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "https://www.tripsavvy.com"
         }
      ]
   }
}

module.exports = nextConfig
