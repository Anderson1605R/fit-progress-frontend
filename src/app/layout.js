import { Montserrat } from "next/font/google";
import "./globals.css";

const monserrat = Montserrat(
  {
    weight: ["400", "600", "800"],
     subsets: ["latin"] 
    }
  );

export const metadata = {
  title: "Fit Progress",
  description: "App de progressão de carga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={monserrat.className}>{children}</body>
    </html>
  );
}
