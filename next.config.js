/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/assessment',
        destination: '/resources/assessments/assessment',
        permanent: true,
      },
      {
        source: '/scanner',
        destination: '/resources/assessments/scanner',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig