import "./globals.css";
import Header from "./header/page";
import Section1 from "./section1/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Add global head tags here */}</head>
      <body>
        <Header/>
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
