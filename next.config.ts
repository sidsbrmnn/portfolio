import { NextConfig } from 'next'

const config = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
    ]
  },
} satisfies NextConfig

export default config
