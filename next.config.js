/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "www.tripsavvy.com"
         },
         {
            protocol: "https",
            hostname: "pbs.twimg.com"
         }
      ]
   }
}

module.exports = nextConfig
