/** @type {import('next').NextConfig} */
const withCSS = require("@zeit/next-css")
const { i18n } = require("./next-i18next.config")

module.exports = withCSS({
  i18n,
  eslint: {
    dirs: ["src"],
  },

  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/images",
            outputPath: "static/images",
          },
        },
      ],
    })

    return config
  },
})
