import "../styles/global.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    template: "%s | Billionaires",
    default: "Billionaires",
  },
  description: "The most rich people around world",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
