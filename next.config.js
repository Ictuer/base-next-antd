const withAntdLess = require('next-plugin-antd-less')

/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // TODO: remove this line and fix all linting errors
  },

  typescript: {
    ignoreBuildErrors: true, // TODO: remove this line and fix all typescript errors
  },

  ...withAntdLess({
    // output: 'standalone',
    // swcMinify: true,
    // async redirects() {
    //   return [
    //     {
    //       source: '/',
    //       destination: '/home',
    //       permanent: false,
    //     },
    //   ]
    // },
  }),

  reactStrictMode: false,
}
