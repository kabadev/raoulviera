import "./globals.css";

export const metadata = {
  title: "Mr Raoul Vierra",
  description: "My resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
