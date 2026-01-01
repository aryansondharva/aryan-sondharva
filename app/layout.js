import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import Preloader from "@/components/Preloader";
import AppContentGate from "@/components/AppContentGate";

// Optimize font loading by only loading the weights we need
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Use 'swap' for better performance
  weight: ["400", "500", "600", "700"], // Only load the weights we actually use
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  metadataBase: new URL('https://www.aryansondharva.in'),
  title: "Dev. Aryan Sondharva | Portfolio",
  description: "Welcome to my portfolio, here you'll get all the creatives I've made to date!",
  keywords: "Aryan Sondharva, Aryan Sondharva Portfolio, Aryan Sondharva Automation, Automation Developer, Web Developer, Designer Aryan Sondharva, Developer Aryan Sondharva, Freelancer in Navi Mumbai, Freelancer",
  
  openGraph: {
    type: "website",
    url: "https://www.aryansondharva.in/",
    title: "Dev. Aryan Sondharva | Portfolio",
    description: "Welcome to my portfolio, here you'll get all the creatives I've made to date!",
    images: ["/logo.png"],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Dev. Aryan Sondharva | Portfolio",
    description: "Welcome to my portfolio, here you'll get all the creatives I've made to date!",
    images: ["/logo.png"],
  },
  
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  manifest: "/favicon/manifest.json",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} ${roboto.variable}`}>
        <Preloader />
        <AppContentGate>
          {children}
        </AppContentGate>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
      </body>
    </html>
  );
}
