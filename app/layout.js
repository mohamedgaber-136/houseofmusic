import "./globals.css";
import Navigation from "./Components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>
    
          <Navigation />
          {children}
      </body>
    </html>
  );
}
