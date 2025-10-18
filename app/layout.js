import './globals.css'

export const metadata = {
  title: "Gilbert Geraldo",
  description: 'B E R T',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
