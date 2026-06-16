import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Educakids360 | Desarrolla el Potencial Cognitivo de Tu Hijo',
  description: 'Método Desarrollo 360° con +200 actividades para desarrollar el enfoque, la concentración y la preparación escolar de tu hijo en solo 15 minutos al día. Acceso inmediato.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Script id="suppress-third-party-errors" strategy="beforeInteractive">
          {`
            window.addEventListener('unhandledrejection', function(e) {
              if (e.reason && e.reason.stack && e.reason.stack.includes('utmify')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            });
          `}
        </Script>
        {isProduction && (
          <>
            <Script id="utmify-pixel" strategy="lazyOnload">
              {`window.pixelId = "69b3d7ab3863311bf2f5b9f4";`}
            </Script>
            <Script
              src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
              strategy="lazyOnload"
            />
            <Script
              src="https://cdn.utmify.com.br/scripts/utms/latest.js"
              data-utmify-prevent-xcod-sck
              data-utmify-prevent-subids
              strategy="lazyOnload"
            />
          </>
        )}
      </body>
    </html>
  )
}
