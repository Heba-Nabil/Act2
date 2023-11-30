import localFont from 'next/font/local'

export const boldFont = localFont({
  src : '../../public/fonts/NunitoSans-Black.ttf',
  display: 'swap',
  variable: "--font-boldFont",
})
export const SemiboldFont = localFont({
  src : '../../public/fonts/NunitoSans-Bold.ttf',
  display: 'swap',
  variable: "--font-SemiboldFont",
})

export const regFont = localFont({
  src : '../../public/fonts/NunitoSans-Regular.ttf',
  display: 'swap',
  variable: "--font-regFont",
})