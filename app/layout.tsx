import MyProfilePic from './components/MyProfilePic'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: "Rokeya's blog",
  description: 'Created by Rokeya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar></Navbar>
        <MyProfilePic></MyProfilePic>
        {children}
      
      </body>
    </html>
  )
}
