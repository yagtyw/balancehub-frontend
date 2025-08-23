import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}