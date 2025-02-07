import "./globals.css";
import Home from "./Home/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Add global head tags here */}</head>
      <body>
        <Home />
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
