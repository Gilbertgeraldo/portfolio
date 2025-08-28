import './globals.css'

export const metadata = {
  title: "Gilbert Geraldo's Portfolio",
  description: 'Portfolio pribadi Gilbert Geraldo, seorang Full Stack Developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
