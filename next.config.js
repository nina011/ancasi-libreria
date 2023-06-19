require('dotenv').config()

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL: process.env.MONGO_URL,
    NEXT_PUBLIC_TAX_RATE: process.env.NEXT_PUBLIC_TAX_RATE
  }
}

module.exports = nextConfig
