import localFont from 'next/font/local'
import "./globals.css";

const matterFont = localFont({
  src: [
    {
      path: './fonts/MatterThin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/MatterLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MatterRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MatterMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/MatterSemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/MatterBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
})

export const metadata = {
  title: "SSA - Grow Your Game with the Professionals",
  description: "Grow Your Game with the Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${matterFont.variable} antialiased`}
      > 
      
        {children}
      </body>
    </html>
  );
}
