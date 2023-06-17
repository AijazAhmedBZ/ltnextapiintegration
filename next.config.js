/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    env: {
      CONTENTFUL_SPACE_ID: "ivnlaipngno9",
      CONTENTFUL_ACCESS_KEY: "wDG2mBi2UFj-6rXU1xfh58rOODD3BJxBDGYVUk8otPQ"
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
        },
      ],
    },
  }
  
module.exports = nextConfig
