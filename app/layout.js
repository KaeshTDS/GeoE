export const metadata = {
  title: "GeoExplorer Kids",
  description: "Kids geography learning app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
