/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/pdf1',  destination: '/pdf1.pdf'  },
      { source: '/pdf2',  destination: '/pdf2.pdf'  },
      { source: '/pdf3',  destination: '/pdf3.pdf'  },
      { source: '/pdf4',  destination: '/pdf4.pdf'  },
      { source: '/pdf5',  destination: '/pdf5.pdf'  },
      { source: '/pdf6',  destination: '/pdf6.pdf'  },
      { source: '/pdf7',  destination: '/pdf7.pdf'  },
      { source: '/pdf8',  destination: '/pdf8.pdf'  },
      { source: '/pdf9',  destination: '/pdf9.pdf'  },
      { source: '/pdf10', destination: '/pdf10.pdf' },
      { source: '/pdf11', destination: '/pdf11.pdf' },
      { source: '/pdf12', destination: '/pdf12.pdf' },
      { source: '/pdf13', destination: '/pdf13.pdf' },
      { source: '/pdf14', destination: '/pdf14.pdf' },
      { source: '/pdf15', destination: '/pdf15.pdf' },
      { source: '/pdf16', destination: '/pdf16.pdf' },
      { source: '/pdf17', destination: '/pdf17.pdf' },
      { source: '/pdf18', destination: '/pdf18.pdf' },
      { source: '/pdf19', destination: '/pdf19.pdf' },
      { source: '/pdf20', destination: '/pdf20.pdf' },
      { source: '/pdf21', destination: '/pdf21.pdf' },
      { source: '/pdf22', destination: '/pdf22.pdf' },
      { source: '/pdf23', destination: '/pdf23.pdf' },
    ]
  }
}

export default nextConfig
