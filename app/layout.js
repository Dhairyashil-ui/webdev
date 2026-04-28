import "./globals.css";

export const metadata = {
  title: "Fast Download System",
  description: "Download files instantly by entering a numeric URL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
